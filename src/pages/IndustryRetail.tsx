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

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";
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
const retailImpactCards: ImpactCaseStudy[] = [
  {
    title: "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
    teaser: "How a top-3 US retailer rebuilt BI on Microsoft Fabric for 8× faster refresh.",
    imageUrl: "/images/case-studies/external/retail-report-stock-image.webp",
    href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
  },
  {
    title: "Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric",
    teaser: "Live DSD visibility on Fabric so field operations act on real-time route and stock data.",
    imageUrl: "/images/case-studies/external/CS076-banner.webp",
    href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
  {
    title: "Real-time reporting for an organic supermarket chain",
    teaser: "Nightly batches replaced with live dashboards for minute-by-minute store KPIs.",
    imageUrl: "/images/case-studies/external/shopper2.webp",
    href: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
  },
  {
    title: "Empowering retail growth with an optimized loyalty program",
    teaser: "Personalized loyalty across millions of members, driven by data.",
    imageUrl: "/images/case-studies/external/CS074-banner.webp",
    href: "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
  },
];

const retailAgents = [
  {
    name: "Monday Morning Agent",
    tagline: "Automated BI briefings",
    icon: <Clock24Regular />,
    description:
      "Delivers scheduled metric briefings and answers plain-English questions across Microsoft 365 Copilot, Teams, and Outlook.",
  },
  {
    name: "Smart Store Agent",
    tagline: "Supply chain intelligence",
    icon: <BuildingShop24Regular />,
    description:
      "Runs supply chain operations end to end: shipment tracking, route optimization, and supplier performance in real time.",
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
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Retail & consumer goods"
        subhead="Use AI to create better customer experiences, build resilient supply chains, and connect operations across stores, channels, and teams."
      />

      <AccordionShowcase
        sectionId="retail-solutions"
        title="Retail agents for your operations"
        items={retailAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
        image="/images/case-studies/external/man-checking-stock-inventory.webp"
        imageAlt="Automating retail store operations"
      />
      <IndustryImpactCards
        title="Real impact for retail leaders"
        cards={retailImpactCards}
      />
      <MarketplaceOffers
        title="Marketplace offers"
        sub="Accelerate retail outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning demand planning, customer experience, and real-time intelligence."
        offers={retailOffers}
        background="#fff"
      />
      {/* <Testimonials quotes={retailTestimonials} /> */}
    </>
  );
}
