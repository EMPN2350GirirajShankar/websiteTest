import {
  Chat24Regular,
  PersonHeart24Regular,
  HeartPulse24Regular,
  Beaker24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";

// --- Healthcare & Life Sciences content data ---
const hlsAgents = [
  {
    name: "Clinical Knowledge Copilot",
    tagline: "Cited answers without leaving the EHR",
    icon: <Chat24Regular />,
    description:
      "Natural-language Copilot grounded in your clinical guidelines, formulary data, and policy library. Care teams ask plain-English questions and get citation-backed answers in seconds, without leaving the EHR. Built on Azure OpenAI with role-based access controls aligned to your HIPAA and HITECH program.",
  },
  {
    name: "Care Coordination Agent",
    tagline: "Close cross-team gaps for high-risk patients",
    icon: <PersonHeart24Regular />,
    description:
      "Autonomous agent that watches admission, discharge, and transfer events across systems, then triggers the right next action (referrals, follow-ups, social-work outreach) so high-risk patients don't fall through cross-team gaps. Integrates with Epic, Cerner, and Microsoft Fabric to produce one longitudinal view of every patient.",
  },
  {
    name: "Population Health Insights Agent",
    tagline: "Risk stratification on live data, not last year's report",
    icon: <HeartPulse24Regular />,
    description:
      "Risk-stratification and outcome-forecasting agent that runs on Microsoft Fabric or Databricks. Combines claims, clinical, and social determinants of health (SDoH) data to surface rising-risk cohorts and quantify intervention impact, so population health and value-based care teams act on live signals, not stale quality reports.",
  },
  {
    name: "Life Sciences Research Agent",
    tagline: "Cohort discovery from question to insight",
    icon: <Beaker24Regular />,
    description:
      "Unifies lab, clinical-trial, and real-world-evidence data into a governed research workspace on Microsoft Fabric and Databricks. Speeds cohort discovery, study-feasibility analysis, and 21 CFR Part 11-ready audit trails, so research teams move from question to insight without manual data wrangling.",
  },
];

const hlsImpactCards: ImpactCaseStudy[] = [
  {
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "AI agents reshaping clinical, operational, and research workflows across healthcare and life sciences.",
    imageUrl: "/images/case-studies/external/cs-reshaping-industries.jpg",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely, directly applicable to PHI-handling clinical and life-sciences environments.",
    imageUrl: "/images/case-studies/external/B034_CopilotSecurity_Banner.webp",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "A proven CoE blueprint for moving pilot interest into enterprise-wide adoption, particularly relevant for health systems and life-sciences orgs scaling AI safely.",
    imageUrl: "/images/case-studies/external/cs-transforming-ai-adoption.jpg",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
  {
    title: "Streamlining information retrieval with AI Copilots",
    teaser:
      "Clinicians and researchers retrieve citation-backed answers from clinical content and policy libraries.",
    imageUrl: "/images/case-studies/external/cs-streamlining-info-retrieval.jpg",
    href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
  },
];

export function IndustryHealthcareLifeSciences() {
  return (
    <>
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Healthcare & life sciences"
        subhead="Use AI to improve patient care, accelerate research, and turn sensitive health data into safer, faster decisions."
      />

      <AccordionShowcase
        sectionId="healthcare-solutions"
        title="Bring AI to the care continuum and the research lifecycle"
        items={hlsAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
      />
      <IndustryImpactCards
        title="Real impact for healthcare and life sciences leaders"
        cards={hlsImpactCards}
      />
    </>
  );
}
