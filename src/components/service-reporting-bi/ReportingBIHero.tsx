import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--colorNeutralBackground3)", padding: "0 32px", height: "360px", "@media (max-width: 960px)": { height: "auto", padding: "40px 22px" } },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr", "& > *:last-child": { display: "none" } },
  },
  eyebrow: { fontSize: "var(--fs-eyebrow)", fontWeight: 700, color: "var(--maq-red)", letterSpacing: "0.08em", marginBottom: "12px", display: "block" },
  h1: { margin: "0 0 16px" },
  sub: { color: "var(--maq-gray-600)", marginBottom: "24px", maxWidth: "640px" },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

  visual: {
    background: "transparent",
    border: "none",
    borderRadius: "12px",
    padding: "0",
    display: "grid",
    gap: "0",
    boxShadow: "none",
    color: "var(--maq-ink)",
  },
  tile: {
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    padding: "14px 16px",
  },
  tileTitle: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--maq-gray-500)",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  barRow: { display: "flex", alignItems: "flex-end", gap: "6px", height: "48px" },
  bar: { width: "14px", background: "var(--maq-red)", borderRadius: "2px 2px 0 0" },
  barMuted: { width: "14px", background: "var(--maq-gray-500)", opacity: 0.35, borderRadius: "2px 2px 0 0" },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginTop: "4px",
  },
  kpi: {
    background: "var(--colorNeutralBackground3)",
    borderRadius: "6px",
    padding: "8px",
    textAlign: "center",
  },
  kpiVal: { fontSize: "16px", fontWeight: 700, color: "var(--maq-red)" },
  kpiLbl: { fontSize: "12px", color: "var(--maq-gray-500)", textTransform: "uppercase", letterSpacing: "0.04em" },

  perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  perfLabel: { fontSize: "11px", width: "78px", color: "var(--maq-gray-500)" },
  perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
  heroImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
});

export function ReportingBIHero() {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Services</span>
          <h1 className={`maq-h1 ${s.h1}`}>Insights & analytics</h1>
          <p className={`maq-lead ${s.sub}`}>
           Uncover insights faster, anticipate business needs, and empower teams with self-service analytics, real-time intelligence, and predictive insights that drive better decisions.
           </p>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Visualization.png"
            alt="Insights and Analytics"
            loading="eager"
            decoding="async"
            width={560}
            height={420}
          />
        </div>
      </div>
    </section>
  );
}
