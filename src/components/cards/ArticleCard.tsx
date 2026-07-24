import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { isInternalPath } from "../../lib/links";

const useStyles = makeStyles({
  card: {
    fontFamily: "Roboto, system-ui",
    border: "0.5px solid var(--maq-border)",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
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
    height: "100px",
    objectFit: "cover",
    display: "block",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--colorNeutralBackground3) 60%, var(--maq-surface-cream) 100%)",
    borderBottom: "1px solid var(--maq-border)",
  },
  body: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
    color: "var(--maq-gray-700)",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  date: { fontSize: "12px", color: "var(--maq-gray-500)", fontWeight: 600 },
  title: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.35,
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
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--maq-red)",
    fontWeight: 600,
    fontSize: "13.5px",
  },
});

export interface ArticleCardProps {
  title: string;
  teaser?: string;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
  tag?: string;
  date?: string;
  ctaLabel?: string;
  className?: string;
  bodyClassName?: string;
  openInNewTab?: boolean;
}

export function ArticleCard({
  title,
  teaser,
  href,
  imageUrl,
  imageAlt,
  tag,
  date,
  ctaLabel = "Read more",
  className,
  bodyClassName,
  openInNewTab = !isInternalPath(href),
}: ArticleCardProps) {
  const s = useStyles();
  const cardClassName = `${s.card} ${s.clickable}${className ? ` ${className}` : ""}`;
  const content = (
    <>
      {imageUrl ? (
        <img className={s.image} src={imageUrl} alt={imageAlt ?? title} loading="lazy" width={1200} height={675} />
      ) : (
        <div className={s.image} aria-hidden="true" />
      )}
      <div className={`${s.body}${bodyClassName ? ` ${bodyClassName}` : ""}`}>
        {tag || date ? (
          <div className={s.meta}>
            {tag ? <span className={s.tag}>{tag}</span> : <span />}
            {date ? <span className={s.date}>{date}</span> : null}
          </div>
        ) : null}
        <h3 className={s.title}>{title}</h3>
        {teaser ? <p className={s.teaser}>{teaser}</p> : null}
        <span className={s.cta}>{ctaLabel}</span>
      </div>
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
