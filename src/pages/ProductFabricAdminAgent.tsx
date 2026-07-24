import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { useContactAction } from "../lib/contact";
import { Button, PrimaryButton, SecondaryButton } from "../components/buttons";
// import { TrustBanner } from "../components/TrustBanner";
import {
  Mail24Regular,
  ArrowRight20Regular,
  ArrowRight16Regular,
  Pulse24Regular,
  Warning24Regular,
  Wrench24Regular,
  Eye24Regular,
} from "@fluentui/react-icons";


// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  // Hero --------------------------------------------------------------------
  hero: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px 32px 56px" },
  heroGrid: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
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
    display: "block",
    margin: "0 0 16px",
  },
  heroSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "640px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },

  heroImageWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  },
  heroImage: {
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    display: "block",
  },

  // Section commons --------------------------------------------------------
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  sectionAlt: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "28px" },
  headLeft: { marginBottom: "20px", textAlign: "center" },
  secEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
  },
  titleLg: {
    display: "block",
    margin: "0 0 10px",
    textAlign: "left",
  },
  sub: { display: "block", fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", maxWidth: "720px", textAlign: "center" },

  // Impact ----------------------------------------------------------------
  impactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  impactCard: {
    border: "0.5px solid var(--maq-border)",
    borderRadius: "10px",
    padding: "20px",
    background: "#fff",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  impactMetric: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  impactLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "8px",
  },
  // Features --------------------------------------------------------------
  featGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  feat: {
    background: "#fff",
    border: "0.5px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "22px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  featHead: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  featIconBox: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featTitle: { fontSize: "15px", fontWeight: 700, color: "var(--maq-black)" },
  featDesc: { fontSize: "13.5px", color: "var(--maq-gray-700)", lineHeight: 1.6, margin: 0 },

  // Case studies ----------------------------------------------------------
  caseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  caseCard: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  caseTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "10px",
  },
  caseTeaser: {
    fontSize: "13px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
    flex: 1,
    marginBottom: "14px",
  },
  caseLink: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    },
  seeAll: {
    marginTop: "20px",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: 600,
  },
  seeAllLink: {
    color: "var(--maq-red)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },

  // Testimonials ----------------------------------------------------------
  quoteGrid: {
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
  quoteMark: {
    position: "absolute",
    top: "4px",
    left: "16px",
    fontSize: "56px",
    color: "var(--maq-red)",
    opacity: 0.18,
    lineHeight: 1,
    fontFamily: "inherit",
  },
  quoteBody: {
    fontSize: "15px",
    color: "var(--maq-black)",
    lineHeight: 1.55,
    marginBottom: "14px",
    paddingTop: "16px",
  },
  quoteCite: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  // Marketplace -----------------------------------------------------------
  mktGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  mktCard: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  mktImg: {
    height: "100px",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--colorNeutralBackground3) 60%, var(--maq-surface-cream) 100%)",
    borderBottom: "1px solid var(--maq-border)",
  },
  mktBody: { padding: "16px 18px 20px", display: "flex", flexDirection: "column", flex: 1, gap: "8px" },
  mktTitleRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "8px",
  },
  mktTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    flex: 1,
  },
  mktArrow: { color: "var(--maq-red)", flexShrink: 0, marginTop: "2px" },
  mktDesc: { fontSize: "12.5px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  mktRead: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginTop: "4px",
  },
  // Featured marketplace banner -------------------------------------------
  banner: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "24px",
    alignItems: "center",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderLeft: "4px solid var(--maq-red)",
    borderRadius: "12px",
    padding: "22px 24px",
    marginBottom: "20px",
    "@media (max-width: 720px)": { gridTemplateColumns: "1fr" },
  },
  bannerTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  bannerDesc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.55,
    margin: 0,
    maxWidth: "640px",
  },
  bannerBtns: { display: "flex", gap: "10px", flexWrap: "wrap" },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const APPSOURCE = "https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08";
const FABRIC_ADMIN_AGENT_VIDEO_EMBED_URL = "https://www.youtube.com/embed/fVWr37LNvqM?si=_jqyhBZJzrNUCmBG&enablejsapi=1";

const impact = [
  { metric: "60%", label: "Fewer capacity incidents after switching on autonomous monitoring" },
  { metric: "24/7", label: "Autonomous coverage across capacities, workspaces, and items" },
  { metric: "5 min", label: "Mean time to detect drift in permissions and SLAs" },
  { metric: "30+", label: "Fabric tenants monitored in production" },
];


const benefits = [
  {
    icon: <Pulse24Regular />,
    title: "Always-on monitoring",
    desc: "Monitors utilization, refresh patterns, and workspace activity across every tenant capacity, continuously.",
  },
  {
    icon: <Warning24Regular />,
    title: "Anomaly and spike detection",
    desc: "Detects CU spikes, refresh storms, and unusual workloads, with workspace-level impact analysis.",
  },
  {
    icon: <Wrench24Regular />,
    title: "Insight cards with a next action",
    desc: "Every detection comes with a specific recommended action, not just an alert: throttle, shift, reassign, archive, or scale in one click.",
  },
  {
    icon: <Eye24Regular />,
    title: "SKU right-sizing",
    desc: "Flags over- and under-provisioned capacities and recommends the right SKU.",
  },
  {
    icon: <Pulse24Regular />,
    title: "Idle capacity detection",
    desc: "Surfaces idle capacities and recommends scheduling changes to recover spend.",
  },
  {
    icon: <Warning24Regular />,
    title: "Full audit trail",
    desc: "Logs and governs every recommendation and action, fully traceable with no shadow changes.",
  },
];

const cases = [
  {
    tag: "Microsoft Fabric \u00b7 OneLake",
    title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser: "Siloed enterprise data unified on OneLake for a single governed surface \u2014 monitored end-to-end by an admin agent layer.",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
  {
    tag: "Fabric migration \u00b7 OSOT",
    title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
    teaser: "Consolidating fragmented data estates onto Microsoft Fabric with proactive capacity and workspace governance.",
    href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
  },
  {
    tag: "Fabric ISV \u00b7 CI/CD",
    title: "Microsoft Fabric ISV Solutions: Implementing CI/CD",
    teaser: "Repeatable CI/CD patterns for Fabric ISV solutions \u2014 with admin-grade controls baked into the deployment lifecycle.",
    href: "https://blog.maqsoftware.com/2024/11/microsoft-fabric-isv-cicd.html",
  },
];

const quotes = [
  {
    body: "Fabric Admin Agent caught a throttling pattern on our F64 capacity before our morning standup. We resized in one click and avoided a board-level escalation.",
    cite: "Director, Data Platform — Fortune 500 retailer",
  },
  {
    body: "We replaced three manual Fabric health checklists with the agent. Our platform team now spends weeks on roadmap work instead of firefighting.",
    cite: "Head of Analytics Engineering — Global manufacturer",
  },
];

const resources = [
  {
    pill: "AppSource",
    title: "Fabric Admin Agent on Microsoft AppSource",
    desc: "Install the agent directly from Microsoft AppSource and start protecting your Fabric capacities today.",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08",
  },
  {
    pill: "Marketplace offers",
    title: "MAQ Software offers on Azure Marketplace",
    desc: "Browse all Azure Marketplace marketplace offers from MAQ Software — Fabric, Power BI, AI, and modernization engagements.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
  },
  {
    pill: "Case studies",
    title: "Fabric & analytics case studies",
    desc: "Real customer stories on Microsoft Fabric, Power BI modernization, governance, and FinOps.",
    href: "/insights/case-studies",
  },
  {
    pill: "Best practices",
    title: "Fabric & Power BI best-practice guides",
    desc: "Authoritative guides on Fabric capacity sizing, Power BI optimization, and governance — from the MAQ Software community.",
    href: "/insights/best-practice-guides",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function ProductFabricAdminAgent() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      {/* ---------------------- Hero ---------------------- */}
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            {/* <span className={s.eyebrow}>Fabric Workload</span> */}
            <h1 className={`maq-h1 ${s.h1}`}>
              Fabric Admin Agent
            </h1>
            <p className={s.heroSub}>
            Manage Microsoft Fabric capacity before problems reach users, without adding to your platform team. Fabric Admin Agent detects anomalies, predicts demand, and recommends actions that prevent throttling, hold performance, and lower cost. Platform teams run it self-service to get more from Fabric with less operational overhead.
            </p>
            <div className={s.btns}>
              <PrimaryButton
                size="large"
                onClick={() =>
                  handleContactClick("Fabric Admin Agent - Walkthrough")
                }
              >
                Contact us
              </PrimaryButton>
              <Button variant="tertiary" href={APPSOURCE} target="_blank" rel="noopener noreferrer" size="large" className="maq-equal-cta">Marketplace</Button>
            </div>
          </div>

          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                title="Fabric Admin Agent demo video"
                src={FABRIC_ADMIN_AGENT_VIDEO_EMBED_URL}
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Trust banner ---------------------- */}


      {/* ---------------------- Benefits ---------------------- */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Why Fabric Admin Agent</span> */}
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


      {/* ---------------------- Impact ---------------------- */}
      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Proven outcomes</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Impact for Microsoft Fabric platform owners</h2>
            {/* <p className={s.sub}>
              Numbers from MAQ Software Fabric Admin Agent deployments across
              enterprise tenants.
            </p> */}
          </div>
          <div className={s.impactGrid}>
              {impact.map((i) => (
                <div key={i.label} className={s.impactCard}>
                  <div className={s.impactMetric}>{i.metric}</div>
                  <div className={s.impactLabel}>{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* ---------------------- Case studies ---------------------- */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Fabric case studies</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>How platform teams ship Fabric faster with MAQ Software</h2>
          </div>
          <div className={s.caseGrid}>
            {cases.map((c) => (
              <a
                key={c.title}
                className={s.caseCard}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={s.caseTitle}>{c.title}</div>
                <div className={s.caseTeaser}>{c.teaser}</div>
                <span className={s.caseLink}>
                  Read full story
                </span>
              </a>
            ))}
          </div>
          <div className={s.seeAll}>
            <Link
              className={s.seeAllLink}
              to="/insights/case-studies"
            >
              See all Fabric case studies <ArrowRight16Regular />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------- Insights ---------------------- */}
      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            {/* <span className={s.secEyebrow}>Insights</span> */}
            <h2 className={`maq-h2 ${s.titleLg}`}>Resources & Marketplace</h2>
            {/* <p className={s.sub}>
              Get the agent from Microsoft AppSource, browse Azure Marketplace
              marketplace offers, and explore deeper guidance from MAQ Software.
            </p> */}
          </div>

          {/* Featured banner */}
          {/* <div className={s.banner}>
            <div>
              <h3 className={s.bannerTitle}>
                Get Fabric Admin Agent on Microsoft Marketplace
              </h3>
              <p className={s.bannerDesc}>
                Deploy the Fabric Admin Agent directly from Microsoft AppSource.
                Preview is available now — start optimizing your Fabric
                capacities in minutes.
              </p>
            </div>
            <div className={s.bannerBtns}>
              <PrimaryButton
                size="large"
                iconAfter={<ArrowRight20Regular />}
                href="https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricadminagent-preview?tab=Overview&flightCodes=f7b20ceffeeb4e1fab33185d0cd74d08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marketplace
              </PrimaryButton>
              <SecondaryButton
                href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                Browse all marketplace offers
              </SecondaryButton>
            </div>
          </div> */}

          {/* Resource grid */}
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

      {/* Testimonials section commented out
      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Testimonials</span>
            <h2 className={`maq-h2 ${s.titleLg}`}>What our clients have to say</h2>
          </div>
          <div className={s.quoteGrid}>
            {quotes.map((q, i) => (
              <blockquote key={i} className={s.quote}>
                <span className={s.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                <p className={s.quoteBody}>{q.body}</p>
                <cite className={s.quoteCite}>{q.cite}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      */}

    </>
  );
}
