import { useState } from "react";
import {
  makeStyles,
  TabList,
  Tab,
  type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { isInternalPath } from "../../lib/links";

/* ==================================================================
   ServiceCaseStudyTabs — a horizontal tab list (one tab per platform)
   that switches an inline case study. Left column carries the platform
   title + blurb; the right column shows the matching case study card.
   The Fluent TabList renders the underline indicator (brand red) and
   handles keyboard navigation. Controlled via local state.
   ================================================================== */

export interface CaseStudyTab {
  /** Tab label + heading. */
  label: string;
  title: string;
  blurb: string;
  caseStudy: {
    /** Small kicker above the card title, e.g. "Case study — Retail". */
    eyebrow?: string;
    title: string;
    teaser: string;
    href: string;
    imageUrl: string;
  };
}

const useStyles = makeStyles({
  section: { padding: "72px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },

  heading: { margin: "0 0 28px" },

  // Full-width hairline under the tabs; the selected Tab draws the red bar.
  tablist: {
    marginBottom: "40px",
    borderBottom: "1px solid var(--maq-border)",
  },

  // Two-column panel: text on the left, case-study card on the right.
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 900px)": { gridTemplateColumns: "1fr", gap: "32px" },
  },
  title: { margin: "0 0 14px" },
  // Cap the line length for readability (~68 characters — the optimal
  // "measure" for body text).
  blurb: { margin: 0, color: "var(--maq-muted-color)", maxWidth: "68ch" },

  // Horizontal case-study card: image on the left, text (title → CTA) on the
  // right. Same border/hover language as the home cards.
  card: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    alignItems: "stretch",
    minHeight: "220px",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
    ":hover .zoom-img": { transform: "scale(1.06)" },
    "@media (max-width: 520px)": { gridTemplateColumns: "1fr" },
  },
  imgWrap: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "var(--maq-surface-cream)",
    "@media (max-width: 520px)": { aspectRatio: "16 / 9" },
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "left center",
    transition: "transform .35s ease",
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "12px",
    padding: "28px 32px",
  },
  cardEyebrow: {
    margin: 0,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--maq-gray-500)",
  },
  cardTitle: { fontSize: "18px", fontWeight: 700, lineHeight: 1.35, color: "var(--maq-black)", margin: 0 },
  cardTeaser: { fontSize: "15px", lineHeight: 1.55, color: "var(--maq-gray-700)", margin: 0 },
  cardCta: { marginTop: "4px", fontSize: "14px", fontWeight: 700, color: "var(--maq-red)" },
});

export function ServiceCaseStudyTabs({
  sectionId,
  heading,
  tabs,
  ariaLabel = "Case studies by platform",
}: {
  sectionId?: string;
  /** Optional section heading rendered above the tabs. */
  heading?: string;
  tabs: CaseStudyTab[];
  ariaLabel?: string;
}) {
  const s = useStyles();
  const [active, setActive] = useState(0);
  const onTabSelect = (_: SelectTabEvent, data: SelectTabData) =>
    setActive(data.value as number);
  const tab = tabs[active];
  const cs = tab.caseStudy;
  const internal = isInternalPath(cs.href);

  const cardInner = (
    <>
      <div className={s.imgWrap} aria-hidden>
        <img
          className={`${s.img} zoom-img`}
          src={cs.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={s.cardText}>
        <h4 className={s.cardTitle}>{cs.title}</h4>
        <span className={s.cardCta}>Read full story</span>
      </div>
    </>
  );

  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        {heading ? <h2 className={`maq-h2 ${s.heading}`}>{heading}</h2> : null}
        <TabList
          className={s.tablist}
          size="large"
          selectedValue={active}
          onTabSelect={onTabSelect}
          aria-label={ariaLabel}
        >
          {tabs.map((t, i) => (
            <Tab key={t.label} value={i}>
              {t.label}
            </Tab>
          ))}
        </TabList>

        <div className={s.body}>
          <div>
            <h3 className={`maq-h3 ${s.title}`}>{tab.title}</h3>
            <p className={`maq-lead ${s.blurb}`}>{tab.blurb}</p>
          </div>
          {internal ? (
            <Link className={s.card} to={cs.href}>
              {cardInner}
            </Link>
          ) : (
            <a
              className={s.card}
              href={cs.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cardInner}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
