import { makeStyles } from "@fluentui/react-components";
import { useMemo, useState, useEffect } from "react";
import { TextButton } from "../components/buttons";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { ArticleCard } from "../components/cards/ArticleCard";
import { bestPracticeFilters, bestPracticeItems } from "../data/insights";

const INITIAL_VISIBLE = 9;

const useStyles = makeStyles({
  section: { padding: "56px 32px", backgroundColor: "var(--colorNeutralBackground1)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  grid: {
    marginTop: "44px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  paginationControls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  controlsText: {
    fontSize: "13px",
    color: "var(--maq-gray-700)",
  },
});

export function InsightsBestPracticeGuides() {
  const s = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return bestPracticeItems;
    return bestPracticeItems.filter((item) => item.topic === activeFilter);
  }, [activeFilter]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const total = filtered.length;
  const visibleItems = filtered.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(total);
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

  return (
    <>
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <h2 className={`maq-h2 ${s.title}`}>Best practice guides</h2>
          <InsightsFilterBar items={bestPracticeFilters} active={activeFilter} onChange={setActiveFilter} />
          <div className={s.grid}>
            {visibleItems.map((item) => (
              <ArticleCard
                key={item.href}
                title={item.title}
                teaser={item.teaser}
                href={item.href}
                imageUrl={item.imageUrl}
                imageAlt={item.title}
                tag={item.topic}
                ctaLabel="Read full story"
              />
            ))}
          </div>
          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} guides
              </span>
              {visibleCount < total ? (
                <TextButton onClick={handleShowMore}>
                  Show more
                </TextButton>
              ) : (
                <TextButton onClick={handleShowLess}>
                  Show less
                </TextButton>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
