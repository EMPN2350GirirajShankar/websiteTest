import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./buttons";
import { useContactAction } from "../lib/contact";

type FooterItem = {
  label: string;
  to?: string;
  href?: string;
};

type FooterCol = {
  title: string;
  items: FooterItem[];
};

const useStyles = makeStyles({
  footer: {
    backgroundColor: "var(--maq-gray-600)",
    color: "#fff",
    padding: "56px var(--section-pad-x) 24px",
  },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  top: {
    display: "grid",
    gridTemplateColumns: "1.4fr repeat(5, 1fr)",
    gap: "40px",
    marginBottom: "40px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr 1fr", gap: "32px" },
  },
  brand: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" },
  logoMark: {
    width: "128px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    "@media (max-width: 960px)": { width: "112px" },
  },
  logoImage: { width: "100%", height: "100%", display: "block", objectFit: "contain" },
  logoName: { fontSize: "16px", fontWeight: 700, color: "#fff" },
  about: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
  },
  contactCta: {
    marginTop: "12px",
  },
  colTitle: {
    fontSize: "12px",
    fontWeight: 700,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    transition: "color 0.15s",
    ":hover": { color: "#fff" },
  },
  linkDisabled: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.35)",
    cursor: "default",
  },
  bottom: {
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  bottomRow1: {
    display: "flex",
    justifyContent: "flex-start",
  },
  bottomRow2: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  },
  bottomText: { fontSize: "12px", color: "rgba(255,255,255,0.4)" },
  socialRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  socialLink: {
    color: "rgba(255,255,255,0.5)",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    transition: "color 0.15s",
    ":hover": { color: "#fff" },
  },
});

const cols: FooterCol[] = [
  {
    title: "Services",
    items: [
      { label: "Data & AI Platforms",              to: "/services/data-and-analytics" },
      { label: "AI Solutions & Agents",            to: "/services/agentic-ai" },
      { label: "Insights & Analytics",             to: "/services/reporting-bi" },
      { label: "Business Apps & Automation", to: "/services/business-apps" },
      { label: "Cloud Modernization",              to: "/services/cloud" },
      { label: "Security & Governance",            to: "/services/security-compliance" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "MigrateFAST",        to: "/products/migratefast" },
      { label: "Fabric Admin Agent", to: "/products/fabric-admin-agent" },
      { label: "AI-DataLens",        to: "/products/ai-datalens" },
      { label: "EmbedFAST",          to: "/products/embedfast" },
      { label: "LoadFAST",           to: "/products/loadfast" },
      { label: "CertyFAST",          to: "/products/certyfast" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "Case Studies",        to: "/insights/case-studies" },
      { label: "Best practices", to: "/insights/best-practice-guides" },
      { label: "Marketplace offers", href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software" },
      { label: "Power BI custom visual", to: "/insights/power-bi-custom-visual-guide" },
      { label: "Events",             to: "/events" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "Who we are", to: "/about/who-we-are" },
      { label: "Careers",    to: "/about/careers" },
      { label: "Social impact", href: "/resources/Social-Impact-Report.pdf.pdf" },
      { label: "Sustainability", to: "/about/sustainability" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Privacy Statement", to: "/privacystatement" },
    ],
  },
];

function FooterLink({ item, linkClass, disabledClass }: { item: FooterItem; linkClass: string; disabledClass: string }) {
  if (item.to) {
    return (
      <Link to={item.to} className={linkClass}>
        {item.label}
      </Link>
    );
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

export function Footer() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <div>
            <div className={s.brand}>
              <Link to="/" aria-label="MAQ Software homepage" className={s.socialLink}>
                <div className={s.logoMark}>
                  <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.logoImage} width={196} height={48} />
                </div>
              </Link>
            </div>
            <p className={s.about}>
              MAQ Software helps enterprises transform data into decisions and AI into measurable business outcomes.
            </p>
            <p className={s.about} style={{ marginTop: 12 }}>
              2027 152nd Avenue NE, Redmond, WA 98052
            </p>
            <PrimaryButton
              size="large"
              className={`maq-equal-cta ${s.contactCta}`}
              onClick={() => handleContactClick()}
            >
              Contact Us
            </PrimaryButton>
          </div>
          {cols.map((c) => (
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
        <div className={s.bottom}>
          <div className={s.bottomRow1}>
            <div className={s.socialRow}>
              <a
                href="https://x.com/MAQSoftware"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label="X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/maqsoftware"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/maq-software/"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className={s.bottomRow2}>
            <span className={s.bottomText}>
              © {new Date().getFullYear()} MAQ Software. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

