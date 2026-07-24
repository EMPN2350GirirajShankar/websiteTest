import { ArrowRight20Regular } from "@fluentui/react-icons";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { PartnershipHero } from "../components/partnerships/PartnershipHero";
import { PartnershipHighlights } from "../components/partnerships/PartnershipHighlights";
import { PartnershipOfferings } from "../components/partnerships/PartnershipOfferings";
import { PartnershipInsights } from "../components/partnerships/PartnershipInsights";

// ---------------------------------------------------------------------------
// Styles for custom sections (Overview + Marketplace)
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  overviewSection: {
    padding: "48px 32px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  overviewInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  overviewText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // Marketplace section
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
    margin: 0,
    textAlign: "left" as const,
  },
  panelGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    alignItems: "stretch",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  panelLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    ":hover > div": {
      border: "1px solid var(--maq-card-hover-border-interactive)",
    },
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
    background: "#fff",
    transition: "border-color 0.2s, box-shadow 0.2s",
    height: "100%",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
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
  offerTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: "20px",
  },
  offerTh: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-gray-600)",
    textAlign: "left" as const,
    padding: "8px 8px 8px 0",
    borderBottom: "1px solid var(--maq-border)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  },
  offerTd: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    padding: "8px 8px 8px 0",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    lineHeight: 1.45,
  },
  panelAction: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-red)",
    marginTop: "8px",
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const highlights = [
  { metric: "11", label: "Microsoft specializations" },
  { metric: "5,000+", label: "Microsoft technical certifications" },
  { metric: "200+", label: "Microsoft Fabric implementations" },
  { metric: "43", label: "Certified Power BI custom visuals" },
];

const offerings = [
  {
    eyebrow: "Build and tune your Fabric data platform",
    title: "Microsoft Fabric & Power BI",
    desc: "Migrate to Microsoft Fabric, optimize capacity, and deliver near real-time insights through tuned data models and interactive dashboards. As a Fabric Featured Partner with 200+ implementations, MAQ Software runs end-to-end Fabric builds, Power BI performance tuning, and enterprise-scale analytics.",
  },
  {
    eyebrow: "Automation at scale",
    title: "Agentic AI & Microsoft Copilot",
    desc: "Build AI agents on Microsoft Copilot Studio, Azure AI, and agentic architectures. From legal contract management to sales automation and event management, MAQ Software designs and deploys agents that automate business processes for measurable efficiency gains.",
  },
  {
    eyebrow: "Modernize with confidence",
    title: "Cloud Infrastructure & Migration",
    desc: "Modernize to Azure with proven migration frameworks. Move data warehouses, enterprise applications, or databases (Oracle, PostgreSQL, SQL Server) to Azure with secure transitions, minimal downtime, and validated results.",
  },
  {
    eyebrow: "Equip every team",
    title: "Power Platform & Dynamics 365",
    desc: "Streamline operations with low-code apps on Power Platform, from custom app development and process automation to Center of Excellence implementations. MAQ Software's Dynamics 365 work covers security audits, unified interface migrations, and business process optimization.",
  },
  {
    eyebrow: "Protect and govern",
    title: "Security & Governance",
    desc: "Implement stronger security across Azure, Microsoft 365, and hybrid environments, backed by Cloud Security and Threat Protection specializations. Coverage spans Microsoft Purview governance, identity management, and end-to-end data protection aligned to global compliance standards.",
  },
];

const designations = [
  {
    label: "Data & AI",
    href: "https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure",
  },
  {
    label: "Digital & App Innovation",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure",
  },
  {
    label: "Infrastructure",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure",
  },
  {
    label: "Security",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security",
  },
];

const featuredOffers = [
  { name: "Microsoft Fabric: 2-Hour Briefing", duration: "2 hours", price: "Free" },
  { name: "Microsoft Fabric: 4-Week Assessment", duration: "4 weeks", price: "$15,000" },
  { name: "Agentic AI Envisioning Workshop", duration: "1 day", price: "Free" },
  { name: "Power BI Performance Optimization: 1-Week Workshop", duration: "1 week", price: "$10,000" },
  { name: "Tableau to Power BI: Full Migration Engagement", duration: "Engagement", price: "$75,000" },
  { name: "Power BI Center of Excellence: 10-Week Implementation", duration: "10 weeks", price: "$35,000" },
];

const blogs = [
  {
    title: "Improving lead management and campaign optimization with Microsoft technologies",
    href: "https://blog.maqsoftware.com/2024/02/improving-lead-management-and-campaign.html",
  },
  {
    title: "Modernizing reporting platforms through AI-driven SQL Migration",
    href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
  },
  {
    title: "Improving event experience for thousands using AI Agents",
    href: "https://blog.maqsoftware.com/2024/08/streamlining-event-information-access.html",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipMicrosoft() {
  const s = useStyles();
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Microsoft"
        subhead="A Microsoft Fabric Featured Partner and Preferred Supplier since 2000, MAQ Software builds business intelligence, analytics, and AI across the Microsoft stack, from Azure and Fabric to Power BI and Copilot, backed by 11 Microsoft specializations and 4 solution partner designations."
        ctaLabel="Contact us"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Microsoft%20Partnership&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="/logos/Power_BI_Partner_Jul2026.webp"
        imageAlt="MAQ Software and Microsoft"
      />

      <PartnershipHighlights
        title="Partnership highlights"
        stats={highlights}
      />

      {/* Partnership Overview */}
      <section className={s.overviewSection}>
        <div className={s.overviewInner}>
          <div>
            <p className={s.overviewText}>
              A Microsoft Fabric Featured Partner and Preferred Supplier since 2000,
              MAQ Software holds 4 Microsoft Solution Partner designations (Data
              &amp; AI, Digital &amp; App Innovation, Infrastructure, and Security)
              and 11 advanced specializations. Its 5,000+ Microsoft technical
              certifications and 200+ Fabric implementations back deep expertise
              across Azure, Power BI, Microsoft Fabric, and Copilot. From analytics
              to cloud modernization, organizations get more from their investment
              in Microsoft technologies.
            </p>
          </div>
        </div>
      </section>

      <PartnershipOfferings
        eyebrow="Our Offerings"
        title="What the Microsoft partnership delivers"
        sectionId="microsoft-offerings"
        offerings={offerings}
      />

      <PartnershipInsights
        eyebrow="Insights"
        title="Related blogs and case studies"
        items={blogs}
      />

      {/* Marketplace Offerings — dual-panel */}
      <section className={s.marketSection} id="microsoft-marketplace">
        <div className={s.marketInner}>
          <div className={s.marketHead}>
            <h2 className={`maq-h2 ${s.marketTitle}`}>Marketplace offerings</h2>
          </div>

          <div className={s.panelGrid}>
            {/* Panel A — Power BI Custom Visuals */}
            <Link
              className={s.panelLink}
              to="/insights/power-bi-custom-visual-guide"
              aria-label="Explore custom visuals"
            >
              <div className={s.panel}>
                <div className={s.panelContent}>
                  <h3 className={s.panelSubhead}>Power BI custom visuals</h3>
                  <p className={s.panelDesc}>
                    Expand your reporting with 43 certified Power BI custom visuals.
                    MAQ Software is the largest third-party publisher of certified
                    Power BI custom visuals worldwide, with millions of downloads and
                    multiple Microsoft Editor's Picks.
                  </p>
                  <ul className={s.bulletList}>
                    <li className={s.bulletItem}>
                      43 certified Power BI custom visuals
                    </li>
                    <li className={s.bulletItem}>
                      Largest third-party publisher of certified Power BI custom visuals
                    </li>
                    <li className={s.bulletItem}>
                      Multiple Editor's Pick selections by the Microsoft Power BI team
                    </li>
                    <li className={s.bulletItem}>
                      Categories: change over time, comparison, distribution, KPI,
                      part-to-whole, ranking, and more
                    </li>
                  </ul>
                </div>
                <div className={s.panelAction}>
                  Explore custom visuals
                  <ArrowRight20Regular />
                </div>
              </div>
            </Link>

            {/* Panel B — Consulting Services */}
            <a
              className={s.panelLink}
              href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all marketplace offers"
            >
              <div className={s.panel}>
                <div className={s.panelContent}>
                  <h3 className={s.panelSubhead}>
                    Consulting services on Azure Marketplace
                  </h3>
                  <p className={s.panelDesc}>
                    Access 100+ marketplace offers across Microsoft Fabric, Power BI,
                    Azure AI, Copilot, Power Platform, and Dynamics 365, from free
                    assessments and briefings to full migration engagements.
                  </p>
                  <table className={s.offerTable}>
                    <thead>
                      <tr>
                        <th className={s.offerTh}>Offer</th>
                        <th className={s.offerTh}>Duration</th>
                        <th className={s.offerTh}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featuredOffers.map((o) => (
                        <tr key={o.name}>
                          <td className={s.offerTd}>{o.name}</td>
                          <td className={s.offerTd}>{o.duration}</td>
                          <td className={s.offerTd}>{o.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={s.panelAction}>
                  View all marketplace offers
                  <ArrowRight20Regular />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
