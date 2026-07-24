import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { useContactAction } from "../lib/contact";
import { PrimaryButton } from "../components/buttons";
import { CaseStudyCard } from "../components/cards/CaseStudyCard";
import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";
import {
    Mail24Regular,
    ArrowRight16Regular,
    Sparkle24Regular,
    Globe24Regular,
    PeopleTeam24Regular,
    Code24Regular,
    Rocket24Regular,
    ArrowTrendingLines24Regular,
    Sparkle20Filled,
    PeopleTeam20Filled,
    ArrowTrending20Filled,
} from "@fluentui/react-icons";

// import { TrustBanner } from "../components/TrustBanner";

// ---------------------------------------------------------------------------
// Hero, case studies, and insights are local to this page; the capabilities and
// outcomes bands come from the shared src/components/service/* components that
// every service page uses, so those two layouts stay consistent site-wide.
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
    // Hero
    hero: { backgroundColor: "var(--colorNeutralBackground3)", padding: "48px 32px" },
    heroGrid: {
        maxWidth: "var(--maq-container-wide)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: "48px",
        alignItems: "center",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
    },
    eyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "12px",
        display: "block",
        textAlign: "center",
    },
    h1: {
        margin: "0 0 16px",
        textAlign: "center",
    },
    heroSub: {
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--maq-gray-600)",
        marginBottom: "24px",
        maxWidth: "640px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    },
    btns: { display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" },

    // Hero mosaic
    visual: {
        background: "var(--maq-surface-cream)",
        border: "1px solid var(--maq-red-pale)",
        borderRadius: "16px",
        padding: "20px",
        display: "grid",
        gap: "12px",
        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
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
    radialWrap: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    radial: {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "4px solid var(--maq-red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: 700,
        color: "var(--maq-red)",
    },
    radialLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
    autoRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        color: "var(--maq-ink)",
        marginTop: "4px",
    },

    // Section commons
    section: { padding: "48px 32px", backgroundColor: "#fff" },
    sectionAlt: { padding: "48px 32px", backgroundColor: "var(--colorNeutralBackground3)" },
    inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
    head: { marginBottom: "20px", textAlign: "center" },
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

    // Products
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
        "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
    },
    productCard: {
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        padding: "24px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-card-hover-border)",
            boxShadow: "var(--maq-shadow-lift)",
            transform: "translateY(-2px)",
        },
    },
    prodLogo: {
        width: "44px",
        height: "44px",
        borderRadius: "10px",
        background: "var(--maq-red)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: 800,
        letterSpacing: "-0.02em",
    },
    prodName: { fontSize: "17px", fontWeight: 700, color: "var(--maq-black)", margin: 0 },
    prodTagline: { fontSize: "13px", color: "var(--maq-red)", fontWeight: 600, margin: 0 },
    prodDesc: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },

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
        name: "Microsoft Copilot adoption & governance",
        tagline: "Drive AI-assisted productivity at scale",
        icon: <Sparkle24Regular />,
        description:
            "Accelerate Microsoft 365 Copilot rollout with structured readiness assessments, persona-based enablement, and governance controls. We design Centers of Excellence, adoption dashboards, and prompt libraries so every role sees measurable time savings within weeks — not months.",
        tags: ["M365 Copilot", "Copilot Studio", "Viva Insights", "Adoption Score"],
    },
    {
        name: "Modern intranet & collaboration platforms",
        tagline: "Connect employees to knowledge and each other",
        icon: <Globe24Regular />,
        description:
            "Design and deploy SharePoint Online intranets, Teams-based workspaces, and Viva Connections experiences that unify communications, knowledge management, and day-to-day collaboration. We build information architectures that scale from 500 to 500,000 users without sprawl.",
        tags: ["SharePoint Online", "Microsoft Teams", "Viva Connections", "Power Pages"],
    },
    {
        name: "Employee experience & Viva suite",
        tagline: "Measure and improve how people work",
        icon: <PeopleTeam24Regular />,
        description:
            "Deploy Microsoft Viva modules — Insights, Learning, Engage, and Goals — to give leaders visibility into work patterns and give employees personalized learning paths, recognition, and goal alignment. We integrate Viva data with Power BI for executive-ready people analytics.",
        tags: ["Viva Insights", "Viva Learning", "Viva Engage", "Power BI"],
    },
    {
        name: "Developer productivity & GitHub Copilot",
        tagline: "Ship code faster with AI pair programming",
        icon: <Code24Regular />,
        description:
            "Roll out GitHub Copilot across engineering teams with hackathons, best-practice playbooks, usage dashboards, and CI/CD integration. Our proven enablement framework delivers ~40% reduction in coding time and ~50% faster test automation within the pilot phase.",
        tags: ["GitHub Copilot", "Azure DevOps", "CI/CD", "Copilot Metrics"],
    },
];

const outcomes: OutcomeItem[] = [
    {
        icon: <Rocket24Regular />,
        title: "Accelerated time to value",
        desc: "Reduce onboarding-to-productivity time by deploying structured adoption programs that achieve 70%+ active usage within 60 days.",
    },
    {
        icon: <PeopleTeam24Regular />,
        title: "Unified employee experience",
        desc: "Consolidate disconnected tools into a single Microsoft 365 surface — reducing context switches and improving satisfaction scores.",
    },
    {
        icon: <ArrowTrendingLines24Regular />,
        title: "Measurable productivity gains",
        desc: "Track real outcomes with Copilot usage analytics and Viva Insights — translating tool adoption into hours saved per employee per week.",
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
        tag: "Developer productivity",
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "Embedding GitHub Copilot across the SDLC with adoption playbooks, governance, and outcome telemetry — delivering ~70% faster prototyping and ~55% faster refactoring.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    },
    {
        tag: "AI adoption",
        title: "Scaling AI for every customer and every developer with MAQ Software",
        teaser:
            "A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise.",
        href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
    },
    {
        tag: "Knowledge management",
        title: "Streamlining information retrieval with AI Copilots",
        teaser:
            "Enterprise AI Copilots that ground answers in organizational content — dramatically improving information retrieval productivity for knowledge workers.",
        href: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
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
        title: "Empowering businesses with AI: Frameworks that deliver results",
        teaser:
            "Field-tested frameworks for deploying AI capabilities — from knowledge bots to content generation — that produce measurable business outcomes.",
        href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
        imageUrl: "/images/insights/service/empowering-businesses-with-ai.png",
    },
    {
        title: "Modernizing the software development lifecycle with GitHub Copilot",
        teaser:
            "How a global organization embedded GitHub Copilot across development, testing, and deployment to transform engineering productivity.",
        href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
        imageUrl: "/images/insights/service/modernizing-software-development.jpg",
    },
    {
        title: "Building a secure Copilot: Addressing key security challenges",
        teaser:
            "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot deployment that maintains data governance.",
        href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
        imageUrl: "/images/insights/service/building-secure-copilot-addressing-key.png",
    },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceWorkplaceTransformation() {
    const s = useStyles();
    const handleContactClick = useContactAction();

    return (
        <>
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroGrid}>
                    <div>
                        {/* <span className={s.eyebrow}>
                            Workplace transformation &amp; productivity
                        </span> */}
                        <h1 className={`maq-h1 ${s.h1}`}>
                            Microsoft 365 and Copilot rollouts that drive real adoption
                        </h1>
                        <p className={s.heroSub}>
                            We deploy Microsoft 365, Teams, SharePoint, Viva, and Microsoft
                            Copilot — paired with structured adoption programs and change
                            management that turn rollouts into measurable usage, not shelfware.
                        </p>
                        <div className={s.btns}>
                            <PrimaryButton
                                size="large"
                                onClick={() =>
                                    handleContactClick(
                                        "Workplace Transformation - MAQ Software"
                                    )
                                }
                            >
                                Contact Us
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className={s.visual} aria-hidden="true">
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <Sparkle20Filled /> Copilot adoption
                            </div>
                            <div className={s.autoRow}>
                                <span>Active users</span>
                                <span style={{ fontWeight: 700 }}>78%</span>
                            </div>
                            <div className={s.autoRow}>
                                <span>Prompts this week</span>
                                <span style={{ fontWeight: 700 }}>12,480</span>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <PeopleTeam20Filled /> Collaboration score
                            </div>
                            <div className={s.radialWrap}>
                                <div className={s.radial}>92%</div>
                                <span className={s.radialLabel}>
                                    Cross-team collaboration index
                                </span>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <ArrowTrending20Filled /> Today&apos;s productivity
                            </div>
                            <div className={s.autoRow}>
                                <span>Meetings summarized</span>
                                <span style={{ fontWeight: 700 }}>1,240</span>
                            </div>
                            <div className={s.autoRow}>
                                <span>Documents co-authored</span>
                                <span style={{ fontWeight: 700 }}>3,680</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CAPABILITIES */}
            <ServiceCapabilities
                sectionId="workplace-capabilities"
                title="Our workplace transformation capabilities"
                capabilities={capabilities}
                footerLabel="See Workplace Transformation case studies"
                footerHref="/insights/case-studies"
                ariaLabel="Workplace transformation capabilities"
            />

            {/* OUTCOMES */}
            <ServiceOutcomes outcomes={outcomes} />

            {/* CASE STUDIES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.head}>
                        {/* <span className={s.secEyebrow}>Related case studies</span> */}
                        <h2 className={`maq-h2 ${s.titleSm}`}>
                            How clients are transforming their digital workplace
                        </h2>
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
                        to="/insights/case-studies"
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
                        <h2 className={`maq-h2 ${s.titleSm}`}>
                            Our workplace transformation insights
                        </h2>
                        {/* <p className={s.secSub}>
                            See our research that goes into optimizing workplace productivity and
                            collaboration.
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

