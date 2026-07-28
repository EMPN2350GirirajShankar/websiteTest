import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { assetUrl } from "../../lib/assetUrl";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fff",
    fontFamily: "Roboto, system-ui",
    border: "0.5px solid var(--maq-border)",
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease",
  },
  imageWrap: {
    background: "var(--maq-surface-cream)",
    borderBottom: "1px solid var(--maq-red-pale)",
    padding: "16px 16px 0",
  },
  image: { width: "100%", height: "auto", display: "block", borderRadius: "8px" },
  body: { padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 },
  logoRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" },
  logoBox: {
    width: "52px",
    height: "52px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "-0.02em",
    flexShrink: 0,
    "& svg": {
      width: "24px",
      height: "24px",
      color: "inherit",
    },
  },
  name: { fontSize: "20px", fontWeight: 700, color: "var(--maq-black)" },
  tagline: {
    fontSize: "12px",
    color: "var(--maq-red)",
    fontWeight: 600,
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    alignSelf: "flex-start",
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    flex: 1,
    margin: 0,
  },
  cta: {
    display: "inline-block",
    fontSize: "13.5px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginTop: "16px",
  },
  buttonCard: {
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  },
  clickable: {
    cursor: "pointer",
    border: "1px solid var(--maq-border)",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
    },
  },
  nonInteractive: {
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
});

export interface ProductCardProps {
  name: string;
  tagline?: string;
  description: string;
  ctaLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  logoInitials?: string;
  logoNode?: ReactNode;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  ctaLabel = "Learn more",
  imageUrl,
  imageAlt,
  logoInitials,
  logoNode,
  to,
  href,
  openInNewTab = true,
  onClick,
  className,
}: ProductCardProps) {
  const s = useStyles();
  const interactive = Boolean(to || href || onClick);
  const rootClass = `${s.card}${interactive ? ` ${s.clickable}` : ` ${s.nonInteractive}`}${onClick ? ` ${s.buttonCard}` : ""}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      {imageUrl ? (
        <div className={s.imageWrap}>
          <img className={s.image} src={assetUrl(imageUrl)} alt={imageAlt ?? `${name} preview`} loading="lazy" width={1200} height={675} />
        </div>
      ) : null}
      <div className={s.body}>
        {(logoNode || logoInitials) ? (
          <div className={s.logoRow}>
            <div className={s.logoBox}>{logoNode ?? logoInitials}</div>
            <div className={s.name}>{name}</div>
          </div>
        ) : (
          <div className={s.name} style={{ marginBottom: "12px" }}>
            {name}
          </div>
        )}
        {tagline ? <div className={s.tagline}>{tagline}</div> : null}
        <p className={s.desc}>{description}</p>
        <span className={s.cta}>{ctaLabel}</span>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={rootClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={rootClass}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={rootClass} onClick={onClick}>
        {content}
      </button>
    );
  }

  return <div className={rootClass}>{content}</div>;
}
