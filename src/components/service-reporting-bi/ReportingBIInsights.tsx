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
    title: "Microsoft Fabric features for real-time analytics",
    teaser:
      "A practical walk-through of the Microsoft Fabric features that make real-time analytics shippable in production.",
    href: "https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html",
    imageUrl: "/images/insights/service/microsoft-fabric-features-for-real-time.png",
  },
  {
    title: "Embracing the future of data management with Microsoft Fabric: A setup guide",
    teaser:
      "A setup guide for adopting Microsoft Fabric end-to-end, from workspace topology to semantic model governance.",
    href: "https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html",
    imageUrl: "/images/insights/service/embracing-future-of-data-management.png",
  },
  {
    title: "Optimize your Power BI reports and usage with LoadFAST",
    teaser:
      "How LoadFAST finds and ranks the highest-impact DAX, model, and capacity fixes in a Power BI estate.",
    href: "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html",
    imageUrl: "/images/insights/service/transform-your-power-bi.png",
  },
];

export function ReportingBIInsights() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h2 className={`maq-h2 ${s.title}`}>Related insights</h2>
          {/* <p className={s.sub}>
            See our research that goes into optimizing our insights &amp; analytics service.
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
