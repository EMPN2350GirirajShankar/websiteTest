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

const studies: Study[] = [
  {
    tag: "Microsoft Fabric",
    title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
    teaser:
      "Consolidating fragmented data estates onto Microsoft Fabric to unlock a single, governed source of truth across the enterprise.",
    href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
  },
  {
    tag: "Snowflake · Fabric",
    title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    teaser:
      "Bridging Snowflake and Microsoft Fabric to streamline data movement, governance, and cost — without rewriting existing pipelines.",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
  },
  {
    tag: "SQL migration",
    title: "Modernizing reporting platforms through AI-driven SQL Migration",
    teaser:
      "AI-assisted SQL conversion accelerates legacy reporting platform migration while preserving security and compliance.",
    href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
  },
];

export function ServiceCloudCaseStudies({
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
          <h2 className={`maq-h2 ${s.title}`}>Cloud modernization in production</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <CaseStudyCard key={c.title} title={c.title} teaser={c.teaser} href={c.href} />
          ))}
        </div>
        {serviceFilter && allCasesLabel && serviceSpecificLabel ? (
          <Link className={s.footerLink} to="/insights/case-studies#insights-content">
            See all case studies <ArrowRight16Regular />
          </Link>
        ) : (
          <Link className={s.footerLink} to="/insights/case-studies#insights-content">
            See all case studies <ArrowRight16Regular />
          </Link>
        )}
      </div>
    </section>
  );
}
