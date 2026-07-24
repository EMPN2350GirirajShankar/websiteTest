import { makeStyles, tokens } from "@fluentui/react-components";
import { ArticleCard } from "../cards/ArticleCard";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "28px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  title: {
    display: "block",
    margin: "0 0 6px",
    textAlign: "left",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
});

export interface InsightCard {
  title: string;
  href: string;
}

export interface PartnershipInsightsProps {
  eyebrow: string;
  title: string;
  items: InsightCard[];
}

export function PartnershipInsights({
  eyebrow,
  title,
  items,
}: PartnershipInsightsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>
        <div className={s.grid}>
          {items.map((b) => (
            <ArticleCard
              key={b.title}
              title={b.title}
              href={b.href}
              ctaLabel="Read more"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
