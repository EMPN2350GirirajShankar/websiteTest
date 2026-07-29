import { ShieldCheck, Lock, RefreshCw } from "lucide-react";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";
import type { InsightItem } from "../components/service/ServiceInsights";

const outcomes: OutcomeGridItem[] = [
  {
    icon: <ShieldCheck strokeWidth={0.75} />,
    title: "Increased threat protection",
    desc: "Harden defenses against cyber threats and reduce the risk of breaches and downtime.",
  },
  {
    icon: <Lock strokeWidth={0.75} />,
    title: "Data integrity",
    desc: "Keep data confidential and intact, protecting your most valuable assets.",
  },
  {
    icon: <RefreshCw strokeWidth={0.75} />,
    title: "Operational continuity",
    desc: "Maintain business continuity with security controls that keep operations running through disruptions and attacks.",
  },
];

// Tabbed by what you're protecting (access → data → AI) so each tab is a distinct
// facet with a real customer story, mirroring the other service pages.
const securityCaseStudyTabs: CaseStudyTab[] = [
  {
    label: "Identity & threat protection",
    title: "Identity & threat protection",
    blurb:
      "Assume breach and verify everything. We secure identities and access with Microsoft Entra and Zero Trust, defend endpoints and workloads with Microsoft Defender, and enforce least-privilege access with managed identity and RBAC across your cloud estate.",
    caseStudy: {
      title: "Strengthening cybersecurity with Managed Identity and RBAC",
      teaser:
        "How an enterprise eliminated credential sprawl with Azure Managed Identity and enforced least-privilege access with RBAC.",
      href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
      imageUrl: "/images/case-studies/external/B035_Cybersecurity_Banner.webp",
    },
  },
  {
    label: "Data governance & compliance",
    title: "Data governance & compliance",
    blurb:
      "Know where your data is, who can reach it, and prove it's compliant. We establish enterprise governance with Microsoft Purview and Databricks Unity Catalog — cataloging, lineage, classification, and fine-grained access — so data stays secure, discoverable, and trusted.",
    caseStudy: {
      title: "Unifying data management with a centralized framework",
      teaser:
        "How centralized governance and access controls across distributed systems improved an enterprise's compliance posture.",
      href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
      imageUrl: "/images/case-studies/external/CS082-banner.webp",
    },
  },
  {
    label: "AI governance & responsible AI",
    title: "AI governance & responsible AI",
    blurb:
      "Adopt AI without opening new risk. We put governance and responsible-AI guardrails around copilots and agents — identity, access, and data controls that keep enterprise AI secure, explainable, and compliant as you scale.",
    caseStudy: {
      title: "Building a secure Copilot: Addressing key security challenges",
      teaser:
        "A reference design for shipping enterprise Copilots safely, addressing the key security challenges of production AI.",
      href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
      imageUrl: "/images/case-studies/external/B034_CopilotSecurity_Banner.webp",
    },
  },
];

const insights: InsightItem[] = [
  {
    title:
      "Strengthen your cloud security and protect your assets with 19 security best practices",
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

export function ServiceSecurityCompliance() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="Security & governance"
        subhead="Protect your data, enable trusted AI adoption, and strengthen compliance with Zero Trust security, enterprise governance, and continuous protection across your technology ecosystem."
        visual={
          <div
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "12px",
              padding: "0",
              boxShadow: "none",
            }}
          >
            <img
              src="/images/Service%20cards/Security.png"
              alt="Security and Governance"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        }
      />

      <ServiceOutcomesGrid title="Business outcomes" outcomes={outcomes} />
      <ServiceCaseStudyTabs
        sectionId="security-capabilities"
        tabs={securityCaseStudyTabs}
        ariaLabel="Security and governance capabilities and case studies"
      />
      <ServiceInsights title="Related insights" insights={insights} />
      {/* <ServiceTestimonials /> */}
    </>
  );
}
