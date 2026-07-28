import {
  PeopleCommunity24Regular,
  BookInformation24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";

// --- Public Sector content data ---
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

const publicSectorImpactCards: ImpactCaseStudy[] = [
  {
    title: "Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot",
    teaser:
      "State government chatbot helping millions of citizens reach the benefits and services they qualify for, the reference deployment for public-sector citizen-facing AI.",
    imageUrl: "/images/case-studies/external/Arizona-Chatbot-case-study-main.webp",
    href: "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely, directly applicable to federal, state, and local agency environments with audit and sensitive-data requirements.",
    imageUrl: "/images/case-studies/external/B034_CopilotSecurity_Banner.webp",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    title: "Streamlining information retrieval with AI Copilots",
    teaser:
      "Citation-backed enterprise search Copilots that ground answers in your proprietary content, a proven pattern for policy, regulation, and benefits retrieval in public-sector contexts.",
    imageUrl: "/images/case-studies/external/cs-streamlining-info-retrieval.jpg",
    href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
  },
  {
    title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "A structured AI adoption playbook for moving public-sector pilots into production safely.",
    imageUrl: "/images/case-studies/external/cs-transforming-ai-adoption.jpg",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
];

export function IndustryPublicSector() {
  return (
    <>
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Public sector"
        subhead="Use AI to serve citizens faster, modernize aging systems, and keep sensitive data secure."
      />

      <AccordionShowcase
        sectionId="public-sector-solutions"
        title="Bring AI to the mission"
        items={publicSectorAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
      />
      <IndustryImpactCards
        title="Real impact for public sector leaders"
        cards={publicSectorImpactCards}
      />
    </>
  );
}
