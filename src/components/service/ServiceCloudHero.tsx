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
  eyebrow: {
    fontSize: "var(--fs-eyebrow)",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    marginBottom: "12px",
    display: "block",
  },
  h1: { margin: "0 0 16px" },
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
  statusRow: { display: "flex", gap: "8px", alignItems: "center" },
  check: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--maq-red)",
  },
  statusLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },

  costRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  costLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  costTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  costFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px", width: "65%" },

  deployRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "var(--maq-ink)",
    marginTop: "4px",
  },
  heroImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
});

export function ServiceCloudHero() {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <span className={s.eyebrow}>Services</span>
          <h1 className={`maq-h1 ${s.h1}`}>Cloud modernization</h1>
          <p className={`maq-lead ${s.sub}`}>
           Reduce costs, accelerate delivery, and scale on demand with modern cloud platforms that optimize operations and create the foundation for AI-powered applications and intelligent experiences.
          </p>
        </div>

        <div className={s.visual}>
          <img
            className={s.heroImage}
            src="/images/Service%20cards/Cloud.png"
            alt="Cloud Modernization"
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
