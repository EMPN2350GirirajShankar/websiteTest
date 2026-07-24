import type { ReactNode } from "react";
import { useState } from "react";
import {
  makeStyles,
  tokens,
  TabList,
  Tab,
  type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";
import {
  TopSpeed24Regular,
  ArrowSwap24Regular,
  Chat24Regular,
  Window24Regular,
  Pulse24Regular,
  CheckmarkCircle24Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/buttonsV2";
import { Section, SectionHeading, CardGrid } from "../components/layout";
import { IconCard, SplitCard, PosterCard } from "../components/cardsV2";
import { INDUSTRIES } from "../data/homeIndustries";
import { caseStudyItems } from "../data/insights";
import { motion, AnimatePresence } from "framer-motion";
import { useContactAction } from "../lib/contact";

/* ==================================================================
   HomeV3 — duplicate of HomeV2 (Bento home) for design exploration
   ------------------------------------------------------------------
   Infosys-style bento language: editorial hero, capabilities mosaic,
   impact-driven product cards, a case-studies media bento, dark CTA.
   Routed at /homev3; uses the app's global Header + FooterV2.
   Squared cards, MAQ red + ink + grays, Roboto, no photography.
   ================================================================== */


/* ---------- Content ----------------------------------------------- */
interface BuildArea { tab: string; title: string; desc: string; to: string; img?: string }
const BUILD: BuildArea[] = [
  {
    tab: "Data & AI",
    title: "Data & AI platforms",
    desc: "Scale your business with a governed data foundation using Microsoft Fabric, Azure Databricks, and Snowflake to power AI-ready workloads.",
    to: "/services/data-and-analytics",
    img: "/images/Service%20cards/Platforms.png"
  },
  {
    tab: "AI Agents",
    title: "AI solutions & agents",
    desc: "Automate decisions and reduce manual work with AI agents and copilots built with Microsoft Foundry, Copilot Studio, and Azure OpenAI, grounded in your data and governed for compliance.",
    to: "/services/agentic-ai",
    img: "/images/Service%20cards/Conversational AI.png"
  },
  {
    tab: "Insights",
    title: "Insights & analytics",
    desc: "Uncover insights on demand and prevent issues before they happen with dashboards, self-service analytics, and predictive insights using Power BI, Microsoft Fabric Real-Time Intelligence, and Databricks SQL.",
    to: "/services/reporting-bi",
    img: "/images/Service%20cards/Visualization.png"
  },
  {
    tab: "Business Apps",
    title: "Business apps & automation",
    desc: "Streamline approvals, reports, and handoffs with Microsoft Power Platform, Dynamics 365, Power Apps, and Power Automate, while embedding copilots into workflows.",
    to: "/services/business-apps",
    img: "/images/Service%20cards/Apps.png"
  },
  {
    tab: "Cloud",
    title: "Cloud modernization",
    desc: "Reduce costs, accelerate delivery, and scale on demand with Microsoft Azure, laying the foundation for AI-powered applications, automation, and experiences.",
    to: "/services/cloud",
    img: "/images/Service%20cards/Cloud.png"
  },
  {
    tab: "Security",
    title: "Security & governance",
    desc: "Get audit-ready from day one with Zero Trust security using Microsoft Defender, Entra, Purview, and Unity Catalog, aligned to ISO 27001, ISO 27701, and ISO 27018.",
    to: "/services/security-compliance",
    img: "/images/Service%20cards/Security.png"
  },
];

interface ProductItem { icon: ReactNode; name: string; impact: string; desc: string; to: string; img?: string }
const PRODUCTS: ProductItem[] = [
  {
    icon: <ArrowSwap24Regular />, name: "MigrateFAST", impact: "Migrate in weeks, not quarters",
    desc: "Move to Microsoft Fabric faster and more accurately from Tableau, Cognos, Qlik, MicroStrategy, SAP BusinessObjects, Crystal Reports, Alteryx, or Informatica, with automated conversion, DAX generation, and validated cutover at every stage.", to: "/products/migratefast",
    img: "/images/Product%20cards/MigrateFAST.png"
  },
  {
    icon: <TopSpeed24Regular />, name: "Fabric Admin Agent", impact: "Lower Fabric capacity cost",
    desc: "Manage Fabric at enterprise scale without expanding your platform team. Continuous monitoring, anomaly detection, and demand forecasting run in the background so your team can act before throttling hits users.", to: "/products/fabric-admin-agent",
    img: "/images/Product%20cards/Fabric-Admin-Agent.png"
  },
  {
    icon: <Chat24Regular />, name: "AI-DataLens", impact: "Answers in plain language, instantly",
    desc: "Give business users answers from your enterprise data in natural language, with row-level security and audit logging preserved through RAG-grounded queries against your semantic layer.", to: "/products/ai-datalens",
    img: "/images/Product%20cards/AI-datalens.png"
  },
  {
    icon: <Window24Regular />, name: "EmbedFAST", impact: "Embed analytics at any scale",
    desc: "Ship embedded analytics to your customers without months of custom integration, with tenant isolation, RBAC, unlimited workspace onboarding, and white-label theming handled at enterprise scale.", to: "/products/embedfast",
    img: "/images/Product%20cards/EmbedFAST.png"
  },
  {
    icon: <Pulse24Regular />, name: "LoadFAST", impact: "Launch with zero surprises",
    desc: "Validate Power BI and Microsoft Fabric performance before your users find the bottlenecks, with concurrent user simulation, load time measurement, and capacity sizing recommendations.", to: "/products/loadfast",
    img: "/images/Product%20cards/LoadFAST.png"
  },
  {
    icon: <CheckmarkCircle24Regular />, name: "CertyFAST", impact: "Ship error-free models",
    desc: "Deliver Power BI semantic models that pass review the first time and stay maintainable across team turnover, with automated error detection, DAX standardization, and documentation.", to: "/products/certyfast",
    img: "/images/Product%20cards/CertyFAST.png"
  },
];
// Case studies + their images come from the shared insights data (same source
// as the Case studies page); used by the featured case study above Products.
const CASES = caseStudyItems.slice(0, 3);

interface ResourceItem { title: string; desc: string; to: string; img: string }
const RESOURCES: ResourceItem[] = [
  { title: "Power BI custom visuals", desc: "Plug custom Power BI visuals directly into your reports.", to: "/insights/power-bi-custom-visual-guide", img: "/images/power-bi-visuals.png" },
  { title: "Best practice guides", desc: "Learn patterns, pitfalls, and platform decisions from MAQ Software engineers.", to: "/insights/best-practice-guides", img: "/images/best-practice-guides.png" },
  { title: "Events", desc: "Connect with our team and join our technical sessions at events near you.", to: "/events", img: "/images/webinar.png" },
];

// "Industries we serve" data + icons are shared across the home explorations
// (imported as INDUSTRIES from ../data/homeIndustries above).

// This page runs wider than the app's --maq-container (1240px) by design,
// using the shared --maq-container-wide token (kept in sync with FooterV2).
const HOME_MAXW = "var(--maq-container-wide)";

/* ---------- Motion presets -----------------------------------------
   fadeUp: scroll-reveal applied to each section (animates once on enter).
   hero*: staggered mount animation for the hero on first paint. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: EASE },
};
const heroContainerV = { animate: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } } };
const heroItemV = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Clickable image that zooms on hover — same scale/timing as the card images.
function ZoomImage({ src, frameClass, imgClass, onClick }: { src: string; frameClass: string; imgClass: string; onClick: () => void }) {
  const isPng = /\.png(?=($|\?))/i.test(src);
  const avifSrc = isPng ? src.replace(/\.png(?=($|\?))/i, ".avif") : undefined;
  const webpSrc = isPng ? src.replace(/\.png(?=($|\?))/i, ".webp") : undefined;
  return (
    <div className={frameClass} aria-hidden onClick={onClick} style={{ cursor: "pointer" }}>
      <motion.picture
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
        {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
        <img
          src={src}
          alt=""
          className={imgClass}
          draggable={false}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </motion.picture>
    </div>
  );
}
const onScroll = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE, delay: i * 0.08 },
});

const useStyles = makeStyles({
  page: {
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif",
    color: "var(--maq-black)",
    backgroundColor: "#fff",
    // Use pure Fluent neutral grays on this page instead of the global
    // cool-tinted brand grays. Scoped here, so other pages keep the brand
    // palette. Cascades through the heading/muted/faint roles too.
    "--maq-black": tokens.colorNeutralForeground1,
    // --maq-gray-50 intentionally inherits the global standard (#f3f4f6) so the
    // home page's gray bands match the rest of the site and the footer.
    "--maq-gray-100": tokens.colorNeutralBackground3,
    "--maq-border": tokens.colorNeutralStroke2,
    "--maq-text-soft": tokens.colorNeutralForeground3,
    "--maq-text-faint": tokens.colorNeutralForeground4,
  },
  wrap: { maxWidth: HOME_MAXW, margin: "0 auto" },

  /* Hero — black band, 3-column grid (headline spans 2, supporting copy in col 3) */
  // Layout only — the dark token flips (text + accessible red) come from <DarkSection>.
  hero: {
    position: "relative", overflow: "hidden", minHeight: "min(78vh, 620px)",
    backgroundColor: tokens.colorNeutralBackground2,
    // Height is driven by content (balanced split hero) — generous padding for
    // presence, but not stretched to the full viewport, which left the short
    // text + landscape image floating in whitespace.
    display: "flex", flexDirection: "column", justifyContent: "center",
    // Left and right edges both align to the centered container gutter.
    paddingTop: "8px", paddingBottom: "8px",
    paddingLeft: "max(32px, calc((100vw - var(--maq-container-wide)) / 2))",
    paddingRight: "max(32px, calc((100vw - var(--maq-container-wide)) / 2))",
    "@media (max-width: 1024px)": { paddingTop: "5px", paddingBottom: "5px", paddingLeft: "32px", paddingRight: "32px" }, "@media (max-width: 720px)": { paddingTop: "4px", paddingBottom: "4px", paddingLeft: "22px", paddingRight: "22px" },
  },
  heroArt: {
    display: "block", width: "100%", height: "auto", objectFit: "contain",
    borderRadius: "20px",
    pointerEvents: "none", userSelect: "none",
  },
  heroTop: {
    display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: "24px", alignItems: "center", position: "relative", zIndex: 1,
    "@media (max-width: 1024px)": { gridTemplateColumns: "1fr", gap: "16px", alignItems: "start" },
  },
  heroText: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      order: 1,
    },
  },
  heroImageCol: {
    minWidth: 0,
    "@media (max-width: 1024px)": {
      order: 2,
      width: "100%",
      maxWidth: "560px",
      margin: "0 auto",
    },
    "@media (max-width: 768px)": {
      maxWidth: "460px",
    },
    "@media (max-width: 425px)": {
      maxWidth: "100%",
    },
  },
  heroArtMobile: {
    "@media (max-width: 1024px)": {
      maxHeight: "320px",
    },
    "@media (max-width: 768px)": {
      maxHeight: "260px",
    },
    "@media (max-width: 425px)": {
      maxHeight: "220px",
    },
    "@media (max-width: 375px)": {
      maxHeight: "200px",
    },
    "@media (max-width: 320px)": {
      maxHeight: "180px",
    },
  },
  heroH1: { margin: "0 0 28px", fontSize: "var(--fs-h1)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" },
  h1em: { fontStyle: "normal", color: "var(--maq-red)" },
  hbr: { display: "none", "@media (min-width: 1120px)": { display: "inline" } },
  sub: { margin: 0, fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "var(--maq-muted-color)", maxWidth: "52ch" },
  heroCta: { marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap" }, capHead: { marginBottom: "56px" },
  // Dark capabilities band — token flips come from <DarkSection>; this only sets the
  // band color and swaps the card SVG motif accents to very light gray instead of red.
  // Light-gray band; the FeatureCards inside are dark (near-black surface) so the motif art
  // reads in dark mode. Red is remapped to the WCAG-AA accessible on-dark step.
  capBand: { backgroundColor: tokens.colorNeutralBackground3 },
  heroBand: { backgroundColor: "#0a0a0c" },
  capHeadA: { marginBottom: "24px" },
  indHead: { marginBottom: "36px" },  // Subtle translucent backing so a bleeding corner motif cannot reduce text
  // legibility on narrow cards. Pinned to the card bottom with the text.
  // Feathered translucent backing for the hero headline + sub-text (legibility
  // over the decorative dot grid). Hugs the text; edges fade via a mask.
  heroScrim: {
    position: "relative", zIndex: 1, display: "inline-block", justifySelf: "start",
    padding: "10px 26px", margin: "-10px -26px",
    "::before": {
      content: '""',
      position: "absolute", inset: 0, borderRadius: "14px", zIndex: -1,
      backgroundColor: tokens.colorNeutralBackground3, opacity: 0.7,
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 10px, #000 calc(100% - 10px), transparent)",
      WebkitMaskComposite: "source-in",
      maskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 10px, #000 calc(100% - 10px), transparent)",
      maskComposite: "intersect",
    },
  },
  // Same feathered backing as heroScrim/textScrim, but tinted with the band's
  // own bg color (translucent) instead of white — so the oversized Us behind
  // don't bleed through the CTA copy. Hugs the text via inline-block.
  bandScrim: {
    position: "relative", zIndex: 1, display: "inline-block",
    padding: "12px 26px", margin: "-12px -26px",
    "::before": {
      content: '""',
      position: "absolute", inset: 0, borderRadius: "14px", zIndex: -1,
      backgroundColor: tokens.colorNeutralBackground3, opacity: 0.7,
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 12px, #000 calc(100% - 12px), transparent)",
      WebkitMaskComposite: "source-in",
      maskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 12px, #000 calc(100% - 12px), transparent)",
      maskComposite: "intersect",
    },
  },
  /* CTA — full-bleed black band that hugs the footer (no white gap) */
  // CTA as a floating gray card: transparent outer (spacing) + rounded gray inner.
  // Full-bleed CTA band (spans the page) on Fluent neutral background 3.
  cta: { position: "relative", backgroundColor: tokens.colorNeutralBackground3, padding: "var(--section-pad-y) var(--section-pad-x)" },
  bandInner: {
    position: "relative", zIndex: 1, maxWidth: HOME_MAXW, margin: "0 auto", overflow: "hidden",
  },
  bandText: { position: "relative", zIndex: 1, maxWidth: "620px" },
  bandCta: { marginTop: "28px" },
  // Nested line-art arches on the right of the CTA band.
  ctaArt: {
    position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)",
    width: "400px", height: "400px", pointerEvents: "none", zIndex: 0,
    "@media (max-width: 880px)": { display: "none" },
  },
  bandSub: { marginTop: "10px", fontSize: "var(--fs-body-lg)", lineHeight: 1.5, color: "var(--maq-muted-color)", maxWidth: "34em", margin: "10px 0 0" },

  // Section-head spacing for the Products / Resources headings.
  prodHead: { marginBottom: "40px", "& p": { fontSize: "var(--fs-body-lg)" } },
  // Products tab list — full-width hairline under the tabs; the selected Tab
  // draws the brand-red underline indicator.
  prodTabs: { marginBottom: "32px", borderBottom: "1px solid var(--maq-border)" },
  // Consistent card gaps across the Resources / What-we-deliver grids.
  cardGap: { gap: "24px" },
  prodGrid: { gridAutoRows: "1fr", gap: "24px" },
  deliverGrid: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  industriesGrid: {
    display: "grid",
    gap: "24px",
    gridAutoRows: "minmax(172px, auto)",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },

  /* Featured case study — large image left, text right. */
  featRow: {
    display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr", gap: "28px" },
  },
  featImg: {
    position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "16px", overflow: "hidden",
    backgroundColor: "#F7F7F7", display: "flex", alignItems: "center", justifyContent: "center",
  },
  featImgEl: { display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" },
  featText: { display: "flex", flexDirection: "column", minWidth: 0 },
  featTitle: { fontSize: "var(--fs-h3)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-.5px", color: "var(--maq-heading-color)", margin: 0 },
  featSub: { fontSize: "var(--fs-body-lg)", lineHeight: 1.6, color: "var(--maq-muted-color)", margin: "18px 0 0", maxWidth: "44ch" },
  featCta: { marginTop: "28px" },
});


export function HomeV3() {
  const s = useStyles();
  const navigate = useNavigate();
  const handleContactClick = useContactAction();
  // Regression note: keep "What we deliver" and "Industries we serve"
  // on explicit div grids (not CardGrid). CardGrid's shared auto-fit defaults
  // can expand these sections to 4 columns on wide screens.
  // Products tab-list — active product changes on tab select.
  const [activeProd, setActiveProd] = useState(0);
  const prod = PRODUCTS[activeProd];

  return (
    <div className={s.page}>
      {/* HERO */}
      <header className={s.hero}>
        <div className={s.heroTop}>
          <motion.div className={s.heroText} variants={heroContainerV} initial="initial" animate="animate">
            <motion.h1 className={`maq-h1 ${s.heroH1}`} variants={heroItemV}>
              Turn data into decisions faster with AI-powered analytics
            </motion.h1>
            <motion.p className={s.sub} variants={heroItemV}>
              We help enterprises scale AI, modernize data platforms, and accelerate cloud transformation — delivered with speed, quality, and confidence.
            </motion.p>
            <motion.div className={s.heroCta} variants={heroItemV}>
              <PrimaryButton size="large" onClick={() => navigate("/insights/case-studies")}>
                See our work
              </PrimaryButton>
              <SecondaryButton size="large" onClick={() => handleContactClick()}>
                Contact us
              </SecondaryButton>
            </motion.div>
          </motion.div>
          <motion.div className={s.heroImageCol} initial={{ opacity: 0, x: 44, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}>
            <picture>
              <source srcSet="/images/home-banner.avif" type="image/avif" />
              <source srcSet="/images/home-banner.webp" type="image/webp" />
              <img
                className={`${s.heroArt} ${s.heroArtMobile}`}
                src="/images/home-banner.png"
                alt=""
                aria-hidden
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </motion.div>
        </div>
      </header>

      {/* WHAT WE DELIVER — product-style card grid (capabilities content) */}
      <Section>
        <motion.div {...fadeUp}>
          <SectionHeading
            title="Services"
            className={s.prodHead}
          />
        </motion.div>
        <div className={s.deliverGrid}>
          {BUILD.map((b, i) => (
            <PosterCard
              key={b.title}
              to={b.to}
              img={b.img}
              imgFit="contain"
              aspectRatio="16 / 9"
              title={b.title}
              desc={b.desc}
              motionProps={onScroll(i)}
            />
          ))}
        </div>
      </Section>

      {/* FEATURED CASE STUDY — image left, text right (first case study) */}
      <Section tone="gray">
        <motion.div className={s.featRow} {...fadeUp}>
          <ZoomImage
            src="/images/case-study.png"
            frameClass={s.featImg}
            imgClass={s.featImgEl}
            onClick={() => window.open(CASES[0].href, "_blank", "noopener,noreferrer")}
          />
          <div className={s.featText}>
            <h2 className={s.featTitle}>Reshaping retail with agentic AI solutions</h2>
            <p className={s.featSub}>How a global retailer moved from manual workflows to agentic AI, automating decisions across merchandising, pricing, operations, and customer engagement in real time.</p>
            <div className={s.featCta}>
              <SecondaryButton onClick={() => window.open(CASES[0].href, "_blank", "noopener,noreferrer")}>
                Read the story
              </SecondaryButton>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* PRODUCTS — horizontal tab pills + large product card */}
      <Section>
        <motion.div {...fadeUp}>
          <SectionHeading
            title="Products"
            className={s.prodHead}
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <TabList
            className={s.prodTabs}
            size="large"
            selectedValue={activeProd}
            onTabSelect={(_: SelectTabEvent, data: SelectTabData) =>
              setActiveProd(data.value as number)
            }
            aria-label="Products"
          >
            {PRODUCTS.map((p, i) => (
              <Tab key={p.name} value={i}>
                {p.name}
              </Tab>
            ))}
          </TabList>
          <AnimatePresence mode="wait">
            <motion.div key={activeProd} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.32, ease: EASE }}>
              <SplitCard
                eyebrow={prod.impact}
                title={prod.name}
                desc={prod.desc}
                img={prod.img}
                to={prod.to}
                cta="Learn more"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <motion.div {...fadeUp}>
          <SectionHeading title="Industries" align="left" className={s.indHead} />
        </motion.div>
        <div className={s.industriesGrid}>
          {INDUSTRIES.map((ind, i) => (
            <IconCard key={ind.label} label={ind.label} desc={ind.desc} to={ind.to} icon={ind.icon} stacked motionProps={onScroll(i)} />
          ))}
        </div>
      </Section>

      {/* RESOURCES — title above, 3 cards (image top, text below) */}
      <Section>
        <motion.div {...fadeUp}>
          <SectionHeading
            title="Insights"
            className={s.prodHead}
          />
        </motion.div>
        <CardGrid className={s.cardGap}>
          {RESOURCES.map((r, i) => (
            <PosterCard
              key={r.title}
              to={r.to}
              img={r.img}
              imgFit="cover"
              aspectRatio="16 / 10"
              title={r.title}
              desc={r.desc}
              motionProps={onScroll(i)}
            />
          ))}
        </CardGrid>
      </Section>

    </div>
  );
}
