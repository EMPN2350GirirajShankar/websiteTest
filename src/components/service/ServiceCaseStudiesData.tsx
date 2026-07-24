import { makeStyles } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { CaseStudyCard } from "../cards/CaseStudyCard";

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
  // Typography comes from the canonical `.maq-h2` class; only layout here.
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
  teaser?: string;
  href: string;
}

const studies: Study[] = [
  {
    tag: "Microsoft Fabric · OneLake",
    title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser:
      "Siloed enterprise data unified on OneLake for a single governed surface powering analytics, reporting and AI.",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
  {
    tag: "Snowflake · Iceberg",
    title: "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
    teaser:
      "Snowflake Iceberg tables integrated with Microsoft Fabric to dramatically reduce data refresh latency and storage cost.",
    href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
  },
  {
    tag: "Databricks",
    title: "Unlocking advanced analytics with Databricks",
    teaser:
      "Building an advanced analytics platform on Databricks to support ML, streaming, and large-scale data engineering workloads.",
    href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html",
  },
];

export function ServiceCaseStudiesData({
  serviceFilter,
  allCasesLabel,
  serviceSpecificLabel,
}: {
  serviceFilter?: string;
  allCasesLabel?: string;
  serviceSpecificLabel?: string;
} = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Related case studies</span> */}
          <h2 className={`maq-h2 ${s.title}`}>Data & AI platforms in production</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <CaseStudyCard key={c.title} title={c.title} teaser={c.teaser ?? ""} href={c.href} />
          ))}
        </div>
        {serviceFilter && allCasesLabel && serviceSpecificLabel ? (
          <Link
          className={s.footerLink}
          to="/insights/case-studies#insights-content"
        >
          See all case studies <ArrowRight16Regular />
        </Link>
        ) : (
          <Link
            className={s.footerLink}
            to="/insights/case-studies#insights-content"
          >
            See all case studies <ArrowRight16Regular />
          </Link>
        )}
      </div>
    </section>
  );
}
