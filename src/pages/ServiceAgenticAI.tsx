import { Lightbulb, Settings, Rocket } from "lucide-react";
import { ServiceHero } from "../components/service/ServiceHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";

const outcomes: OutcomeGridItem[] = [
  {
    icon: <Lightbulb strokeWidth={0.75} />,
    title: "Sharper decisions",
    desc: "Make data-backed decisions faster with grounded AI insights, so teams act on evidence instead of instinct.",
  },
  {
    icon: <Settings strokeWidth={0.75} />,
    title: "Less manual work",
    desc: "Automate repetitive tasks and free your team for higher-value work.",
  },
  {
    icon: <Rocket strokeWidth={0.75} />,
    title: "Faster delivery",
    desc: "Ship new products faster by building AI and ML into the processes your teams already run.",
  },
];

// Tabbed by AI capability (build → ground → govern) so each tab is a distinct
// facet with a real customer story, mirroring the Data & AI platforms page.
const aiCaseStudyTabs: CaseStudyTab[] = [
  {
    label: "Agents & copilots",
    title: "Agents & copilots",
    blurb:
      "Build autonomous agents that run multi-step workflows end to end, and copilots that work alongside your teams in the tools they already use. Coordinate specialized agents on Azure AI Foundry, Azure OpenAI Service, and Microsoft Copilot Studio, governed for enterprise scale.",
    caseStudy: {
      title: "Reshaping industries with agentic AI solutions",
      teaser:
        "How agentic AI is deployed across functions and industries, from lead and knowledge agents to autonomous workflows.",
      href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
      imageUrl: "/images/case-studies/external/cs-reshaping-industries.jpg",
    },
  },
  {
    label: "Grounded AI (RAG)",
    title: "Grounded AI (RAG)",
    blurb:
      "Keep AI accurate and trustworthy by grounding large language models in your enterprise data. Retrieval-augmented generation surfaces citation-backed answers from your content, with row-level security and audit logging preserved.",
    caseStudy: {
      title: "Delivering accurate business answers with a Microsoft Fabric data agent",
      teaser:
        "A Fortune 500 conversational data agent that answers business questions directly from governed enterprise data on Microsoft Fabric.",
      href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
      imageUrl: "/images/case-studies/external/cs-delivering-accurate-business.png",
    },
  },
  {
    label: "Responsible AI & adoption",
    title: "Responsible AI & adoption",
    blurb:
      "Scale AI safely with security, governance, and responsible-AI guardrails, plus a Center of Excellence that moves pilots into production. Ship enterprise Copilots that stay compliant, explainable, and auditable.",
    caseStudy: {
      title: "Building a secure Copilot: Addressing key security challenges",
      teaser:
        "A reference design for shipping enterprise Copilots safely, addressing the key security challenges of production AI.",
      href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
      imageUrl: "/images/case-studies/external/B034_CopilotSecurity_Banner.webp",
    },
  },
];

export function ServiceAgenticAI() {
  return (
    <>
      <ServiceHero
        visual={
          <div
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "12px",
              padding: "0",
              boxShadow: "none",
            }}
          >
            <img
              src="/images/Service%20cards/Conversational AI.png"
              alt="AI Solutions and Agents"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        }
      />

      <ServiceOutcomesGrid title="Business outcomes" outcomes={outcomes} />
      <ServiceCaseStudyTabs
        sectionId="ai-capabilities"
        tabs={aiCaseStudyTabs}
        ariaLabel="AI capabilities and case studies"
      />
      <ServiceInsights />
      {/* <ServiceTestimonials /> */}
    </>
  );
}
