import { useCallback, useEffect, useState } from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";
import {
  Open16Regular,
  ChevronDown20Regular,
  ChevronRight20Regular,
} from "@fluentui/react-icons";
import { PrimaryButton, TextButton } from "../components/buttons";
import {
  fetchOpenings,
  careerReasons,
  JOBSCORE_URL,
  type CareersRegion,
  type JobOpening,
} from "../data/careers";

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--colorNeutralBackground3)",
    // Consistent About-page hero padding (see AboutWhoWeAre for the pattern).
    padding: "40px 32px",
  },
  heroInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    margin: "0 0 12px",
  },
  heroSub: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "720px",
    margin: 0,
  },

  // ── Why MAQ ───────────────────────────────────────────────────────────────
  whySection: { padding: "48px 32px", backgroundColor: "#fff" },
  whyInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  sectionHeading: {
    margin: "0 0 24px",
    textAlign: "left" as const,
  },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  whyCard: {
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid var(--maq-border)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "border-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
    },
  },
  whyTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  whyBody: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // ── Openings section ──────────────────────────────────────────────────────
  openingsSection: {
    padding: "40px 32px 64px",
    backgroundColor: "var(--colorNeutralBackground3)",
  },
  openingsInner: {
    maxWidth: "var(--maq-container-wide)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  jobscoreBanner: {
    padding: "20px 24px",
    borderRadius: "12px",
    border: "1px solid var(--maq-border)",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "12px",
  },
  jobscoreText: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // Tabs
  tabBar: {
    display: "flex",
    gap: "4px",
    borderBottom: "1px solid var(--maq-border)",
  },
  tabBtn: {
    appearance: "none" as const,
    background: "transparent",
    border: "none",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-gray-700)",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    marginBottom: "-1px",
    ":hover": { color: "var(--maq-red)" },
  },
  tabBtnActive: {
    color: "var(--maq-red)",
    borderBottom: "2px solid var(--maq-red)",
  },

  // Job list
  jobList: { display: "flex", flexDirection: "column", gap: "10px" },
  jobItem: {
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    overflow: "hidden",
    transition: "border-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-border-strong)",
    },
  },
  jobHeader: {
    width: "100%",
    appearance: "none" as const,
    background: "transparent",
    border: "none",
    textAlign: "left" as const,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--maq-black)",
  },
  jobTitleText: { flex: 1 },
  jobBody: {
    padding: "10px 20px 20px 52px",
    fontSize: "14px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    "& a": { color: "var(--maq-red)" },
    "& ul, & ol": { paddingLeft: "20px" },
    "& p": { margin: "8px 0" },
  },
  jobActions: {
    display: "flex",
    gap: "8px",
    paddingTop: "12px",
    flexWrap: "wrap" as const,
  },

  centerState: {
    padding: "32px",
    textAlign: "center" as const,
    color: "var(--maq-gray-700)",
    fontSize: "14px",
  },
});

const REGIONS: { id: CareersRegion; label: string }[] = [
  { id: "us", label: "United States" },
  { id: "india", label: "India" },
];

function JobAccordionItem({ job }: { job: JobOpening }) {
  const s = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={s.jobItem}>
      <button
        type="button"
        className={s.jobHeader}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <ChevronDown20Regular /> : <ChevronRight20Regular />}
        <span className={s.jobTitleText}>{job.title}</span>
      </button>
      {open && (
        <div className={s.jobBody}>
          {/* Sanitized Blogger content HTML from src/data/careers.ts. */}
          <div dangerouslySetInnerHTML={{ __html: job.contentHtml }} />
          <div className={s.jobActions}>
            {job.applyUrl && (
              <PrimaryButton
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                iconAfter={<Open16Regular />}
              >
                Apply on JobScore
              </PrimaryButton>
            )}
            <TextButton
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full posting
            </TextButton>
          </div>
        </div>
      )}
    </div>
  );
}

export function AboutCareers() {
  const s = useStyles();
  const [region, setRegion] = useState<CareersRegion>("us");
  const [jobsByRegion, setJobsByRegion] = useState<
    Partial<Record<CareersRegion, JobOpening[]>>
  >({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (r: CareersRegion) => {
    try {
      setLoading(true);
      setError(null);
      const jobs = await fetchOpenings(r);
      setJobsByRegion((prev) => ({ ...prev, [r]: jobs }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load openings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!jobsByRegion[region]) void load(region);
  }, [region, jobsByRegion, load]);

  const currentJobs = jobsByRegion[region];

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={`maq-h1 ${s.h1}`}>Careers</h1>
          <p className={s.heroSub}>
            Build a career on AI, data, and cloud projects for Fortune 500
            customers. Explore open roles across offices in the United States and
            India.
          </p>
        </div>
      </section>

      {/* Why MAQ */}
      <section className={s.whySection}>
        <div className={s.whyInner}>
          <h2 className={`maq-h2 ${s.sectionHeading}`}>Why build your career at MAQ Software</h2>
          <div className={s.whyGrid}>
            {careerReasons.map((r) => (
              <div key={r.title} className={s.whyCard}>
                <h3 className={s.whyTitle}>{r.title}</h3>
                <p className={s.whyBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings — fetched live from the Blogger feed used by the original site */}
      <section className={s.openingsSection}>
        <div className={s.openingsInner}>
          <h2 className={`maq-h2 ${s.sectionHeading}`}>Open positions</h2>

          <div className={s.jobscoreBanner}>
            <p className={s.jobscoreText}>
              Apply to all open positions on JobScore.
            </p>
            <PrimaryButton
              href={JOBSCORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              iconAfter={<Open16Regular />}
            >
              Go to JobScore
            </PrimaryButton>
          </div>

          <div className={s.tabBar} role="tablist">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={region === r.id}
                className={
                  region === r.id
                    ? `${s.tabBtn} ${s.tabBtnActive}`
                    : s.tabBtn
                }
                onClick={() => setRegion(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>

          {loading && (
            <div className={s.centerState}>
              <Spinner label="Loading openings…" />
            </div>
          )}

          {error && !loading && (
            <div className={s.centerState}>
              {error}{" "}
              <TextButton size="small" onClick={() => void load(region)}>
                Retry
              </TextButton>
            </div>
          )}

          {!loading && !error && currentJobs && currentJobs.length === 0 && (
            <div className={s.centerState}>
              No job openings available at this location.
              <br />
              Please come back and check again soon.
            </div>
          )}

          {!loading && !error && currentJobs && currentJobs.length > 0 && (
            <div className={s.jobList}>
              {currentJobs.map((job) => (
                <JobAccordionItem key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  );
}
