import { makeStyles } from "@fluentui/react-components";
import {
  PeopleCommunity24Regular,
  BookInformation24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
  BuildingGovernment24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";
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
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  channelRow: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" },
  channelLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  channelTrack: { flex: 1, height: "8px", background: "var(--maq-gray-100)", borderRadius: "4px" },
  channelFill: { height: "100%", borderRadius: "4px" },
  programGrid: { display: "flex", flexDirection: "column", gap: "6px" },
  programRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  },
  programLabel: { fontSize: "11px", color: "var(--maq-gray-600)", flex: 1 },
  scoreBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4px",
  },
  scoreValue: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1,
  },
  scoreLabel: { fontSize: "10px", color: "var(--maq-gray-500)", textAlign: "center" },
});

const channels = [
  { label: "Web",        pct: "78%", red: true  },
  { label: "Mobile",     pct: "65%", red: false },
  { label: "Voice",      pct: "52%", red: false },
  { label: "In-person",  pct: "28%", red: false },
];

const programRows = [
  { label: "Benefits intake",     status: "ontrack" },
  { label: "Eligibility review",  status: "atrisk" },
  { label: "Disbursement",        status: "ontrack" },
  { label: "Audit & oversight",   status: "complete" },
];

function PublicSectorHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <BuildingGovernment24Regular /> Citizen requests today
        </div>
        {channels.map(({ label, pct, red }) => (
          <div key={label} className={v.channelRow}>
            <span className={v.channelLabel}>{label}</span>
            <div className={v.channelTrack}>
              <div
                className={v.channelFill}
                style={{ width: pct, background: red ? "var(--maq-red)" : "var(--maq-gray-500)" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Program performance</span>
        <div className={v.programGrid}>
          {programRows.map(({ label, status }) => (
            <div key={label} className={v.programRow}>
              <span className={v.programLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Citizens served via AI agents</span>
        <div className={v.scoreBox}>
          <span className={v.scoreValue}>Millions+</span>
          <span className={v.scoreLabel}>via state-deployed AI chatbot</span>
        </div>
      </div>
    </>
  );
}

// --- Public Sector content data ---
const publicSectorStats = [
  {
    metric: "Millions+",
    label: "Citizens reaching state benefits through an AI chatbot for the Arizona government",
    sourceLabel: "Arizona citizen chatbot case study",
    sourceHref: "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
  },
  {
    metric: "Secure-by-design",
    label: "Reference Copilot patterns for environments with audit, RBAC, and sensitive-data requirements",
    sourceLabel: "Secure Copilot case study",
    sourceHref: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    metric: "Grounded",
    label: "Citation-backed answers over policy, regulation, and benefits content for caseworkers and analysts",
    sourceLabel: "AI Copilot information retrieval case study",
    sourceHref: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
  },
  {
    metric: "CoE-led",
    label: "Structured AI adoption playbook for moving public-sector pilots into production safely",
    sourceLabel: "AI Center of Excellence case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
];

const publicSectorAgents = [
  {
    name: "Citizen Services Copilot",
    tagline: "Self-service for benefits, permits, and programs",
    icon: <PeopleCommunity24Regular />,
    description:
      "Natural-language Copilot that helps citizens navigate state and federal programs (eligibility, benefits, permits, licensing) without waiting for a caseworker. Grounded in agency policy and program rules, so answers are citation-backed and audit-ready. It's the pattern behind the Arizona deployment that reached millions of citizens.",
  },
  {
    name: "Policy & Regulation Knowledge Agent",
    tagline: "Cited answers over policy, regulation, and guidance",
    icon: <BookInformation24Regular />,
    description:
      "Citation-backed retrieval Copilot grounded in your policy library, statutes, federal and state regulations, and internal guidance. Caseworkers, analysts, and program staff ask plain-English questions and get linked, traceable answers in seconds. Built on Azure OpenAI with role-based access controls.",
  },
  {
    name: "Mission Analytics Agent",
    tagline: "Program performance on live data, not stale reports",
    icon: <DataPie24Regular />,
    description:
      "Operational analytics agent that runs on Microsoft Fabric or Databricks. Combines caseload, outcomes, eligibility, and equity-impact data to surface program performance and forecast demand, so program leadership and oversight teams act on live signals, not last quarter's report.",
  },
  {
    name: "Secure Modernization Agent",
    tagline: "FedRAMP-aligned modernization for legacy estates",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Reference architecture and rollout agent for modernizing legacy public-sector systems with secure-by-design Copilot and Microsoft Fabric patterns. Aligned to FedRAMP, CJIS, IRS Pub 1075, and agency-specific control frameworks, with Managed Identity, RBAC, and audit logging built in from day one.",
  },
];

const publicSectorCases = [
  {
    tag: "Government chatbot",
    title: "Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot",
    teaser:
      "State government chatbot helping millions of citizens reach the benefits and services they qualify for — the reference deployment for public-sector citizen-facing AI.",
    href: "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
  },
  {
    tag: "Secure Copilot",
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely — directly applicable to federal, state, and local agency environments with audit and sensitive-data requirements.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    tag: "Information retrieval",
    title: "Streamlining information retrieval with AI Copilots",
    teaser:
      "Citation-backed enterprise search Copilots that ground answers in your proprietary content — a proven pattern for policy, regulation, and benefits retrieval in public-sector contexts.",
    href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
  },
];

export function IndustryPublicSector() {
  return (
    <>
      <IndustryHero
        eyebrow="Public Sector"
        h1="AI for citizen services and mission outcomes"
        subhead="Federal, state, and local agencies face pressure to deliver faster citizen services, modernize aging systems, and protect sensitive data, all under audit-grade accountability. Public-sector organizations embed AI across the mission stack, from citizen-facing chatbots and policy-knowledge Copilots to program analytics on Microsoft Fabric, with secure-by-design patterns aligned to FedRAMP, CJIS, and agency compliance frameworks. MAQ Software builds it, turning fragmented government data into faster decisions and better outcomes for the citizens you serve."
        mailSubject="Public Sector - MAQ Software"
        visual={<PublicSectorHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for public sector leaders"
        sub="Outcomes from MAQ Software's dedicated public-sector engagement and gov-adjacent secure-Copilot and AI-CoE patterns applied to regulated agency environments."
        stats={publicSectorStats}
      />
      <SolutionShowcase
        sectionId="public-sector-solutions"
        eyebrow="Agentic AI"
        title="Bring AI to the mission"
        agents={publicSectorAgents}
        industryLabel="Public sector"
      />
      <IndustryCaseStudies
        eyebrow="Public sector case studies"
        title="How public sector organizations move faster with MAQ Software"
        cases={publicSectorCases}
        seeAllLabel="See all public sector case studies"
        seeAllHref="/insights/case-studies?industry=Public%20sector#insights-content"
      />
    </>
  );
}
