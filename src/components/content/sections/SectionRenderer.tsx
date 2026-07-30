import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { RichTextBody } from "../RichTextBody";
import { assetUrl } from "../../../lib/assetUrl";
import type { ArticleSection } from "../../../lib/sections";

const useStyles = makeStyles({
  section: { margin: "0 0 32px" },
  heading: {
    fontSize: "clamp(1.5rem, 1.34rem + 0.69vw, 1.875rem)",
    fontWeight: 700,
    color: "var(--maq-heading-color)",
    lineHeight: 1.25,
    margin: "0 0 12px",
  },

  pullQuote: {
    margin: "0 0 36px",
    padding: "28px 32px",
    background: "var(--maq-surface-cream)",
    borderTop: "1px solid var(--maq-border)",
    borderRight: "1px solid var(--maq-border)",
    borderBottom: "1px solid var(--maq-border)",
    borderLeft: "4px solid var(--maq-red)",
    borderRadius: "12px",
  },
  quote: {
    margin: 0,
    fontSize: "clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem)",
    fontWeight: 600,
    lineHeight: 1.45,
    color: "var(--maq-heading-color)",
  },
  attribution: {
    marginTop: "16px",
    fontSize: "0.9375rem",
    lineHeight: 1.5,
    color: "var(--maq-muted-color)",
  },
  attributionName: { display: "block", color: "var(--maq-ink)", fontWeight: 700 },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    margin: "0 0 32px",
  },
  stat: {
    padding: "22px 20px",
    background: "var(--maq-red-50)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "12px",
  },
  statValue: {
    display: "block",
    fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    color: "var(--maq-red)",
  },
  statLabel: {
    display: "block",
    marginTop: "8px",
    fontSize: "0.9375rem",
    lineHeight: 1.45,
    color: "var(--maq-ink)",
  },

  highlight: {
    margin: "0 0 32px",
    padding: "22px 26px",
    background: "var(--maq-gray-50)",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
  },
  highlightHeading: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "var(--maq-ink)",
    margin: "0 0 8px",
  },

  figure: { margin: "0 0 32px" },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    border: "1px solid var(--maq-border)",
  },
  caption: {
    marginTop: "10px",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    color: "var(--maq-muted-color)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.9375rem",
    color: "var(--maq-body-color)",
  },
  cell: {
    border: "1px solid var(--maq-border)",
    padding: "10px 12px",
    textAlign: "left",
    verticalAlign: "top",
  },
  headCell: {
    border: "1px solid var(--maq-border)",
    padding: "10px 12px",
    textAlign: "left",
    background: "var(--maq-gray-50)",
    fontWeight: 700,
    color: "var(--maq-ink)",
  },
  link: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },

  takeaways: {
    margin: 0,
    paddingLeft: 0,
    listStyle: "none",
    display: "grid",
    gap: "12px",
    counterReset: "maq-takeaway",
  },
  takeaway: {
    position: "relative",
    paddingLeft: "44px",
    fontSize: "1.0625rem",
    lineHeight: 1.6,
    color: "var(--maq-body-color)",
    counterIncrement: "maq-takeaway",
    "::before": {
      content: 'counter(maq-takeaway)',
      position: "absolute",
      left: 0,
      top: 0,
      width: "28px",
      height: "28px",
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "var(--maq-red)",
      color: "var(--maq-white)",
      fontSize: "0.875rem",
      fontWeight: 700,
    },
  },

  cta: {
    margin: "0 0 32px",
    padding: "28px 30px",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-border)",
    borderRadius: "14px",
  },
  ctaHeading: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--maq-heading-color)",
    margin: "0 0 8px",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "16px",
    padding: "11px 22px",
    borderRadius: "8px",
    background: "var(--maq-red)",
    color: "var(--maq-white)",
    fontSize: "0.9375rem",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": { background: "var(--maq-red-dark)" },
  },
});

type Styles = ReturnType<typeof useStyles>;

function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

function SectionLink({ url, label, className }: { url: string; label: string; className: string }) {
  if (isExternal(url)) {
    return (
      <a className={className} href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link className={className} to={url}>
      {label}
    </Link>
  );
}

function renderSection(section: ArticleSection, s: Styles) {
  switch (section.type) {
    case "rich_text":
      return (
        <div className={s.section}>
          {section.heading ? <h2 className={s.heading}>{section.heading}</h2> : null}
          <RichTextBody html={section.bodyHtml} />
        </div>
      );

    case "pull_quote":
      return (
        <figure className={s.pullQuote}>
          <blockquote className={s.quote}>{section.quote}</blockquote>
          {section.attribution || section.role ? (
            <figcaption className={s.attribution}>
              {section.attribution ? (
                <strong className={s.attributionName}>{section.attribution}</strong>
              ) : null}
              {section.role}
            </figcaption>
          ) : null}
        </figure>
      );

    case "stat_band":
      return (
        <div className={s.stats}>
          {section.items.map((item, index) => (
            <div className={s.stat} key={`${item.label}-${index}`}>
              <span className={s.statValue}>{item.value}</span>
              <span className={s.statLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      );

    case "highlight":
      return (
        <div className={s.highlight}>
          {section.heading ? <p className={s.highlightHeading}>{section.heading}</p> : null}
          <RichTextBody html={section.bodyHtml} />
        </div>
      );

    case "image":
      return (
        <figure className={s.figure}>
          <img className={s.image} src={assetUrl(section.image)} alt={section.alt ?? ""} loading="lazy" />
          {section.caption ? <figcaption className={s.caption}>{section.caption}</figcaption> : null}
        </figure>
      );

    case "tech_table":
      return (
        <div className={s.section}>
          {section.heading ? <h2 className={s.heading}>{section.heading}</h2> : null}
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.headCell}>Product</th>
                <th className={s.headCell}>How it was used</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, index) => (
                <tr key={`${row.product}-${index}`}>
                  <td className={s.cell}>
                    {row.url ? (
                      <SectionLink url={row.url} label={row.product} className={s.link} />
                    ) : (
                      row.product
                    )}
                  </td>
                  <td className={s.cell}>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "key_takeaways":
      return (
        <div className={s.section}>
          {section.heading ? <h2 className={s.heading}>{section.heading}</h2> : null}
          <ol className={s.takeaways}>
            {section.items.map((item, index) => (
              <li className={s.takeaway} key={`${index}-${item.slice(0, 24)}`}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      );

    case "cta":
      return (
        <div className={s.cta}>
          {section.heading ? <p className={s.ctaHeading}>{section.heading}</p> : null}
          {section.bodyHtml ? <RichTextBody html={section.bodyHtml} /> : null}
          {section.buttonLabel && section.buttonUrl ? (
            <SectionLink url={section.buttonUrl} label={section.buttonLabel} className={s.ctaButton} />
          ) : null}
        </div>
      );

    default:
      return null;
  }
}

/**
 * Renders the ordered section list built in the CMS.
 *
 * Sections are positional and have no stable id, so the index is part of the
 * key. Reordering in the CMS rewrites the file and remounts the page anyway.
 */
export function SectionRenderer({ sections }: { sections: ArticleSection[] }) {
  const s = useStyles();

  return (
    <>
      {sections.map((section, index) => (
        <div key={`${section.type}-${index}`}>{renderSection(section, s)}</div>
      ))}
    </>
  );
}
