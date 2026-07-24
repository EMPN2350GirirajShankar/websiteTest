import { useParams, Link, Navigate } from "react-router-dom";
import { useContactAction } from "../lib/contact";
import {
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowLeft20Regular,
  Mail24Regular,
  CheckmarkCircle20Filled,
} from "@fluentui/react-icons";
import { getProduct, products } from "../data/products";
import { PrimaryButton } from "../components/buttons";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "48px 32px 56px",
  },
  heroInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--maq-gray-700)",
    fontSize: "13px",
    textDecoration: "none",
    marginBottom: "20px",
    ":hover": { color: "var(--maq-red)" },
  },
  tagline: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "10px",
    display: "block",
  },
  h1: {
    margin: "0 0 16px",
  },
  sub: {
    fontSize: "15px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    marginBottom: "24px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

  visual: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 12px 32px rgba(186, 20, 26, 0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  visualImg: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "12px",
  },
  visualMeta: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingTop: "4px",
  },
  visualLogo: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  visualName: { fontSize: "15px", fontWeight: 700, color: "var(--maq-black)" },
  visualSub: { fontSize: "12px", color: "var(--maq-red)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 },

  impact: { padding: "40px 32px", backgroundColor: "#fff", borderBottom: "1px solid var(--maq-border)" },
  impactInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  impactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 720px)": { gridTemplateColumns: "1fr" },
  },
  impactCard: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "14px",
    padding: "24px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  impactValue: {
    fontSize: "38px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
  },
  impactLabel: { fontSize: "13.5px", color: "var(--maq-gray-700)", lineHeight: 1.5 },

  section: { padding: "64px 32px", backgroundColor: "#fff" },
  sectionAlt: { padding: "64px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  h2: {
    margin: "0 0 28px",
  },
  featGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  feat: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
  },
  featHead: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  featIcon: { color: "var(--maq-red)" },
  featTitle: { fontSize: "15px", fontWeight: 700, color: "var(--maq-black)" },
  featDesc: { fontSize: "13.5px", color: "var(--maq-gray-700)", lineHeight: 1.6 },

  useGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  useCard: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
    padding: "20px",
  },
  useTag: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "3px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: "10px",
  },
  useText: { fontSize: "14px", color: "var(--maq-black)", lineHeight: 1.55 },

  platformsRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  platformChip: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "999px",
    padding: "6px 14px",
    fontSize: "13px",
    color: "var(--maq-ink)",
    fontWeight: 500,
  },

  related: { padding: "56px 32px", backgroundColor: "#fff" },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  relatedCard: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "20px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  relatedName: { fontSize: "15px", fontWeight: 700, color: "var(--maq-black)" },
  relatedTagline: {
    fontSize: "12px",
    color: "var(--maq-red)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 600,
    marginBottom: "4px",
  },
  relatedDesc: {
    fontSize: "13px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.5,
    marginTop: "8px",
  },
});

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  const s = useStyles();
  const handleContactClick = useContactAction();

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div>
            <Link to="/products" className={s.back}>
              <ArrowLeft20Regular fontSize={14} /> Back to products
            </Link>
            <span className={s.tagline}>{product.tagline}</span>
            <h1 className={`maq-h1 ${s.h1}`}>{product.name}</h1>
            <p className={s.sub}>{product.longDesc}</p>
            <div className={s.btns}>
              <PrimaryButton
                size="large"
                onClick={() =>
                  handleContactClick(product.name + " - request a walkthrough")
                }
              >
                Contact Us
              </PrimaryButton>
            </div>
          </div>
          <div className={s.visual}>
            <img
              src={product.image}
              alt={`${product.name} — illustrative interface preview`}
              className={s.visualImg}
            />
            <div className={s.visualMeta}>
              <div className={s.visualLogo} aria-hidden="true">{product.heroIcon}</div>
              <div>
                <div className={s.visualName}>{product.name}</div>
                <div className={s.visualSub}>{product.tagline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.impact} aria-label="Outcomes">
        <div className={s.impactInner}>
          <div className={s.impactGrid}>
            {product.impact.map((i) => (
              <div key={i.label} className={s.impactCard}>
                <div className={s.impactValue}>{i.value}</div>
                <div className={s.impactLabel}>{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          {/* <span className={s.eyebrow}>What it does</span> */}
          <h2 className={`maq-h2 ${s.h2}`}>Key capabilities</h2>
          <div className={s.featGrid}>
            {product.features.map((f) => (
              <div key={f.title} className={s.feat}>
                <div className={s.featHead}>
                  <CheckmarkCircle20Filled className={s.featIcon} />
                  <div className={s.featTitle}>{f.title}</div>
                </div>
                <div className={s.featDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          {/* <span className={s.eyebrow}>Where teams use it</span> */}
          <h2 className={`maq-h2 ${s.h2}`}>Common use cases</h2>
          <div className={s.useGrid}>
            {product.useCases.map((u) => (
              <div key={u.industry + u.scenario} className={s.useCard}>
                <span className={s.useTag}>{u.industry}</span>
                <div className={s.useText}>{u.scenario}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          {/* <span className={s.eyebrow}>Built on</span> */}
          <h2 className={`maq-h2 ${s.h2}`}>Microsoft-aligned platforms</h2>
          <div className={s.platformsRow}>
            {product.platforms.map((p) => (
              <span key={p} className={s.platformChip}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={s.related}>
        <div className={s.inner}>
          {/* <span className={s.eyebrow}>More from MAQ Software</span> */}
          <h2 className={`maq-h2 ${s.h2}`}>Related products</h2>
          <div className={s.relatedGrid}>
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/products/${r.slug}`}
                className={s.relatedCard}
              >
                <div className={s.relatedTagline}>{r.tagline}</div>
                <div className={s.relatedName}>{r.name}</div>
                <div className={s.relatedDesc}>{r.shortDesc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
