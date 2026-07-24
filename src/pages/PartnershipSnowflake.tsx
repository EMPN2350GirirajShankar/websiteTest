import {
  Checkmark24Regular,
  Link24Regular,
  Shield24Regular,
  Money24Regular,
  LockClosed24Regular,
  ScaleFill24Regular,
} from "@fluentui/react-icons";
import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
// import { TrustBanner } from \"../components/TrustBanner\";

import { PartnershipHero } from "../components/partnerships/PartnershipHero";
import { PartnershipValueProps } from "../components/partnerships/PartnershipValueProps";
import { PartnershipHighlights } from "../components/partnerships/PartnershipHighlights";
import { PartnershipOverview } from "../components/partnerships/PartnershipOverview";
import { PartnershipOfferings } from "../components/partnerships/PartnershipOfferings";
import { PartnershipInsights } from "../components/partnerships/PartnershipInsights";
import { PartnershipMarketplace } from "../components/partnerships/PartnershipMarketplace";

// ---------------------------------------------------------------------------
// Styles for Marketplace section
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  marketSection: {
    padding: "48px 32px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  marketInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  marketHead: {
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  marketEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  marketTitle: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: 0,
    letterSpacing: "-0.02em",
    textAlign: "left" as const,
  },
  panelGrid: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "700px",
    margin: "0 auto",
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
    background: "#fff",
    transition: "all 0.2s",
    width: "100%",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  panelContent: {
    flex: 1,
  },
  panelSubhead: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 12px",
  },
  panelDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 0 16px",
  },
  bulletList: {
    margin: "0 0 20px 20px",
    padding: 0,
    listStyleType: "disc",
  },
  bulletItem: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    marginBottom: "6px",
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const whySnowflake = [
  { icon: <Checkmark24Regular />, title: "Easy", desc: "Managed platform that adapts to your business and teams" },
  { icon: <Link24Regular />, title: "Connected", desc: "Join, share and leverage data in friction free ecosystem" },
  { icon: <Shield24Regular />, title: "Trusted", desc: "Interoperability of data across clouds, with universal governance at scale" },
  { icon: <Money24Regular />, title: "Cost-Effective", desc: "Pay-as-you-use pricing—eliminating overprovisioning and reducing total cost of ownership." },
  { icon: <LockClosed24Regular />, title: "Secure", desc: "Ensure enterprise-grade data protection with end-to-end encryption, robust access controls, and compliance with global security standards." },
  { icon: <ScaleFill24Regular />, title: "Flexible", desc: "Seamlessly scale storage and compute independently to match your workload needs, whether for batch processing or real-time analytics." },
];

const highlights = [
  { metric: "150+", label: "SnowPro Core certified associates" },
  { metric: "25+", label: "SnowPro Advanced certified associates" },
  { metric: "10+", label: "Implementations for enterprise clients" },
  { metric: "1", label: "Marketplace offering" },
];

const offerings = [
  {
    eyebrow: "Migrate without downtime",
    title: "Data Warehouse Migration to Snowflake",
    desc: "Migrate to Snowflake from on-prem, legacy, or cloud sources with automated frameworks, optimized ETL, and zero-downtime execution, all secure end to end.",
  },
  {
    eyebrow: "Faster queries, faster decisions",
    title: "Business Intelligence with Snowflake & Power BI",
    desc: "Run Power BI on Snowflake with fast query execution and tuned data models. Snowflake's caching and elastic compute scaling deliver real-time analytics and interactive dashboards, so teams decide faster.",
  },
  {
    eyebrow: "Act on streaming data as it lands",
    title: "Real-Time Analytics",
    desc: "Ingest, process, and analyze streaming data in Snowflake for faster decisions. Built on Snowflake Streams, Tasks, and integrations like Kafka and Azure Event Hubs, so teams act on insights in real time.",
  },
  {
    eyebrow: "Predict, detect, and forecast",
    title: "Advanced Analytics and AI/ML",
    desc: "Build predictive analytics, anomaly detection, and automation on Snowflake AI/ML with Snowpark, Python, and ML models. From customer segmentation and fraud detection to demand forecasting, turn raw data into decisions and operational efficiency.",
  },
  {
    eyebrow: "Turn data into revenue",
    title: "Embedded Analytics and Data Monetization",
    desc: "Monetize data by embedding Snowflake analytics into applications and customer portals. With API-based data sharing, multi-tenant architectures, and white-labeled analytics, build revenue-generating insights.",
  },
];

const dataValidatorBullets = [
  {
    title: "Core capabilities",
    items: [
      <><strong>Row count check:</strong> validates that row counts between source and target tables are within a ±5% tolerance.</>,
      <><strong>Grain check:</strong> ensures primary keys are unique across source and destination tables.</>,
      <><strong>KPI check:</strong> compares custom KPI SQL logic or aggregated column values between source and destination, passing if the difference is within ±5%.</>,
    ],
  },
  {
    title: "Scheduling support",
    items: [
      "Schedule test cases with Snowflake Tasks for automatic execution, with full CRON-style configuration and time zone support.",
      "Results log automatically, including comparison values, pass/fail status, and metadata, for analysis in dashboards or the Show test cases view.",
    ],
  },
  {
    title: "User interface capabilities",
    items: [
      <><strong>Add test case:</strong> define test parameters such as databases, tables, columns, and SQL queries.</>,
      <><strong>Show test cases:</strong> view existing test cases by filters like table type and test type.</>,
      <><strong>Execute test case:</strong> run test cases on demand.</>,
      <><strong>View test results:</strong> see execution status, timestamps, result IDs, and pass/fail outcomes, with historical trend analysis.</>,
      <><strong>Schedule test cases:</strong> set a custom schedule to run checks automatically.</>,
    ],
  },
];

const blogs = [
  {
    title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
  },
  {
    title: "Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer",
    href: "https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html",
  },
  {
    title: "Enabling sales insights for global operations with Power BI and Snowflake",
    href: "https://blog.maqsoftware.com/2025/06/enabling-sales-insights-for-global.html",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipSnowflake() {
  const s = useStyles();
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Snowflake"
        subhead="Unify siloed data, scale analytics, and make smarter decisions on Snowflake. MAQ Software mobilizes data, enables secure collaboration, and delivers real-time insights across clouds and regions."
        ctaLabel="Contact us"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="/logos/Snowflake-hero.png"
        imageAlt="MAQ Software and Snowflake"
      />

      {/* <PartnershipValueProps
        title="Why Snowflake?"
        items={whySnowflake}
      /> */}
      <PartnershipHighlights
        title="Partnership highlights"
        stats={highlights}
      />
      <PartnershipOverview
        badgeUrl="/logos/Snowflake-Services-Select.png"
        badgeAlt="Snowflake Service Partner"
        description="As a Snowflake Technology Partner, MAQ Software runs end-to-end Snowflake implementations, performance and cost optimization, and analytics. Organizations integrate, transform, and report on data, then extend it to advanced analytics with Power BI, getting more from every Snowflake investment."
      />
      <PartnershipOfferings
        eyebrow="Our Offerings"
        title="What the Snowflake partnership delivers"
        sectionId="snowflake-offerings"
        offerings={offerings}
      />
      <PartnershipInsights
        eyebrow="Insights"
        title="Related blogs and case studies"
        items={blogs}
      />
      <PartnershipMarketplace
        title="Data Validator"
        sectionId="snowflake-marketplace"
        intro="Begin your  Real-Time Intelligence(RTI) journey today"
        bulletGroups={dataValidatorBullets}
        ctaLabel="Learn more"
        ctaHref="https://app.snowflake.com/marketplace/listing/GZ1MBZD8CA9/maq-software-data-validator?originPage=app"
        ctaOpenInNewTab
      />
    </>
  );
}
