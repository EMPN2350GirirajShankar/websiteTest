// import { TrustBanner } from \"../components/TrustBanner\";
import { Mail24Regular } from "@fluentui/react-icons";

import { Button, PrimaryButton } from "../components/buttons";
import { useProductPageStyles } from "./productPageStyles";
import { useContactAction } from "../lib/contact";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const CERTYFAST_VIDEO_EMBED_URL = "https://www.youtube.com/embed/KIiI16IKHIY?si=ohsb-fK3J1cylEi4&enablejsapi=1";

const benefits = [
  { title: "Automate the review process", desc: "Cut review time by catching errors, formatting DAX measures, and generating knowledge base documents in one pass." },
  { title: "Error-free reporting", desc: "Align reports to your organizational standards and catch discrepancies that hurt report size, performance, or user experience." },
  { title: "Accurate and uniform reports", desc: "Get detailed documentation of semantic models and visuals so developers produce consistent, uniform reports." },
];

const steps = [
  { n: 1, title: "Analyze your report", desc: "Detect errors, discrepancies, and performance issues that hurt report quality." },
  { n: 2, title: "Review insights", desc: "Explore field lineage and generate detailed documentation of your Power BI models." },
  { n: 3, title: "Optimize and deploy", desc: "Fix alignment issues and meet best practices, then deploy with confidence." },
];

const resources = [
  { pill: "GitHub", title: "CertyFAST on GitHub", desc: "Download the tool from the official MAQ Software repository.", href: "https://github.com/maqsoftware/CertyFAST" },
  { pill: "Docs", title: "Installation & user guide", desc: "Step-by-step integration, best practices, and troubleshooting.", href: "/products/certyfast/installation-and-usage-guide" },
  { pill: "Best practices", title: "Power BI development standards", desc: "Authoritative guides from the MAQ Software community.", href: "/insights/best-practice-guides" },
  { pill: "Case studies", title: "Quality-control case studies", desc: "Real-world Power BI quality wins.", href: "/insights/case-studies" },
];

export function ProductCertyFAST() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            {/* <span className={s.eyebrow}>Power BI quality control</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>CertyFAST</h1>
            <p className={s.heroSub}>
              Build and maintain high-quality Power BI semantic models with less manual work. CertyFAST automates error detection, DAX standardization, and documentation, keeping models consistent and aligned to your modeling standards.
            </p>
            <div className={s.btns}>
              <PrimaryButton size="large" className="maq-equal-cta" onClick={() => handleContactClick("Contact Us - CertyFAST")}>Contact us</PrimaryButton>
              <Button variant="tertiary" size="large" className="maq-equal-cta" href="https://github.com/maqsoftware/CertyFAST" target="_blank" rel="noopener noreferrer">Marketplace</Button>
            </div>
          </div>
          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                title="CertyFAST demo video"
                src={CERTYFAST_VIDEO_EMBED_URL}
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>



      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Why CertyFAST</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Benefits</h2>
          </div>
          <div className={s.benGrid3}>
            {benefits.map((b) => (
              <div key={b.title} className={s.benCard}>
                <div className={s.benTitle}>{b.title}</div>
                <p className={s.benDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>How it works</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Three steps to certified Power BI reports</h2>
          </div>
          <div className={s.stepGrid}>
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

      <section className={s.section}><ProductCaseStudies heading="CertyFAST in production" studies={[
        { tag: "Cybersecurity", title: "Strengthening cybersecurity with Managed Identity and RBAC", teaser: "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access — the security backbone CertyFAST automates.", href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html" },
        { tag: "Secure Copilot", title: "Building a secure Copilot: Addressing key security challenges", teaser: "Reference design for shipping enterprise Copilots safely — patterns and guardrails CertyFAST helps you continuously enforce.", href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html" },
        { tag: "Data governance", title: "Unifying data management with a centralized framework", teaser: "Centralized governance and access controls across distributed systems — a model CertyFAST helps certify on an ongoing basis.", href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html" },
      ]} /></section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Insights</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Resources & Marketplace</h2>
          </div>
          <div className={s.mktGrid}>
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
