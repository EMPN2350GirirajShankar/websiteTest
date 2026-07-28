import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assetUrl";
import { formatDateRange, getEventsByTiming, type SiteEvent } from "../lib/content";

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
  intro: { margin: "0 0 24px", maxWidth: "720px", color: "var(--maq-muted-color)" },
  groupTitle: { margin: "40px 0 16px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    color: "inherit",
    textDecoration: "none",
    transition: "border-color 0.16s ease",
    ":hover": { border: "1px solid var(--maq-card-hover-border-interactive)" },
  },
  cardImage: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderBottom: "1px solid var(--maq-border)",
    background: "var(--maq-surface-soft)",
  },
  cardBody: { padding: "20px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
  cardTag: {
    alignSelf: "flex-start",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  cardTitle: { margin: 0, fontSize: "19px", fontWeight: 700, color: "var(--maq-black)", lineHeight: 1.35 },
  cardMeta: { fontSize: "13px", fontWeight: 600, color: "var(--maq-gray-500)" },
  cardSummary: { margin: 0, fontSize: "13.5px", lineHeight: 1.55, color: "var(--maq-gray-700)", flex: 1 },
  cardCta: { fontSize: "13.5px", fontWeight: 600, color: "var(--maq-red)" },
  empty: {
    padding: "40px 24px",
    border: "1px dashed var(--maq-border-strong)",
    borderRadius: "12px",
    textAlign: "center",
    color: "var(--maq-muted-color)",
  },
});

function EventCard({ event }: { event: SiteEvent }) {
  const s = useStyles();
  return (
    <Link className={s.card} to={`/events/${event.slug}`}>
      {event.image ? (
        <img
          className={s.cardImage}
          src={assetUrl(event.image)}
          alt={event.imageAlt ?? event.title}
          loading="lazy"
        />
      ) : (
        <div className={s.cardImage} aria-hidden="true" />
      )}
      <div className={s.cardBody}>
        <span className={s.cardTag}>{event.eventType}</span>
        <h3 className={s.cardTitle}>{event.title}</h3>
        <span className={s.cardMeta}>
          {formatDateRange(event.startDate, event.endDate)}
          {event.location ? ` · ${event.location}` : ""}
        </span>
        <p className={s.cardSummary}>{event.summary}</p>
        <span className={s.cardCta}>View details</span>
      </div>
    </Link>
  );
}

export function EventsIndex() {
  const s = useStyles();
  const { upcoming, past } = getEventsByTiming();

  return (
    <>
      <section className={s.header}>
        <div className={s.inner}>
          <h1 className={`maq-h1 ${s.title}`}>All events</h1>
          <p className={`maq-body ${s.intro}`}>
            Conferences, webinars, and workshops hosted or attended by MAQ Software.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          {upcoming.length === 0 && past.length === 0 ? (
            <p className={`maq-body ${s.empty}`}>
              No events published yet. Add one from the content studio at <code>/admin/</code>.
            </p>
          ) : null}

          {upcoming.length > 0 ? (
            <>
              <h2 className={`maq-h3 ${s.groupTitle}`}>Upcoming</h2>
              <div className={s.grid}>
                {upcoming.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </>
          ) : null}

          {past.length > 0 ? (
            <>
              <h2 className={`maq-h3 ${s.groupTitle}`}>Past events</h2>
              <div className={s.grid}>
                {past.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
