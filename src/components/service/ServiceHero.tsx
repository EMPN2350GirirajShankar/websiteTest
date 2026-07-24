import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  Mail24Regular,
  Bot20Filled,
  ChartMultiple20Filled,
  Sparkle20Filled,
} from "@fluentui/react-icons";

export interface ServiceHeroProps {
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  ctaMailSubject?: string;
  visual?: ReactNode;
}

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
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "20px",
    display: "grid",
    gap: "12px",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
    color: "var(--maq-ink)",
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
  pulseRow: { display: "flex", gap: "8px", alignItems: "center" },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-red)",
  },
  dotMuted: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-gray-500)",
    opacity: 0.4,
  },
  pulseLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },

  perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  perfLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },

  autoRow: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--maq-ink)", marginTop: "4px" },
});

export function ServiceHero({
  eyebrow = "Services",
  heading = "AI solutions & agents",
  subhead = "Increase productivity, streamline operations, and unlock new capabilities with intelligent agents and copilots that automate complex business workflows.",
  ctaMailSubject = "Agentic AI & ML - MAQ Software",
  visual,
}: ServiceHeroProps = {}) {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h1 className={`maq-h1 ${s.h1}`}>{heading}</h1>
          <p className={`maq-lead ${s.sub}`}>{subhead}</p>
        </div>

        {visual ?? (
          <div className={s.visual} aria-hidden="true">
            <div className={s.tile}>
              <div className={s.tileTitle}>
                <Bot20Filled /> Agent activity
              </div>
              <div className={s.pulseRow}>
                <span className={s.dot} />
                <span className={s.dot} />
                <span className={s.dotMuted} />
                <span className={s.pulseLabel}>3 agents online · 142 tasks/min</span>
              </div>
            </div>
            <div className={s.tile}>
              <div className={s.tileTitle}>
                <ChartMultiple20Filled /> Model performance
              </div>
              <div className={s.perfRow}>
                <span className={s.perfLabel}>Accuracy</span>
                <div className={s.perfTrack}>
                  <div className={s.perfFill} style={{ width: "92%" }} />
                </div>
              </div>
              <div className={s.perfRow}>
                <span className={s.perfLabel}>Precision</span>
                <div className={s.perfTrack}>
                  <div className={s.perfFill} style={{ width: "88%" }} />
                </div>
              </div>
              <div className={s.perfRow}>
                <span className={s.perfLabel}>Recall</span>
                <div className={s.perfTrack}>
                  <div className={s.perfFill} style={{ width: "81%" }} />
                </div>
              </div>
            </div>
            <div className={s.tile}>
              <div className={s.tileTitle}>
                <Sparkle20Filled /> Today&apos;s automations
              </div>
              <div className={s.autoRow}>
                <span>Invoices auto-classified</span>
                <span>1,284</span>
              </div>
              <div className={s.autoRow}>
                <span>Support tickets summarized</span>
                <span>312</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
