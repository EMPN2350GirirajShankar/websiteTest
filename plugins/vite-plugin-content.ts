import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Plugin } from "vite";

const VIRTUAL_ID = "virtual:site-content";
const RESOLVED_VIRTUAL_ID = "\0" + VIRTUAL_ID;

// Export name -> folder under /content. Each key becomes a named export of the
// virtual module, so adding a collection here and in public/admin/config.yml is
// all it takes to surface a new content type.
const COLLECTIONS = {
  caseStudies: "case-studies",
  guides: "guides",
  events: "events",
  jobs: "careers",
} as const;

export interface ContentPluginOptions {
  /** Folder (relative to the project root) that holds the CMS collections. */
  contentDir?: string;
}

function toDateString(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string" && value.trim()) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.valueOf())) return parsed.toISOString().slice(0, 10);
  }
  return "";
}

function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false, gfm: true, breaks: false }) as string;
}

/** Section fields authored as Markdown. Each gets a rendered `<field>Html` twin. */
const SECTION_MARKDOWN_FIELDS = ["body"];
/** Plain-text section fields that still count toward reading time. */
const SECTION_TEXT_FIELDS = ["heading", "quote", "caption", "label", "purpose", "product"];

function collectText(value: unknown, into: string[]): void {
  if (typeof value === "string") {
    into.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectText(item, into);
  } else if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
      if (SECTION_TEXT_FIELDS.includes(key)) collectText(nested, into);
      else if (Array.isArray(nested)) collectText(nested, into);
    }
  }
}

/**
 * Walks the `sections` list written by the CMS section builder and renders any
 * Markdown field to HTML at build time, so no Markdown parser ships to the
 * browser. Returns the section list plus its plain text, for reading time.
 */
function renderSections(value: unknown): { sections: unknown[]; text: string } {
  if (!Array.isArray(value)) return { sections: [], text: "" };

  const words: string[] = [];
  const sections = value.map((raw) => {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return raw;
    const section = { ...(raw as Record<string, unknown>) };

    for (const field of SECTION_MARKDOWN_FIELDS) {
      const markdown = section[field];
      if (typeof markdown === "string" && markdown.trim()) {
        section[`${field}Html`] = renderMarkdown(markdown);
        words.push(markdown);
      }
    }

    collectText(section, words);
    return section;
  });

  return { sections, text: words.join(" ") };
}

function readCollection(dir: string) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".markdown"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const fileSlug = file.replace(/\.(md|markdown)$/, "");
      const { sections, text: sectionText } = renderSections(data.sections);

      return {
        ...data,
        slug: typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : fileSlug,
        title: typeof data.title === "string" ? data.title : fileSlug,
        date: toDateString(data.date),
        startDate: toDateString(data.startDate),
        endDate: toDateString(data.endDate),
        draft: data.draft === true,
        featured: data.featured === true,
        readingTimeMinutes: readingTime(`${content} ${sectionText}`),
        html: renderMarkdown(content),
        sections,
      };
    });
}

function buildModule(root: string, contentDir: string): string {
  const base = path.resolve(root, contentDir);
  const payload = Object.fromEntries(
    Object.entries(COLLECTIONS).map(([exportName, folder]) => [
      exportName,
      readCollection(path.join(base, folder)),
    ])
  );

  return Object.entries(payload)
    .map(([exportName, items]) => `export const ${exportName} = ${JSON.stringify(items)};`)
    .join("\n");
}

/**
 * Turns the Markdown files written by Sveltia CMS into a virtual module the app
 * can import. Frontmatter is parsed and the body is rendered to HTML at build
 * time, so no Markdown parser ships to the browser.
 */
export function contentPlugin(options: ContentPluginOptions = {}): Plugin {
  const contentDir = options.contentDir ?? "content";
  let root = process.cwd();

  return {
    name: "maq:site-content",
    enforce: "pre",
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_VIRTUAL_ID : undefined;
    },
    load(id) {
      return id === RESOLVED_VIRTUAL_ID ? buildModule(root, contentDir) : undefined;
    },
    configureServer(server) {
      const watched = path.resolve(root, contentDir);
      server.watcher.add(watched);

      const invalidate = (file: string) => {
        if (!file.startsWith(watched) || !/\.(md|markdown)$/.test(file)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };

      server.watcher.on("add", invalidate);
      server.watcher.on("change", invalidate);
      server.watcher.on("unlink", invalidate);
    },
  };
}
