import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    fontFamily: "Roboto, system-ui",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "18px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  active: {
    border: "1px solid var(--maq-card-hover-border)",
    background: "var(--colorNeutralBackground3)",
  },
  image: {
    width: "100%",
    height: "100px",
    objectFit: "cover",
    display: "block",
    borderRadius: "8px",
    border: "1px solid var(--maq-border)",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--colorNeutralBackground3) 60%, var(--maq-surface-cream) 100%)",
    marginBottom: "4px",
  },
  eyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
    alignSelf: "flex-start",
    letterSpacing: "0.04em",
  },
  title: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.35,
    margin: 0,
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.55,
    margin: 0,
    flex: 1,
  },
  cta: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface ResourceMarketplaceCardProps {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  eyebrow?: string;
  imageUrl?: string;
  imageAlt?: string;
  active?: boolean;
  className?: string;
}

export function ResourceMarketplaceCard({
  title,
  description,
  href,
  ctaLabel = "Open resource",
  eyebrow,
  imageUrl,
  imageAlt,
  active = false,
  className,
}: ResourceMarketplaceCardProps) {
  const s = useStyles();
  const rootClass = `${s.card}${active ? ` ${s.active}` : ""}${className ? ` ${className}` : ""}`;
  const isExternal = href.startsWith("http");

  const content = (
    <>
      {imageUrl ? (
        <img className={s.image} src={imageUrl} alt={imageAlt ?? title} loading="lazy" width={1200} height={675} />
      ) : null}
      {/* eyebrow hidden intentionally */}
      <h3 className={s.title}>{title}</h3>
      <p className={s.desc}>{description}</p>
      <span className={s.cta}>{ctaLabel}</span>
    </>
  );

  if (isExternal) {
    return (
      <a className={rootClass} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={rootClass} to={href}>
      {content}
    </Link>
  );
}
