/**
 * Section model for the CMS section builder.
 *
 * Editors compose an article from a reorderable list of sections in Sveltia
 * (`sections` in public/admin/config.yml). Each `type` below matches a `types`
 * entry there and a component in components/content/sections/SectionRenderer.
 *
 * Markdown fields are rendered to `<field>Html` at build time by
 * plugins/vite-plugin-content.ts, so nothing here parses Markdown.
 *
 * Adding a section type means touching three places: the `types` list in
 * config.yml, the union below, and the registry in SectionRenderer.
 */

export interface StatItem {
  value: string;
  label: string;
}

export interface TechRow {
  product: string;
  url?: string;
  purpose: string;
}

export type ArticleSection =
  | { type: "rich_text"; heading?: string; bodyHtml: string }
  | { type: "pull_quote"; quote: string; attribution?: string; role?: string }
  | { type: "stat_band"; items: StatItem[] }
  | { type: "highlight"; heading?: string; bodyHtml: string }
  | { type: "image"; image: string; alt?: string; caption?: string }
  | { type: "tech_table"; heading?: string; rows: TechRow[] }
  | { type: "key_takeaways"; heading?: string; items: string[] }
  | {
      type: "cta";
      heading?: string;
      bodyHtml?: string;
      buttonLabel?: string;
      buttonUrl?: string;
    }
  | {
      /**
       * Two-column feature card: image on one side, eyebrow + heading + body +
       * optional quote and citation on the other. Every part is optional, so the
       * same block covers an image-only aside or a text-only quote card.
       */
      type: "feature_split";
      eyebrow?: string;
      heading?: string;
      bodyHtml?: string;
      image?: string;
      imageAlt?: string;
      imagePosition: "left" | "right";
      quote?: string;
      attribution?: string;
      role?: string;
      animate: boolean;
    };

export type ArticleSectionType = ArticleSection["type"];

/**
 * Page shell chosen in the CMS `template` field. Only affects the header above
 * the sections; every template renders the same section list.
 */
export const ARTICLE_TEMPLATE_VALUES = ["standard", "image-first", "compact"] as const;

export type ArticleTemplate = (typeof ARTICLE_TEMPLATE_VALUES)[number];

export function normalizeTemplate(value: unknown): ArticleTemplate {
  return ARTICLE_TEMPLATE_VALUES.includes(value as ArticleTemplate)
    ? (value as ArticleTemplate)
    : "standard";
}

type Raw = Record<string, unknown>;

/**
 * Reads a field as a trimmed string.
 *
 * Numbers are coerced because YAML parses an unquoted `12` as a number, and a
 * stat value or heading is very often typed as a bare number in the CMS.
 */
function str(raw: Raw, key: string): string {
  const value = raw[key];
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return "";
}

function optional(raw: Raw, key: string): string | undefined {
  return str(raw, key) || undefined;
}

function objects(raw: Raw, key: string): Raw[] {
  const value = raw[key];
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is Raw => !!item && typeof item === "object" && !Array.isArray(item));
}

/**
 * Turns untyped frontmatter into the section union, dropping anything malformed.
 *
 * Content comes from Markdown files that a non-developer edits, so a missing or
 * unknown field must degrade to "this section does not render" rather than
 * throwing and taking the whole page down.
 */
export function normalizeSections(value: unknown): ArticleSection[] {
  if (!Array.isArray(value)) return [];

  const sections: ArticleSection[] = [];

  for (const entry of value) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const raw = entry as Raw;

    switch (str(raw, "type")) {
      case "rich_text": {
        const bodyHtml = str(raw, "bodyHtml");
        if (bodyHtml) sections.push({ type: "rich_text", heading: optional(raw, "heading"), bodyHtml });
        break;
      }

      case "pull_quote": {
        const quote = str(raw, "quote");
        if (quote) {
          sections.push({
            type: "pull_quote",
            quote,
            attribution: optional(raw, "attribution"),
            role: optional(raw, "role"),
          });
        }
        break;
      }

      case "stat_band": {
        const items = objects(raw, "items")
          .map((item) => ({ value: str(item, "value"), label: str(item, "label") }))
          .filter((item) => item.value && item.label);
        if (items.length) sections.push({ type: "stat_band", items });
        break;
      }

      case "highlight": {
        const bodyHtml = str(raw, "bodyHtml");
        if (bodyHtml) sections.push({ type: "highlight", heading: optional(raw, "heading"), bodyHtml });
        break;
      }

      case "image": {
        const image = str(raw, "image");
        if (image) {
          sections.push({
            type: "image",
            image,
            alt: optional(raw, "alt"),
            caption: optional(raw, "caption"),
          });
        }
        break;
      }

      case "tech_table": {
        const rows = objects(raw, "rows")
          .map((row) => ({
            product: str(row, "product"),
            url: optional(row, "url"),
            purpose: str(row, "purpose"),
          }))
          .filter((row) => row.product);
        if (rows.length) sections.push({ type: "tech_table", heading: optional(raw, "heading"), rows });
        break;
      }

      case "key_takeaways": {
        const source = raw.items;
        const items = Array.isArray(source)
          ? source
              .map((item) => (typeof item === "number" ? String(item) : item))
              .map((item) => (typeof item === "string" ? item.trim() : ""))
              .filter(Boolean)
          : [];
        if (items.length) sections.push({ type: "key_takeaways", heading: optional(raw, "heading"), items });
        break;
      }

      case "cta": {
        const heading = optional(raw, "heading");
        const bodyHtml = optional(raw, "bodyHtml");
        const buttonLabel = optional(raw, "buttonLabel");
        if (heading || bodyHtml || buttonLabel) {
          sections.push({
            type: "cta",
            heading,
            bodyHtml,
            buttonLabel,
            buttonUrl: optional(raw, "buttonUrl"),
          });
        }
        break;
      }

      case "feature_split": {
        const eyebrow = optional(raw, "eyebrow");
        const heading = optional(raw, "heading");
        const bodyHtml = optional(raw, "bodyHtml");
        const image = optional(raw, "image");
        const quote = optional(raw, "quote");

        // Every field is optional, so render only if the block says something.
        if (eyebrow || heading || bodyHtml || image || quote) {
          sections.push({
            type: "feature_split",
            eyebrow,
            heading,
            bodyHtml,
            image,
            imageAlt: optional(raw, "imageAlt"),
            imagePosition: str(raw, "imagePosition") === "right" ? "right" : "left",
            quote,
            attribution: optional(raw, "attribution"),
            role: optional(raw, "role"),
            animate: raw.animate !== false,
          });
        }
        break;
      }

      default:
        // Unknown type: the CMS config is ahead of the code. Skip it.
        break;
    }
  }

  return sections;
}

/** Plain text of the first prose section, used when an entry has no excerpt. */
export function sectionsExcerptSource(sections: ArticleSection[]): string {
  for (const section of sections) {
    if (section.type === "rich_text") return section.bodyHtml;
  }
  return "";
}
