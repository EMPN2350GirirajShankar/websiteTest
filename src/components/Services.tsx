import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Bot24Regular,
  DataPie24Regular,
  ChartMultiple24Regular,
  AppFolder24Regular,
  Cloud24Regular,
  ShieldCheckmark24Regular,
  PeopleTeam24Regular,
} from "@fluentui/react-icons";
import type { FC, ReactNode } from "react";
import {useNavigate} from "react-router-dom";
import { FeatureCard } from "./cards/FeatureCard";
import { textStyles } from "../textStyles";

const useStyles = makeStyles({
  section: { padding: "32px var(--section-pad-x)", backgroundColor: tokens.colorNeutralBackground1 },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
  eyebrow: {
    ...textStyles.eyebrow,
    marginBottom: "12px",
    display: "block",
  },
  title: {
    ...textStyles.sectionHeading,
    display: "block",
    margin: "0 0 12px",
    textAlign: "left",
  },
  sub: {
    ...textStyles.body,
    display: "block",
    maxWidth: "640px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1120px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
});

interface Svc {
  icon: ReactNode;
  name: string;
  heading?: string;
  tagline?: string;
  bullets?: string[];
  desc?: string;
  path: string;
}

const services: Svc[] = [
  {
    icon: <DataPie24Regular />,
    name: "Data & AI Platforms",
    heading: "Modern Data Foundations for Enterprise AI",
    tagline: "Unify Data. Accelerate AI. Drive Business Value.",
    bullets: [
      "Microsoft Fabric",
      "Databricks",
      "Snowflake AI Data Cloud",
      "Azure Data Factory",
      "Lakehouse & Data Warehouse Modernization",
      "Master Data Management (MDM)",
    ],
    path: "/services/data-and-analytics",
  },
  {
    icon: <Bot24Regular />,
    name: "AI Solutions & Agents",
    heading: "From Copilots to Autonomous Agents",
    tagline: "Automate Decisions. Enhance Productivity. Accelerate Outcomes.",
    bullets: [
      "Azure AI Foundry",
      "Azure OpenAI Service",
      "Microsoft Copilot Studio",
      "Agentic AI & Multi-Agent Systems",
      "Retrieval-Augmented Generation (RAG)",
      "AI Governance & Responsible AI",
    ],
    path: "/services/agentic-ai",
  },
  {
    icon: <ChartMultiple24Regular />,
    name: "Insights & Analytics",
    heading: "Transform Data into Actionable Intelligence",
    tagline: "Discover Trends. Drive Decisions. Accelerate Growth.",
    bullets: [
      "Power BI",
      "Microsoft Fabric Real-Time Intelligence",
      "Databricks SQL",
      "Executive Dashboards & KPI Reporting",
      "Self-Service Analytics",
      "Predictive & Prescriptive Analytics",
    ],
    path: "/services/reporting-bi",
  },
  {
    icon: <AppFolder24Regular />,
    name: "Business Applications & Automation",
    heading: "Intelligent Applications for Modern Business",
    tagline: "Connect Workflows. Increase Productivity. Enable Growth.",
    bullets: [
      "Dynamics 365",
      "Microsoft Power Platform",
      "Power Apps",
      "Power Automate",
      "Customer 360",
      "Workflow Automation & Process Optimization",
    ],
    path: "/services/business-apps",
  },
  {
    icon: <Cloud24Regular />,
    name: "Cloud Modernization",
    heading: "Modernize Faster. Innovate Without Limits.",
    tagline: "Migrate Securely. Optimize Costs. Scale Confidently.",
    bullets: [
      "Microsoft Azure",
      "Azure Kubernetes Service (AKS)",
      "Cloud-Native Application Development",
      "Application & Data Platform Migration",
      "Infrastructure Modernization",
      "FinOps & Cloud Cost Optimization",
    ],
    path: "/services/cloud",
  },
  {
    icon: <ShieldCheckmark24Regular />,
    name: "Security & Governance",
    heading: "Govern Data. Secure AI. Manage Risk.",
    tagline: "Protect Assets. Ensure Compliance. Enable Trust.",
    bullets: [
      "Microsoft Purview",
      "Microsoft Defender",
      "Microsoft Entra",
      "Unity Catalog (Databricks)",
      "Data Governance & Compliance",
      "Identity, Access & AI Governance",
    ],
    path: "/services/security-compliance",
  },
  /* {
    icon: <PeopleTeam24Regular />,
    name: "Workplace Transformation & Productivity",
    heading: "Empower People. Modernize Work.",
    tagline: "Drive Adoption. Boost Productivity. Sustain Change.",
    bullets: [
      "Microsoft 365",
      "Microsoft Teams",
      "SharePoint",
      "Microsoft Copilot",
      "Change Management & Adoption",
      "Employee Experience & Collaboration",
    ],
    path: "/services/workplace-transformation",
  }, */ 
];

export const Services: FC = () => {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.section} id="services">
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>What we do</span> */}
          <h2 className={s.title}>
            Capabilities That Accelerate Growth
          </h2>
        </div>
        <div className={s.grid}>
          {services.map((svc) => (
            <FeatureCard
              key={svc.name}
              icon={svc.icon}
              name={svc.name}
              heading={svc.heading}
              tagline={svc.tagline}
              bullets={svc.bullets}
              description={svc.desc}
              ctaLabel="Learn more"
              tone="blue"
              onClick={() => navigate(svc.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
