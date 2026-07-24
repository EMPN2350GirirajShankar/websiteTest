import { makeStyles } from "@fluentui/react-components";
import { Mail24Regular, ChartMultiple20Filled } from "@fluentui/react-icons";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px 32px" },
  grid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  h1: {
    margin: "0 0 16px",
  },
  sub: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "680px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },
  visual: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "20px",
    display: "grid",
    gap: "12px",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
  },
  tile: {
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    padding: "14px 16px",
  },
  tileTitle: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--maq-gray-500)",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
  },
  kpi: {
    background: "var(--colorNeutralBackground3)",
    borderRadius: "6px",
    padding: "8px",
    textAlign: "center",
  },
  kpiVal: { fontSize: "16px", fontWeight: 700, color: "var(--maq-red)" },
  kpiLbl: { fontSize: "12px", color: "var(--maq-gray-500)", textTransform: "uppercase" },
  miniRows: { display: "grid", gap: "8px" },
  miniRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    borderBottom: "1px dashed var(--maq-border)",
    paddingBottom: "6px",
  },
});

interface InsightsHeroProps {
  title: string;
  subhead: string;
  ctaLabel?: string;
}

export function InsightsHero({
  title,
  subhead,
  ctaLabel = "Contact Us",
}: InsightsHeroProps) {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h1 className={`maq-h1 ${s.h1}`}>{title}</h1>
          <p className={s.sub}>{subhead}</p>
          <div className={s.btns}>
            <PrimaryButton size="large" onClick={() => handleContactClick()}>
              {ctaLabel}
            </PrimaryButton>
          </div>
        </div>
        <div className={s.visual} aria-hidden="true">
          <div className={s.tile}>
            <div className={s.tileTitle}>
              <ChartMultiple20Filled /> Insights velocity
            </div>
            <div className={s.kpiGrid}>
              <div className={s.kpi}>
                <div className={s.kpiVal}>101</div>
                <div className={s.kpiLbl}>Case studies</div>
              </div>
              <div className={s.kpi}>
                <div className={s.kpiVal}>43</div>
                <div className={s.kpiLbl}>Visuals</div>
              </div>
              <div className={s.kpi}>
                <div className={s.kpiVal}>16</div>
                <div className={s.kpiLbl}>Guides</div>
              </div>
            </div>
          </div>
          <div className={s.tile}>
            <div className={s.tileTitle}>Resource channels</div>
            <div className={s.miniRows}>
              <div className={s.miniRow}><span>Case studies</span><span>Updated</span></div>
              <div className={s.miniRow}><span>Marketplace offers</span><span>Marketplace</span></div>
              <div className={s.miniRow}><span>Visual guide</span><span>Certified</span></div>
              <div className={s.miniRow}><span>Best practices</span><span>Technical</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
