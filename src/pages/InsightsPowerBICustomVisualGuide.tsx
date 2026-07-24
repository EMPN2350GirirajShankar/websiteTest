import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular, LightbulbFilament24Regular } from "@fluentui/react-icons";
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, TextButton } from "../components/buttons";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { visualGuideFilters, visualGuideItems, visualGuideSlug } from "../data/insights";

const INITIAL_VISIBLE = 9;

const useStyles = makeStyles({
  section: { padding: "56px 32px", backgroundColor: "var(--colorNeutralBackground1)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 40px" },
  filterRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },
  chooserCallout: {
    marginTop: "22px",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #fff 0%, var(--maq-red-pale) 100%)",
    padding: "18px",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "16px",
    alignItems: "center",
    "@media (max-width: 860px)": {
      gridTemplateColumns: "1fr",
    },
  },
  chooserMain: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    minWidth: 0,
  },
  chooserIconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },
  chooserTextWrap: {
    minWidth: 0,
  },
  chooserTitle: {
    margin: "0 0 6px",
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  chooserText: {
    margin: 0,
    fontSize: "16px",
    lineHeight: 1.55,
    color: "var(--maq-gray-700)",
  },
  chooserAction: {
    justifySelf: "end",
    "@media (max-width: 860px)": {
      justifySelf: "start",
    },
  },
  grid: {
    marginTop: "44px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    background: "#fff",
    padding: "18px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  imageWrap: {
    borderRadius: "10px",
    overflow: "hidden",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    background: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    display: "block",
  },
  meta: { display: "flex", flexWrap: "wrap", gap: "6px" },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  category: { fontSize: "12px", color: "var(--maq-gray-500)", fontWeight: 700 },
  cardTitle: { fontSize: "20px", lineHeight: 1.35, color: "var(--maq-black)", margin: 0 },
  teaser: { fontSize: "13px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
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

export function InsightsPowerBICustomVisualGuide() {
  const s = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return visualGuideItems;
    if (activeFilter === "Certified") return visualGuideItems.filter((item) => item.badges.includes("Certified"));
    return visualGuideItems.filter((item) => {
      const categories = Array.isArray(item.category) ? item.category : [item.category];
      return categories.includes(activeFilter);
    });
  }, [activeFilter]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const total = filtered.length;
  const halfCount = Math.max(INITIAL_VISIBLE + 1, Math.ceil(total / 2));
  const visibleItems = filtered.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount < halfCount && halfCount < total) {
      setVisibleCount(halfCount);
    } else {
      setVisibleCount(total);
    }
  };
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

  return (
    <>
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <h2 className={`maq-h2 ${s.title}`}>Power BI custom visuals</h2>
          <div className={s.filterRow}>
            <InsightsFilterBar items={visualGuideFilters} active={activeFilter} onChange={setActiveFilter} />
          </div>
          <div className={s.chooserCallout}>
            <div className={s.chooserMain}>
              <div className={s.chooserIconWrap}>
                <LightbulbFilament24Regular />
              </div>
              <div className={s.chooserTextWrap}>
                <h3 className={s.chooserTitle}>New to Power BI visuals?</h3>
                <p className={s.chooserText}>Find the perfect visual in seconds with our Visual Chooser Guide.</p>
              </div>
            </div>
            <div className={s.chooserAction}>
              <PrimaryButton href="/insights/visual-chooser" iconAfter={<ArrowRight16Regular />}>
                Open visual chooser
              </PrimaryButton>
            </div>
          </div>
          <div className={s.grid}>
            {visibleItems.map((item) => (
              <Link
                key={item.name}
                className={s.card}
                to={`/insights/power-bi-custom-visual-guide/${visualGuideSlug(item.name)}`}
              >
                <div className={s.imageWrap}>
                  <img className={s.image} src={item.imageUrl} alt={item.name} loading="lazy" />
                </div>
                <span className={s.category}>{Array.isArray(item.category) ? item.category.join(", ") : item.category}</span>
                <h3 className={s.cardTitle}>{item.name}</h3>
                <p className={s.teaser}>{item.description}</p>
                <span className={s.read}>View visual</span>
              </Link>
            ))}
          </div>
          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} visuals
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

