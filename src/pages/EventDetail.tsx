import { makeStyles } from "@fluentui/react-components";
import { Link, useParams } from "react-router-dom";
import { PrimaryButton } from "../components/buttons";
import { RichTextBody } from "../components/content/RichTextBody";
import { NotFound } from "./NotFound";
import { assetUrl } from "../lib/assetUrl";
import { formatDateRange, getEvent } from "../lib/content";

const useStyles = makeStyles({
  article: {
    padding: "48px var(--section-pad-x) 72px",
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
  facts: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px 20px",
    margin: "0 0 24px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-gray-500)",
  },
  cover: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    borderRadius: "14px",
    border: "1px solid var(--maq-border)",
    marginBottom: "28px",
  },
  summary: {
    margin: "0 0 28px",
    padding: "16px 20px",
    borderLeft: "3px solid var(--maq-red)",
    background: "var(--maq-gray-50)",
    color: "var(--maq-ink)",
  },
  cta: { marginTop: "36px" },
});

export function EventDetail() {
  const s = useStyles();
  const { slug } = useParams();
  const event = getEvent(slug);

  if (!event) return <NotFound />;

  return (
    <article className={s.article}>
      <div className={s.inner}>
        <Link className={s.breadcrumb} to="/events">
          ← All events
        </Link>
        <div>
          <span className={s.tag}>{event.eventType}</span>
        </div>
        <h1 className={`maq-h1 ${s.title}`}>{event.title}</h1>
        <p className={s.facts}>
          <span>{formatDateRange(event.startDate, event.endDate)}</span>
          {event.location ? <span>{event.location}</span> : null}
        </p>

        {event.image ? (
          <img
            className={s.cover}
            src={assetUrl(event.image)}
            alt={event.imageAlt ?? event.title}
          />
        ) : null}

        {event.summary ? <p className={`maq-body ${s.summary}`}>{event.summary}</p> : null}

        <RichTextBody html={event.html} />

        {event.registrationUrl ? (
          <div className={s.cta}>
            <PrimaryButton
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </PrimaryButton>
          </div>
        ) : null}
      </div>
    </article>
  );
}
