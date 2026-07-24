import { makeStyles, typographyStyles, Dropdown, Option } from "@fluentui/react-components";
import { Dismiss16Regular } from "@fluentui/react-icons";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { TextButton } from "../components/buttons";
import { CaseStudyCard } from "../components/cards/CaseStudyCard";
import {
  caseStudyFilters,
  caseStudyIndustryFilters,
  caseStudyItems,
} from "../data/insights";

const INITIAL_VISIBLE = 9;

const useStyles = makeStyles({
  section: { padding: "56px 32px", backgroundColor: "var(--colorNeutralBackground1)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "left", marginBottom: "44px" },
  title: { fontSize: "36px", lineHeight: 1.15, fontWeight: 700, color: "var(--maq-navy)", margin: "0 0 28px", letterSpacing: "-0.02em", textAlign: "left" },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "flex-end",
  },
  filterGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    minWidth: "220px",
  },
  filterLabel: {
    ...typographyStyles.body1Strong,
    color: "var(--maq-gray-700)",
  },
  clearGroup: {
    // Sit level with the dropdown controls (which have a label stacked above them),
    // not with the labels. The filters row aligns items to flex-end.
    display: "flex",
    alignItems: "center",
    minHeight: "32px",
  },
  dropdown: {
    minWidth: "220px",
  },
  grid: {
    marginTop: "0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  empty: {
    padding: "40px 0",
    fontSize: "15px",
    color: "var(--maq-gray-700)",
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

const ALL_INDUSTRY_LABEL = "All industries";
const ALL_SERVICE_LABEL = "All services";

// Older service names that still live in bookmarks and outbound links; map them
// onto the current chip labels (which mirror the service nav) so those URLs don't
// land on an empty grid.
const serviceAliases: Record<string, string> = {
  "Data & analytics": "Data & AI platforms",
  "Data & Analytics": "Data & AI platforms",
  "Data & AI Platforms": "Data & AI platforms",
  "Agentic AI & Machine Learning": "AI solutions & agents",
  "Reporting & visualization": "Insights & analytics",
  "Insights & Analytics": "Insights & analytics",
  "Application modernization": "Business apps & automation",
  "Cloud optimization": "Cloud modernization",
  "Cloud Modernization": "Cloud modernization",
  "Security": "Security & governance",
};

export function InsightsCaseStudies() {
  const s = useStyles();
  const [searchParams] = useSearchParams();

  // Service can arrive as ?service= (current) or ?filter= (legacy links).
  const rawServiceParam = searchParams.get("service") || searchParams.get("filter") || "All";
  const serviceParam = serviceAliases[rawServiceParam] || rawServiceParam;
  const industryParam = searchParams.get("industry") || "All";

  const [activeService, setActiveService] = useState(serviceParam);
  const [activeIndustry, setActiveIndustry] = useState(industryParam);

  useEffect(() => {
    setActiveService(serviceParam);
  }, [serviceParam]);
  useEffect(() => {
    setActiveIndustry(industryParam);
  }, [industryParam]);

  const didScroll = useRef(false);
  useEffect(() => {
    if (didScroll.current) return;
    if (window.location.hash !== "#insights-content") return; // only scroll if hash present
    const el = document.getElementById("insights-content");
    if (el) {
      didScroll.current = true;
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, []);

  // Only offer industries that actually have at least one tagged study, ordered to
  // match the industries nav. A vertical with no studies (e.g. Healthcare) is dropped.
  const availableIndustries = useMemo(() => {
    const present = new Set(
      caseStudyItems.map((item) => item.industry).filter(Boolean) as string[]
    );
    return caseStudyIndustryFilters.filter((f) => f === "All" || present.has(f));
  }, []);

  // Per-option counts are computed against the OTHER axis's current selection, so a
  // dropdown shows how many studies you'd get if you picked that option. Zero-count
  // options are disabled so you can't select into an empty grid.
  const industryCounts = useMemo(() => {
    const base =
      activeService === "All"
        ? caseStudyItems
        : caseStudyItems.filter((item) => item.service === activeService);
    const counts: Record<string, number> = {};
    for (const f of availableIndustries) {
      counts[f] = f === "All" ? base.length : base.filter((item) => item.industry === f).length;
    }
    return counts;
  }, [activeService, availableIndustries]);

  const serviceCounts = useMemo(() => {
    const base =
      activeIndustry === "All"
        ? caseStudyItems
        : caseStudyItems.filter((item) => item.industry === activeIndustry);
    const counts: Record<string, number> = {};
    for (const f of caseStudyFilters) {
      counts[f] = f === "All" ? base.length : base.filter((item) => item.service === f).length;
    }
    return counts;
  }, [activeIndustry]);

  const filtered = useMemo(() => {
    return caseStudyItems.filter(
      (item) =>
        (activeService === "All" || item.service === activeService) &&
        (activeIndustry === "All" || item.industry === activeIndustry)
    );
  }, [activeService, activeIndustry]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeService, activeIndustry]);

  const total = filtered.length;
  const halfCount = Math.max(INITIAL_VISIBLE + 1, Math.ceil(total / 2));
  const visibleItems = filtered.slice(0, visibleCount);

  useEffect(() => {
    const preloadItems = visibleItems.slice(0, 3);
    const links = preloadItems
      .map((item) => item.imageUrl)
      .filter((href, index, values) => Boolean(href) && values.indexOf(href) === index)
      .map((href) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = href;
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
        return link;
      });

    return () => {
      links.forEach((link) => link.remove());
    };
  }, [visibleItems]);

  const handleShowMore = () => {
    if (visibleCount < halfCount && halfCount < total) {
      setVisibleCount(halfCount);
    } else {
      setVisibleCount(total);
    }
  };
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

  const filtersActive = activeService !== "All" || activeIndustry !== "All";
  const handleClearFilters = () => {
    setActiveService("All");
    setActiveIndustry("All");
  };

  const industryLabel = (f: string) => (f === "All" ? ALL_INDUSTRY_LABEL : f);
  const serviceLabel = (f: string) => (f === "All" ? ALL_SERVICE_LABEL : f);

  return (
    <>
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Case studies</h2>
            <div className={s.filters}>
              <div className={s.filterGroup}>
                <label id="cs-service-label" className={s.filterLabel}>
                  Service
                </label>
                <Dropdown
                  aria-labelledby="cs-service-label"
                  className={s.dropdown}
                  value={serviceLabel(activeService)}
                  selectedOptions={[activeService]}
                  onOptionSelect={(_e, data) => {
                    if (data.optionValue) setActiveService(data.optionValue);
                  }}
                >
                  {caseStudyFilters.map((f) => (
                    <Option
                      key={f}
                      value={f}
                      text={serviceLabel(f)}
                      disabled={f !== "All" && (serviceCounts[f] ?? 0) === 0}
                    >
                      {`${serviceLabel(f)} (${serviceCounts[f] ?? 0})`}
                    </Option>
                  ))}
                </Dropdown>
              </div>

              <div className={s.filterGroup}>
                <label id="cs-industry-label" className={s.filterLabel}>
                  Industry
                </label>
                <Dropdown
                  aria-labelledby="cs-industry-label"
                  className={s.dropdown}
                  value={industryLabel(activeIndustry)}
                  selectedOptions={[activeIndustry]}
                  onOptionSelect={(_e, data) => {
                    if (data.optionValue) setActiveIndustry(data.optionValue);
                  }}
                >
                  {availableIndustries.map((f) => (
                    <Option
                      key={f}
                      value={f}
                      text={industryLabel(f)}
                      disabled={f !== "All" && (industryCounts[f] ?? 0) === 0}
                    >
                      {`${industryLabel(f)} (${industryCounts[f] ?? 0})`}
                    </Option>
                  ))}
                </Dropdown>
              </div>

              {filtersActive && (
                <div className={s.clearGroup}>
                  <TextButton onClick={handleClearFilters} iconBefore={<Dismiss16Regular />}>
                    Clear filters
                  </TextButton>
                </div>
              )}
            </div>
          </div>

          {total === 0 ? (
            <p className={s.empty}>No case studies match this combination. Try widening one of the filters.</p>
          ) : (
            <div className={s.grid}>
              {visibleItems.map((item, idx) => (
                <CaseStudyCard
                  key={item.href}
                  title={item.title}
                  href={item.href}
                  imageUrl={item.imageUrl}
                  imageAlt={item.title}
                  ctaLabel="Read full story"
                  eager={idx < 3}
                />
              ))}
            </div>
          )}

          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} case studies
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
