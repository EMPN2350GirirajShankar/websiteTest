import { makeStyles } from "@fluentui/react-components";
import {
  Bot24Regular,
  Cloud24Regular,
  AppFolder24Regular,
  ChartMultiple24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import type { ReactNode } from "react";
import { ProductCard } from "./cards/ProductCard";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
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
    color: "var(--maq-gray-700)",
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

interface Product {
  icon: ReactNode;
  name: string;
  slug: string;
  tagline: string;
  desc: string;
  tags: string[];
}

const products: Product[] = [
  {
    icon: <Bot24Regular />,
    name: "Fabric Admin Agent",
    slug: "fabric-admin-agent",
    tagline: "Fabric Workload",
    desc: "Fabric Admin Agent transforms Microsoft Fabric capacity management from reactive monitoring to proactive optimization. Using AI-driven insights, it detects anomalies, predicts demand, and recommends actions to prevent throttling, improve performance, and reduce costs. The result is a self-service administrative experience that enables platform teams to maximize Fabric investments while minimizing operational overhead.",
    tags: ["Fabric Workload"],
  },
  {
    icon: <Cloud24Regular />,
    name: "MigrateFAST",
    slug: "migratefast",
    tagline: "Migration accelerator",
    desc: "MigrateFAST automates the end-to-end migration process—from legacy environment assessment and dependency analysis to report conversion, DAX generation, and validation. Organizations can migrate from Tableau, Cognos, SAP BusinessObjects, SAP Crystal Reports, MicroStrategy, Qlik, Alteryx, and Informatica with greater speed, accuracy, and confidence—reducing migration costs and accelerating time to value on Microsoft Fabric.",
    tags: ["Fabric", "Power BI", "AI Powered"],
  },
  {
    icon: <ChartMultiple24Regular />,
    name: "AI-DataLens",
    slug: "ai-datalens",
    tagline: "Conversational analytics",
    desc: "AI Data Lens - Accelerate data-driven decision-making with natural language access to enterprise datasets. Users can ask questions and receive instant answers without technical expertise, while preserving row-level security, governance, and audit compliance.",
    tags: ["Gen AI", "Power BI", "Conversational AI"],
  },
  {
    icon: <AppFolder24Regular />,
    name: "EmbedFAST",
    slug: "embedfast",
    tagline: "Power BI embedding",
    desc: "EmbedFAST enables organizations to deliver embedded analytics faster and at scale. With role-based access control, unlimited tenant and workspace onboarding, and customizable experiences, it simplifies deployment, reduces licensing overhead, and helps users access insights directly within the applications they use every day.",
    tags: ["Power BI", "SaaS"],
  },
  {
    icon: <DataPie24Regular />,
    name: "LoadFAST",
    slug: "loadfast",
    tagline: "Power BI load testing",
    desc: "LoadFAST gives organizations a scalable way to validate Microsoft Fabric and Power BI performance before deployment. By simulating concurrent users, measuring report and visual load times, and identifying performance bottlenecks, LoadFAST helps teams optimize reports, accurately size Fabric capacity, and deliver a consistent user experience with confidence.",
    tags: ["Power BI", "Performance"],
  },
  {
    icon: <ShieldCheckmark24Regular />,
    name: "CertyFAST",
    slug: "certyfast",
    tagline: "Power BI quality control",
    desc: "CertyFAST helps organizations build and maintain high-quality Power BI semantic models. By automating error detection, DAX standardization, and documentation, it improves consistency, reduces development effort, and ensures adherence to modeling best practices.",
    tags: ["Power BI", "Quality", "Governance"],
  },
]; 

export function Products() {
  const s = useStyles();
  return (
    <section className={s.section} id="products">
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Our products</span> */}
          <h2 className={s.title}>
            Acceleration that compresses months into weeks
          </h2>
          {/* <p className={s.sub}>
            AppSource-listed products built from real customer engagements.
          </p> */}
        </div>
        <div className={s.grid}>
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              logoNode={p.icon}
              tagline={p.tagline}
              description={p.desc}
              to={`/products/${p.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
