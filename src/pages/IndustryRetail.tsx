import { makeStyles } from "@fluentui/react-components";
import {
  ArrowTrendingLines20Filled,
  ThumbLike20Filled,
  Clock24Regular,
  Chat24Regular,
  BuildingShop24Regular,
  Search24Regular,
  Tag24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";

// --- Retail hero visual ---
const useVisualStyles = makeStyles({
  tile: {
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    padding: "14px 16px",
  },
  tileTitle: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--maq-gray-500)",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
  shelfGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" },
  shelfCell: { aspectRatio: "1.4", background: "var(--maq-gray-100)", borderRadius: "3px" },
  recoRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  recoLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  recoTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  recoFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
});

const sparkHeights = [40, 60, 50, 78, 65, 90, 72, 95];
const shelf = Array.from({ length: 12 });

function RetailHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <ArrowTrendingLines20Filled /> Live SKU velocity
        </div>
        <div className={v.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={v.bar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>Shelf execution</div>
        <div className={v.shelfGrid}>
          {shelf.map((_, i) => (
            <div key={i} className={v.shelfCell} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <ThumbLike20Filled /> Today&apos;s pricing recommendations
        </div>
        <div className={v.recoRow}>
          <span className={v.recoLabel}>SKU 4421</span>
          <div className={v.recoTrack}>
            <div className={v.recoFill} style={{ width: "78%" }} />
          </div>
        </div>
        <div className={v.recoRow}>
          <span className={v.recoLabel}>SKU 8127</span>
          <div className={v.recoTrack}>
            <div className={v.recoFill} style={{ width: "62%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

// --- Retail content data ---
const retailStats = [
  {
    metric: "8×",
    label: "Faster Power BI refresh for a top-3 US retailer",
    sourceLabel: "Microsoft Fabric BI modernization",
    sourceHref: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
  },
  {
    metric: "Real-time",
    label: "Direct Store Delivery visibility on Microsoft Fabric",
    sourceLabel: "Real-time DSD case study",
    sourceHref: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
  {
    metric: "< 1 min",
    label: "Live KPIs replacing nightly batches at an organic supermarket chain",
    sourceLabel: "Organic supermarket case study",
    sourceHref: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
  },
  {
    metric: "Personalized",
    label: "Loyalty program lift across millions of members",
    sourceLabel: "Loyalty program case study",
    sourceHref: "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
  },
];

const retailAgents = [
  {
    name: "Monday Morning Agent",
    tagline: "Automated BI briefings",
    icon: <Clock24Regular />,
    description:
      "Delivers weekly metric reports and real-time insights straight to inboxes. Executives and teams subscribe to custom business questions, get scheduled reports (daily, weekly, monthly), and query metrics on demand in plain English. Works across Microsoft 365 Copilot, Teams, and Outlook, with no manual report prep.",
  },
  {
    name: "Smart Store Agent",
    tagline: "Supply chain intelligence",
    icon: <BuildingShop24Regular />,
    description:
      "Runs supply chain operations end to end: shipment tracking, driver location, route optimization, and supplier performance. Built on a graph architecture that combines classification, data retrieval, and conversational responses. Monitors logistics in real time, predicts delivery risks, and improves fleet efficiency.",
  },
  {
    name: "Automated Customer Service",
    tagline: "24/7 service automation",
    icon: <Chat24Regular />,
    description:
      "Answers customer questions and resolves common requests automatically, like order status, return policy, and store hours.",
  },
  {
    name: "Product Discovery Bot",
    tagline: "Guided product exploration",
    icon: <Search24Regular />,
    description:
      "Helps customers explore products on your site, including ratings, reviews, launch dates, and trending items.",
  },
  {
    name: "Automated Product Tag Generator",
    tagline: "Discoverability automation",
    icon: <Tag24Regular />,
    description:
      "Generates product tags like Organic, Gluten-Free, and Vegan from product descriptions, so shoppers find items faster.",
  },
];

const retailCases = [
  {
    tag: "Agentic AI",
    title: "Reshaping retail with agentic AI solutions",
    teaser:
      "Agentic AI deployed across pricing, merchandising, and store operations \u2014 unlocking faster decisions and resilient supply chains for a global retailer.",
    href: "https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html",
  },
  {
    tag: "Grocery \u00b7 Fabric",
    title: "Transforming grocery retail analytics with Microsoft Fabric",
    teaser:
      "Modernize grocery analytics on Fabric for sharper category, basket and supply-chain insights.",
    href: "https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html",
  },
  {
    tag: "Direct Store Delivery",
    title: "Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric",
    teaser:
      "Deliver real-time DSD visibility on Fabric so field operations can act on live route and stock data.",
    href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
];

const retailTestimonials = [
  {
    body: "MAQ Software's team helped us move from overnight batches to live store KPIs in under a quarter. Our managers now act on minute-by-minute signals instead of yesterday's report.",
    cite: "VP, Retail Analytics — Global grocery chain",
  },
  {
    body: "The pricing simulation agent gave our merchants the confidence to test scenarios safely. We shipped three campaigns in the time it used to take to debate one.",
    cite: "Director, Pricing & Promotions — Specialty retailer",
  },
];

const retailOffers = [
  {
    pill: "Store Operations",
    title: "Store Operations & Workforce Intelligence for Retail: 2-Week Assessment",
    desc: "A 2-week assessment that benchmarks store operations and workforce productivity on Microsoft Fabric, surfacing opportunities to lift throughput and service levels.",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.retail_storeops_fabric_mp?tab=Overview",
  },
  {
    pill: "Merchandising",
    title: "Merchandising & Shelf Analytics for Retail: 2-Week Assessment",
    desc: "A 2-week assessment that connects assortment, planogram, and shelf-execution data on Microsoft Fabric to sharpen merchandising and lift in-store conversion.",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.retail_merchandising_fabric_mp?tab=Overview",
  },
  {
    pill: "Store Operations",
    title: "Store Manager Assistant for Retail: 4-Week PoC",
    desc: "A 4-week proof of concept delivering a Copilot-powered assistant that gives store managers real-time visibility into sales, inventory, and workforce signals, with guided actions to run a smarter store.",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.retail_storemanager_assistant_mp?tab=Overview",
  },
  {
    pill: "Supply Chain",
    title: "Supply Chain & Vendor Performance Analytics for Retail: 4-Week PoC",
    desc: "A 4-week proof of concept that unifies supplier, logistics, and inventory data to expose vendor performance gaps and improve supply chain reliability.",
    href: "https://portal.azure.com/#view/Microsoft_Azure_Marketplace/GalleryItemDetailsBladeNopdl/preview/undefined/id/maqsoftware.retail_supplychain_poc/resourceGroupId//resourceGroupLocation//dontDiscardJourney~/false/_provisioningContext~/%7B%22initialValues%22%3A%7B%22subscriptionIds%22%3A%5B%5D%2C%22resourceGroupNames%22%3A%5B%5D%2C%22locationNames%22%3A%5B%5D%7D%2C%22telemetryId%22%3A%223900c523-44fd-45bd-bcee-cf5a3545b010%22%2C%22marketplaceItem%22%3A%7B%22categoryIds%22%3A%5B%5D%2C%22id%22%3A%22Microsoft.Portal%22%2C%22itemDisplayName%22%3A%22NoMarketplace%22%2C%22products%22%3A%5B%5D%2C%22version%22%3A%22%22%2C%22productsWithNoPricing%22%3A%5B%5D%2C%22publisherDisplayName%22%3A%22Microsoft.Portal%22%2C%22deploymentName%22%3A%22NoMarketplace%22%2C%22launchingContext%22%3A%7B%22telemetryId%22%3A%223900c523-44fd-45bd-bcee-cf5a3545b010%22%2C%22source%22%3A%5B%5D%2C%22galleryItemId%22%3A%22%22%7D%2C%22deploymentTemplateFileUris%22%3A%7B%7D%2C%22uiMetadata%22%3Anull%7D%7D",
  },
  {
    pill: "Retail Intelligence",
    title: "Enterprise Knowledge Assistant for Retail",
    desc: "An AI-powered enterprise knowledge assistant that helps retail teams instantly find answers across policies, playbooks, and operational data to make faster, better-informed decisions.",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.retail_knowledge_bot_mp?tab=Overview",
  },
];

export function IndustryRetail() {
  return (
    <>
      <IndustryHero
        eyebrow="Retail & Consumer Goods"
        h1="Run retail on AI, from real-time decisions to autonomous operations"
        subhead="Embed AI across retail and CPG operations, from real-time decisions to autonomous stores. MAQ Software builds it on Microsoft data platforms: better customer experiences, resilient supply chains, and connected stores."
        mailSubject="Retail - MAQ Software"
        visual={<RetailHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for retail leaders"
        sub="Numbers from MAQ Software engagements with global retailers and CPG brands."
        stats={retailStats}
      />
      <SolutionShowcase
        sectionId="retail-solutions"
        eyebrow="Agentic AI"
        title="Retail agents for your operations"
        agents={retailAgents}
      />
      <IndustryCaseStudies
        eyebrow="Retail case studies"
        title="How retailers move faster with MAQ Software"
        cases={retailCases}
        seeAllLabel="See all retail case studies"
        seeAllHref="/insights/case-studies?industry=Retail%20%26%20consumer%20goods#insights-content"
      />
      <MarketplaceOffers
        title="Marketplace offers"
        sub="Accelerate retail outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning demand planning, customer experience, and real-time intelligence."
        offers={retailOffers}
      />
      {/* <Testimonials quotes={retailTestimonials} /> */}
    </>
  );
}
