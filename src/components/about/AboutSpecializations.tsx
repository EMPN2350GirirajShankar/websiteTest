import { makeStyles } from "@fluentui/react-components";
import { Open16Regular } from "@fluentui/react-icons";

/* Microsoft specializations — the 11 advanced specializations MAQ Software
   holds, shown on /who-we-are.

   Layout: a two-column vertical list via CSS multi-column. column-count:2 fills
   DOWN column one (items 1-6) then across into column two (items 7-11), so the
   intentional AI -> data -> cloud -> security priority order reads straight down
   each column and DOM order (1..11) also matches keyboard/screen-reader order.
   Do NOT swap this for flex-wrap or a default grid: both fill row-by-row and
   would zigzag the priority order (1,3,5,... down the left column).

   Names come from partner.microsoft.com and are trademarked — do not paraphrase
   them. Two use the name marketing asked for rather than the current page title:
   "Microsoft 365 Copilot" (page reads "Microsoft Copilot") and "Migrate
   Enterprise Applications to Microsoft Azure" (page reads "Modernization of Web
   Applications to Microsoft Azure"). Each title links to its Microsoft page so
   the claim is verifiable. The section subtext paraphrases Microsoft's own
   definition of a specialization rather than copying it verbatim — reproducing
   Microsoft's site copy would breach their Terms of Use and read as MAQ speaking
   for Microsoft; the official source of truth is linked (MAQ's Marketplace
   partner page) instead. */

interface Specialization {
  name: string;
  href: string;
}

// Ordered by service area — AI, then data, then cloud, then security — rather
// than by Microsoft's own alphabetical listing, so the strongest and most
// current capabilities lead. This order maps to columns as 1-6 left / 7-11 right.
const SPECIALIZATIONS: Specialization[] = [
  {
    name: "AI Platform on Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/ai-platform-on-microsoft-azure",
  },
  {
    name: "AI Apps on Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/ai-apps-on-microsoft-azure",
  },
  {
    name: "Microsoft 365 Copilot",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot",
  },
  {
    name: "Agentic DevOps with Microsoft Azure and GitHub",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/agenticdevops-microsoftazure-github",
  },
  {
    name: "Analytics on Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/analytics-on-microsoft-azure",
  },
  {
    name: "Data Warehouse Migration to Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration",
  },
  {
    name: "Kubernetes on Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/kubernetes",
  },
  {
    name: "Migrate Enterprise Applications to Microsoft Azure",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/migrate-enterprise-applications",
  },
  {
    name: "Cloud Security",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/cloud-security",
  },
  {
    name: "Identity and Access Management",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/identity-and-access-management",
  },
  {
    name: "Threat Protection",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/threat-protection",
  },
];

const MARKETPLACE_URL =
  "https://marketplace.microsoft.com/en-us/partners/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?OCID=AIDcmmcck6s5zt_SEM__k_a978e060f4e31ee83a6d8a02ccf127dd_k_";

// Split into two columns up front so each column is its own list and can carry
// its own top divider. The larger half leads (6 then 5), keeping the priority
// order reading straight down column one and continuing down column two.
const COLUMN_SPLIT = Math.ceil(SPECIALIZATIONS.length / 2);
const SPECIALIZATION_COLUMNS = [
  SPECIALIZATIONS.slice(0, COLUMN_SPLIT),
  SPECIALIZATIONS.slice(COLUMN_SPLIT),
];

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },

  head: { marginBottom: "24px" },
  title: {
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    letterSpacing: "-0.02em",
    textAlign: "left",
    margin: "0 0 12px",
    "@media (max-width: 560px)": { fontSize: "24px", lineHeight: 1.2 },
  },
  sub: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 0 12px",
  },
  marketplaceLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    borderRadius: "3px",
    ":hover": { color: "var(--maq-red-dark)" },
    ":focus-visible": { outline: "2px solid var(--maq-navy)", outlineOffset: "3px" },
  },

  // Two columns rendered as two explicit lists (the array is sliced 6/5), so the
  // priority order still reads DOWN each column (1-6 left, 7-11 right) and DOM
  // order stays 1..11 for keyboard/screen-reader. Explicit columns (rather than
  // CSS multi-column) are what let the divider live PER COLUMN: a container-level
  // border would span the flex gap and draw a line through the empty gutter.
  // Collapses to one stacked column at 760px (matches the page's card
  // breakpoints).
  columns: {
    display: "flex",
    gap: "48px",
    "@media (max-width: 760px)": { flexDirection: "column", gap: 0 },
  },
  // Divider scheme: each column owns its TOP line (scoped to that column, so it
  // never crosses the gutter), and each item owns its BOTTOM line — giving every
  // column's last item a bottom divider with single-1px interior lines (no
  // doubling). The top border is applied only in the two-column (>=761px) layout;
  // firstColumn re-adds it unconditionally so the stacked mobile list keeps a top
  // edge while the second column does NOT (its top is already the previous item's
  // bottom border).
  column: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    flex: "1 1 0",
    minWidth: 0,
    "@media (min-width: 761px)": { borderTop: "1px solid var(--maq-border)" },
  },
  firstColumn: {
    borderTop: "1px solid var(--maq-border)",
  },
  item: {
    margin: 0,
    borderBottom: "1px solid var(--maq-border)",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 4px",
    minHeight: "44px", // AAA-sized hit target now that the row is the target
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.4,
    color: "var(--maq-navy)",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "color 0.16s ease",
    // On hover/focus the whole row turns red: the text via `color`, and the icon
    // via the `--maq-spec-ext` custom property it reads (see extIcon). We drive
    // the icon through an inherited custom property rather than a `:hover .icon`
    // descendant selector because that selector silently failed to recolor the
    // SVG under Griffel here; `:hover` on the link itself (which recolors the
    // text) plus CSS-variable inheritance is reliable.
    ":hover": {
      color: "var(--maq-red)",
      "--maq-spec-ext": "var(--maq-red)",
      textDecoration: "underline", // non-color-only cue (WCAG 1.4.1)
      textUnderlineOffset: "3px",
    },
    ":focus-visible": {
      outline: "2px solid var(--maq-navy)",
      outlineOffset: "2px",
      color: "var(--maq-red)",
      "--maq-spec-ext": "var(--maq-red)",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
  },
  linkText: { flex: "1 1 auto" },
  extIcon: {
    flexShrink: 0,
    fontSize: "16px",
    // Muted gray at rest; the row's :hover/:focus-visible sets --maq-spec-ext to
    // red and this inherits it. Fallback keeps the gray when the var is unset.
    color: "var(--maq-spec-ext, var(--maq-gray-500))",
    transition: "color 0.16s ease",
  },

  // Real clip-based sr-only (NOT display:none, which also hides from AT).
  visuallyHidden: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

export function AboutSpecializations() {
  const s = useStyles();

  return (
    <section className={s.section} id="microsoft-specializations">
      <div className={s.inner}>
        <div className={s.head}>
          {/* Real <h2> gives assistive tech heading navigation and a
              programmatic label for the list below; styled to the site's
              left-aligned 36/700/navy section-title spec. */}
          <h2 className={s.title}>Microsoft specializations</h2>

          {/* MAQ-voice paraphrase of Microsoft Marketplace's definition — NOT
              copied verbatim (see the file header note). */}
          <p className={s.sub}>
            A Microsoft specialization is awarded only after Microsoft, or an
            approved third-party auditor, validates a partner&rsquo;s expertise
            against demanding, solution-specific standards. MAQ Software holds{" "}
            {SPECIALIZATIONS.length}.
          </p>

          {/* Official source of truth, next to the claim it verifies. */}
          <a
            className={s.marketplaceLink}
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View MAQ Software&rsquo;s specializations on Microsoft Marketplace
            <Open16Regular aria-hidden="true" />
            <span className={s.visuallyHidden}> (opens in a new tab)</span>
          </a>
        </div>

        {/* Two native <ul>/<li> lists (one per visual column) so list semantics
            are guaranteed without ARIA gymnastics. role="list" is kept because
            list-style:none can strip the implicit list role in Safari/VoiceOver.
            Down-then-across => items 1-6 in the first list, 7-11 in the second. */}
        <div className={s.columns}>
          {SPECIALIZATION_COLUMNS.map((group, groupIndex) => (
            <ul
              key={groupIndex}
              className={`${s.column}${groupIndex === 0 ? ` ${s.firstColumn}` : ""}`}
              role="list"
              aria-label={
                groupIndex === 0
                  ? "Microsoft specializations held by MAQ Software"
                  : "Microsoft specializations held by MAQ Software, continued"
              }
            >
              {group.map((item) => (
                <li key={item.name} className={s.item}>
                  <a
                    className={s.link}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Trademark verbatim = the visible accessible name. */}
                    <span className={s.linkText}>{item.name}</span>
                    <Open16Regular className={s.extIcon} aria-hidden="true" />
                    {/* Appended (NOT aria-label) so the verbatim trademark stays
                        the accessible name (WCAG 2.5.3) while warning of the new
                        tab. */}
                    <span className={s.visuallyHidden}>
                      {" — opens on Microsoft in a new tab"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
