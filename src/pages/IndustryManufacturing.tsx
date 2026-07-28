import {
  BoxMultiple24Regular,
  DocumentSearch24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";

// --- Manufacturing content data ---
const manufacturingAgents = [
  {
    name: "Inventory Overview Agent",
    tagline: "Conversational inventory management",
    icon: <BoxMultiple24Regular />,
    description:
      "Multi-agent inventory management built on the Microsoft Agent Framework (MAF). A top-level InventoryOrchestrator routes natural language queries to three sub-agents (StockAgent, ProcurementAgent, and AnalyticsAgent), each with tool-decorated functions that query a live Supabase PostgreSQL backend. Runs in a Streamlit chat UI with persistent in-session memory.",
  },
  {
    name: "Vendor Receipt Scanner",
    tagline: "Automated invoice & receipt processing",
    icon: <DocumentSearch24Regular />,
    description:
      "Invoice and receipt processing pipeline built on the Microsoft Agent Framework. A four-node typed workflow (ExtractNode, ParseNode, ValidateNode, StorageNode) runs each node as a dedicated MAF agent with registered tools. Processed receipts persist in SQLite and index into a FAISS vector store for semantic search, while a separate ProcurementValidationAgent cross-checks invoices against purchase order data. Runs on a FastAPI backend and a React and Vite frontend.",
  },
];

const manufacturingImpactCards: ImpactCaseStudy[] = [
  {
    title:
      "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser:
      "Medical devices manufacturer; 40% faster data onboarding, ten systems unified on Fabric.",
    imageUrl: "/images/case-studies/external/cs-unifying-data-systems.png",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
  {
    title:
      "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "US-based global manufacturing org; covers supply chain, quality inspection, procurement automation, SOP processing on Azure AI.",
    imageUrl: "/images/case-studies/external/cs-transforming-ai-adoption.jpg",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
];

const manufacturingOffers = [
  {
    pill: "AI strategy",
    title: "AI CoE and Solution Envisioning",
    desc: "Structured engagement to establish an AI Center of Excellence for manufacturing, prioritize use cases across plant operations, supply chain, and quality, and deliver a working prototype in two weeks on Azure AI.",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.ai_coe_and_solution_envisioning",
  },
  {
    pill: "Real-time intelligence",
    title: "Real-Time Intelligence in Microsoft Fabric: 1-Day Workshop",
    desc: "Hands-on workshop to design and prototype real-time data flows for shop-floor monitoring, inventory alerts, and supply chain visibility on Microsoft Fabric.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.real_time_intelligence_using_microsoft_fabric",
  },
  {
    pill: "Data platform",
    title: "Microsoft Fabric: 2-Hour Briefing",
    desc: "Free briefing covering how Microsoft Fabric unifies manufacturing data estates—from ERP and MES to plant-floor feeds—with AI capabilities and governance built in.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricbriefing",
  },
];

export function IndustryManufacturing() {
  return (
    <>
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Manufacturing"
        subhead="Use AI to track inventory in real time, automate manual paperwork, and connect plant operations, supply chain, and procurement on one platform."
      />

      <AccordionShowcase
        sectionId="manufacturing-solutions"
        title="Manufacturing agents for your operations"
        items={manufacturingAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
        image="/images/case-studies/external/warehouse-inventory.webp"
        imageAlt="Automating manufacturing inventory and plant operations"
      />
      <IndustryImpactCards
        title="Real impact for manufacturing leaders"
        cards={manufacturingImpactCards}
      />
      <MarketplaceOffers
        title="Marketplace offers"
        sub="Accelerate manufacturing outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning AI strategy, real-time intelligence, and data platform modernization."
        offers={manufacturingOffers}
        background="#fff"
      />
      {/* <Testimonials quotes={manufacturingTestimonials} /> */}
    </>
  );
}
