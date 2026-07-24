import { Mail24Regular, PlugConnected24Regular, Color24Regular, Money24Regular, ShieldKeyhole24Regular, CloudArrowUp24Regular, ArrowSync24Regular } from "@fluentui/react-icons";

import { Button, PrimaryButton } from "../components/buttons";
import { useProductPageStyles } from "./productPageStyles";
import { useContactAction } from "../lib/contact";
// import { TrustBanner } from "../components/TrustBanner";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const APPSOURCE = "https://marketplace.microsoft.com/en-us/product/maqsoftware.embedfastpowerbi";
const EMBEDFAST_VIDEO_EMBED_URL = "https://www.youtube.com/embed/iwhMYf58SqE?si=aN-dOljFYtGTJBke&enablejsapi=1";

const benefits = [
  { icon: <PlugConnected24Regular />, title: "Simple integration", desc: "Add Power BI to any application through an API, without complex setup or extra development." },
  { icon: <Money24Regular />, title: "Cut licensing costs", desc: "Skip per-user Power BI licenses and pay only capacity licenses (F SKUs), keeping cost flat at any scale." },
  { icon: <CloudArrowUp24Regular />, title: "Secure at any scale", desc: "Onboard unlimited tenants and workspaces with privacy and security built in." },
  { icon: <Color24Regular />, title: "Fully customizable", desc: "Adapt EmbedFAST to your workflows and configure features to match your requirements." },
  { icon: <ShieldKeyhole24Regular />, title: "Simplified access control", desc: "Manage permissions and secure data access with built-in role-based controls, no extra configuration." },
  { icon: <ArrowSync24Regular />, title: "Always up to date", desc: "Stay on the latest version automatically, with no manual upgrades or maintenance." },
];

const plans = [
  { name: "Subscription — API Only", price: "$2,500", term: "per month + $10,000 setup", items: ["Single instance with API", "Complete installation setup", "No limit on the number of users", "Free upgrades"], href: APPSOURCE, cta: "Explore Marketplace" },
  { name: "Subscription — API + UI", price: "$3,500", term: "per month + $10,000 setup", items: ["Single instance with API and UI", "Complete installation setup", "No limit on the number of users", "Free upgrades"], href: APPSOURCE, cta: "Explore Marketplace" },
  { name: "Code Share — API + UI", price: "$250,000", term: "fixed one-time", items: ["Shared solution IP with API and UI", "4-week consulting service to integrate", "Code walkthrough and handover", "Personalized technical documentation", "Additional features on demand"], href: "mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST%20Code%20Share", cta: "Talk to us" },
];

const supportRows = [
  { feature: "Guaranteed response time", silver: "Within 48 hours", gold: "Within 24 hours", platinum: "Varies based on defined SLA" },
  { feature: "Knowledge base + online docs", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Software updates & bug fixes", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Remote troubleshooting", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Dedicated support representative", silver: "—", gold: "—", platinum: "✓" },
  { feature: "Priority for new feature requests", silver: "—", gold: "—", platinum: "✓" },
  { feature: "Customized team training", silver: "—", gold: "—", platinum: "✓" },
];

const resources = [
  { pill: "Marketplace", title: "EmbedFAST on Microsoft Marketplace", desc: "Explore EmbedFAST listing, plans, and licensing options.", href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.embedfastpowerbi" },
  { pill: "Docs", title: "EmbedFAST: Technical Documentation", desc: "Implementation and usage reference for EmbedFAST.", href: "https://maqsoftware.gitbook.io/embedfast-technical-documentation" },
];

export function ProductEmbedFAST() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            {/* <span className={s.eyebrow}>Automated Power BI embedding accelerator</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>EmbedFAST</h1>
            <p className={s.heroSub}>
              Embed Power BI in your applications without the usual integration work, per-user licensing, and heavy development. EmbedFAST adds role-based access, unlimited tenant and workspace onboarding, and configurable features, so your team ships analytics with minimal development effort.
            </p>
            <div className={s.btns}>
              <PrimaryButton size="large" className="maq-equal-cta" onClick={() => handleContactClick("Contact Us - EmbedFAST")}>Contact us</PrimaryButton>
              <Button variant="tertiary" size="large" className="maq-equal-cta" href={APPSOURCE} target="_blank" rel="noopener noreferrer">Marketplace</Button>
            </div>
          </div>
          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                title="EmbedFAST demo video"
                src={EMBEDFAST_VIDEO_EMBED_URL}
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
            {/* <span className={s.secEyebrow}>Why EmbedFAST</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Benefits</h2>
          </div>
          <div className={s.featGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={s.feat}>
                <div className={s.featHead}>
                  <span className={s.featIconBox}>{b.icon}</span>
                  <div className={s.featTitle}>{b.title}</div>
                </div>
                <p className={s.featDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}><ProductCaseStudies heading="Embedding in production" studies={[
        { tag: "Power BI Embedded", title: "Delivering embedded Power BI reporting with EmbedFAST", teaser: "An ISV embeds Power BI into its SaaS product using the EmbedFAST accelerator — shipping multi-tenant analytics months faster.", href: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html" },
        { tag: "Self-service BI", title: "Empowering self-service using Custom Copilot agent with Power BI Embedded", teaser: "A custom Copilot agent over Power BI Embedded letting users ask data questions in plain English — reducing report request backlog.", href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html" },
        { tag: "Integration", title: "Simplifying Power BI integration for enterprise applications", teaser: "Learn how EmbedFAST streamlines integration with secure embedding, governance controls, and faster implementation timelines.", href: "https://blog.maqsoftware.com/2024/10/simplifying-power-bi-integration-for.html" },
      ]} /></section>

      <section className={s.section} id="embedfast-pricing">
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Pricing</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Choose the plan that fits your team</h2>
          </div>
          <div className={s.priceGrid}>
            {plans.map((p) => (
              <a key={p.name} className={s.priceCard} href={p.href} target="_blank" rel="noopener noreferrer">
                <div className={s.priceName}>{p.name}</div>
                <div className={s.priceAmount}>{p.price}</div>
                <div className={s.priceTerm}>{p.term}</div>
                <ul className={s.priceList}>
                  {p.items.map((i) => <li key={i} className={s.priceItem}>{i}</li>)}
                </ul>
                <div className={s.priceCta}>{p.cta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Support plans</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Choose your support tier</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className={s.supportTable}>
              <thead>
                <tr>
                  <th className={s.supportTh}>Feature</th>
                  <th className={s.supportTh}>Silver ($500/mo)</th>
                  <th className={s.supportTh}>Gold ($1,500/mo)</th>
                  <th className={s.supportTh}>Platinum (varies by SLA)</th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map((r) => (
                  <tr key={r.feature}>
                    <td className={s.supportTd}><strong>{r.feature}</strong></td>
                    <td className={s.supportTd}>{r.silver}</td>
                    <td className={s.supportTd}>{r.gold}</td>
                    <td className={s.supportTd}>{r.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={s.section}>
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
