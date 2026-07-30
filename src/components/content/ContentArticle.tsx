import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { RichTextBody } from "./RichTextBody";
import { SectionRenderer } from "./sections/SectionRenderer";
import { assetUrl } from "../../lib/assetUrl";
import type { ArticleSection, ArticleTemplate } from "../../lib/sections";

const useStyles = makeStyles({
  article: {
    padding: "48px var(--section-pad-x) 72px",
    backgroundColor: "var(--colorNeutralBackground1)",
  },
  inner: { maxWidth: "760px", margin: "0 auto" },
  breadcrumb: {
    display: "inline-block",
    marginBottom: "20px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
  tag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  title: { margin: "14px 0 12px", color: "var(--maq-heading-color)" },
  meta: {
    margin: "0 0 28px",
    fontSize: "14px",
    color: "var(--maq-gray-500)",
    fontWeight: 600,
  },
  cover: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    borderRadius: "14px",
    border: "1px solid var(--maq-border)",
    marginBottom: "32px",
  },
  /* image-first: the cover leads, so it sits flush above the title block. */
  coverLead: { marginBottom: "28px" },
});

/**
 * Page shells offered by the CMS `template` field. Each entry only decides the
 * header treatment above the body; the section list renders identically under
 * all of them.
 *
 * Adding a template means adding an option to the `template` select in
 * public/admin/config.yml, a value in ARTICLE_TEMPLATE_VALUES in lib/sections.ts,
 * and an entry here.
 */
const ARTICLE_TEMPLATES: Record<ArticleTemplate, { coverFirst: boolean; showCover: boolean }> = {
  standard: { coverFirst: false, showCover: true },
  "image-first": { coverFirst: true, showCover: true },
  compact: { coverFirst: false, showCover: false },
};

export interface ContentArticleProps {
  backTo: string;
  backLabel: string;
  tag?: string;
  title: string;
  meta?: string;
  image?: string;
  imageAlt?: string;
  /** Page shell. Defaults to the standard text-first layout. */
  template?: ArticleTemplate;
  /** Section builder output. Rendered instead of `html` when non-empty. */
  sections?: ArticleSection[];
  html: string;
}

/** Shared reading layout for CMS-authored case studies and best practice guides. */
export function ContentArticle({
  backTo,
  backLabel,
  tag,
  title,
  meta,
  image,
  imageAlt,
  template = "standard",
  sections,
  html,
}: ContentArticleProps) {
  const s = useStyles();
  const shell = ARTICLE_TEMPLATES[template] ?? ARTICLE_TEMPLATES.standard;
  const cover =
    shell.showCover && image ? (
      <img
        className={mergeClasses(s.cover, shell.coverFirst && s.coverLead)}
        src={assetUrl(image)}
        alt={imageAlt ?? title}
      />
    ) : null;

  return (
    <article className={s.article}>
      <div className={s.inner}>
        <Link className={s.breadcrumb} to={backTo}>
          ← {backLabel}
        </Link>

        {shell.coverFirst ? cover : null}

        {tag ? (
          <div>
            <span className={s.tag}>{tag}</span>
          </div>
        ) : null}
        <h1 className={`maq-h1 ${s.title}`}>{title}</h1>
        {meta ? <p className={s.meta}>{meta}</p> : null}

        {shell.coverFirst ? null : cover}

        {sections && sections.length > 0 ? (
          <SectionRenderer sections={sections} />
        ) : (
          <RichTextBody html={html} />
        )}
      </div>
    </article>
  );
}
