import { makeStyles, tokens } from "@fluentui/react-components";
import { CaseStudyCard } from "../cards/CaseStudyCard";
import { getServiceInsightImage } from "../../data/serviceInsightImages";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
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
    margin: "0 0 6px",
    textAlign: "left",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
});

const insights = [
  {
    title: "Optimize your DevOps strategies with our 9 essential best practices",
    teaser: "Essential DevOps practices for efficient cloud deployment and operations.",
    href: "/insights/azure-dev-ops-best-practices-guide",
    imageUrl: "/images/insights/service/azure-dev-ops-best-practices-guide.jpg",
  },
  {
    title: "Strengthen your cloud security and protect your assets with 19 security best practices",
    teaser: "Comprehensive security best practices for protecting your cloud infrastructure and data.",
    href: "/insights/azure-security-best-practices",
    imageUrl: "/images/insights/service/azure-security-best-practices.jpg",
  },
  {
    title: "This guide covers the 7 best practices you need to secure Dataverse",
    teaser:
      "Essential security controls for protecting data in Microsoft Dataverse cloud environment.",
    href: "/insights/dataverse-security-best-practices",
    imageUrl: "/images/insights/service/dataverse-security-best-practices.jpg",
  },
];

export function ServiceCloudInsights() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h2 className={`maq-h2 ${s.title}`}>Related insights</h2>
          {/* <p className={s.sub}>
            See our research that goes into refining our cloud modernization service.
          </p> */}
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <CaseStudyCard
              key={i.title}
              href={i.href}
              imageUrl={i.imageUrl}
              title={i.title}
              teaser={i.teaser}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
