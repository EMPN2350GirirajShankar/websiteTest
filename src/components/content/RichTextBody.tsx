import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { useMemo } from "react";
import { assetUrl } from "../../lib/assetUrl";
import { sanitizeExternalHtml } from "../../lib/sanitizeHtml";

const useStyles = makeStyles({
  prose: {
    fontFamily: "Roboto, system-ui",
    fontSize: "1.0625rem",
    lineHeight: 1.7,
    color: "var(--maq-body-color)",

    "& > *:first-child": { marginTop: 0 },
    "& > *:last-child": { marginBottom: 0 },

    "& h2": {
      fontSize: "clamp(1.5rem, 1.34rem + 0.69vw, 1.875rem)",
      fontWeight: 700,
      color: "var(--maq-heading-color)",
      lineHeight: 1.25,
      margin: "40px 0 12px",
    },
    "& h3": {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "var(--maq-ink)",
      lineHeight: 1.3,
      margin: "28px 0 10px",
    },
    "& h4": {
      fontSize: "1.0625rem",
      fontWeight: 700,
      color: "var(--maq-ink)",
      margin: "24px 0 8px",
    },
    "& p": { margin: "0 0 18px" },
    "& ul, & ol": { margin: "0 0 18px", paddingLeft: "22px" },
    "& li": { margin: "0 0 8px" },
    "& a": {
      color: "var(--maq-red)",
      fontWeight: 600,
      textDecoration: "underline",
      textUnderlineOffset: "2px",
    },
    "& strong": { color: "var(--maq-ink)", fontWeight: 700 },
    "& img": {
      display: "block",
      maxWidth: "100%",
      height: "auto",
      borderRadius: "12px",
      border: "1px solid var(--maq-border)",
      margin: "24px 0",
    },
    "& blockquote": {
      margin: "24px 0",
      padding: "12px 20px",
      borderLeft: "3px solid var(--maq-red)",
      background: "var(--maq-red-50)",
      color: "var(--maq-ink)",
      fontStyle: "italic",
    },

    /* Inline highlight: <mark>text</mark> */
    "& mark": {
      background: "var(--maq-red-50)",
      color: "var(--maq-ink)",
      padding: "0 4px",
      borderRadius: "3px",
      boxShadow: "inset 0 -2px 0 var(--maq-red-pale)",
    },

    /* Pull quote with attribution:
       <figure class="maq-pullquote">
         <blockquote>“…”</blockquote>
         <figcaption><strong>Name</strong>Role, Company</figcaption>
       </figure> */
    "& .maq-pullquote": {
      margin: "36px 0",
      padding: "28px 32px",
      background: "var(--maq-surface-cream)",
      borderTop: "1px solid var(--maq-border)",
      borderRight: "1px solid var(--maq-border)",
      borderBottom: "1px solid var(--maq-border)",
      borderLeft: "4px solid var(--maq-red)",
      borderRadius: "12px",
    },
    "& .maq-pullquote blockquote": {
      margin: 0,
      padding: 0,
      background: "none",
      borderLeft: "none",
      fontStyle: "normal",
      fontSize: "clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem)",
      fontWeight: 600,
      lineHeight: 1.45,
      color: "var(--maq-heading-color)",
    },
    "& .maq-pullquote figcaption": {
      marginTop: "16px",
      fontSize: "0.9375rem",
      lineHeight: 1.5,
      color: "var(--maq-muted-color)",
    },
    "& .maq-pullquote figcaption strong": {
      display: "block",
      color: "var(--maq-ink)",
      fontWeight: 700,
    },

    /* Highlighted stat band:
       <div class="maq-stats">
         <div class="maq-stat">
           <span class="maq-stat-value">2,000</span>
           <span class="maq-stat-label">Employees connected</span>
         </div>
       </div> */
    "& .maq-stats": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "16px",
      margin: "32px 0",
    },
    "& .maq-stat": {
      padding: "22px 20px",
      background: "var(--maq-red-50)",
      border: "1px solid var(--maq-red-pale)",
      borderRadius: "12px",
    },
    "& .maq-stat-value": {
      display: "block",
      fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem)",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "var(--maq-red)",
    },
    "& .maq-stat-label": {
      display: "block",
      marginTop: "8px",
      fontSize: "0.9375rem",
      lineHeight: 1.45,
      color: "var(--maq-ink)",
    },

    /* Highlighted callout box:
       <div class="maq-highlight"> …markdown-free HTML… </div> */
    "& .maq-highlight": {
      margin: "32px 0",
      padding: "22px 26px",
      background: "var(--maq-gray-50)",
      border: "1px solid var(--maq-border)",
      borderRadius: "12px",
    },
    "& .maq-highlight > *:first-child": { marginTop: 0 },
    "& .maq-highlight > *:last-child": { marginBottom: 0 },

    /* Small uppercase eyebrow label above a section heading. */
    "& .maq-eyebrow": {
      display: "block",
      margin: "36px 0 -4px",
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--maq-red)",
    },

    "& code": {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: "0.9em",
      background: "var(--maq-gray-50)",
      border: "1px solid var(--maq-border)",
      borderRadius: "4px",
      padding: "1px 5px",
    },
    "& pre": {
      margin: "0 0 20px",
      padding: "16px",
      overflowX: "auto",
      background: "var(--maq-surface-soft)",
      border: "1px solid var(--maq-border)",
      borderRadius: "10px",
    },
    "& pre code": { background: "none", border: "none", padding: 0 },
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      margin: "0 0 24px",
      fontSize: "0.9375rem",
    },
    "& th, & td": {
      border: "1px solid var(--maq-border)",
      padding: "10px 12px",
      textAlign: "left",
    },
    "& th": { background: "var(--maq-gray-50)", fontWeight: 700, color: "var(--maq-ink)" },
    "& hr": {
      border: "none",
      borderTop: "1px solid var(--maq-border)",
      margin: "32px 0",
    },
  },
});

/** Rewrites CMS media paths (/images/uploads/...) onto the deployed base path. */
function withBasePath(html: string): string {
  return html.replace(/\b(src|href)="\/(?!\/)/g, (_match, attr: string) => `${attr}="${assetUrl("/")}`);
}

export function RichTextBody({ html, className }: { html: string; className?: string }) {
  const s = useStyles();
  const safeHtml = useMemo(() => sanitizeExternalHtml(withBasePath(html)), [html]);

  return (
    <div
      className={mergeClasses(s.prose, className)}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
