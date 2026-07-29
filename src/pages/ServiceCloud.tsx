import { PiggyBank, ShieldCheck, Activity } from "lucide-react";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ServiceCloudInsights } from "../components/service/ServiceCloudInsights";
// import { ServiceCloudTestimonials } from "../components/service/ServiceCloudTestimonials";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";

const outcomes: OutcomeGridItem[] = [
  {
    icon: <PiggyBank strokeWidth={0.75} />,
    title: "Lower run cost",
    desc: "Cut cloud run cost 30–40% on average across enterprise workloads modernized on Azure, with FinOps discipline.",
  },
  {
    icon: <ShieldCheck strokeWidth={0.75} />,
    title: "Enhanced security",
    desc: "Protect data and meet compliance with cloud security built into every layer.",
  },
  {
    icon: <Activity strokeWidth={0.75} />,
    title: "Operational resilience",
    desc: "Build infrastructure that adapts to disruptions and keeps operations running.",
  },
];

// Tabbed by the cloud journey (migrate → build cloud-native → optimize). Cloud's
// published case-study library is thin, so tab 3 (FinOps) links our Azure cost
// best-practice guide rather than a case study — the blurb makes that explicit.
const cloudCaseStudyTabs: CaseStudyTab[] = [
  {
    label: "Migrate & modernize",
    title: "Migrate & modernize",
    blurb:
      "Move to the cloud without the disruption. We migrate enterprise applications and data platforms to Azure and modernize the infrastructure underneath, replacing legacy systems with secure, scalable, cloud-first environments built for modern workloads.",
    caseStudy: {
      title: "Modernize data systems by migrating to the cloud",
      teaser:
        "How an enterprise modernized legacy data systems by migrating to a secure, scalable cloud platform.",
      href: "https://blog.maqsoftware.com/2020/09/modernize-data-cloud-migration.html",
      imageUrl: "/images/case-studies/external/Data-Migration-case-study-main.webp",
    },
  },
  {
    label: "Cloud-native & DevOps",
    title: "Cloud-native & DevOps",
    blurb:
      "Ship faster on a foundation built for change. We design cloud-native applications with containers, microservices, and Azure Kubernetes Service, and wire in CI/CD so teams release continuously and operate with confidence.",
    caseStudy: {
      title: "Transforming data operations with Microsoft Fabric and CI/CD for ISVs",
      teaser:
        "How an ISV standardized data operations with a Microsoft Fabric CI/CD pipeline for continuous, reliable delivery.",
      href: "https://blog.maqsoftware.com/2024/11/microsoft-fabric-isv-cicd.html",
      imageUrl: "/images/case-studies/external/CS088-banner.webp",
    },
  },
  {
    label: "FinOps & cost optimization",
    title: "FinOps & cost optimization",
    blurb:
      "Get more from every cloud dollar. We bring FinOps discipline to your Azure estate — governance, cost monitoring, and right-sizing that turn cloud spend into financial accountability. Our Azure cost best-practice guide shows where the savings are.",
    caseStudy: {
      eyebrow: "Best-practice guide",
      title: "Optimize costs for your Azure platforms with our 10 best practices",
      teaser:
        "A best-practice guide to Azure cost optimization: governance, right-sizing, and financial accountability.",
      href: "/insights/azure-architecture-best-practices",
      imageUrl: "/images/case-studies/external/BPG004-main.webp",
    },
  },
];

export function ServiceCloud() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="Cloud modernization"
        subhead="Reduce costs, accelerate delivery, and scale on demand with modern cloud platforms that optimize operations and create the foundation for AI-powered applications and intelligent experiences."
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
              src="/images/Service%20cards/Cloud.png"
              alt="Cloud Modernization"
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
        sectionId="cloud-capabilities"
        tabs={cloudCaseStudyTabs}
        ariaLabel="Cloud modernization capabilities and case studies"
      />
      <ServiceCloudInsights />
      {/* <ServiceCloudTestimonials /> */}
    </>
  );
}
