import { useParams } from "react-router-dom";
import { ContentArticle } from "../components/content/ContentArticle";
import { NotFound } from "./NotFound";
import { getCaseStudy } from "../lib/content";

export function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <NotFound />;

  return (
    <ContentArticle
      backTo="/insights/case-studies"
      backLabel="All case studies"
      tag={study.tag}
      title={study.title}
      meta={`${study.date} · ${study.readingTimeMinutes} min read`}
      image={study.image}
      imageAlt={study.imageAlt}
      template={study.template}
      sections={study.sections}
      html={study.html}
    />
  );
}
