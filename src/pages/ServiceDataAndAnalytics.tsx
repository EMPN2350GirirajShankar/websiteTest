import {
  Layer24Regular,
  Database24Regular,
  Cloud24Regular,
} from "@fluentui/react-icons";
import { ShieldCheck, Sparkles, TrendingUp, Lock } from "lucide-react";
import { ServiceHeroData } from "../components/service/ServiceHeroData";
// import { TrustBanner } from \"../components/TrustBanner\";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudiesData } from "../components/service/ServiceCaseStudiesData";
import { ServiceInsightsData } from "../components/service/ServiceInsightsData";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ServiceDifferentiator } from "../components/service/ServiceDifferentiator";
// import { ServiceTestimonialsData } from "../components/service/ServiceTestimonialsData";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";

const DATA_ANALYTICS_CASE_STUDIES_CONFIG = {
  serviceFilter: "Data & AI platforms",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See data & AI platforms case studies",
};

const capabilities: Capability[] = [
  {
    name: "Microsoft Fabric",
    icon: <Layer24Regular />,
    description:
      "Build a unified analytics platform on Microsoft Fabric that brings data engineering, warehousing, real-time analytics, and business intelligence into one AI-ready environment.",
  },
  {
    name: "Azure Databricks",
    icon: <Database24Regular />,
    description:
      "Engineer data pipelines and AI on Databricks for analytics, machine learning, collaborative notebooks, and large-scale data processing.",
  },
  {
    name: "Snowflake",
    icon: <Cloud24Regular />,
    description:
      "Modernize enterprise data on Snowflake with secure data sharing, analytics, AI workloads, and cross-cloud collaboration.",
  },
];

const platformCaseStudies: CaseStudyTab[] = [
  {
    label: "Microsoft Fabric",
    title: "Microsoft Fabric",
    blurb:
      "Your business moves faster when every team works from the same trusted data. Microsoft Fabric unifies data engineering, data warehousing, real-time analytics, and business intelligence in a single governed platform, reducing complexity while creating the foundation for enterprise analytics and AI.",
    caseStudy: {
      title:
        "Unifying disconnected data systems using Microsoft Fabric and OneLake",
      teaser:
        "Siloed enterprise data unified on OneLake for a single governed surface powering analytics, reporting and AI.",
      href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
      imageUrl: "/images/case-studies/external/person-analyzing-report.webp",
    },
  },
  {
    label: "Azure Databricks",
    title: "Azure Databricks",
    blurb:
      "Your teams innovate faster when they can turn data into intelligence. Azure Databricks brings together data engineering, machine learning, and AI development in a collaborative, open platform, helping organizations build scalable data pipelines, deploy advanced models, and accelerate AI solutions.",
    caseStudy: {
      title: "Unlocking advanced analytics with Databricks",
      teaser:
        "How a retailer unlocked advanced analytics at scale with the Databricks lakehouse.",
      href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html",
      imageUrl:
        "/images/case-studies/external/unlocking-advanced-analytics-with-databricks.webp",
    },
  },
  {
    label: "Snowflake",
    title: "Snowflake",
    blurb:
      "Your data creates more value when teams can securely access and collaborate on it. Snowflake enables governed data sharing across clouds and environments, helping organizations activate enterprise data for analytics, AI workloads, and new business opportunities.",
    caseStudy: {
      title:
        "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
      teaser:
        "How a retailer sped up data refresh by integrating Snowflake iceberg tables with Microsoft Fabric.",
      href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
      imageUrl: "/images/case-studies/external/snowflake-iceberg-cover.webp",
    },
  },
];

const outcomes: OutcomeGridItem[] = [
  {
    icon: <Sparkles strokeWidth={0.75} />,
    title: "AI-ready foundation",
    desc: "Prepare your business for copilots, agents, and AI applications with trusted, scalable data.",
  },
  {
    icon: <ShieldCheck strokeWidth={0.75} />,
    title: "Trusted insights",
    desc: "Empower every team with timely, reliable insights built on governed enterprise data.",
  },
  {
    icon: <TrendingUp strokeWidth={0.75} />,
    title: "Data-driven decisions",
    desc: "Turn enterprise data into actionable intelligence that helps leaders make faster, more informed decisions.",
  },
  {
    icon: <Lock strokeWidth={0.75} />,
    title: "Enterprise governance",
    desc: "Protect your data with security, lineage, and governance that support compliance and build trust.",
  },
];

export function ServiceDataAndAnalytics() {
  return (
    <>
      <ServiceHeroData />
{/* 
      <ServiceCapabilities
        sectionId="data-analytics-capabilities"
        title="Partner platforms"
        variant="grid"
        hideFooter
        bareCards
        capabilities={capabilities}
        ariaLabel="Data and AI platform capabilities"
      /> */}
      <ServiceOutcomesGrid title="Business outcomes" outcomes={outcomes} />
      <ServiceCaseStudyTabs
        sectionId="data-analytics-platform-case-studies"
        tabs={platformCaseStudies}
        ariaLabel="Case studies by data platform"
      />
      <ServiceDifferentiator
        title="Why MAQ Software"
        image="/images/maq-process-diagram.png"
        imageAlt="MAQ Software delivery process: Assess, Design, Migrate & build, Validate, and Optimize"
      />
      {/* <ServiceCaseStudiesData {...DATA_ANALYTICS_CASE_STUDIES_CONFIG} /> */}
      <ServiceInsightsData />
      {/* <ServiceTestimonialsData /> */}
    </>
  );
}
