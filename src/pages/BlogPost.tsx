import { makeStyles } from "@fluentui/react-components";
import { Link, useParams } from "react-router-dom";
import { RichTextBody } from "../components/content/RichTextBody";
import { ArticleCard } from "../components/cards/ArticleCard";
import { NotFound } from "./NotFound";
import { assetUrl } from "../lib/assetUrl";
import { formatDate, getBlogPost, getRelatedPosts } from "../lib/content";

const useStyles = makeStyles({
  article: {
    padding: "48px var(--section-pad-x) 24px",
    backgroundColor: "var(--colorNeutralBackground1)",
  },
  inner: { maxWidth: "760px", margin: "0 auto" },
  breadcrumb: {
    display: "inline-block",
    marginBottom: "20px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
  tag: {
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
  title: { margin: "14px 0 12px", color: "var(--maq-heading-color)" },
  meta: {
    margin: "0 0 28px",
    fontSize: "14px",
    color: "var(--maq-gray-500)",
    fontWeight: 600,
  },
  cover: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    borderRadius: "14px",
    border: "1px solid var(--maq-border)",
    marginBottom: "32px",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid var(--maq-border)",
  },
  chip: {
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--maq-gray-700)",
    background: "var(--maq-gray-50)",
    border: "1px solid var(--maq-border)",
    borderRadius: "999px",
    padding: "4px 12px",
  },
  related: {
    padding: "24px var(--section-pad-x) 72px",
    backgroundColor: "var(--colorNeutralBackground1)",
  },
  relatedInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  relatedTitle: { margin: "0 0 20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
});

export function BlogPost() {
  const s = useStyles();
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post);

  return (
    <>
      <article className={s.article}>
        <div className={s.inner}>
          <Link className={s.breadcrumb} to="/blog">
            ← All posts
          </Link>
          <div>
            <span className={s.tag}>{post.category}</span>
          </div>
          <h1 className={`maq-h1 ${s.title}`}>{post.title}</h1>
          <p className={s.meta}>
            {post.author} · {formatDate(post.date)} · {post.readingTimeMinutes} min read
          </p>

          {post.image ? (
            <img
              className={s.cover}
              src={assetUrl(post.image)}
              alt={post.imageAlt ?? post.title}
            />
          ) : null}

          <RichTextBody html={post.html} />

          {post.tags.length > 0 ? (
            <div className={s.tagRow}>
              {post.tags.map((tag) => (
                <span key={tag} className={s.chip}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      {related.length > 0 ? (
        <section className={s.related}>
          <div className={s.relatedInner}>
            <h2 className={`maq-h3 ${s.relatedTitle}`}>More from the blog</h2>
            <div className={s.grid}>
              {related.map((item) => (
                <ArticleCard
                  key={item.slug}
                  title={item.title}
                  teaser={item.excerpt}
                  href={`/blog/${item.slug}`}
                  imageUrl={item.image}
                  imageAlt={item.imageAlt ?? item.title}
                  tag={item.category}
                  date={formatDate(item.date)}
                  openInNewTab={false}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
