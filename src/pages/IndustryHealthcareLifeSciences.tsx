import { makeStyles } from "@fluentui/react-components";
import {
  Chat24Regular,
  PersonHeart24Regular,
  HeartPulse24Regular,
  Beaker24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";

// --- Healthcare & Life Sciences hero visual ---
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
    display: "block",
  },
  triageGrid: { display: "flex", flexDirection: "column", gap: "6px" },
  triageRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  },
  triageLabel: { fontSize: "11px", color: "var(--maq-gray-600)", flex: 1 },
  barRow: { display: "flex", alignItems: "flex-end", gap: "5px", height: "40px" },
  bar: { flex: 1, background: "var(--maq-gray-200)", borderRadius: "3px 3px 0 0" },
  barRed: { background: "var(--maq-red)" },
  barLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4px",
  },
  barLabelText: { fontSize: "9px", color: "var(--maq-gray-500)", flex: 1, textAlign: "center" },
  trialRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" },
  trialLabel: { fontSize: "11px", width: "82px", color: "var(--maq-gray-500)" },
  trialTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  trialFill: { height: "100%", borderRadius: "3px" },
});

const triageRows = [
  { label: "Bed 12 · Sepsis risk", status: "critical" },
  { label: "Bed 07 · Post-op",     status: "watch" },
  { label: "ED · Chest pain",       status: "watch" },
  { label: "Bed 03 · Stable",       status: "stable" },
  { label: "Bed 19 · Ready for discharge", status: "discharge" },
];

const wardStages = [
  { label: "ICU",       h: 92 },
  { label: "Med-Surg",  h: 78 },
  { label: "ED",        h: 65 },
  { label: "Step-down", h: 48 },
];

const trialBands = [
  { label: "Phase I",   pct: "70%", color: "#22c55e" },
  { label: "Phase II",  pct: "45%", color: "#f59e0b" },
  { label: "Phase III", pct: "18%", color: "var(--maq-red)" },
];

function HealthcareHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <span className={v.tileTitle}>Patient triage queue</span>
        <div className={v.triageGrid}>
          {triageRows.map(({ label, status }) => (
            <div key={label} className={v.triageRow}>
              <span className={v.triageLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Ward occupancy today</span>
        <div className={v.barRow}>
          {wardStages.map(({ label, h }, i) => (
            <div key={label} className={`${v.bar} ${i === 0 ? v.barRed : ""}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className={v.barLabel}>
          {wardStages.map(({ label }) => (
            <span key={label} className={v.barLabelText}>{label}</span>
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Clinical research milestones</span>
        {trialBands.map(({ label, pct, color }) => (
          <div key={label} className={v.trialRow}>
            <span className={v.trialLabel}>{label}</span>
            <div className={v.trialTrack}>
              <div className={v.trialFill} style={{ width: pct, background: color }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// --- Healthcare & Life Sciences content data ---
const hlsStats = [
  {
    metric: "Agentic",
    label: "AI agents reshaping clinical, operational, and research workflows across healthcare and life sciences",
    sourceLabel: "Cross-industry agentic AI case study",
    sourceHref: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
  {
    metric: "HIPAA-ready",
    label: "Secure-by-design Copilot patterns for environments handling PHI and other regulated data",
    sourceLabel: "Secure Copilot case study",
    sourceHref: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    metric: "CoE-led",
    label: "Structured adoption playbook for moving healthcare AI pilots into production safely",
    sourceLabel: "AI Center of Excellence case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
  {
    metric: "Grounded",
    label: "Clinicians and researchers retrieve citation-backed answers from clinical content and policy libraries",
    sourceLabel: "AI Copilot information retrieval case study",
    sourceHref: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
  },
];

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

const hlsCases = [
  {
    tag: "AI frameworks",
    title: "Empowering businesses with AI: Frameworks that deliver results",
    teaser:
      "Field-tested AI frameworks — from knowledge bots to content generation — directly applicable to clinical and life-sciences workflows that demand measurable outcomes.",
    href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
  },
  {
    tag: "Secure Copilot",
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely — directly applicable to PHI-handling clinical and life-sciences environments.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    tag: "AI Center of Excellence",
    title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "A proven CoE blueprint for moving pilot interest into enterprise-wide adoption — particularly relevant for health systems and life-sciences orgs scaling AI safely.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
];

const hlsTestimonials = [
  {
    body: "MAQ Software's HIPAA-aligned Copilot rollout let our care teams retrieve cited policy and guideline answers without leaving the EHR. Information retrieval that used to take minutes now takes seconds.",
    cite: "VP, Clinical Informatics — Integrated health system (placeholder)",
  },
  {
    body: "Our research data was scattered across labs, trial systems, and partner repositories. MAQ Software unified it on Microsoft Fabric with 21 CFR Part 11-aligned audit trails — cohort discovery cycles dropped from weeks to days.",
    cite: "Director, Research Informatics — Global life sciences company (placeholder)",
  },
];

export function IndustryHealthcareLifeSciences() {
  return (
    <>
      <IndustryHero
        eyebrow="Healthcare & Life Sciences"
        h1="AI for care, compliance, and discovery across the health enterprise"
        subhead="Healthcare and life sciences organizations face pressure to improve outcomes, speed research, and modernize fragmented data estates, all while meeting HIPAA, 21 CFR Part 11, and other regulatory commitments. Providers, payers, and life sciences firms embed AI across the care continuum and the research lifecycle, from grounded clinical Copilots and care-coordination agents to population-health analytics and trial-data unification. MAQ Software builds it on Microsoft Fabric, Databricks, and Snowflake, turning sensitive health data into safer decisions and faster discovery."
        mailSubject="Healthcare & Life Sciences - MAQ Software"
        visual={<HealthcareHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for healthcare and life sciences leaders"
        sub="Patterns from MAQ Software cross-industry AI engagements applied to regulated, PHI-handling environments."
        stats={hlsStats}
      />
      <SolutionShowcase
        sectionId="hls-solutions"
        eyebrow="Agentic AI"
        title="Bring AI to the care continuum and the research lifecycle"
        agents={hlsAgents}
      />
      <IndustryCaseStudies
        eyebrow="Healthcare & life sciences case studies"
        title="How regulated organizations move faster with MAQ Software"
        cases={hlsCases}
        seeAllLabel="See all case studies"
        seeAllHref="/insights/case-studies#insights-content"
      />
      {/* <Testimonials quotes={hlsTestimonials} /> */}
    </>
  );
}
