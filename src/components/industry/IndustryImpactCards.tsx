import { makeStyles } from "@fluentui/react-components";
import { CaseStudyCard } from "../cards/CaseStudyCard";

// A titled row of case-study cards — used for an industry's "real impact"
// section, where each card links to the customer story behind the outcome.
export interface ImpactCaseStudy {
  title: string;
  teaser: string;
  imageUrl: string;
  href: string;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
});

export function IndustryImpactCards({
  title,
  cards,
}: {
  title: string;
  cards: ImpactCaseStudy[];
}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        <div className={s.grid}>
          {cards.map((c) => (
            <CaseStudyCard
              key={c.href}
              title={c.title}
              teaser={c.teaser}
              href={c.href}
              imageUrl={c.imageUrl}
              imageAlt={c.title}
              ctaLabel="Read the full story"
              eager
            />
          ))}
        </div>
      </div>
    </section>
  );
}
