import { makeStyles } from "@fluentui/react-components";
import { products } from "../data/products";
import { useContactAction } from "../lib/contact";
import { PrimaryButton } from "../components/buttons";
import { ProductCard } from "../components/cards/ProductCard";
import { StatCard } from "../components/cards/StatCard";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "64px 32px 48px",
  },
  heroInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
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
    maxWidth: "820px",
  },
  sub: {
    fontSize: "15px",
    color: "var(--maq-gray-700)",
    margin: 0,
    maxWidth: "720px",
    lineHeight: 1.6,
  },
  list: { padding: "64px 32px", backgroundColor: "#fff" },
  listInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "20px",
  },
  cta: { padding: "56px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  ctaInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "40px 32px",
    textAlign: "center",
  },
  ctaTitle: {
    margin: "0 0 8px",
  },
  ctaSub: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
  },

  stats: {
    padding: "32px",
    backgroundColor: "#fff",
    borderTop: "1px solid var(--maq-border)",
    borderBottom: "1px solid var(--maq-border)",
  },
  statsInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
});

const aggregateStats = [
  { value: "120+", label: "Enterprise migrations delivered" },
  { value: "500+", label: "Reports certified per month" },
  { value: "40+", label: "SaaS products embedded" },
  { value: "30+", label: "Enterprise AI-DataLens tenants" },
];

export function ProductsHome() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          {/* <span className={s.eyebrow}>Our products</span> */}
          <h1 className={`maq-h1 ${s.h1}`}>
            Accelerators that compress months of build into weeks of value
          </h1>
          <p className={s.sub}>
            AppSource-listed products built from 26 years of MAQ Software
            customer engagements. Every product is Microsoft-aligned, deployed
            in your tenant, and backed by our delivery teams.
          </p>
        </div>
      </section>

      <section className={s.stats} aria-label="MAQ Software product impact">
        <div className={s.statsInner}>
          {aggregateStats.map((st) => (
            <StatCard key={st.label} metric={st.value} label={st.label} centerAlign />
          ))}
        </div>
      </section>

      <section className={s.list}>
        <div className={s.listInner}>
          <div className={s.grid}>
            {products.map((p) => (
              <ProductCard
                key={p.slug}
                name={p.name}
                logoInitials={p.initials}
                tagline={p.tagline}
                description={p.shortDesc}
                imageUrl={p.image}
                imageAlt={`${p.name} preview`}
                to={`/products/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className={s.ctaInner}>
          <h2 className={`maq-h2 ${s.ctaTitle}`}>Want a guided walkthrough?</h2>
          {/* <p className={s.ctaSub}>
            Pick any product. We will show it running on your data.
          </p> */}
          <PrimaryButton
            size="large"
            onClick={() =>
              handleContactClick("Product walkthrough")
            }
          >
            Request a walkthrough
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
