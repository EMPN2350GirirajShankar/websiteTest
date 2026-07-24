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
  // Typography comes from the canonical `.maq-h2` class; only layout here.
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
    title: "Microsoft Fabric Feature for Real-time Analytics",
    teaser: "Explore Fabric features that enable real-time analytics and streaming.",
    href: "https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html",
    imageUrl: "/images/insights/service/microsoft-fabric-features-for-real-time.png",
  },
  {
    title: "Embracing the Future of Data Management with Microsoft Fabric: A Setup Guide",
    teaser: "Guidance for setting up Fabric-based data platforms.",
    href: "https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html",
    imageUrl: "/images/insights/service/embracing-future-of-data-management.png",
  },
  {
    title: "Optimize your Power BI Reports and Usage with LoadFAST",
    teaser: "Best practices to get better performance and higher usage from Power BI.",
    href: "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html",
    imageUrl: "/images/insights/service/transform-your-power-bi.png",
  },
];

export function ServiceInsightsData() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h2 className={`maq-h2 ${s.title}`}>Related insights</h2>
          {/* <p className={s.sub}>See our research that goes into optimizing our data &amp; analytics service.</p> */}
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
