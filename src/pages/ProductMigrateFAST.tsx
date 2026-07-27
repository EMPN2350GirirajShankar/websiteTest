import { makeStyles } from "@fluentui/react-components";
import { CheckmarkCircle20Regular } from "@fluentui/react-icons";

import { PrimaryButton } from "../components/buttons";
import { useProductPageStyles } from "./productPageStyles";
import { useContactAction } from "../lib/contact";
// import { TrustBanner } from "../components/TrustBanner";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const benefits = [
  {
    metric: "~80%",
    title: "Migration accuracy",
    desc: "Automates report conversion, DAX generation, and inventory, cutting months of work to weeks with fewer manual fixes.",
  },
  {
    metric: "~40%",
    title: "Cost savings",
    desc: "Reduces manual effort and resource overhead across the full migration lifecycle.",
  },
  {
    metric: "500,000+",
    title: "Reports migrated",
    desc: "Automation handles large, complex BI estates accurately, at any volume and across any enterprise.",
  },
];

const steps = [
  { n: 1, title: "Inventory analysis", desc: "Extract metadata, analyze reports, and check data compatibility to build a structured migration plan." },
  { n: 2, title: "Estimation and planning", desc: "Estimate cost, finalize architecture, flag risks, and define roles." },
  { n: 3, title: "Semantic model and report creation", desc: "Build a Power BI semantic model, tune data pipelines, convert calculations to DAX, and recreate report behavior to match the original." },
  { n: 4, title: "Review", desc: "Tune performance, standardize output, verify data accuracy, and certify reports." },
  { n: 5, title: "Governance", desc: "Track data lineage, hold to standards, monitor performance, and set alerts." },
  { n: 6, title: "Center of Excellence (CoE)", desc: "Support users after go-live with training, troubleshooting, and KPI tracking." },
];

const MIGRATEFAST_VIDEO_EMBED_URL = "https://www.youtube.com/embed/NKd92QYRrG4?si=JoLs_S7wMKCaRZFz&enablejsapi=1";

const resources = [
  { pill: "Marketplace offers", title: "MAQ Software offers on Azure Marketplace", desc: "Browse migration and Fabric marketplace offers.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software" },
];

const platforms = [
  "Tableau",
  "Cognos",
  "SAP BusinessObjects",
  "Crystal Reports",
  "MicroStrategy",
  "Qlik",
  "Alteryx",
  "Informatica",
];

// Hero modeled on the Services · Data & AI platforms (ServiceHeroData) and
// Industries · Retail (IndustryHeroV2) heroes: gray band, red eyebrow, canonical
// .maq-h1 title, .maq-lead subhead. Kept local so the shared product-page hero
// styles (used by the other product pages) are untouched. MigrateFAST adds its
// video as the right-side visual plus a Contact CTA, and keeps the video visible
// (left-aligned) once the hero stacks.
const useHeroStyles = makeStyles({
  wrap: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "56px var(--section-pad-x)",
    "@media (max-width: 960px)": { padding: "44px var(--section-pad-x)" },
  },
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
    fontSize: "var(--fs-eyebrow)",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    marginBottom: "12px",
    display: "block",
  },
  h1: { margin: "0 0 16px" },
  sub: { color: "var(--maq-gray-600)", marginBottom: "24px", maxWidth: "640px" },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },
  media: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    "@media (max-width: 960px)": { justifyContent: "flex-start", padding: "8px 8px 8px 0" },
  },
  videoFrame: {
    width: "100%",
    maxWidth: "560px",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    borderRadius: "12px",
    background: "#000",
    border: "1px solid var(--maq-border)",
  },
  videoEl: { width: "100%", height: "100%", border: 0, display: "block" },

  // Supported-platforms section: names-only tiles (no logos).
  platformSub: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    maxWidth: "640px",
    margin: "0 0 24px",
  },
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px 24px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 480px)": { gridTemplateColumns: "1fr" },
  },
  // Borderless list items — the card style (border + hover) is reserved for
  // clickable components, and these names don't link anywhere.
  platformItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: 600,
    color: "var(--maq-black)",
  },
  platformCheck: {
    color: "var(--maq-red)",
    display: "flex",
    flexShrink: 0,
    "& svg": { width: "20px", height: "20px" },
  },

  // Benefits: number-forward stat blocks (borderless — not clickable cards).
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px 32px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr", gap: "32px" },
  },
  benItem: { display: "flex", flexDirection: "column" },
  benMetric: {
    fontSize: "40px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    marginBottom: "10px",
  },
  benLabel: {
    fontSize: "17px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "8px",
  },
  benDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    margin: 0,
  },

  // Migration process: stacked editorial rows (number | step | description),
  // mirroring the Services "Your business outcomes" layout with numbers instead
  // of icons. Full-width hairlines: list owns the top rule, each row its bottom.
  procList: { borderTop: "1px solid var(--maq-border)" },
  procRow: {
    display: "grid",
    gridTemplateColumns: "56px minmax(0, 320px) minmax(0, 1fr)",
    alignItems: "center",
    columnGap: "32px",
    rowGap: "8px",
    padding: "28px 0",
    borderBottom: "1px solid var(--maq-border)",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "56px minmax(0, 1fr)",
      columnGap: "24px",
      rowGap: "10px",
      padding: "24px 0",
    },
  },
  procNum: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1,
    letterSpacing: "-0.01em",
    "@media (max-width: 900px)": { gridRow: "1 / span 2", alignSelf: "center" },
  },
  procTitle: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: 1.25,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
    "@media (max-width: 900px)": { gridColumn: "2", gridRow: "1" },
  },
  procDesc: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
    "@media (max-width: 900px)": { gridColumn: "2", gridRow: "2" },
  },
});

export function ProductMigrateFAST() {
  const s = useProductPageStyles();
  const h = useHeroStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={h.wrap}>
        <div className={h.grid}>
          <div>
            <span className={h.eyebrow}>Products</span>
            <h1 className={`maq-h1 ${h.h1}`}>MigrateFAST</h1>
            <p className={`maq-lead ${h.sub}`}>
              Migrate your legacy BI and analytics platforms to Microsoft Fabric with automated assessment, conversion, and validation. MigrateFAST runs the process end to end, so you cut migration cost and reach value faster.
            </p>
            <div className={h.btns}>
              <PrimaryButton size="large" onClick={() => handleContactClick("Contact Us - MigrateFAST")}>Contact us</PrimaryButton>
            </div>
          </div>
          <div className={h.media}>
            <div className={h.videoFrame}>
              <iframe
                src={MIGRATEFAST_VIDEO_EMBED_URL}
                title="Discover how MigrateFAST automates a Tableau-to-Power BI migration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={h.videoEl}
              />
            </div>
          </div>
        </div>
      </section>



      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Why MigrateFAST</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Benefits</h2>
          </div>
          <div className={h.statGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={h.benItem}>
                <div className={h.benMetric}>{b.metric}</div>
                <div className={h.benLabel}>{b.title}</div>
                <p className={h.benDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} id="migratefast-process">
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>How it works</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Migration process</h2>
          </div>
          <div className={h.procList}>
            {steps.map((st) => (
              <div className={h.procRow} key={st.n}>
                <span className={h.procNum}>{st.n}</span>
                <h3 className={h.procTitle}>{st.title}</h3>
                <p className={h.procDesc}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <h2 className={`maq-h2 ${s.titleLg}`}>Supported source platforms</h2>
          </div>
          <p className={h.platformSub}>
            MigrateFAST automates migration to Microsoft Fabric from each of these platforms:
          </p>
          <div className={h.platformGrid}>
            {platforms.map((p) => (
              <div key={p} className={h.platformItem}>
                <span className={h.platformCheck} aria-hidden>
                  <CheckmarkCircle20Regular />
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}><ProductCaseStudies heading="Migrations in production" studies={[
        { tag: "Tableau → Power BI", title: "Accelerate your Tableau to Power BI (Fabric) migration with MigrateFAST", teaser: "See how a highly automated 6-step approach reduces manual effort and accelerates Tableau to Power BI migration at enterprise scale.", href: "https://blog.maqsoftware.com/2025/03/accelerate-your-tableau-to-power-bi.html" },
        { tag: "SAP BOBJ → Power BI", title: "Improving sales insights with a migration from SAP BOBJ to Power BI", teaser: "Learn how migrating 120+ reports and 100M+ rows improved performance, mobile access, and decision-making for global sales teams.", href: "https://blog.maqsoftware.com/2025/06/improving-sales-insights-with-migration.html" },
        { tag: "MicroStrategy → Power BI", title: "Enhancing retail sales reporting by migrating from MicroStrategy to Power BI", teaser: "Explore how 150+ legacy reports were consolidated into streamlined Power BI reporting with better usability and lower licensing cost.", href: "https://blog.maqsoftware.com/2025/06/improving-retail-sales-reporting-by.html" },
        { tag: "Qlik → Power BI", title: "Transitioning legacy reports from Qlik to Power BI", teaser: "Discover a phased global migration strategy that preserved legacy functionality while improving report performance and user adoption.", href: "https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html" },
      ]} /></section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Insights</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Resources & marketplace</h2>
          </div>
          <div
            className={s.mktGrid}
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 380px))" }}
          >
            {resources.map((o) => (
              <a
                key={o.title}
                className={s.mktCard}
                href={o.href}
                target={o.href.startsWith("http") ? "_blank" : undefined}
                rel={o.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className={s.mktImg} aria-hidden="true" />
                <div className={s.mktBody}>
                  <div className={s.mktTitle}>{o.title}</div>
                  <p className={s.mktDesc}>{o.desc}</p>
                  <span className={s.mktRead}>
                    Read more
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={s.section}><TestimonialsPlaceholder /></section> */}
    </>
  );
}
