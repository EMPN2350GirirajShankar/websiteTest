import { makeStyles, tokens } from "@fluentui/react-components";
import { StatCard } from "../cards/StatCard";

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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
});

export interface HighlightStat {
  metric: string;
  label: string;
}

export interface PartnershipHighlightsProps {
  eyebrow?: string;
  title: string;
  stats: HighlightStat[];
}

export function PartnershipHighlights({
  eyebrow,
  title,
  stats,
}: PartnershipHighlightsProps) {
  const s = useStyles();

  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* eyebrow hidden intentionally */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>
        <div className={s.grid}>
          {stats.map((h) => (
            <StatCard key={h.label} metric={h.metric} label={h.label} centerAlign />
          ))}
        </div>
      </div>
    </section>
  );
}
