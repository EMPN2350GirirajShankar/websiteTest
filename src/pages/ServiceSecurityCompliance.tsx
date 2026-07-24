import { makeStyles } from "@fluentui/react-components";
import {
  Shield24Regular,
  Globe24Regular,
  LockClosed24Regular,
  ArrowReset24Regular,
  ArrowSync24Regular,
} from "@fluentui/react-icons";
import { ServiceHero } from "../components/service/ServiceHero";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
// import { TrustBanner } from "../components/TrustBanner";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";
import type { CaseStudyItem } from "../components/service/ServiceCaseStudies";
import type { InsightItem } from "../components/service/ServiceInsights";
import type { TestimonialItem } from "../components/service/ServiceTestimonials";

const useVisualStyles = makeStyles({
  visual: {
    background: "transparent",
    border: "none",
    borderRadius: "12px",
    padding: "0",
    display: "grid",
    gap: "0",
    boxShadow: "none",
    color: "var(--maq-ink)",
  },
  heroImage: {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
});

function SecurityVisual() {
  const s = useVisualStyles();
  return (
    <div className={s.visual}>
      <img
        className={s.heroImage}
        src="/images/Service%20cards/Security.png"
        alt="Security and Governance"
      />
    </div>
  );
}

const capabilities: Capability[] = [
  {
    name: "Microsoft Purview",
    tagline: "Unified governance across enterprise data",
    icon: <LockClosed24Regular />,
    description:
      "Govern data enterprise-wide with cataloging, lineage, classification, and compliance management.",
    tags: ["Microsoft Purview", "Data Catalog", "Lineage", "Compliance"],
  },
  {
    name: "Microsoft Defender",
    tagline: "Intelligent protection against cyber threats",
    icon: <Shield24Regular />,
    description:
      "Defend enterprise environments with threat detection, endpoint security, identity protection, and automated incident response.",
    tags: ["Microsoft Defender", "Threat Detection", "Endpoint Security", "Incident Response"],
  },
  {
    name: "Microsoft Entra",
    tagline: "Modern identity and access security",
    icon: <Globe24Regular />,
    description:
      "Secure identities and access with identity management, authentication, and Zero Trust practices.",
    tags: ["Microsoft Entra", "Identity Management", "Authentication", "Zero Trust"],
  },
  {
    name: "Unity Catalog (Databricks)",
    tagline: "Centralized governance for data and AI",
    icon: <ArrowSync24Regular />,
    description:
      "Control data and AI assets from one place with fine-grained access, lineage tracking, and unified metadata.",
    tags: ["Unity Catalog", "Databricks", "Access Control", "Metadata"],
  },
  {
    name: "Data Governance & Compliance",
    tagline: "Govern data with confidence",
    icon: <ArrowReset24Regular />,
    description:
      "Establish governance frameworks that keep enterprise data secure, compliant, discoverable, and trusted.",
    tags: ["Data Governance", "Compliance", "Data Security", "Trust"],
  },
  {
    name: "Identity, Access & AI Governance",
    tagline: "Secure identities. Govern intelligent systems.",
    icon: <Shield24Regular />,
    description:
      "Manage identity, access, and AI governance controls that protect enterprise assets while enabling responsible AI adoption.",
    tags: ["Identity", "Access Control", "AI Governance", "Responsible AI"],
  },
];

const outcomes: OutcomeItem[] = [
  {
    icon: <Shield24Regular />,
    title: "Increased threat protection",
    desc: "Harden defenses against cyber threats and reduce the risk of breaches and downtime.",
  },
  {
    icon: <LockClosed24Regular />,
    title: "Data integrity",
    desc: "Keep data confidential and intact, protecting your most valuable assets.",
  },
  {
    icon: <ArrowSync24Regular />,
    title: "Operational continuity",
    desc: "Maintain business continuity with security controls that keep operations running through disruptions and attacks.",
  },
];

const caseStudies: CaseStudyItem[] = [
  {
    tag: "Secure Copilot",
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely — patterns, guardrails, and identity controls for production deployment.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    tag: "Cybersecurity",
    title: "Strengthening cybersecurity with Managed Identity and RBAC",
    teaser:
      "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access using RBAC across the cloud estate.",
    href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
  },
  {
    tag: "Data governance",
    title: "Unifying data management with a centralized framework",
    teaser:
      "Establishing centralized data governance and access controls across distributed systems for improved compliance posture.",
    href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
  },
];

const insights: InsightItem[] = [
  {
    title: "Strengthen your cloud security and protect your assets with 19 security best practices",
    teaser:
      "Field-tested Azure security best practices covering identity, network, data, and operations layers.",
    href: "/insights/azure-security-best-practices",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    title: "Strengthening cybersecurity with Managed Identity and RBAC",
    teaser:
      "Eliminate credential sprawl with Azure Managed Identity and enforce least-privilege access with RBAC.",
    href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
  },
];

const testimonials: TestimonialItem[] = [
  {
    body: "MAQ Software implemented a zero-trust architecture across our Azure tenant in under six weeks — our compliance audit passed with zero findings for the first time.",
    cite: "CISO — Enterprise financial services",
  },
  {
    body: "Their Sentinel deployment and custom detection rules cut our mean time to detect from days to minutes. The team operates like an extension of our own security org.",
    cite: "VP of IT Security — Global retailer",
  },
];

export function ServiceSecurityCompliance() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="Security & governance"
        subhead="Protect your data, enable trusted AI adoption, and strengthen compliance with Zero Trust security, enterprise governance, and continuous protection across your technology ecosystem."
        ctaMailSubject="Security & Compliance - MAQ Software"
        visual={<SecurityVisual />}
      />

      <ServiceCapabilities
        sectionId="security-capabilities"
        title="What you can achieve with security & governance"
        subhead="Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery."
        capabilities={capabilities}
        footerLabel="See security & governance case studies"
        footerHref="/insights/case-studies?filter=Security%20%26%20governance#insights-content"
        ariaLabel="Security and governance capabilities"
      />
      <ServiceOutcomes
        title="Your business outcomes"
        subhead="What organizations gain when security and compliance are delivered with engineering discipline."
        outcomes={outcomes}
      />
      <ServiceCaseStudies
        title="Security & governance in production"
        studies={caseStudies}
        serviceFilter="Security & governance"
        allCasesLabel="See all case studies"
        serviceSpecificLabel="See security case studies"
      />
      <ServiceInsights
        title="Related insights"
        subhead="See our research that goes into optimizing our security service."
        insights={insights}
      />
      {/* <ServiceTestimonials quotes={testimonials} /> */}
    </>
  );
}
