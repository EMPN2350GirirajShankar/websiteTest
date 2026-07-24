import { Mail24Regular } from "@fluentui/react-icons";

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
    metric: "500,000+ reports migrated",
    title: "Proven at scale",
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

export function ProductMigrateFAST() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            {/* <span className={s.eyebrow}>AI-powered Fabric migration accelerator</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>MigrateFAST</h1>
            <p className={s.heroSub}>
              Migrate from Tableau, Cognos, SAP BusinessObjects, Crystal Reports, MicroStrategy, Qlik, Alteryx, and Informatica to Microsoft Fabric with automated environment assessment, dependency analysis, report conversion, DAX generation, and validation. MigrateFAST runs the process end to end, so you cut migration cost and reach value faster.
            </p>
            <div className={s.btns}>
              <PrimaryButton size="large" onClick={() => handleContactClick("Contact Us - MigrateFAST")}>Contact us</PrimaryButton>
            </div>
          </div>
          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                src={MIGRATEFAST_VIDEO_EMBED_URL}
                title="Discover how MigrateFAST automates a Tableau-to-Power BI migration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
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
          <div className={s.benGrid3}>
            {benefits.map((b) => (
              <div key={b.title} className={s.benCard}>
                <div className={s.benTitle}>{b.metric}</div>
                <p className={s.benDesc}><strong>{b.title}</strong> - {b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt} id="migratefast-process">
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>How it works</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>The migration process</h2>
          </div>
          <div className={s.stepGrid6}>
            {steps.map((st) => (
              <div key={st.n} className={s.stepCard}>
                <div className={s.stepNum}>{st.n}</div>
                <div className={s.stepTitle}>{st.title}</div>
                <p className={s.stepDesc}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}><ProductCaseStudies heading="Migrations in production" studies={[
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

      {/* <section className={s.sectionAlt}><TestimonialsPlaceholder /></section> */}
    </>
  );
}
