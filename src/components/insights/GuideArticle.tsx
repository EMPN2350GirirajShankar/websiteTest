import { makeStyles, tokens } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "48px 32px 32px",
  },
  heroInner: { maxWidth: "960px", margin: "0 auto" },
  crumbs: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "12px",
    "& a": {
      color: "var(--maq-gray-600)",
      textDecoration: "none",
      ":hover": { color: "var(--maq-red)" },
    },
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "12px",
  },
  title: {
    margin: "0 0 12px",
  },
  intro: {
    fontSize: "16px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: "780px",
  },
  meta: {
    marginTop: "16px",
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  body: { padding: "32px 32px 56px", backgroundColor: "#fff" },
  bodyInner: { maxWidth: "960px", margin: "0 auto" },
  section: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px 28px",
    background: "#fff",
    marginBottom: "16px",
  },
  sectionTitle: {
    margin: "0 0 14px",
    paddingBottom: "8px",
    borderBottom: `2px solid var(--maq-red-pale)`,
  },
  practice: { marginBottom: "16px", "&:last-child": { marginBottom: 0 } },
  practiceTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "4px",
  },
  practiceBody: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    margin: 0,
  },
  refs: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "20px 24px",
    background: "var(--colorNeutralBackground3)",
    marginTop: "20px",
  },
  refsTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    margin: "0 0 10px",
  },
  refList: {
    margin: 0,
    paddingLeft: "18px",
    "& li": { marginBottom: "6px", fontSize: "13.5px", color: "var(--maq-gray-700)" },
    "& a": { color: "var(--maq-red)", textDecoration: "none" },
    "& a:hover": { textDecoration: "underline" },
  },
  ctaBand: {
    marginTop: "24px",
    padding: "20px 24px",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderLeft: "4px solid var(--maq-red)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "@media (min-width: 720px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  ctaText: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: 0,
    lineHeight: 1.5,
  },
  upNext: {
    marginTop: "20px",
    fontSize: "13.5px",
    color: "var(--maq-gray-600)",
    "& a": {
      color: "var(--maq-red)",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
      lineHeight: 1.4,
    },
  },
  continueCard: {
    marginTop: "20px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media (min-width: 720px)": {
      gridTemplateColumns: "minmax(220px, 360px) 1fr",
    },
    transition: "all 0.2s",
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
    },
  },
  continueImageWrap: {
    background: "var(--colorNeutralBackground3)",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "180px",
  },
  continueImage: {
    width: "100%",
    height: "auto",
    maxHeight: "240px",
    objectFit: "contain",
    display: "block",
  },
  continueBody: {
    padding: "22px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    justifyContent: "center",
  },
  continueTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    lineHeight: 1.3,
  },
  continueDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: 0,
    lineHeight: 1.5,
  },
  continueLink: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginTop: "4px",
  },
});

export interface GuidePractice {
  title: string;
  body: string;
}

export interface GuideSection {
  title: string;
  practices: GuidePractice[];
}

export interface GuideReference {
  label: string;
  href: string;
  source?: string;
}

export interface GuideUpNext {
  label: string;
  to: string;
}

export interface GuideContinueReading {
  image: string;
  title: string;
  description: string;
  to: string;
}

export interface GuideArticleProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated?: string;
  sections: GuideSection[];
  references?: GuideReference[];
  upNext?: GuideUpNext;
  continueReading?: GuideContinueReading;
  ctaSubject: string;
  ctaText?: string;
}

export function GuideArticle({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
  references,
  upNext,
  continueReading,
  ctaSubject,
  ctaText,
}: GuideArticleProps) {
  const s = useStyles();
  const handleContactClick = useContactAction();

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.crumbs}>
            <Link to="/insights/best-practice-guides">Best practice guides</Link> /{" "}
            <span>{eyebrow}</span>
          </div>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h1 className={`maq-h1 ${s.title}`}>{title}</h1>
          <p className={s.intro}>{intro}</p>
          {lastUpdated ? <div className={s.meta}>Last updated: {lastUpdated}</div> : null}
        </div>
      </section>

      <section className={s.body}>
        <div className={s.bodyInner}>
          {sections.map((sec) => (
            <div key={sec.title} className={s.section}>
              <h2 className={`maq-h2 ${s.sectionTitle}`}>{sec.title}</h2>
              {sec.practices.map((p) => (
                <div key={p.title} className={s.practice}>
                  <div className={s.practiceTitle}>{p.title}</div>
                  <p className={s.practiceBody}>{p.body}</p>
                </div>
              ))}
            </div>
          ))}

          {references && references.length > 0 ? (
            <div className={s.refs}>
              <h3 className={s.refsTitle}>References</h3>
              <ul className={s.refList}>
                {references.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} target="_blank" rel="noopener noreferrer">
                      {r.label}
                    </a>
                    {r.source ? ` — ${r.source}` : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={s.ctaBand}>
            <p className={s.ctaText}>
              {ctaText ?? "Want a tailored review for your environment? MAQ Software's team can help."}
            </p>
            <PrimaryButton onClick={() => handleContactClick(ctaSubject)}>
              Talk to our team
            </PrimaryButton>
          </div>

          {continueReading ? (
            <Link to={continueReading.to} className={s.continueCard}>
              <div className={s.continueImageWrap}>
                <img
                  className={s.continueImage}
                  src={continueReading.image}
                  alt={continueReading.title}
                  loading="lazy"
                />
              </div>
              <div className={s.continueBody}>
                <h3 className={s.continueTitle}>{continueReading.title}</h3>
                <p className={s.continueDesc}>{continueReading.description}</p>
                <span className={s.continueLink}>
                  Read More
                </span>
              </div>
            </Link>
          ) : upNext ? (
            <div className={s.upNext}>
              Up next:{" "}
              <Link to={upNext.to}>
                {upNext.label}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
