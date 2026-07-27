import {
  Lightbulb24Regular,
  ChartMultiple24Regular,
  Search24Regular,
  Bot24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHeroV2 } from "../components/industry/IndustryHeroV2";
import { IndustryImpactCards } from "../components/industry/IndustryImpactCards";
import type { ImpactCaseStudy } from "../components/industry/IndustryImpactCards";
import { AccordionShowcase } from "../components/industry/AccordionShowcase";

// --- Technology content data ---
const technologyAgents = [
  {
    name: "DevelopFAST",
    tagline: "SDLC accelerator",
    icon: <Lightbulb24Regular />,
    description:
      "SDLC assistant that combines Azure OpenAI with Azure Search Services to interpret requirements and generate development artifacts. Pulls project context, code context, and wiki documentation to produce user stories, architecture recommendations, best practices, test cases, alternative approaches, pseudocode, and code files.",
  },
  {
    name: "Demomate (Video generator agent)",
    tagline: "Marketing demo video automation",
    icon: <ChartMultiple24Regular />,
    description:
      "Multi-agent system that creates marketing demo videos from your scripts. Runs application workflows through Playwright, records the session, generates narration with vision models and TTS, and produces a finished, synchronized video.",
  },
  {
    name: "Test case generator",
    tagline: "AI-assisted test scenario recommendation",
    icon: <Bot24Regular />,
    description:
      "Recommends test cases to speed development. Analyzes code and suggests relevant test scenarios, improving coverage and cutting manual testing effort.",
  },
  {
    name: "Code reviewer agent",
    tagline: "Multi-agent Python code review",
    icon: <Search24Regular />,
    description:
      "Code review agent that runs a three-stage multi-agent pipeline (Static Analyst, Remediation Specialist, and Senior Architect) to detect issues, generate fixes, and give architectural feedback on Python source. Static analysis (ruff, bandit, radon) feeds findings to the Remediation and Senior Architect agents running in parallel via asyncio, with results shown in a React and Vite frontend: a real-time agent activity feed, a health score ring, and a tabbed results view.",
  },
];

const technologyImpactCards: ImpactCaseStudy[] = [
  {
    title: "Modernizing the software development lifecycle with GitHub Copilot",
    teaser: "Adopt GitHub Copilot at scale to lift dev productivity and quality.",
    imageUrl: "/images/case-studies/external/cs-modernizing-software-dev.jpg",
    href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
  {
    title: "Delivering embedded Power BI reporting with EmbedFAST",
    teaser: "Faster embedded analytics rollout, a 12-month roadmap delivered in 3 months.",
    imageUrl: "/images/case-studies/external/cs-embedded-powerbi.png",
    href: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
  },
  {
    title: "Get ideas to code from months to hours with DevelopFAST",
    teaser: "Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST.",
    imageUrl: "/images/case-studies/external/cs-developfast.jpg",
    href: "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
  },
  {
    title: "Accelerating software development with agentic AI solutions",
    teaser: "Agentic AI woven through SDLC to accelerate coding, review and release.",
    imageUrl: "/images/case-studies/external/software-developer-stock.webp",
    href: "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
  },
];

export function IndustryTechnology() {
  return (
    <>
      <IndustryHeroV2
        eyebrow="Industries"
        h1="Technology"
        subhead="Use AI across the software development lifecycle, from code review to embedded analytics, so your teams spend less time on rework and more on building new features."
      />

      <AccordionShowcase
        sectionId="technology-solutions"
        title="Technology agents for your engineering teams"
        items={technologyAgents.map((a) => ({
          icon: a.icon,
          title: a.name,
          desc: a.description,
        }))}
      />
      <IndustryImpactCards
        title="Real impact for technology leaders"
        cards={technologyImpactCards}
      />
    </>
  );
}
