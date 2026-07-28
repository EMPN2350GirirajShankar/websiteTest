import {
  Button,
  makeStyles,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown20Regular,
  ChevronUp20Regular,
} from "@fluentui/react-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { products } from "../data/products";
import { assetUrl } from "../lib/assetUrl";

const useStyles = makeStyles({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    borderBottom: `1px solid var(--maq-border)`,
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
    display: "flex",
    alignItems: "center",
    padding: "0 var(--section-pad-x)",
    height: "64px",
    gap: "32px",
    color: "var(--maq-ink)",
  },
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
  },
  brandLogo: {
    height: "22px",
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
    fontSize: "14px",
    color: "var(--maq-ink)",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navBtn: {
    color: "var(--maq-ink)",
    fontWeight: 500,
    whiteSpace: "nowrap",
    minWidth: "auto",
    height: "100%",
    alignSelf: "stretch",
    borderRadius: 0,
    ":hover": {
      backgroundColor: "var(--maq-red-pale)",
      color: "var(--maq-red)",
    },
  },
  chevronIcon: {
    display: "inline-flex",
    transition: "transform 180ms ease",
    transform: "rotate(0deg)",
  },
  chevronIconOpen: {
    transform: "rotate(180deg)",
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
    backgroundColor: "#2b2b2b",
    color: "#fff",
    zIndex: 1200,
    paddingTop: "24px",
    paddingLeft: "20px",
    paddingRight: "20px",
    overflowY: "auto",
  },
  mobileBrand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  closeBtn: {
    position: "absolute",
    right: "16px",
    top: "16px",
    width: "44px",
    height: "44px",
    background: "transparent",
    border: "none",
    color: "#e33",
    fontSize: "20px",
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
    color: "#fff",
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
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  mobileNavLinkActive: {
    display: "block",
    padding: "10px 0",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: "6px",
    fontWeight: 600,
  },
  navBtnActive: {
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
  },
  menuItemActive: {
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
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
  { label: "Data & AI Platforms", href: "/services/data-and-analytics" },
  { label: "AI Solutions & Agents", href: "/services/agentic-ai" },
  { label: "Insights & Analytics", href: "/services/reporting-bi" },
  { label: "Business Apps & Automation", href: "/services/business-apps" },
  { label: "Cloud Modernization", href: "/services/cloud" },
  { label: "Security & Governance", href: "/services/security-compliance" },
  /* { label: "Workplace transformation & productivity", href: "/services/workplace-transformation" }, */
];

const productNav: NavItem[] = [
  ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
];

const partnerships: NavItem[] = [
  { label: "Microsoft", href: "/partnerships/microsoft" },
  { label: "Snowflake", href: "/partnerships/snowflake" },
  { label: "Databricks", href: "/partnerships/databricks" },
];

const insights: NavItem[] = [
  { label: "Case Studies", href: "/insights/case-studies" },
  { label: "Best practices", href: "/insights/best-practice-guides" },
  { label: "Marketplace offers", href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software" },
  { label: "Power BI custom visual", href: "/insights/power-bi-custom-visual-guide" },
  { label: "Events", href: "/events" },
];

const about: NavItem[] = [
  { label: "Who we are", href: "/about/who-we-are" },
  { label: "Careers", href: "/about/careers" },
  { label: "Social impact", href: "/resources/Social-Impact-Report.pdf.pdf" },
  { label: "Sustainability", href: "/about/sustainability" },
  { label: "Contact Us", href: "/contact" },
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
          icon={(
            <span className={open ? `${s.chevronIcon} ${s.chevronIconOpen}` : s.chevronIcon}>
              <ChevronDown20Regular />
            </span>
          )}
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

export function Header() {
  const s = useStyles();
  const navigate = useNavigate();
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
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
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
    closeMenu();
    navigate(href);
  }

  return (
    <nav className={`${s.nav} site-header`}>
      <Link to="/" className={s.brand} aria-label="MAQ Software homepage">
        <img src={assetUrl("/logos/MAQ-Software-Logo.svg")} alt="MAQ Software" className={s.brandLogo} width={196} height={48} />
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

      {/* <div className={`${s.right} header-right`}>
        <Button
          appearance="primary"
          onClick={() => navigateTo("/contact")}
        >
          Request a demo
        </Button>
      </div> */}

      {/* Mobile overlay rendered as a portal to avoid clipping by ancestor styles */}
      {typeof document !== "undefined" && createPortal(
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal={open}
          aria-hidden={!open}
          className={`${open ? s.overlayOpen : s.overlay} mobile-overlay ${open ? 'open' : ''}`}
        >
          {open && (
            <>
              <button className={s.closeBtn} aria-label="Close navigation" onClick={closeMenu}>
                ×
              </button>
              <div className={s.mobileBrand}>
                <Link to="/" onClick={closeMenu} className={s.brand} aria-label="MAQ Software homepage">
                  <img src={assetUrl("/logos/MAQ-Software-Logo.svg")} alt="MAQ Software" className={s.brandLogo} width={196} height={48} />
                </Link>
              </div>

              <div>
                {/* Services */}
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

                {/* Products */}
                <MobileSection
                  label="Products"
                  items={productNav}
                  expanded={expandedSections["products"] ?? (activeSectionKey === "products")}
                  onToggle={() => toggleSection("products")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />

                {/* Industries */}
                <MobileSection
                  label="Industries"
                  items={industries}
                  expanded={expandedSections["industries"] ?? (activeSectionKey === "industries")}
                  onToggle={() => toggleSection("industries")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />

                {/* Partnerships */}
                <MobileSection
                  label="Partnerships"
                  items={partnerships}
                  expanded={expandedSections["partnerships"] ?? (activeSectionKey === "partnerships")}
                  onToggle={() => toggleSection("partnerships")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />

                {/* Insights */}
                <MobileSection
                  label="Insights"
                  items={insights}
                  expanded={expandedSections["insights"] ?? (activeSectionKey === "insights")}
                  onToggle={() => toggleSection("insights")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />

                {/* About */}
                <MobileSection
                  label="About"
                  items={about}
                  expanded={expandedSections["about"] ?? (activeSectionKey === "about")}
                  onToggle={() => toggleSection("about")}
                  navigateTo={navigateTo}
                  pathname={pathname}
                  firstFocusable={firstFocusable}
                />
                <div style={{ marginTop: 24, marginBottom: 40 }}>
                  {/* <Button appearance="primary" className={s.mobileRequestDemoBtn} onClick={() => navigateTo('/contact')}>
                    Request a demo
                  </Button> */}
                </div>
              </div>
            </>
          )}
        </div>,
        document.body
      )}
    </nav>
  );
}
