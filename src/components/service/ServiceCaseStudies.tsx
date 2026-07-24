import { makeStyles } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { CaseStudyCard } from "../cards/CaseStudyCard";

export interface CaseStudyItem {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

export interface ServiceCaseStudiesProps {
  title?: string;
  studies?: CaseStudyItem[];
  footerLabel?: string;
  footerHref?: string;
  serviceFilter?: string;
  allCasesLabel?: string;
  serviceSpecificLabel?: string;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "24px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  title: {
    margin: 0,
    textAlign: "left",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  footerLink: {
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    "@media (max-width: 640px)": { flexDirection: "column" },
  },
});

interface Study {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

const defaultStudies: Study[] = [
  {
    tag: "AI adoption",
    title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "A proven CoE blueprint that moves enterprise AI from pilot interest to repeatable, governed production adoption.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
  {
    tag: "Agentic AI",
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "How agentic AI is reshaping retail, financial services, healthcare and manufacturing workflows in production.",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
  {
    tag: "Scaling AI",
    title: "Empowering self-service using Custom Copilot agent with Power BI Embedded",
    teaser:
      "Enabling secure self-service analytics with a custom Copilot agent and Power BI Embedded.",
    href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html",
  },
];

export function ServiceCaseStudies({
  title = "AI solutions & agents in production",
  studies = defaultStudies,
  footerLabel,
  footerHref,
  serviceFilter,
  allCasesLabel,
  serviceSpecificLabel,
}: ServiceCaseStudiesProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Related case studies</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <CaseStudyCard key={c.title} title={c.title} teaser={c.teaser} href={c.href} />
          ))}
        </div>
        {serviceFilter && allCasesLabel && serviceSpecificLabel ? (
          <div className={s.buttonGroup}>
            <Link
              className={s.footerLink}
              to="/insights/case-studies#insights-content"
            >
              {allCasesLabel} <ArrowRight16Regular />
            </Link>
          </div>
        ) : footerLabel && footerHref ? (
          <Link
            className={s.footerLink}
            to={footerHref}
          >
            {footerLabel} <ArrowRight16Regular />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
