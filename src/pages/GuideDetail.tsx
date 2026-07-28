import { useParams } from "react-router-dom";
import { ContentArticle } from "../components/content/ContentArticle";
import { NotFound } from "./NotFound";
import { formatDate, getGuide } from "../lib/content";

export function GuideDetail() {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) return <NotFound />;

  return (
    <ContentArticle
      backTo="/insights/best-practice-guides"
      backLabel="All best practice guides"
      tag={guide.topic}
      title={guide.title}
      meta={`${formatDate(guide.date)} · ${guide.readingTimeMinutes} min read`}
      image={guide.image}
      imageAlt={guide.imageAlt}
      html={guide.html}
    />
  );
}
