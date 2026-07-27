import {
  DocumentBulletList24Regular,
  ArrowTrendingLines24Regular,
  BuildingBank24Regular,
  ReceiptMoney24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";

// --- Financial services content data ---
const fsAgents = [
  {
    name: "Loan Underwriting Agent",
    tagline: "Automated credit decisioning",
    icon: <BuildingBank24Regular />,
    description:
      "Underwriting agent built on Microsoft Agent Framework and Azure OpenAI. A coordinated team of agents evaluates creditworthiness, verifies income, assesses collateral risk, enforces lending policy, calculates financial ratios, and produces final approval recommendations through an auditable, multi-step workflow.",
  },
  {
    name: "Proof of Expense Scanner",
    tagline: "Expense document automation",
    icon: <ReceiptMoney24Regular />,
    description:
      "Proof of Expense (POE) processor that extracts, validates, and categorizes receipt data through a multi-agent Semantic Kernel pipeline. Takes PDF uploads, file paths, or raw receipt text and runs them through DocumentProcessor, FieldExtractor, DataValidator, and ResultFormatter agents, with FAISS vector search for vendor recognition and expense categorization.",
  },
  {
    name: "Invoice PO Matching Agent",
    tagline: "Procurement validation",
    icon: <DocumentBulletList24Regular />,
    description:
      "Matches supplier invoices against purchase orders to flag discrepancies, assess financial risk, and recommend next steps. Built on a multi-agent workflow with Microsoft Agent Framework and Azure OpenAI, with a deterministic fallback engine for offline runs.",
  },
  {
    name: "Expense Trend Analyzer",
    tagline: "Spending analytics & insights",
    icon: <ArrowTrendingLines24Regular />,
    description:
      "Expense analytics built on Microsoft Agent Framework (MAF). Specialized agents compute financial metrics, analyze spending trends, detect anomalies, break down categories, and generate recommendations. Combines statistical analysis with Azure OpenAI insights in an interactive Streamlit dashboard.",
  },
];

const fsImpactCards: ImpactCaseStudy[] = [
  {
    title: "Delivering accurate business answers with a Microsoft Fabric data agent",
    teaser:
      "Fortune 500 conversational data agent directly applicable to finance reporting and Q&A, built on Microsoft Fabric.",
    imageUrl: "/images/case-studies/external/cs-delivering-accurate-business.png",
    href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
  },
  {
    title: "Transforming finance with agentic AI solutions",
    teaser:
      "MAQ Software's own finance agentic-AI post covering invoice processing, FP&A, expense anomaly detection, close automation, and compliance.",
    imageUrl: "/images/case-studies/external/boardroom_AI_stock.webp",
    href: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "Covers financial services among other functions including lead and knowledge agents powered by agentic AI.",
    imageUrl: "/images/case-studies/external/cs-reshaping-industries.jpg",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
];

const fsOffers = [
  {
    pill: "Consulting services",
    title: "MAQ Software consulting services on Azure Marketplace",
    desc: "Full catalog of MAQ Software's Microsoft-listed marketplace offers, including Fabric assessments and AI workshops tagged for Financial Services.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
  },
  {
    pill: "Real-Time Intelligence",
    title: "Real-Time Intelligence in Microsoft Fabric: 1-Day Workshop",
    desc: "Hands-on Fabric workshop for streaming, fraud-alerting, and real-time dashboards—listed for Financial Services.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.real_time_intelligence_using_microsoft_fabric",
  },
  {
    pill: "AI Analytics",
    title: "AI-DataLens",
    desc: "AI-powered conversational analytics that lets risk, finance, and compliance teams query enterprise data in natural language and get governed, source-cited answers.",
    href: "/products/ai-datalens",
  },
  {
    pill: "Migration",
    title: "MigrateFAST",
    desc: "AI-assisted migration of legacy banking and reporting platforms—including Snowflake, Teradata, and Synapse—to Microsoft Fabric, cutting migration cost and timeline.",
    href: "/products/migratefast",
  },
];

export function IndustryFinancialServices() {
  return (
    <>
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Financial services"
        subhead="Use AI to make faster credit decisions, catch fraud sooner, and keep compliance audit-ready."
      />

      <AccordionShowcase
        sectionId="financial-services-solutions"
        title="Financial services agents for your operations"
        items={fsAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
        image="/images/case-studies/external/corporate-buildings.webp"
        imageAlt="Automating financial operations with AI agents"
      />
      <IndustryImpactCards
        title="Real impact for financial services leaders"
        cards={fsImpactCards}
      />
      <MarketplaceOffers
        title="Marketplace offers"
        sub="Accelerate financial outcomes with ready-to-deploy Microsoft Azure Marketplace offerings and MAQ Software products—spanning consulting services, real-time intelligence, AI analytics, and migration."
        offers={fsOffers}
        background="#fff"
      />
    </>
  );
}
