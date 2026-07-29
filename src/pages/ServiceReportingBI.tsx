import { Eye, Zap, Users } from "lucide-react";
import { ServiceHero } from "../components/service/ServiceHero";
import { ServiceOutcomesGrid } from "../components/service/ServiceOutcomesGrid";
import { ServiceCaseStudyTabs } from "../components/service/ServiceCaseStudyTabs";
import { ReportingBIInsights } from "../components/service-reporting-bi/ReportingBIInsights";
// import { ReportingBITestimonials } from "../components/service-reporting-bi/ReportingBITestimonials";
import type { OutcomeGridItem } from "../components/service/ServiceOutcomesGrid";
import type { CaseStudyTab } from "../components/service/ServiceCaseStudyTabs";

const outcomes: OutcomeGridItem[] = [
  {
    icon: <Eye strokeWidth={0.75} />,
    title: "Data clarity",
    desc: "Surface clear answers from complex data with visualizations teams can read at a glance.",
  },
  {
    icon: <Zap strokeWidth={0.75} />,
    title: "Faster decision-making",
    desc: "Cut time to decision by putting real-time, easy-to-read visuals in front of stakeholders.",
  },
  {
    icon: <Users strokeWidth={0.75} />,
    title: "Improved data accessibility",
    desc: "Open access to critical insights across your organization, so every team works from the same numbers.",
  },
];

// Tabbed by how insight reaches people (decide → react → self-serve) so each tab
// is a distinct facet with a real customer story, mirroring the Data & AI
// platforms and AI solutions pages.
const biCaseStudyTabs: CaseStudyTab[] = [
  {
    label: "Dashboards & KPI reporting",
    title: "Dashboards & KPI reporting",
    blurb:
      "Leaders decide faster when performance is visible at a glance. We build interactive Power BI dashboards and executive KPI reporting on a governed Microsoft Fabric foundation, turning enterprise data into metrics every stakeholder can read and act on.",
    caseStudy: {
      title:
        "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
      teaser:
        "How a retailer modernized its BI stack on Microsoft Fabric and Power BI for faster, cleaner enterprise reporting.",
      href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
      imageUrl: "/images/case-studies/external/retail-report-stock-image.webp",
    },
  },
  {
    label: "Real-time & operational intelligence",
    title: "Real-time & operational intelligence",
    blurb:
      "Some decisions can't wait for tomorrow's report. Microsoft Fabric Real-Time Intelligence streams operational events as they happen, so teams monitor live performance and respond to issues the moment they surface.",
    caseStudy: {
      title: "Real-time reporting for an organic supermarket chain",
      teaser:
        "How an organic supermarket chain gained real-time visibility into store operations and sales.",
      href: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
      imageUrl: "/images/case-studies/external/shopper2.webp",
    },
  },
  {
    label: "Self-service & embedded analytics",
    title: "Self-service & embedded analytics",
    blurb:
      "Insight creates the most value when everyone can reach it. We deliver governed self-service analytics and Power BI embedded directly into the apps your teams already use, with Copilot-driven exploration, so business users answer their own questions without waiting on a report queue.",
    caseStudy: {
      title:
        "Empowering self-service using a Custom Copilot agent with Power BI Embedded",
      teaser:
        "How a Custom Copilot agent on Power BI Embedded let business users explore data and answer their own questions.",
      href: "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html",
      imageUrl: "/images/case-studies/external/Copilot-computer-screen.webp",
    },
  },
];

export function ServiceReportingBI() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="Insights & analytics"
        subhead="Uncover insights faster, anticipate business needs, and empower teams with self-service analytics, real-time intelligence, and dashboards that drive better decisions."
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
              src="/images/Service%20cards/Visualization.png"
              alt="Insights and Analytics"
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
        sectionId="bi-capabilities"
        tabs={biCaseStudyTabs}
        ariaLabel="Insights and analytics capabilities and case studies"
      />
      <ReportingBIInsights />
      {/* <ReportingBITestimonials /> */}
    </>
  );
}
