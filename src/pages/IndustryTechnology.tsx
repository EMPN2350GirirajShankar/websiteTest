import { makeStyles } from "@fluentui/react-components";
import {
  Lightbulb24Regular,
  ChartMultiple24Regular,
  Search24Regular,
  Bot24Regular,
  Code24Regular,
  BranchFork24Regular,
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
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  pipelineBars: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  pipelineRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  pipelineLabel: { fontSize: "11px", color: "var(--maq-gray-500)", width: "50px" },
  pipelineTrack: { flex: 1, height: "8px", background: "var(--maq-gray-100)", borderRadius: "4px" },
  pipelineFill: { height: "100%", borderRadius: "4px" },
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
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
  scoreLabel: { fontSize: "11px", color: "var(--maq-gray-500)" },
});

const sparkHeights = [35, 55, 45, 70, 60, 85, 75, 92];

function TechnologyHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <BranchFork24Regular /> CI/CD Pipeline
        </div>
        <div className={v.pipelineBars}>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Build</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "92%", background: "#16a34a" }} />
            </div>
          </div>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Test</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "78%", background: "var(--maq-red)" }} />
            </div>
          </div>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Deploy</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "65%", background: "#2563eb" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <Code24Regular /> Developer Velocity
        </div>
        <div className={v.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={v.bar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>Test Coverage</div>
        <div className={v.scoreBox}>
          <span className={v.scoreValue}>94%</span>
          <span className={v.scoreLabel}>Overall coverage</span>
        </div>
      </div>
    </>
  );
}

// --- Technology content data ---
const technologyStats = [
  {
    metric: "~70%",
    label: "Faster feature delivery via AI-assisted rapid prototyping at a global software company",
    sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
  {
    metric: "4×",
    label: "Faster embedded analytics rollout, a 12-month roadmap delivered in 3 months",
    sourceLabel: "Delivering embedded Power BI reporting with EmbedFAST",
    sourceHref: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
  },
  {
    metric: "~90%",
    label: "Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST",
    sourceLabel: "Get ideas to code from months to hours with DevelopFAST",
    sourceHref: "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
  },
  {
    metric: "~50%",
    label: "Test case creation time saved with AI-generated test suites",
    sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
];

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

const technologyCases = [
  {
    tag: "Agentic AI",
    title: "Accelerating software development with agentic AI solutions",
    teaser:
      "Agentic AI woven through SDLC to accelerate coding, review and release.",
    href: "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
  },
  {
    tag: "GitHub Copilot",
    title: "Modernizing the software development lifecycle with GitHub Copilot",
    teaser:
      "Adopt GitHub Copilot at scale to lift dev productivity and quality.",
    href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
];

export function IndustryTechnology() {
  return (
    <>
      <IndustryHero
        eyebrow="Technology & Software"
        h1="Build, test, and ship software faster with AI"
        subhead="ISVs, cloud-native teams, and enterprise software organizations embed AI across the SDLC, from agentic code review to embedded analytics. MAQ Software builds it, so engineering teams spend less time on rework and more on new features."
        mailSubject="Technology - MAQ Software"
        visual={<TechnologyHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for technology leaders"
        sub="Numbers from MAQ Software engagements with global ISVs and enterprise software organizations."
        stats={technologyStats}
      />
      <SolutionShowcase
        sectionId="technology-solutions"
        eyebrow="Agentic AI"
        title="Technology agents for your engineering teams"
        agents={technologyAgents}
        industryLabel="Technology"
      />
      <IndustryCaseStudies
        eyebrow="Technology case studies"
        title="How technology organizations move faster with MAQ Software"
        cases={technologyCases}
        seeAllLabel="See all technology case studies"
        seeAllHref="/insights/case-studies?industry=Technology#insights-content"
        uniformCardWidth
      />
    </>
  );
}
