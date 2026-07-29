import { ShieldCheck, Zap, Sparkles } from "lucide-react";
import { assetUrl } from "../lib/assetUrl";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ServiceInsights } from "../components/service/ServiceInsights";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";
import type { InsightItem } from "../components/service/ServiceInsights";

const outcomes: OutcomeGridItem[] = [
  {
    icon: <ShieldCheck strokeWidth={0.75} />,
    title: "Future-proof technology",
    desc: "Stay current on Microsoft platforms that add new AI and capabilities continuously, so your apps don't fall behind.",
  },
  {
    icon: <Zap strokeWidth={0.75} />,
    title: "Increased agility",
    desc: "Adapt to market shifts faster with flexible app architectures you can change without a full rebuild.",
  },
  {
    icon: <Sparkles strokeWidth={0.75} />,
    title: "Improved user experience",
    desc: "Give users modern, easy-to-use apps that make everyday work faster.",
  },
];

// Tabbed by what you're building (build apps → automate the work → run the
// enterprise suite) so each tab is a distinct facet with a real customer story,
// mirroring the Data & AI platforms, AI solutions, and Insights pages.
const businessAppsCaseStudyTabs: CaseStudyTab[] = [
  {
    label: "Low-code business apps",
    title: "Low-code business apps",
    blurb:
      "Ship custom business apps in weeks, not quarters. We build secure low-code apps on Power Apps that connect to your enterprise data and replace spreadsheets and manual handoffs with purpose-built tools your teams actually use.",
    caseStudy: {
      title: "Ease Event Management with Power Apps",
      teaser:
        "How a Power Apps solution with built-in OCR streamlined event management and cut manual data entry.",
      href: "https://blog.maqsoftware.com/2020/04/optical-character-recognition-event.html",
      imageUrl: "/images/case-studies/external/CS003-main.webp",
    },
  },
  {
    label: "Process automation",
    title: "Process automation",
    blurb:
      "Give your teams back the hours lost to repetitive work. We automate approvals, data movement, and document generation with Power Automate, removing manual steps and bottlenecks from end-to-end business processes.",
    caseStudy: {
      title: "Digitize Rhythm of Business (ROB) with a Power BI to PowerPoint tool",
      teaser:
        "How an automated Power BI-to-PowerPoint tool digitized the rhythm-of-business reporting cycle.",
      href: "https://blog.maqsoftware.com/2020/10/automated-powerpoint-deck-creation.html",
      imageUrl: "/images/case-studies/external/CS018-mainV2.webp",
    },
  },
  {
    label: "Enterprise apps & Dynamics 365",
    title: "Enterprise apps & Dynamics 365",
    blurb:
      "Run core operations on one connected platform. We implement and extend Dynamics 365 across sales, service, finance, and operations, unifying data into a single source of truth and modernizing the experience for the people who use it every day.",
    caseStudy: {
      title: "Create a single source of truth with Dynamics 365",
      teaser:
        "How Dynamics 365 unified fragmented systems into a single source of truth for the business.",
      href: "https://blog.maqsoftware.com/2020/12/dynamics-365-single-source-of-truth.html",
      imageUrl: "/images/case-studies/external/CS050-main.webp",
    },
  },
];

const insights: InsightItem[] = [
  {
    title: "Microsoft Fabric: Powering Real-time Analytics for Retailers",
    teaser:
      "How Microsoft Fabric reshapes the retail analytics stack to enable real-time operational reporting.",
    href: "https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html",
    imageUrl: "/images/insights/service/microsoft-fabric-powering-real-time.png",
  },
  {
    title: "Explore Best Practices for Creating Enterprise-Wide Knowledge Bots",
    teaser:
      "Patterns for building enterprise knowledge bots that ground answers in your own content and stay maintainable at scale.",
    href: "/insights/knowledge-bot-best-practices",
    imageUrl: "/images/insights/service/knowledge-bot-best-practices.jpg",
  },
  {
    title: "Microsoft Fabric: Empowering all personas",
    teaser:
      "How a single Fabric platform serves data engineers, analysts, scientists, and business users with the right tools for each.",
    href: "https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html",
    imageUrl: "/images/insights/service/microsoft-fabric-empowering.png",
  },
];

export function ServiceBusinessApps() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="Business apps & automation"
        subhead="Streamline business processes, improve productivity, and embed AI into everyday workflows with intelligent applications and automation that connect teams, data, and decisions."
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
              src={assetUrl("/images/Service%20cards/Apps.png")}
              alt="Business Applications and Automation"
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
        sectionId="business-apps-capabilities"
        tabs={businessAppsCaseStudyTabs}
        ariaLabel="Business applications and automation capabilities and case studies"
      />
      <ServiceInsights title="Related insights" insights={insights} />
    </>
  );
}
