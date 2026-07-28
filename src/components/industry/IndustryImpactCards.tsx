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
  section: { padding: "48px var(--section-pad-x)", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  // auto-fit + collapsing empty tracks means any count (2-4) fills the full
  // section width — 2 cards span the row as two wide cards, 4 as four.
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: "16px",
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
