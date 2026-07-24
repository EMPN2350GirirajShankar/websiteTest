import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
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

export interface ImpactStat {
  metric?: string;
  chip?: string;
  title?: string;
  label: string;
  sourceLabel: string;
  sourceHref: string;
}

interface ImpactStatsProps {
  eyebrow?: string;
  title: string;
  sub: string;
  stats: ImpactStat[];
}

export function ImpactStats({ eyebrow = "Proven outcomes", title, sub, stats }: ImpactStatsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
          {/* <p className={s.sub}>{sub}</p> */}
        </div>
        <div className={s.grid}>
          {stats.map((st) => (
            <StatCard
              key={st.label}
              chip={st.chip}
              metric={st.metric && st.metric !== "____" ? st.metric : undefined}
              title={st.title}
              label={st.label}
              href={st.sourceHref}
              sourceLabel={st.sourceLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
