import { makeStyles } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../buttons";

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
  eyebrow: {
    fontSize: "var(--fs-eyebrow)",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    marginBottom: "12px",
    display: "block",
  },
  // Typography comes from the canonical `.maq-h1` class; only layout here.
  h1: {
    margin: "0 0 16px",
  },
  // Size/line-height come from the canonical `.maq-lead` class (matches the
  // home hero subtitle); only color + layout live here.
  sub: {
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "640px",
  },
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
  heroImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
});

export function ServiceHeroData() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Services</span>
          <h1 className={`maq-h1 ${s.h1}`}>Data & AI platforms</h1>
          <p className={`maq-lead ${s.sub}`}>
            Unify your enterprise data across platforms with secure governance, scalable architecture, and trusted insights that power business decisions and AI innovation.</p>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Platforms.png"
            alt="Data and AI Platforms"
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
