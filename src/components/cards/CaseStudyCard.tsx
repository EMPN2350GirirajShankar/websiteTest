import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { isInternalPath } from "../../lib/links";

const useStyles = makeStyles({
  card: {
    fontFamily: "Roboto, system-ui",
    border: "0.5px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease",
  },
  clickable: {
    cursor: "pointer",
    border: "1px solid var(--maq-border)",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  nonInteractive: {
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    // Anchor the crop to the left edge so case-study cover images that have
    // baked-in titles in the top-left (e.g. "Optimize Power BI with LoadFAST")
    // are not clipped on narrow cards.
    objectPosition: "left center",
    display: "block",
    backgroundColor: "var(--maq-surface-cream)",
    borderRadius: "10px",
    marginBottom: "4px",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    gap: "8px",
    alignItems: "center",
  },
  // Left-aligned so the date reads as a caption under the teaser, not a
  // top-right badge. alignSelf keeps the box content-width in the card's flex
  // column (the default `stretch` would span the full card width).
  date: { fontSize: "12px", color: "var(--maq-gray-500)", fontWeight: 600, alignSelf: "flex-start" },
  tag: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.3,
    margin: 0,
  },
  teaser: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.55,
    margin: 0,
    flex: 1,
  },
  cta: {
    display: "inline-block",
    // Pin the CTA to the bottom of the card so it aligns across a row even
    // when cards differ in height (e.g. one- vs. two-line titles, or cards
    // without a flex:1 teaser to absorb the slack).
    marginTop: "auto",
    fontSize: "13.5px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface CaseStudyCardProps {
  title: string;
  teaser?: string;
  href: string;
  tag?: string;
  date?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaLabel?: string;
  className?: string;
  openInNewTab?: boolean;
  /**
   * When true, the image is loaded eagerly with high fetch priority.
   * Use for above-the-fold cards (e.g. the first row of a grid) to
   * cut perceived load time. Defaults to lazy/low priority.
   */
  eager?: boolean;
}

export function CaseStudyCard({
  title,
  teaser,
  href,
  tag,
  date,
  imageUrl,
  imageAlt,
  ctaLabel = "Read full story",
  className,
  openInNewTab = !isInternalPath(href),
  eager = false,
}: CaseStudyCardProps) {
  const s = useStyles();
  const cardClassName = `${s.card} ${s.clickable}${className ? ` ${className}` : ""}`;
  const content = (
    <>
      {imageUrl ? (
        <img
          className={s.image}
          src={imageUrl}
          alt={imageAlt ?? title}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "low"}
          decoding="async"
          width={1200}
          height={675}
        />
      ) : null}
      {tag ? (
        <div className={s.meta}>
          <span className={s.tag}>{tag}</span>
        </div>
      ) : null}
      <h3 className={s.title}>{title}</h3>
      {teaser ? <p className={s.teaser}>{teaser}</p> : null}
      {/* Date sits below the teaser and above the CTA. The teaser's flex:1
          pushes both to the bottom of the card, keeping the CTA baseline
          aligned across a row of uneven-length cards. */}
      {date ? <span className={s.date}>{date}</span> : null}
      <span className={s.cta}>{ctaLabel}</span>
    </>
  );

  if (isInternalPath(href)) {
    return (
      <Link
        className={cardClassName}
        to={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      className={cardClassName}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
