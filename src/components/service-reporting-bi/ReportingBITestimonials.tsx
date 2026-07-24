import { makeStyles, tokens } from "@fluentui/react-components";

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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  quote: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    position: "relative",
    margin: 0,
  },
  mark: {
    position: "absolute",
    top: "4px",
    left: "16px",
    fontSize: "56px",
    color: "var(--maq-red)",
    opacity: 0.18,
    lineHeight: 1,
    fontFamily: "inherit",
  },
  body: {
    fontSize: "15px",
    color: "var(--maq-black)",
    lineHeight: 1.55,
    marginBottom: "14px",
    paddingTop: "16px",
  },
  cite: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
});

const quotes = [
  {
    body: "MAQ Software replatformed our reporting estate onto Microsoft Fabric and Power BI in a quarter. Refresh times dropped, executives finally trust the numbers, and we retired a six-figure legacy BI license.",
    cite: "Director, Enterprise BI — Global retailer",
  },
  {
    body: "Their Qlik-to-Power BI migration kept every report pixel-accurate and shaved 60% off the original effort estimate. The MigrateFAST tooling and the team behind it are the real deal.",
    cite: "Head of Analytics — Financial services",
  },
];

export function ReportingBITestimonials() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Testimonials</span> */}
          <h2 className={`maq-h2 ${s.title}`}>What our clients have to say</h2>
        </div>
        <div className={s.grid}>
          {quotes.map((q, i) => (
            <blockquote key={i} className={s.quote}>
              <span className={s.mark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={s.body}>{q.body}</p>
              <cite className={s.cite}>{q.cite}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
