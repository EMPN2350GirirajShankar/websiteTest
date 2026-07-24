import { makeStyles, tokens } from "@fluentui/react-components";
import { CaseStudyCard } from "../cards/CaseStudyCard";
import { getServiceInsightImage } from "../../data/serviceInsightImages";

export interface InsightItem {
  title: string;
  teaser: string;
  href: string;
  imageUrl?: string;
}

export interface ServiceInsightsProps {
  title?: string;
  subhead?: string;
  insights?: InsightItem[];
}

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

const defaultInsights = [
  {
    title: "Empowering businesses with AI: Frameworks that deliver results",
    teaser:
      "A field-tested framework for shipping AI initiatives that produce measurable business outcomes.",
    href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
    imageUrl: "/images/insights/service/empowering-businesses-with-ai.png",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser: "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    imageUrl: "/images/insights/service/building-secure-copilot-addressing-key.png",
  },
  {
    title: "Designing UI for Copilot: Key principles and practices",
    teaser: "UI principles that make Copilot interactions feel trustworthy, fast, and on-brand.",
    href: "https://blog.maqsoftware.com/2024/08/designing-ui-for-copilot-key-principles.html",
    imageUrl: "/images/insights/service/designing-ui-for-copilot-key-principles.png",
  },
];

export function ServiceInsights({
  title = "Related insights",
  subhead = "See our research that goes into shipping production agents on Microsoft Foundry.",
  insights = defaultInsights,
}: ServiceInsightsProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
          {/* <p className={s.sub}>{subhead}</p> */}
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <CaseStudyCard
              key={i.title}
              href={i.href}
              imageUrl={i.imageUrl ?? getServiceInsightImage(i.href)}
              title={i.title}
              teaser={i.teaser}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
