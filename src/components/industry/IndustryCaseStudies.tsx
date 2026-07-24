import { makeStyles, tokens } from "@fluentui/react-components";
import { CaseStudyCard } from "../cards/CaseStudyCard";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  title: {
    margin: 0,
    textAlign: "left",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  gridUniform: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    color: "inherit",
    textDecoration: "none",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "10px",
  },
  teaser: {
    fontSize: "13px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
    flex: 1,
    marginBottom: "14px",
  },
  link: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    },
  seeAll: {
    marginTop: "20px",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: 600,
  },
  seeAllLink: {
    color: "var(--maq-red)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
});

export interface IndustryCase {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

interface IndustryCaseStudiesProps {
  eyebrow: string;
  title: string;
  cases: IndustryCase[];
  seeAllLabel?: string;
  seeAllHref?: string;
  uniformCardWidth?: boolean;
}

export function IndustryCaseStudies({
  eyebrow,
  title,
  cases,
  seeAllLabel = "See all case studies",
  seeAllHref = "/insights/case-studies",
  uniformCardWidth = false,
}: IndustryCaseStudiesProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>{eyebrow}</span> */}
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>
        <div className={`${s.grid}${uniformCardWidth ? ` ${s.gridUniform}` : ""}`}>
          {cases.map((c) => (
            <CaseStudyCard
              key={c.title}
              title={c.title}
              teaser={c.teaser}
              href={c.href}
            />
          ))}
        </div>
        <div className={s.seeAll}>
          <Link
            className={s.seeAllLink}
            to={seeAllHref}
          >
            {seeAllLabel} <ArrowRight16Regular />
          </Link>
        </div>
      </div>
    </section>
  );
}
