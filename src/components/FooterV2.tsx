import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./buttons";
import { useContactAction } from "../lib/contact";

/* ==================================================================
   FooterV2 — light footer (design exploration)
   ------------------------------------------------------------------
   A full-bleed light band on Fluent neutral background 2 — one step
   lighter than the CTA's neutral background 3 so the footer reads as a
   distinct band. Rendered as a div with role="contentinfo" (not a
   <footer> element) to avoid the global mobile <footer> overrides in
   styles.css. Used on the /homev2 exploration via the footer switch in
   App.tsx.
   ================================================================== */

type FooterItem = { label: string; to?: string; href?: string };
type FooterCol = { title: string; items: FooterItem[] };

const useStyles = makeStyles({
  // Full-bleed gray band — distinct from the white page sections above.
  surface: {
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  footer: {
    color: "var(--maq-body-color)",
    padding: "56px 32px 32px",
    "@media (max-width: 720px)": { padding: "48px 22px 28px" },
  },
  // Match the home page's wide container (1440px) so the footer aligns with the
  // landing-page content width.
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  top: {
    display: "grid",
    gridTemplateColumns: "1.4fr repeat(5, 1fr)",
    gap: "24px",
    marginBottom: "44px",
    // Extra breathing room on the right of every column container.
    "& > div": { paddingRight: "24px" },
    "@media (max-width: 900px)": { gridTemplateColumns: "repeat(2, 1fr)", gap: "40px" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr", gap: "36px" },
  },
  // A footer column that stacks multiple link groups vertically.
  linkCol: { display: "flex", flexDirection: "column", gap: "40px" },
  logoMark: { width: "148px", height: "auto", display: "inline-flex", flexShrink: 0 },
  logoImage: { width: "100%", height: "100%", display: "block", objectFit: "contain" },
  about: {
    fontSize: "0.9375rem",
    color: "var(--maq-faint-color)",
    lineHeight: 1.6,
    marginTop: "16px",
    maxWidth: "30ch",
  },
  contactCta: {
    marginTop: "12px",
  },
  colTitle: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: tokens.colorNeutralForeground3,
    letterSpacing: "0",
    marginBottom: "16px",
  },
  list: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" },
  link: {
    fontSize: "0.9375rem",
    color: "var(--maq-muted-color)",
    textDecoration: "none",
    transition: "color 0.15s",
    ":hover": { color: "var(--maq-heading-color)" },
  },
  // Below the four roles (a deliberately faint "disabled/fine-print" tier).
  linkDisabled: { fontSize: "0.9375rem", color: tokens.colorNeutralForegroundDisabled, cursor: "default" },
  bottom: {
    paddingTop: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
  },
  bottomLeft: { display: "flex", flexDirection: "column", gap: "4px" },
  bottomText: { fontSize: "0.8125rem", color: tokens.colorNeutralForeground3 },
  legalText: { fontSize: "0.8125rem", color: tokens.colorNeutralForeground4 },
  socialRow: { display: "flex", gap: "8px", alignItems: "center" },
  socialLink: {
    width: "36px",
    height: "36px",
    borderRadius: "4px",
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "background-color 0.15s, color 0.15s",
    ":hover": { backgroundColor: tokens.colorNeutralForeground1, color: "#fff" },
  },
});

const cols: FooterCol[] = [
  {
    title: "Services",
    items: [
      { label: "Data & AI platforms", to: "/services/data-and-analytics" },
      { label: "AI solutions & agents", to: "/services/agentic-ai" },
      { label: "Insights & analytics", to: "/services/reporting-bi" },
      { label: "Business apps & automation", to: "/services/business-apps" },
      { label: "Cloud modernization", to: "/services/cloud" },
      { label: "Security & governance", to: "/services/security-compliance" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "MigrateFAST", to: "/products/migratefast" },
      { label: "Fabric Admin Agent", to: "/products/fabric-admin-agent" },
      { label: "AI-DataLens", to: "/products/ai-datalens" },
      { label: "EmbedFAST", to: "/products/embedfast" },
      { label: "LoadFAST", to: "/products/loadfast" },
      { label: "CertyFAST", to: "/products/certyfast" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "Case studies", to: "/insights/case-studies" },
      { label: "Best practice guides", to: "/insights/best-practice-guides" },
      { label: "Events", to: "/events" },
      { label: "Marketplace offers", href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software" },
      { label: "Power BI custom visuals", to: "/insights/power-bi-custom-visual-guide" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Who we are", to: "/who-we-are" },
      { label: "Careers", to: "/careers" },
      { label: "Social impact", href: "/resources/Social-Impact-Report.pdf.pdf" },
      { label: "Sustainability", to: "/sustainability" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Terms of service", to: "/terms-of-service" },
      { label: "Privacy statement", to: "/privacystatement" },
    ],
  },
];

function FooterLink({ item, linkClass, disabledClass }: { item: FooterItem; linkClass: string; disabledClass: string }) {
  if (item.to) {
    return <Link to={item.to} className={linkClass}>{item.label}</Link>;
  }
  if (item.href) {
    return (
      <a
        href={item.href}
        className={linkClass}
        {...(item.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {item.label}
      </a>
    );
  }
  return <span className={disabledClass}>{item.label}</span>;
}

export function FooterV2() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  // One group per column: Services; Products; Insights; Company; Support.
  const byTitle = (t: string) => cols.find((c) => c.title === t)!;
  const linkColumns: FooterCol[][] = [
    [byTitle("Services")],
    [byTitle("Products")],
    [byTitle("Insights")],
    [byTitle("Company")],
    [byTitle("Support")],
  ];
  return (
    <div className={s.surface} role="contentinfo">
      <div className={s.footer}>
        <div className={s.inner}>
          <div className={s.top}>
            <div>
              <Link to="/" aria-label="MAQ Software homepage" className={s.logoMark}>
                <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.logoImage} />
              </Link>
              <p className={s.about}>
                Turn data into decisions faster with AI-powered analytics.
              </p>
              <p className={s.about}>2027 152nd Avenue NE, Redmond, WA 98052</p>
              <PrimaryButton
                size="large"
                className={`maq-equal-cta ${s.contactCta}`}
                onClick={() => handleContactClick()}
              >
                Contact us
              </PrimaryButton>
            </div>
            {linkColumns.map((groups, ci) => (
              <div key={ci} className={s.linkCol}>
                {groups.map((c) => (
                  <div key={c.title}>
                    <div className={s.colTitle}>{c.title}</div>
                    <ul className={s.list}>
                      {c.items.map((item) => (
                        <li key={item.label}>
                          <FooterLink item={item} linkClass={s.link} disabledClass={s.linkDisabled} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={s.bottom}>
            <div className={s.bottomLeft}>
              <span className={s.bottomText}>
                © {new Date().getFullYear()} MAQ Software. All rights reserved.
              </span>
            </div>
            <div className={s.socialRow}>
              <a href="https://x.com/MAQSoftware" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://github.com/maqsoftware" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/maq-software/" target="_blank" rel="noopener noreferrer" className={s.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
