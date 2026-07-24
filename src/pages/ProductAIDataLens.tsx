// import { TrustBanner } from "../components/TrustBanner";
import { Mail24Regular, Chat24Regular, Person24Regular, Search24Regular, ChartMultiple24Regular, Lightbulb24Regular, DatabaseSearch24Regular } from "@fluentui/react-icons";
import { useContactAction } from "../lib/contact";

import { PrimaryButton } from "../components/buttons";
import { useProductPageStyles } from "./productPageStyles";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const AI_DATALENS_VIDEO_EMBED_URL = "https://www.youtube.com/embed/3NCRlbKKuC8?si=-HXXCu3lYAnlCNbG&enablejsapi=1";

const benefits = [
  { title: "Informed decisions", desc: "Make data-backed decisions instead of guessing, cutting risk as you grow." },
  { title: "Streamlined operations", desc: "Automate processes and cut manual work with insights that keep operations moving." },
  { title: "Plug-and-play extensibility", desc: "Connect to the tools and systems you already run, so data workflows keep flowing as you add more." },
];

const features = [
  { icon: <Chat24Regular />, title: "Chat with structured data", desc: "Query enterprise datasets in natural language, no SQL or DAX. Just ask and get instant answers." },
  { icon: <Person24Regular />, title: "User guidance", desc: "Suggests questions and next steps so new users can explore data from day one." },
  { icon: <Search24Regular />, title: "Semantic relevance", desc: "Reads the intent behind a question using metadata and context to return accurate, relevant answers." },
  { icon: <ChartMultiple24Regular />, title: "Automated visual generation", desc: "Generates the right charts and visuals from a query, so results are quick to read with no manual work." },
  { icon: <Lightbulb24Regular />, title: "Insight generation", desc: "Writes narratives, titles, summaries, and recommendations in plain business language, not just raw data." },
  { icon: <DatabaseSearch24Regular />, title: "Metadata agent & column pruning", desc: "Turns raw data into an indexed schema for faster, more accurate queries with minimal setup." },
];

const resources = [
  { pill: "Marketplace offers", title: "MAQ Software offers on Azure Marketplace", desc: "Browse all Azure Marketplace marketplace offers from MAQ Software.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software" },
  { pill: "Case studies", title: "AI-DataLens and analytics outcomes", desc: "Real customer stories on natural-language data interaction and AI-driven analytics.", href: "/insights/case-studies" },
  { pill: "Best practices", title: "Data & AI best-practice guides", desc: "Patterns for natural-language data interaction, semantic modeling, and AI governance.", href: "/insights/best-practice-guides" },
];

export function ProductAIDataLens() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            {/* <span className={s.eyebrow}>Intelligent data interaction</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>AI-DataLens</h1>
            <p className={s.heroSub}>
             Ask questions of enterprise datasets in plain language and get instant answers, no technical skills required. AI-DataLens keeps row-level security, governance, and audit compliance intact on every query.
            </p>
            <div className={s.btns}>
              <PrimaryButton size="large" onClick={() => handleContactClick("AI-DataLens - MAQ Software")}>
                Contact us
              </PrimaryButton>
            </div>
          </div>
          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                title="AI-DataLens demo video"
                src={AI_DATALENS_VIDEO_EMBED_URL}
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
            {/* <span className={s.secEyebrow}>Why AI-DataLens</span> */}
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

      <section className={s.sectionAlt} id="ai-datalens-features">
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Capabilities</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Key features</h2>
          </div>
          <div className={s.featGrid}>
            {features.map((f) => (
              <div key={f.title} className={s.feat}>
                <div className={s.featHead}>
                  <span className={s.featIconBox}>{f.icon}</span>
                  <div className={s.featTitle}>{f.title}</div>
                </div>
                <p className={s.featDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}><ProductCaseStudies heading="AI-DataLens in production" studies={[
        { tag: "Self-service BI", title: "Empowering self-service using Custom Copilot agent with Power BI Embedded", teaser: "A custom Copilot agent over Power BI Embedded letting business users ask data questions in plain English — reducing report request backlog.", href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html" },
        { tag: "Fabric data agent", title: "Delivering accurate business intelligence insights with a Fabric data agent", teaser: "A Microsoft Fabric data agent answering business questions with citation-backed accuracy, replacing brittle hand-built dashboards.", href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html" },
        { tag: "Information retrieval", title: "Streamlining information retrieval with AI Copilots", teaser: "Enterprise AI Copilots that ground answers in organizational content — dramatically improving knowledge worker productivity.", href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html" },
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
