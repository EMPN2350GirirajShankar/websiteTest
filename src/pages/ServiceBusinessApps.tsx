import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import { CaseStudyCard } from "../components/cards/CaseStudyCard";
import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";
import {
    Mail24Regular,
    ArrowRight16Regular,
    Flow24Regular,
    PeopleSearch24Regular,
    AppFolder24Regular,
    Grid24Regular,
    Code24Regular,
    ShieldTask24Regular,
    ArrowTrendingLines24Regular,
    PersonHeart24Regular,
    Flow20Filled,
    Sparkle20Filled,
    CheckmarkCircle20Filled,
} from "@fluentui/react-icons";

// import { TrustBanner } from \"../components/TrustBanner\";

// ---------------------------------------------------------------------------
// Hero, case studies, and insights are local to this page; the capabilities and
// outcomes bands come from the shared src/components/service/* components that
// every service page uses, so those two layouts stay consistent site-wide.
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
    // Hero
    hero: { backgroundColor: "var(--colorNeutralBackground3)", padding: "0 32px", height: "360px", "@media (max-width: 960px)": { height: "auto", padding: "40px 22px" } },
    heroGrid: {
        maxWidth: "var(--maq-container-wide)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "48px",
        alignItems: "center",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr", "& > *:last-child": { display: "none" } },
    },
    eyebrow: {
        fontSize: "var(--fs-eyebrow)",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        marginBottom: "12px",
        display: "block",
    },
    h1: {
        margin: "0 0 16px",
    },
    sub: {
        color: "var(--maq-gray-600)",
        marginBottom: "24px",
        maxWidth: "640px",
    },
    // Hero mosaic
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
    tile: {
        background: "#fff",
        border: "1px solid var(--maq-border)",
        borderRadius: "10px",
        padding: "14px 16px",
    },
    tileTitle: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--maq-gray-500)",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    perfRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
    perfLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
    perfTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    perfFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
    pulseRow: { display: "flex", gap: "8px", alignItems: "center" },
    dot: { width: "10px", height: "10px", borderRadius: "50%", background: "var(--maq-red)" },
    pulseLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
    autoRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },
    heroImage: {
        width: "100%",
        height: "360px",
        objectFit: "cover",
        display: "block",
        borderRadius: "12px",
    },

    // Section commons
    section: { padding: "48px 32px", backgroundColor: "#fff" },
    sectionAlt: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
    inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
    head: { textAlign: "center", marginBottom: "20px" },
    secEyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        display: "block",
        marginBottom: "6px",
    },
    titleSm: {
        margin: "0 0 6px",
        textAlign: "left",
    },
    secSub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", maxWidth: "780px", textAlign: "center" },

    footerLink: {
        marginTop: "20px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "14px",
        fontWeight: 600,
        color: "var(--maq-red)",
        textDecoration: "none",
        ":hover": { textDecoration: "underline" },
    },
    buttonGroup: {
        marginTop: "20px",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        "@media (max-width: 640px)": { flexDirection: "column" },
    },


    // Case studies
    caseGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        gap: "16px",
    },
    caseCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        padding: "22px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-card-hover-border)",
            boxShadow: "var(--maq-shadow-lift)",
            transform: "translateY(-2px)",
        },
    },
    pill: {
        fontSize: "11px",
        fontWeight: 700,
        color: "var(--maq-red)",
        background: "var(--maq-red-pale)",
        padding: "3px 8px",
        borderRadius: "4px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        alignSelf: "flex-start",
    },
    caseTitle: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.3,
        margin: 0,
    },
    caseTeaser: {
        fontSize: "14px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.55,
        margin: 0,
        flex: 1,
    },
    caseRead: {
        display: "inline-block",
        fontSize: "13px",
        fontWeight: 700,
        lineHeight: 1.4,
        color: "var(--maq-red)",
        textDecoration: "none",
    },
    // Insights
    insGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    insCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-card-hover-border)",
            boxShadow: "var(--maq-shadow-lift)",
            transform: "translateY(-2px)",
        },
    },
    insCover: {
        height: "100px",
        background:
            "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--colorNeutralBackground3) 60%, var(--maq-surface-cream) 100%)",
        borderBottom: "1px solid var(--maq-border)",
    },
    insBody: { padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 },
    insTitle: {
        fontSize: "16px",
        fontWeight: 700,
        color: "var(--maq-black)",
        lineHeight: 1.35,
        margin: 0,
    },
    insTeaser: {
        fontSize: "13px",
        color: "var(--maq-gray-600)",
        lineHeight: 1.55,
        margin: 0,
        flex: 1,
    },
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const capabilities: Capability[] = [
    {
        name: "Dynamics 365",
        tagline: "Intelligent applications for modern business",
        icon: <AppFolder24Regular />,
        description:
            "Implement business applications that streamline customer engagement, finance, operations, sales, and service management.",
        tags: ["Dynamics 365", "Sales", "Service", "Operations"],
    },
    {
        name: "Microsoft Power Platform",
        tagline: "Low-code solutions for rapid innovation",
        icon: <Grid24Regular />,
        description:
            "Build low-code apps, automate workflows, and add analytics and virtual agents across Microsoft Power Platform.",
        tags: [
            "Power Platform",
            "Low-Code",
            "Automation",
            "Virtual Agents",
        ],
    },
    {
        name: "Power Apps",
        tagline: "Build enterprise apps with low code",
        icon: <Code24Regular />,
        description:
            "Ship secure low-code apps that improve day-to-day operations and connect to your enterprise data sources.",
        tags: [
            "Power Apps",
            "Low-Code Apps",
            "Enterprise Data",
            "Operational Efficiency",
        ],
    },
    {
        name: "Power Automate",
        tagline: "Intelligent workflow automation at scale",
        icon: <AppFolder24Regular />,
        description:
            "Automate repetitive business processes with workflows that cut manual effort and free up your team.",
        tags: ["Power Automate", "Workflows", "Process Automation", "Productivity"],
    },
    {
        name: "Customer 360",
        tagline: "Unified customer insights across channels",
        icon: <PeopleSearch24Regular />,
        description:
            "Unify customer data from across the enterprise into single profiles for personalized experiences and better decisions.",
        tags: ["Customer 360", "Unified Profiles", "Personalization", "Insights"],
    },
    {
        name: "Workflow Automation & Process Optimization",
        tagline: "Streamlined processes through automation",
        icon: <ArrowTrendingLines24Regular />,
        description:
            "Streamline end-to-end processes with automation, approvals, and integrations that remove bottlenecks.",
        tags: ["Process Optimization", "Approvals", "Integrations", "Automation"],
    },
];

const outcomes: OutcomeItem[] = [
    {
        icon: <ShieldTask24Regular />,
        title: "Future-proof technology",
        desc: "Stay current on Microsoft platforms that add new AI and capabilities continuously, so your apps don't fall behind.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Increased agility",
        desc: "Adapt to market shifts faster with flexible app architectures you can change without a full rebuild.",
    },
    {
        icon: <PersonHeart24Regular />,
        title: "Improved user experience",
        desc: "Give users modern, easy-to-use apps that make everyday work faster.",
    },
];

interface CaseStudy {
    tag: string;
    title: string;
    teaser: string;
    href: string;
}

const caseStudies: CaseStudy[] = [
    {
        tag: "Retail · Fabric",
        title:
            "Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric",
        teaser:
            "Modernizing a Direct Store Delivery operation with Microsoft Fabric so the field team gets real-time visibility into orders, stock, and exceptions.",
        href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    },
    {
        tag: "Dynamics 365 · UX",
        title:
            "Maximizing the power of Dynamics 365: User interface & user experience redesigned",
        teaser:
            "Redesigning the Dynamics 365 UI/UX so frontline users complete core tasks in fewer clicks with measurably higher adoption.",
        href: "https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html",
    },
    {
        tag: "Dynamics 365 · Productivity",
        title: "Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365",
        teaser:
            "A custom dynamic checklist control inside Dynamics 365 that guides users through complex multi-step processes without leaving the record.",
        href: "https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html",
    },
];

interface Insight {
    title: string;
    teaser: string;
    href: string;
    imageUrl?: string;
}

const insights: Insight[] = [
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

// ---------------------------------------------------------------------------
// Placeholders — keep in sync when sales delivers final content
// ---------------------------------------------------------------------------
// Products section: source page has no products listed. To enable, add a
// Products section block in the JSX below (between Outcomes and Case Studies).
//
// Testimonials section: awaiting signed quotes. When ready, define
//   const testimonials = [{ body: "...", cite: "..." }, ...];
// and render a Testimonials section at the page end.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceBusinessApps() {
    const s = useStyles();

    return (
        <>
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroGrid}>
                    <div>
                        <span className={s.eyebrow}>Services</span>
                        <h1 className={`maq-h1 ${s.h1}`}>Business apps & automation</h1>
                        <p className={`maq-lead ${s.sub}`}>
                            Streamline business processes, improve productivity, and embed AI into everyday workflows with intelligent applications and automation that connect teams, data, and decisions.
                        </p>
                    </div>

                    <div className={s.visual}>
                        <img
                            className={s.heroImage}
                            src="/images/Service%20cards/Apps.png"
                            alt="Business Applications and Automation"
                        />
                    </div>
                </div>
            </section>



            {/* CAPABILITIES */}
            <ServiceCapabilities
                sectionId="business-apps-capabilities"
                title="What you can build with business apps & automation"
                capabilities={capabilities}
                footerLabel="See business apps & automation case studies"
                footerHref="/insights/case-studies?filter=Business%20apps%20%26%20automation#insights-content"
                ariaLabel="Business applications and automation capabilities"
            />

            {/* OUTCOMES */}
            <ServiceOutcomes outcomes={outcomes} />

            {/* CASE STUDIES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.head}>
                        {/* <span className={s.secEyebrow}>Related case studies</span> */}
                        <h2 className={`maq-h2 ${s.titleSm}`}>Business apps & automation in production</h2>
                    </div>
                    <div className={s.caseGrid}>
                        {caseStudies.map((c) => (
                            <a
                                key={c.title}
                                className={s.caseCard}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className={s.caseTitle}>{c.title}</h3>
                                <p className={s.caseTeaser}>{c.teaser}</p>
                                <span className={s.caseRead}>
                                    Read full story
                                </span>
                            </a>
                        ))}
                    </div>
                    <Link
                        className={s.footerLink}
                        to="/insights/case-studies#insights-content"
                    >
                        See all case studies
                        <ArrowRight16Regular />
                    </Link>
                </div>
            </section>

            {/* INSIGHTS */}
            <section className={s.section}>
                <div className={s.inner}>
                    <div className={s.head}>
                        {/* <span className={s.secEyebrow}>Insights</span> */}
                        <h2 className={`maq-h2 ${s.titleSm}`}>Related insights</h2>
                        {/* <p className={s.secSub}>
                            See our research that goes into optimizing our business apps and process
                            automation service.
                        </p> */}
                    </div>
                    <div className={s.insGrid}>
                        {insights.map((i) => (
                            <CaseStudyCard
                                key={i.title}
                                href={i.href}
                                imageUrl={i.imageUrl}
                                title={i.title}
                                teaser={i.teaser}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS — placeholder, hidden until signed quotes are available.
                    When ready, render this section at the page end. */}
        </>
    );
}

