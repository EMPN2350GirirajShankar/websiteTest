import { makeStyles } from "@fluentui/react-components";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArticleCard } from "../components/cards/ArticleCard";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { TextButton } from "../components/buttons";
import { assetUrl } from "../lib/assetUrl";
import { formatDate, getBlogCategories, getBlogPosts } from "../lib/content";

const INITIAL_VISIBLE = 9;

const useStyles = makeStyles({
  header: {
    padding: "56px var(--section-pad-x) 8px",
    backgroundColor: "var(--colorNeutralBackground1)",
  },
  section: {
    padding: "24px var(--section-pad-x) 72px",
    backgroundColor: "var(--colorNeutralBackground1)",
  },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  title: { margin: "0 0 12px" },
  intro: { margin: "0 0 32px", maxWidth: "720px", color: "var(--maq-muted-color)" },
  featured: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "28px",
    alignItems: "center",
    padding: "24px",
    marginBottom: "40px",
    border: "1px solid var(--maq-border)",
    borderRadius: "16px",
    background: "var(--maq-gray-50)",
    "@media (max-width: 860px)": { gridTemplateColumns: "1fr" },
  },
  featuredImage: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    borderRadius: "12px",
    border: "1px solid var(--maq-border)",
    background: "var(--maq-surface-soft)",
  },
  featuredTag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  featuredTitle: { margin: "12px 0 10px", color: "var(--maq-heading-color)" },
  featuredExcerpt: { margin: "0 0 14px", color: "var(--maq-body-color)" },
  meta: { fontSize: "13px", color: "var(--maq-gray-500)", fontWeight: 600 },
  link: {
    display: "inline-block",
    marginTop: "16px",
    color: "var(--maq-red)",
    fontWeight: 700,
    textDecoration: "none",
  },
  grid: {
    marginTop: "32px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  empty: {
    marginTop: "32px",
    padding: "40px 24px",
    border: "1px dashed var(--maq-border-strong)",
    borderRadius: "12px",
    textAlign: "center",
    color: "var(--maq-muted-color)",
  },
  paginationControls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  controlsText: { fontSize: "13px", color: "var(--maq-gray-700)" },
});

export function Blog() {
  const s = useStyles();
  const posts = getBlogPosts();
  const categories = getBlogCategories();
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const featured = posts.find((post) => post.featured);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? posts
        : posts.filter((post) => post.category === activeFilter),
    [activeFilter, posts]
  );

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const visibleItems = filtered.slice(0, visibleCount);

  return (
    <>
      <section className={s.header}>
        <div className={s.inner}>
          <h1 className={`maq-h1 ${s.title}`}>Blog</h1>
          <p className={`maq-body ${s.intro}`}>
            Field notes from our engineers on data platforms, AI, and analytics at
            enterprise scale.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          {featured && activeFilter === "All" ? (
            <article className={s.featured}>
              <div>
                <span className={s.featuredTag}>{featured.category}</span>
                <h2 className={`maq-h3 ${s.featuredTitle}`}>{featured.title}</h2>
                <p className={`maq-body ${s.featuredExcerpt}`}>{featured.excerpt}</p>
                <span className={s.meta}>
                  {formatDate(featured.date)} · {featured.readingTimeMinutes} min read
                </span>
                <br />
                <Link className={s.link} to={`/blog/${featured.slug}`}>
                  Read the post →
                </Link>
              </div>
              {featured.image ? (
                <img
                  className={s.featuredImage}
                  src={assetUrl(featured.image)}
                  alt={featured.imageAlt ?? featured.title}
                  loading="lazy"
                />
              ) : (
                <div className={s.featuredImage} aria-hidden="true" />
              )}
            </article>
          ) : null}

          {categories.length > 1 ? (
            <InsightsFilterBar
              items={categories}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          ) : null}

          {visibleItems.length === 0 ? (
            <p className={`maq-body ${s.empty}`}>
              No posts yet. Publish the first one from the content studio at <code>/admin/</code>.
            </p>
          ) : (
            <div className={s.grid}>
              {visibleItems.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  teaser={post.excerpt}
                  href={`/blog/${post.slug}`}
                  imageUrl={post.image}
                  imageAlt={post.imageAlt ?? post.title}
                  tag={post.category}
                  date={formatDate(post.date)}
                  ctaLabel="Read more"
                  openInNewTab={false}
                />
              ))}
            </div>
          )}

          {filtered.length > INITIAL_VISIBLE ? (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {filtered.length} posts
              </span>
              {visibleCount < filtered.length ? (
                <TextButton onClick={() => setVisibleCount(filtered.length)}>Show more</TextButton>
              ) : (
                <TextButton onClick={() => setVisibleCount(INITIAL_VISIBLE)}>Show less</TextButton>
              )}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
