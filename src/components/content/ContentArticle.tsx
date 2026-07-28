import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { RichTextBody } from "./RichTextBody";
import { assetUrl } from "../../lib/assetUrl";

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
});

export interface ContentArticleProps {
  backTo: string;
  backLabel: string;
  tag?: string;
  title: string;
  meta?: string;
  image?: string;
  imageAlt?: string;
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
  html,
}: ContentArticleProps) {
  const s = useStyles();

  return (
    <article className={s.article}>
      <div className={s.inner}>
        <Link className={s.breadcrumb} to={backTo}>
          ← {backLabel}
        </Link>
        {tag ? (
          <div>
            <span className={s.tag}>{tag}</span>
          </div>
        ) : null}
        <h1 className={`maq-h1 ${s.title}`}>{title}</h1>
        {meta ? <p className={s.meta}>{meta}</p> : null}

        {image ? (
          <img className={s.cover} src={assetUrl(image)} alt={imageAlt ?? title} />
        ) : null}

        <RichTextBody html={html} />
      </div>
    </article>
  );
}
