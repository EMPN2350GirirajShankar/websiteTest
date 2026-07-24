import { makeStyles } from "@fluentui/react-components";
import {
  BoxMultiple20Filled,
  DocumentSearch20Filled,
  BoxMultiple24Regular,
  DocumentSearch24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";

// --- Manufacturing hero visual ---
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
  barChart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "6px",
    height: "40px",
  },
  bar: {
    width: "14px",
    borderRadius: "2px",
  },
  statusRows: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  statusLabel: { fontSize: "11px", color: "var(--maq-gray-500)", width: "60px" },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  statusText: { fontSize: "10px", color: "var(--maq-gray-600)", flex: 1 },
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  sparkBar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
});

const inventoryLevels = [
  { label: "WH-A", height: 75, color: "#16a34a" },
  { label: "WH-B", height: 50, color: "var(--maq-red)" },
  { label: "WH-C", height: 90, color: "#16a34a" },
  { label: "Line-1", height: 30, color: "var(--maq-red)" },
  { label: "Line-2", height: 65, color: "#2563eb" },
];

const sparkHeights = [35, 55, 45, 70, 60, 85, 75, 92];

function ManufacturingHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <BoxMultiple20Filled /> Inventory levels
        </div>
        <div className={v.barChart}>
          {inventoryLevels.map((b) => (
            <div
              key={b.label}
              className={v.bar}
              style={{ height: `${b.height}%`, background: b.color }}
              title={b.label}
            />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <DocumentSearch20Filled /> Vendor receipt status
        </div>
        <div className={v.statusRows}>
          <div className={v.statusRow}>
            <span className={v.statusLabel}>PO-4421</span>
            <span className={v.statusDot} style={{ background: "#16a34a" }} />
            <span className={v.statusText}>Matched</span>
          </div>
          <div className={v.statusRow}>
            <span className={v.statusLabel}>PO-8127</span>
            <span className={v.statusDot} style={{ background: "var(--maq-red)" }} />
            <span className={v.statusText}>Pending</span>
          </div>
          <div className={v.statusRow}>
            <span className={v.statusLabel}>PO-3309</span>
            <span className={v.statusDot} style={{ background: "#2563eb" }} />
            <span className={v.statusText}>In review</span>
          </div>
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>Production throughput</div>
        <div className={v.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={v.sparkBar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </>
  );
}

// --- Manufacturing content data ---
const manufacturingStats = [
  {
    metric: "40%",
    label:
      "Faster data onboarding across ten disconnected manufacturing systems, unified on Microsoft Fabric and OneLake for a global medical devices manufacturer",
    sourceLabel: "Unifying disconnected data systems",
    sourceHref:
      "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
];

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

const manufacturingCases = [
  {
    tag: "Agentic AI \u00b7 Azure AI",
    title:
      "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "US-based global manufacturing org; covers supply chain, quality inspection, procurement automation, SOP processing on Azure AI.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
  {
    tag: "Microsoft Fabric \u00b7 Data Unification",
    title:
      "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser:
      "Medical devices manufacturer; 40% faster data onboarding, ten systems unified on Fabric.",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
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
    desc: "Free briefing covering how Microsoft Fabric unifies manufacturing data estates\u2014from ERP and MES to plant-floor feeds\u2014with AI capabilities and governance built in.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.microsoftfabricbriefing",
  },
];

const manufacturingTestimonials = [
  {
    body: "We engaged MAQ Software to build our AI CoE and prioritize use cases across plant operations, supply chain, and quality. Within two weeks we had a working prototype and a clear roadmap to enterprise rollout.",
    cite: "VP, Manufacturing Operations \u2014 Global industrial manufacturer",
  },
];

export function IndustryManufacturing() {
  return (
    <>
      <IndustryHero
        eyebrow="Manufacturing"
        h1="AI agents for plant operations, supply chain, and procurement"
        subhead="Supply chain disruptions and manual vendor receipt processing cost manufacturers time and margin they can't afford to lose. Industrial organizations deploy AI agents that monitor inventory in real time and automate goods receipt from delivery to ERP entry, all on a governed data foundation. MAQ Software builds and runs those agents on Microsoft Fabric, Snowflake, and Databricks, connecting plant operations, supply chain, and procurement on one platform. As a Top 25 Global Microsoft Partner and Microsoft Fabric Featured Partner, MAQ Software takes you from AI pilots to enterprise-scale production, with governance, security, and measurable ROI built in."
        mailSubject="Manufacturing - MAQ Software"
        visual={<ManufacturingHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for manufacturing leaders"
        sub="Numbers from MAQ Software engagements with global manufacturers."
        stats={manufacturingStats}
      />
      <SolutionShowcase
        sectionId="manufacturing-solutions"
        eyebrow="Agentic AI"
        title="Manufacturing agents for your operations"
        agents={manufacturingAgents}
        industryLabel="Manufacturing"
      />
      <IndustryCaseStudies
        eyebrow="Manufacturing case studies"
        title="How manufacturers move faster with MAQ Software"
        cases={manufacturingCases}
        seeAllLabel="See all manufacturing case studies"
        seeAllHref="/insights/case-studies?industry=Manufacturing#insights-content"
        uniformCardWidth
      />
      <MarketplaceOffers
        title="Marketplace offers"
        sub="Accelerate manufacturing outcomes with ready-to-deploy Microsoft Azure Marketplace offerings \u2014 spanning AI strategy, real-time intelligence, and data platform modernization."
        offers={manufacturingOffers}
      />
      {/* <Testimonials quotes={manufacturingTestimonials} /> */}
    </>
  );
}
