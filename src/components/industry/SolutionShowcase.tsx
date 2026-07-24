import { useState } from "react";
import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowTrendingLines24Regular,
  Clock24Regular,
  Chat24Regular,
  BuildingShop24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
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
    margin: 0,
    textAlign: "left",
  },
  panel: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },

  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    background: "var(--colorNeutralBackground3)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },
  detailName: {
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "10px",
  },
  detailDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.65,
    marginBottom: "20px",
  },
  knowMore: {
    border: `1px solid var(--maq-red)`,
    color: "var(--maq-red)",
    background: "transparent",
    ":hover": { background: "var(--maq-red-pale)", color: "var(--maq-red)" },
  },

  rail: { display: "flex", flexDirection: "column", gap: "10px" },
  railBtn: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    padding: "14px 16px",
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderLeftWidth: "1px",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
  },
  railBtnActive: {
    border: "1px solid var(--maq-card-hover-border)",
    borderLeftWidth: "3px",
    boxShadow: "var(--maq-shadow-sm)",
  },
  railIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "var(--colorNeutralBackground3)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  railText: { display: "flex", flexDirection: "column", gap: "2px" },
  railName: { fontSize: "14px", fontWeight: 700, color: "var(--maq-black)" },
  railTagline: { fontSize: "12px", color: "var(--maq-gray-600)" },
});

export interface Agent {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
}

interface SolutionShowcaseProps {
  sectionId: string;
  eyebrow?: string;
  title: string;
  agents: Agent[];
  industryLabel?: string;
}

export function SolutionShowcase({ sectionId, eyebrow = "Agentic AI", title, agents, industryLabel = "Retail" }: SolutionShowcaseProps) {
  const s = useStyles();
  const [active, setActive] = useState(0);
  const sel = agents[active];
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
          </div>
          <div className={s.rail}>
            {agents.map((a, i) => (
              <button
                key={a.name}
                type="button"
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`${s.railBtn} ${i === active ? s.railBtnActive : ""}`}
              >
                <span className={s.railIcon}>{a.icon}</span>
                <span className={s.railText}>
                  <span className={s.railName}>{a.name}</span>
                  <span className={s.railTagline}>{a.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
