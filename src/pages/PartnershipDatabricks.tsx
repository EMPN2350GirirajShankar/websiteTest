import {
  Checkmark24Regular,
  Link24Regular,
  Shield24Regular,
  Sparkle24Regular,
  Lightbulb24Regular,
  People24Regular,
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
const whyDatabricks = [
  { icon: <Checkmark24Regular />, title: "Unified", desc: "One platform for all your data, analytics, and AI needs." },
  { icon: <Sparkle24Regular />, title: "Scalable", desc: "Effortlessly grow with your business and data demands." },
  { icon: <People24Regular />, title: "Collaborative", desc: "Empower teams to innovate together in real time." },
  { icon: <Shield24Regular />, title: "Secure", desc: "Enterprise-grade security to safeguard your information." },
  { icon: <Lightbulb24Regular />, title: "Fast", desc: "Accelerate insights with lightning-speed processing." },
  { icon: <Link24Regular />, title: "Innovative", desc: "Stay ahead with the latest AI and analytics advancements." },
];

const highlights = [
  { metric: "34+", label: "Databricks data engineering associates" },
  { metric: "7+", label: "Databricks data engineering professionals" },
  { metric: "66+", label: "Databricks sales badges" },
  // { metric: "", label: "Global client engagements" },
];

const offerings = [
  {
    eyebrow: "Data-first engineering",
    title: "Data Engineering",
    desc: "Build and optimize data pipelines on Databricks for reliable transformations and efficient workflows.",
  },
  {
    eyebrow: "ML lifecycles made practical",
    title: "Data Science and Machine Learning",
    desc: "Develop, train, and deploy machine learning models on Databricks, then integrate predictions into your business systems.",
  },
  {
    eyebrow: "Insights at scale",
    title: "Business Intelligence",
    desc: "Create interactive dashboards and analytics so teams visualize data and make informed decisions.",
  },
  {
    eyebrow: "Analytics at massive scale",
    title: "Big Data Analytics",
    desc: "Analyze large datasets fast on Databricks for real-time analytics and clear insights.",
  },
  {
    eyebrow: "Governance and security",
    title: "Unity Catalog for Data Security and Governance",
    desc: "Govern data with Unity Catalog for integrity, security, and compliance, backed by continuous monitoring.",
  },
  {
    eyebrow: "Flexible storage",
    title: "Data Lakes and Warehousing",
    desc: "Implement data lakes and warehouses for cost-effective storage and fast access to large datasets.",
  },
  {
    eyebrow: "Real-time processing",
    title: "Real-Time Data Processing",
    desc: "Process streaming data in real time so teams respond instantly to data changes and market shifts.",
  },
];

const guides = [
  { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
  { title: "Databricks best practice guide", href: "/insights/databricks-best-practices" },
  { title: "Databricks best practice guide", href: "/insights/azure-databricks-best-practices" },
  { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
  { title: "Real-time structured streaming in Databricks: Powering modern data applications", href: "https://blog.maqsoftware.com/2025/09/real-time-structured-streaming-in.html" },
  { title: "Databricks Genie and AI/BI Dashboards: Revolutionizing data analytics", href: "https://blog.maqsoftware.com/2025/09/databricks-genie-and-aibi-dashboards.html" },
];

const guideBulletGroups = [
  {
    title: "Guides",
    items: guides.map((g) => {
      const isLocal = g.href.startsWith("/");
      return (
        <a
          key={g.href}
          href={g.href}
          target={isLocal ? undefined : "_blank"}
          rel={isLocal ? undefined : "noreferrer"}
        >
          {g.title}
        </a>
      );
    }),
  },
];

const blogs = [
  { title: "Delivering personalization intelligence with MLOps and Databricks CI/CD framework", href: "https://blog.maqsoftware.com/2025/08/delivering-personalization-intelligence.html" },
  { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
  { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipDatabricks() {
  const s = useStyles();
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Databricks"
        subhead="Turn data into decisions on Databricks. MAQ Software builds analytics, integration, and AI accelerators on the Databricks Lakehouse, so your teams get reliable data, faster models, and governed access at scale."
        ctaLabel="Contact us"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="/logos/databricks.png"
        imageAlt="MAQ Software and Databricks"
      />



      {/* <PartnershipValueProps eyebrow="Our advantage" title="Why Databricks?" items={whyDatabricks} /> */}

      <PartnershipHighlights title="Partnership highlights" stats={highlights} />

      <PartnershipOverview
        badgeUrl="/logos/databricks-partner.png"
        badgeAlt="Databricks partner"
        description="As a Databricks Technology Partner, MAQ Software brings deep expertise across the Databricks platform, from implementing new data workloads to optimizing what you already run."
      />

      <PartnershipOfferings title="What you can build on Databricks" sectionId="databricks-offerings" offerings={offerings} />

      <PartnershipInsights eyebrow="Insights" title="Related blogs and case studies" items={blogs} />

      <PartnershipMarketplace title="Databricks guides" sectionId="databricks-guides" intro="" bulletGroups={guideBulletGroups} ctaLabel="Case studies" ctaHref="/insights" />

    </>
  );
}
