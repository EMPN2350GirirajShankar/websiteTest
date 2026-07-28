import { makeStyles, tokens } from "@fluentui/react-components";
import {
  BuildingShop24Regular,
  BuildingBank24Regular,
  Heart24Regular,
  BuildingFactory24Regular,
  Laptop24Regular,
  BuildingGovernment24Regular,
} from "@fluentui/react-icons";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FeatureCard } from "./cards/FeatureCard";

const useStyles = makeStyles({
  section: { padding: "32px var(--section-pad-x)", backgroundColor: tokens.colorNeutralBackground1 },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-text-muted)",
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

interface Industry {
  icon: ReactNode;
  name: string;
  heading: string;
  tagline: string;
  path: string;
}

const industries: Industry[] = [
  {
    icon: <BuildingShop24Regular />,
    name: "Retail & consumer goods",
    heading: "Retail & CPG",
    tagline:
      "AI is redefining how retailers operate, compete, and grow. At MAQ Software, we help retail and CPG organizations embed intelligence across the enterprise, from real-time decision-making to autonomous operations. Backed by deep Microsoft expertise and advanced data platforms, we enable seamless customer experiences, resilient supply chains, and intelligent store ecosystems.",
    path: "/industries/retail",
  },
  {
    icon: <BuildingBank24Regular />,
    name: "Financial services",
    heading: "Banking, insurance & capital markets",
    tagline:
      "Massive datasets, tightening regulation, and rising fraud demand more than incremental fixes. Leading banks, insurers, and capital markets firms are deploying AI agents that underwrite credit, close the books, monitor transactions, and keep compliance audit-ready—all on a governed data foundation. At MAQ Software, we build and deploy those agents on Microsoft Fabric, Snowflake, and Databricks—so your institution acts on decisions in hours, not days. As a Top 25 Global Microsoft Partner and Microsoft Fabric Featured Partner, we bring the partnerships, the platform expertise, and the production-grade delivery your finance transformation requires.",
    path: "/industries/financial-services",
  },
  {
    icon: <Laptop24Regular />,
    name: "Technology",
    heading: "Software & digital natives",
    tagline:
      "AI is reshaping how technology organizations build, test, and ship software. At MAQ Software, we help ISVs, cloud-native teams, and enterprise software organizations embed intelligence across the SDLC — from agentic code review to embedded analytics — so engineering teams spend less time on rework and more time on innovation.",
    path: "/industries/technology",
  },
  {
    icon: <BuildingFactory24Regular />,
    name: "Manufacturing",
    heading: "Industrial & supply chain",
    tagline:
      "Supply chain disruptions and manual vendor receipt processing are costing manufacturers time and margin they cannot afford to lose. Leading industrial organizations are deploying AI agents that monitor inventory in real time and automate goods receipt processing from delivery to ERP entry—all on a governed data foundation. At MAQ Software, we build and deploy those agents on Microsoft Fabric, Snowflake, and Databricks—connecting plant operations, supply chain, and procurement on a single platform. As a Top 25 Global Microsoft Partner and Microsoft Fabric Featured Partner, we take you from AI experimentation to enterprise-scale production—with governance, security, and measurable ROI built in.",
    path: "/industries/manufacturing",
  },
  {
    icon: <Heart24Regular />,
    name: "Healthcare & life sciences",
    heading: "Providers, payers & life sciences",
    tagline:
      "Healthcare and life sciences organizations face mounting pressure to improve outcomes, accelerate research, and modernize fragmented data estates — all while honoring HIPAA, 21 CFR Part 11, and other regulatory commitments. At MAQ Software, we help providers, payers, and life-sciences firms embed AI across the care continuum and the research lifecycle — from grounded clinical Copilots and care-coordination agents to population-health analytics and trial-data unification. Built on Microsoft Fabric, Databricks, and Snowflake, our solutions turn sensitive health data into safer decisions and faster discovery.",
    path: "/industries/healthcare-life-sciences",
  },
  {
    icon: <BuildingGovernment24Regular />,
    name: "Public sector",
    heading: "Government & mission",
    tagline:
      "Federal, state, and local agencies face mounting pressure to deliver faster citizen services, modernize aging systems, and protect sensitive data — all under audit-grade accountability. At MAQ Software, we help public-sector organizations embed AI across the mission stack — from citizen-facing chatbots and policy-knowledge Copilots to program analytics on Microsoft Fabric — with secure-by-design patterns aligned to FedRAMP, CJIS, and agency compliance frameworks. Our solutions turn fragmented government data into faster decisions and better outcomes for the citizens you serve.",
    path: "/industries/public-sector",
  },
];

export const Industries: FC = () => {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.section} id="industries">
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Industries</span> */}
          <h2 className={s.title}>Built for data-intensive industries</h2>
        </div>
        <div className={s.grid}>
          {industries.map((ind) => (
            <FeatureCard
              key={ind.name}
              icon={ind.icon}
              name={ind.name}
              heading={ind.heading}
              tagline={ind.tagline}
              ctaLabel="Learn more"
              tone="blue"
              onClick={() => navigate(ind.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
