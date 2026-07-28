import {
  Button,
  makeStyles,
  tokens,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown16Filled,
  ChevronDown20Regular,
  ChevronUp20Regular,
} from "@fluentui/react-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { products } from "../data/products";
import { PrimaryButton } from "./buttons";
import { useContactAction } from "../lib/contact";

/* ==================================================================
   HeaderV2 — top-nav variant for the bento homepage exploration.
   ------------------------------------------------------------------
   Differs from the standard Header: nav buttons get a 4px-rounded
   neutral-gray hover/selected (Fluent colorNeutralBackground1*) rather
   than the squared red wash, and the trigger chevron is a smaller
   filled glyph that always points down (no open/close rotation).
   Used on /homev2 via the SiteHeader switch in App.tsx.
   ================================================================== */

const useStyles = makeStyles({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderBottom: `1px solid var(--maq-border)`,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
    display: "flex",
    alignItems: "center",
    padding: "0 var(--section-pad-x)",
    height: "64px",
    gap: "32px",
    color: "var(--maq-ink)",
    // Pure Fluent neutrals for the header (no cool/slate tint).
    "--maq-ink": tokens.colorNeutralForeground1,
    "--maq-border": tokens.colorNeutralStroke2,
  },
  // Inner row — keeps the bar full-bleed but aligns content to the page width (matches HomeV5's 1600px).
  navInner: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    width: "100%",
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
  },
  // Right-aligned Contact us CTA (hidden on mobile via the global .header-right hook).
  navCta: { flexShrink: 0, display: "flex", alignItems: "center" },
  navToggle: {
    display: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "44px",
    height: "44px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    flexShrink: 0,
  },
  brandLogo: {
    height: "20px",
    width: "auto",
    display: "block",
    flexShrink: 0,
    transform: "translateY(-3px)",
  },
  links: {
    display: "flex",
    gap: "4px",
    flex: 1,
    marginLeft: "16px",
  },
  link: {
    fontSize: "0.9375rem",
    color: "var(--maq-ink)",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navBtn: {
    color: "var(--maq-ink)",
    fontSize: "0.9375rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    minWidth: "auto",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: "var(--maq-ink)",
    },
    ":active": {
      backgroundColor: tokens.colorNeutralBackground1Pressed,
      color: "var(--maq-ink)",
    },
    // Keep the chevron the same color as the label in every state (Fluent
    // colors the icon slot separately, which otherwise diverges on hover).
    "& .fui-Button__icon": { color: "inherit" },
    ":hover .fui-Button__icon": { color: "inherit" },
  },
  menuPopover: {
    opacity: 0,
    animationName: {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    animationDuration: "180ms",
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
    willChange: "opacity",
  },
  overlay: {
    display: "none",
  },
  overlayOpen: {
    display: "block",
    position: "fixed",
    inset: 0,
    backgroundColor: "#ffffff",
    color: "var(--maq-ink)",
    zIndex: 1200,
    paddingTop: 0,
    paddingLeft: "var(--section-pad-x)",
    paddingRight: "var(--section-pad-x)",
    // Contain scrolling to the overlay and block horizontal drag/overscroll.
    overflowX: "hidden",
    overflowY: "auto",
    overscrollBehavior: "contain",
    WebkitOverflowScrolling: "touch",
  },
  mobileBrand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    // Match the closed header bar height so the logo sits at the same spot.
    height: "64px",
    marginBottom: "12px",
  },
  closeBtn: {
    position: "absolute",
    right: "16px",
    top: "12px",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    color: "var(--maq-ink)",
    cursor: "pointer",
  },
  mobileNavList: {
    display: "block",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mobileSubList: {
    paddingLeft: "14px",
  },
  mobileNavItem: {
    marginBottom: "10px",
  },
  mobileSection: {
    marginBottom: "18px",
  },
  mobileSectionTitle: {
    marginTop: "8px",
    fontWeight: 600,
    marginBottom: "12px",
    cursor: "default",
  },
  mobileSectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    width: "100%",
    color: "var(--maq-ink)",
    fontSize: "16px",
    fontWeight: 600,
  },
  mobileSectionChevron: {
    transition: "transform 0.2s",
  },
  mobileSubListWrapper: {
    overflow: "hidden",
    transition: "max-height 0.3s ease",
  },
  mobileNavLink: {
    display: "block",
    padding: "10px 0",
    color: "var(--maq-ink)",
    textDecoration: "none",
    fontSize: "16px",
    ":hover": { color: "var(--maq-red)" },
  },
  mobileNavLinkActive: {
    display: "block",
    padding: "10px 8px",
    color: "var(--maq-red)",
    textDecoration: "none",
    fontSize: "16px",
    backgroundColor: "var(--maq-red-50)",
    borderRadius: "6px",
    fontWeight: 600,
  },
  navBtnActive: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    color: "var(--maq-ink)",
  },
  menuItemActive: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    color: tokens.colorNeutralForeground1,
  },
  mobileRequestDemoBtn: {
    fontWeight: 600,
  },
});

interface NavItem {
  label: string;
  href?: string;
}

const industries: NavItem[] = [
  { label: "Retail & consumer goods", href: "/industries/retail" },
  { label: "Financial services", href: "/industries/financial-services" },
  { label: "Technology", href: "/industries/technology" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Healthcare & life sciences", href: "/industries/healthcare-life-sciences" },
  { label: "Public sector", href: "/industries/public-sector" },
];

const services: NavItem[] = [
  { label: "Data & AI platforms", href: "/services/data-and-analytics" },
  { label: "AI solutions & agents", href: "/services/agentic-ai" },
  { label: "Insights & analytics", href: "/services/reporting-bi" },
  { label: "Business apps & automation", href: "/services/business-apps" },
  { label: "Cloud modernization", href: "/services/cloud" },
  { label: "Security & governance", href: "/services/security-compliance" },
];

// Menu leads with MigrateFAST, then Fabric Admin Agent; the rest keep their
// order from the products data (the single source for product names + slugs).
const productLeadOrder = ["migratefast", "fabric-admin-agent"];
const productRank = (slug: string) => {
  const i = productLeadOrder.indexOf(slug);
  return i === -1 ? productLeadOrder.length : i;
};
const productNav: NavItem[] = [...products]
  .sort((a, b) => productRank(a.slug) - productRank(b.slug))
  .map((p) => ({ label: p.name, href: `/products/${p.slug}` }));

const partnerships: NavItem[] = [
  { label: "Microsoft", href: "/partnerships/microsoft" },
  { label: "Snowflake", href: "/partnerships/snowflake" },
  { label: "Databricks", href: "/partnerships/databricks" },
];

const insights: NavItem[] = [
  { label: "Case studies", href: "/insights/case-studies" },
  { label: "Best practice guides", href: "/insights/best-practice-guides" },
  { label: "Events", href: "/events" },
  { label: "Marketplace offers", href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software" },
  { label: "Power BI custom visuals", href: "/insights/power-bi-custom-visual-guide" },
];

const about: NavItem[] = [
  { label: "Who we are", href: "/who-we-are" },
  { label: "Careers", href: "/careers" },
  { label: "Social impact", href: "/resources/Social-Impact-Report.pdf.pdf" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact us", href: "/contact" },
];

function shouldOpenInNewTab(href: string): boolean {
  return href.startsWith("http") || /\.pdf($|[?#])/i.test(href);
}

function isItemActive(href: string | undefined, pathname: string): boolean {
  if (!href || shouldOpenInNewTab(href) || href === "#") return false;
  const target = href.split("?")[0].split("#")[0];
  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(`${target}/`);
}

function MegaMenu({
  label,
  items,
  btnClass,
}: {
  label: string;
  items: NavItem[];
  btnClass?: string;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const s = useStyles();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };

  // Delay closing so moving across the small gap between the trigger and the
  // popover (e.g. approaching from below) doesn't briefly close + reopen.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 120);
  };

  useEffect(() => () => cancelClose(), []);

  // Pick only the most specific (longest matching) item so a parent link
  // like "/products" doesn't also highlight when on "/products/embedfast".
  const activeHref = items.reduce<string | undefined>((best, i) => {
    if (!isItemActive(i.href, pathname)) return best;
    if (!best || (i.href as string).length > best.length) return i.href;
    return best;
  }, undefined);
  return (
    <Menu
      open={open}
      onOpenChange={(_, data) => (data.open ? openMenu() : scheduleClose())}
      openOnHover
      hoverDelay={0}
      closeOnScroll
    >
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          className={btnClass}
          onMouseEnter={openMenu}
          icon={<ChevronDown16Filled />}
          iconPosition="after"
        >
          {label}
        </Button>
      </MenuTrigger>
      <MenuPopover
        className={s.menuPopover}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <MenuList>
          {items.map((i) => (
            <MenuItem
              key={i.label}
              className={i.href === activeHref ? s.menuItemActive : undefined}
              onClick={() => {
                if (!i.href) return;
                cancelClose();
                setOpen(false);
                if (shouldOpenInNewTab(i.href)) {
                  window.open(i.href, "_blank", "noopener,noreferrer");
                  return;
                }
                navigate(i.href);
              }}
            >
              {i.label}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

function MobileSection({
  label,
  items,
  expanded,
  onToggle,
  navigateTo,
  pathname,
  isFirst,
  firstFocusable,
}: {
  label: string;
  items: NavItem[];
  expanded: boolean;
  onToggle: () => void;
  navigateTo: (href?: string) => void;
  pathname: string;
  isFirst?: boolean;
  firstFocusable: React.RefObject<HTMLElement | null>;
}) {
  const s = useStyles();
  // Find the most specific (longest) active item in this section
  const activeHref = items.reduce<string | undefined>((best, i) => {
    if (!isItemActive(i.href, pathname)) return best;
    if (!best || (i.href as string).length > best.length) return i.href;
    return best;
  }, undefined);
  return (
    <div className={s.mobileSection}>
      <button className={s.mobileSectionHeader} onClick={onToggle}>
        <span>{label}</span>
        <span className={s.mobileSectionChevron} style={{ display: expanded ? "none" : "inline-block" }}>
          <ChevronDown20Regular />
        </span>
        <span className={s.mobileSectionChevron} style={{ display: expanded ? "inline-block" : "none" }}>
          <ChevronUp20Regular />
        </span>
      </button>
      {expanded && (
        <ul className={`${s.mobileNavList} ${s.mobileSubList}`}>
          {items.map((i, idx) => {
            const isActive = i.href === activeHref;
            return (
              <li key={i.label} className={s.mobileNavItem}>
                <a
                  href={i.href}
                  className={isActive ? s.mobileNavLinkActive : s.mobileNavLink}
                  ref={isFirst && idx === 0 ? ((el) => ((firstFocusable as React.MutableRefObject<HTMLElement | null>).current = el)) : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(i.href);
                  }}
                >
                  {i.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function HeaderV2() {
  const s = useStyles();
  const navigate = useNavigate();
  const handleContactClick = useContactAction();
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstFocusable = useRef<HTMLElement | null>(null);
  const scrollPos = useRef<number>(0);
  const { pathname } = useLocation();

  // Determine which section contains the current active item
  const activeSectionKey = (() => {
    const allSections: Record<string, NavItem[]> = {
      services,
      products: productNav,
      industries,
      partnerships,
      insights,
      about,
    };
    for (const [key, items] of Object.entries(allSections)) {
      if (items.some((i) => isItemActive(i.href, pathname))) {
        return key;
      }
    }
    return null;
  })();

  // Auto-expand the active section when menu opens
  useEffect(() => {
    if (open && activeSectionKey && !expandedSections[activeSectionKey]) {
      setExpandedSections((prev) => ({ ...prev, [activeSectionKey]: true }));
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    } else {
      document.removeEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    // scroll lock when open
    if (open) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      // Keep full width while fixed; otherwise the body collapses to content
      // width and the page jumps/shifts horizontally when the menu opens.
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPos.current || 0);
      // restore focus to toggle
      toggleRef.current?.focus();
    }
  }, [open]);

  function openMenu() {
    setOpen(true);
    // focus will be set after render
    setTimeout(() => {
      firstFocusable.current?.focus();
    }, 0);
  }

  function closeMenu() {
    setOpen(false);
  }

  function toggleSection(key: string) {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function navigateTo(href?: string) {
    if (!href) return;
    if (shouldOpenInNewTab(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    scrollPos.current = 0;
    closeMenu();
    navigate(href);
  }

  return (
    <nav className={`${s.nav} site-header`}>
      <div className={s.navInner}>
        <Link to="/" className={s.brand} aria-label="MAQ Software homepage">
          <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.brandLogo} />
        </Link>

        <button
          ref={(el) => (toggleRef.current = el)}
          className={`${s.navToggle} nav-toggle`}
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => (open ? closeMenu() : openMenu())}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={`${s.links} site-nav-links`}>
          <MegaMenu label="Services" items={services} btnClass={s.navBtn} />
          <MegaMenu label="Products" items={productNav} btnClass={s.navBtn} />
          <MegaMenu label="Industries" items={industries} btnClass={s.navBtn} />
          <MegaMenu label="Partnerships" items={partnerships} btnClass={s.navBtn} />
          <MegaMenu label="Insights" items={insights} btnClass={s.navBtn} />
          <MegaMenu label="About" items={about} btnClass={s.navBtn} />
        </div>

        <div className={`${s.navCta} header-right`}>
          <PrimaryButton size="large" className="maq-equal-cta" onClick={() => handleContactClick()}>Contact us</PrimaryButton>
        </div>
      </div>

      {/* Mobile overlay rendered as a portal to avoid clipping by ancestor styles */}
      {typeof document !== "undefined" && createPortal(
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal={open}
          aria-hidden={!open}
          className={open ? s.overlayOpen : s.overlay}
        >
          {open && (
            <>
              <button className={s.closeBtn} aria-label="Close navigation" onClick={closeMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 5l14 14M19 5L5 19" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className={s.mobileBrand}>
                <Link to="/" onClick={closeMenu} className={s.brand} aria-label="MAQ Software homepage">
                  <img src="/logos/MAQ-Software-Logo.svg" alt="MAQ Software" className={s.brandLogo} />
                </Link>
              </div>

              <div>
                <MobileSection
                  label="Services"
                  items={services}
                  expanded={expandedSections["services"] ?? (activeSectionKey === "services")}
                  onToggle={() => toggleSection("services")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  isFirst
                  firstFocusable={firstFocusable}
                />
                <MobileSection
                  label="Products"
                  items={productNav}
                  expanded={expandedSections["products"] ?? (activeSectionKey === "products")}
                  onToggle={() => toggleSection("products")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
                <MobileSection
                  label="Industries"
                  items={industries}
                  expanded={expandedSections["industries"] ?? (activeSectionKey === "industries")}
                  onToggle={() => toggleSection("industries")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
                <MobileSection
                  label="Partnerships"
                  items={partnerships}
                  expanded={expandedSections["partnerships"] ?? (activeSectionKey === "partnerships")}
                  onToggle={() => toggleSection("partnerships")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
                <MobileSection
                  label="Insights"
                  items={insights}
                  expanded={expandedSections["insights"] ?? (activeSectionKey === "insights")}
                  onToggle={() => toggleSection("insights")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
                <MobileSection
                  label="About"
                  items={about}
                  expanded={expandedSections["about"] ?? (activeSectionKey === "about")}
                  onToggle={() => toggleSection("about")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </nav>
  );
}
