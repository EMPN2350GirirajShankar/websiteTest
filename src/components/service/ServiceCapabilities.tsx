import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Carousel,
  CarouselAutoplayButton,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselSlider,
  CarouselViewport,
} from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  Bot24Regular,
  ChartMultiple24Regular,
  Sparkle24Regular,
  BranchFork24Regular,
  AppFolder24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { FeatureCard } from "../cards/FeatureCard";

/* Service "capabilities" — Fluent 2 Carousel showing several capability cards
   per view. Shared by every service page; each page passes its own
   `capabilities` array plus the section title and case-studies link.

   Cards: we reuse the shared <FeatureCard> so these match the outcomes section
   below exactly (icon inline with the heading, description underneath, same
   border/padding/hover). FeatureCard is width/height:100%, so it fills its
   slide — and because slides stretch to the tallest in view, the cards stay
   equal height.

   Slide spacing (important):
   The Fluent Carousel is powered by embla-carousel, and Embla does not carry a
   container-level `gap` across the loop boundary — the spacing isn't part of a
   slide's own box, so the wrap point renders flush and the slide offsets drift
   (clipping the first card's edge). Embla's pattern is to make the spacing part
   of each slide: zero the slider's gap, give every slide a left padding, and
   cancel the first slide's padding with a negative margin on the slider. That
   keeps a consistent gap all the way around the loop. 16px matches the row
   rhythm in the section below (ServiceOutcomes).

   `groupSize` is left at its default ('auto') so the nav regroups to match
   however many cards are visible at each breakpoint. */

export interface Capability {
  name: string;
  description: string;
  icon: ReactNode;
  /* Partner/brand logo shown above the name in the bare grid variant. */
  logo?: string;
  /* Retained for call sites that still describe their capabilities this way.
     The carousel renders name + description + icon only. */
  tagline?: string;
  tags?: string[];
}

export interface ServiceCapabilitiesProps {
  sectionId?: string;
  title?: string;
  /* Accepted but not rendered — the section leads with the title alone. */
  subhead?: string;
  capabilities?: Capability[];
  footerLabel?: string;
  footerHref?: string;
  /* Label for the carousel region; falls back to the section title. */
  ariaLabel?: string;
  /* "carousel" (default) rotates cards; "grid" lays them out in a static
     3-column grid for pages that only have a few capabilities to show. */
  variant?: "carousel" | "grid";
  /* Grid variant only: hides the case-studies footer link. */
  hideFooter?: boolean;
  /* Grid variant only: drops each card's icon and border (plain-text columns). */
  bareCards?: boolean;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },

  head: { marginBottom: "28px" },
  // Typography comes from the canonical `.maq-h2` class; only layout here.
  title: {
    margin: 0,
    textAlign: "left",
  },

  // Why the gutter is compensated on the root and not on the slider:
  //
  // Fluent's Embla config sets `inViewThreshold: 0.99` (useEmblaCarousel.js),
  // and CarouselCard marks any slide Embla reports as out-of-view with
  // `element.inert = true` (useCarouselCard.js). `inert` kills clicks, hover,
  // and focus. So a slide that is even 2% outside the viewport goes dead.
  //
  // Slide spacing lives in each slide's own left padding (see note above),
  // which means the first slide carries a 16px gutter that has to be cancelled
  // for card 1 to line up with the h2. Cancelling it on the SLIDER hangs that
  // gutter outside the viewport, leaving slide 1 ~96% visible — under the 0.99
  // threshold, so Embla calls it out-of-view and the first card in every page
  // position is inert. It also parked card 1's left border on the root's
  // `overflow-x: hidden` clip edge, where sub-pixel transforms could shave it.
  //
  // Pulling the whole carousel left by a gutter instead keeps every slide fully
  // inside the viewport (all in view, none inert), moves card 1's border 16px
  // clear of the clip edge, and still lands it on the container edge. The last
  // visible card then ends flush with the viewport's right edge, so the next
  // card stays hidden.
  carousel: {
    marginLeft: "-16px",
  },
  slider: {
    // Spacing comes from each slide's padding-left (see note above), so the
    // container gap is zeroed.
    gap: 0,
  },
  slide: {
    flex: "0 0 33.3333%",
    paddingLeft: "16px",
    boxSizing: "border-box",
    "@media (max-width: 1080px)": { flex: "0 0 50%" },
    "@media (max-width: 640px)": { flex: "0 0 100%" },
  },

  // Static 3-column grid variant — same 16px rhythm as the carousel slides.
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },

  // Bare grid: gap collapses to 0 on desktop so the vertical dividers (below)
  // sit centered between columns; falls back to gap-based spacing when stacked.
  bareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0,
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr", gap: "28px" },
  },
  // Plain-text column (bareCards): logo + heading + description, no card chrome.
  bareItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "left",
    // Hairline dividers between the three columns (desktop 3-up only).
    "@media (min-width: 1081px)": {
      ":not(:first-child)": { paddingLeft: "28px", borderLeft: "1px solid var(--maq-border)" },
      ":not(:last-child)": { paddingRight: "28px" },
    },
  },
  bareLogo: {
    height: "34px",
    width: "auto",
    maxWidth: "160px",
    objectFit: "contain",
    objectPosition: "left center",
    display: "block",
    marginBottom: "14px",
    alignSelf: "flex-start",
  },
  bareName: { fontSize: "20px", fontWeight: 700, lineHeight: 1.2, margin: 0, color: "var(--maq-black)" },
  bareDesc: { fontSize: "13.5px", lineHeight: 1.6, margin: 0, color: "var(--maq-gray-700)" },

  // Nav (left) + case-studies link (right) on one row under the cards.
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    marginTop: "24px",
    "@media (max-width: 640px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
    },
  },
  // Play/pause + dots travel together on the left of the footer row.
  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flexShrink: 0,
  },
  autoplayButton: {
    color: "var(--maq-navy)",
    ":hover": { color: "var(--maq-red)" },
  },
  // Fluent's nav container is width:100% + justify-content:center; shrink it so
  // it sits left in the footer row instead of stretching across it.
  nav: {
    width: "auto",
    justifyContent: "flex-start",
    marginTop: 0,
    flexShrink: 0,
  },
  // The dot is the button's ::after; selected already renders as a wider pill,
  // so we only recolor it to the brand red (matches the home page pills).
  navButton: {
    '&[aria-selected="true"]::after': {
      backgroundColor: "var(--maq-red)",
    },
  },
  footerLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    flexShrink: 0,
    ":hover": { textDecoration: "underline" },
  },
});

const defaultCapabilities: Capability[] = [
  {
    name: "Azure AI Foundry",
    tagline: "Production AI on Azure Foundry",
    icon: <Bot24Regular />,
    description:
      "Build and run production-ready AI applications and agents on Azure AI Foundry, governed for enterprise scale.",
    tags: ["Azure AI Foundry", "Production AI", "Governance"],
  },
  {
    name: "Azure OpenAI Service",
    tagline: "Enterprise generative AI applications",
    icon: <Sparkle24Regular />,
    description:
      "Ship generative AI applications on OpenAI models in Azure OpenAI Service, with security, compliance, and native Azure integration.",
    tags: ["Azure OpenAI", "Generative AI", "Enterprise Security"],
  },
  {
    name: "Microsoft Copilot Studio",
    tagline: "Custom copilots for business workflows",
    icon: <AppFolder24Regular />,
    description:
      "Deploy custom copilots and assistants that automate business processes and answer questions across enterprise applications with Microsoft Copilot Studio.",
    tags: ["Copilot Studio", "Custom Copilots", "Workflow Automation"],
  },
  {
    name: "Agentic AI & Multi-Agent Systems",
    tagline: "Autonomous agents for complex workflows",
    icon: <BranchFork24Regular />,
    description:
      "Coordinate specialized agents into autonomous systems that run complex workflows, make decisions, and complete business objectives.",
    tags: ["Agentic AI", "Multi-Agent", "Autonomous Workflows"],
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    tagline: "Grounded AI with enterprise knowledge",
    icon: <ChartMultiple24Regular />,
    description:
      "Ground large language models in your enterprise knowledge with secure retrieval across structured and unstructured data, so responses stay accurate.",
    tags: ["RAG", "Knowledge Grounding", "LLM"],
  },
  {
    name: "AI Governance & Responsible AI",
    tagline: "Trusted, secure, and compliant AI",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Govern AI systems to stay secure, compliant, transparent, and explainable, aligned with responsible AI principles.",
    tags: ["Responsible AI", "AI Governance", "Compliance"],
  },
];

export function ServiceCapabilities({
  sectionId = "ai-capabilities",
  title = "What you can build with AI solutions & agents",
  capabilities = defaultCapabilities,
  footerLabel = "See AI solutions & agents case studies",
  footerHref = "/insights/case-studies?filter=AI%20solutions%20%26%20agents#insights-content",
  ariaLabel,
  variant = "carousel",
  hideFooter = false,
  bareCards = false,
}: ServiceCapabilitiesProps = {}) {
  const s = useStyles();

  // Two separate pieces of state, because "the user pressed pause" and "the
  // pointer is over the cards" have to be distinguishable — otherwise moving
  // the mouse away would silently undo an explicit pause.
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [pointerOverCards, setPointerOverCards] = useState(false);

  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.head}>
          <h2 className={`maq-h2 ${s.title}`}>{title}</h2>
        </div>

        {variant === "grid" ? (
          <>
            <div className={bareCards ? s.bareGrid : s.grid}>
              {capabilities.map((c) =>
                bareCards ? (
                  <div key={c.name} className={s.bareItem}>
                    {c.logo ? (
                      <img className={s.bareLogo} src={c.logo} alt="" aria-hidden />
                    ) : null}
                    <h3 className={s.bareName}>{c.name}</h3>
                    <p className={s.bareDesc}>{c.description}</p>
                  </div>
                ) : (
                  <FeatureCard
                    key={c.name}
                    icon={c.icon}
                    name={c.name}
                    description={c.description}
                  />
                ),
              )}
            </div>

            {!hideFooter && (
              <div className={s.footerRow}>
                <Link className={s.footerLink} to={footerHref}>
                  {footerLabel} <ArrowRight16Regular />
                </Link>
              </div>
            )}
          </>
        ) : (
        <Carousel
          className={s.carousel}
          align="start"
          circular
          autoplayInterval={6000}
          aria-label={ariaLabel ?? title}
          announcement={(index, totalSlides) =>
            `Capability ${index + 1} of ${totalSlides}`
          }
        >
          {/* Hover pause is scoped to the viewport (the cards) rather than the
              whole Carousel. If it covered the footer too, hovering the
              play/pause button would itself pause autoplay and invert what the
              button's next click means. */}
          <CarouselViewport
            onMouseEnter={() => setPointerOverCards(true)}
            onMouseLeave={() => setPointerOverCards(false)}
          >
            <CarouselSlider className={s.slider}>
              {capabilities.map((c) => (
                <CarouselCard key={c.name} className={s.slide} aria-label={c.name}>
                  <FeatureCard icon={c.icon} name={c.name} description={c.description} />
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>

          <div className={s.footerRow}>
            <div className={s.navGroup}>
              <CarouselNavContainer
                className={s.nav}
                layout="inline"
                next={{ "aria-label": "Next capabilities" }}
                prev={{ "aria-label": "Previous capabilities" }}
              >
                <CarouselNav>
                  {(index) => (
                    <CarouselNavButton
                      className={s.navButton}
                      aria-label={`Go to capability group ${index + 1}`}
                    />
                  )}
                </CarouselNav>
              </CarouselNavContainer>

              {/* Autoplay is only active while this button is mounted — Fluent
                  gates it deliberately, which also satisfies WCAG 2.2.2: content
                  that moves on its own needs a way to stop it. `checked` is
                  controlled, so hovering the cards pauses without clearing the
                  user's own play/pause choice. */}
              <CarouselAutoplayButton
                className={s.autoplayButton}
                appearance="transparent"
                checked={autoplayEnabled && !pointerOverCards}
                onCheckedChange={(_, data) => setAutoplayEnabled(data.checked)}
                aria-label={
                  autoplayEnabled
                    ? "Pause automatic rotation"
                    : "Start automatic rotation"
                }
              />
            </div>

            <Link className={s.footerLink} to={footerHref}>
              {footerLabel} <ArrowRight16Regular />
            </Link>
          </div>
        </Carousel>
        )}
      </div>
    </section>
  );
}
