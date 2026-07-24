import { makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowRight20Regular,
  Bot24Regular,
  ChartMultiple24Regular,
  Cloud24Regular,
  ShieldCheckmark24Regular,
  PeopleTeam24Regular,
  Star24Filled,
  Checkmark20Filled,
  Sparkle24Regular,
} from "@fluentui/react-icons";
import type { FC, ReactNode } from "react";
import { PrimaryButton, SecondaryButton, TextButton } from "../components/buttons";

/* ------------------------------------------------------------------ */
/*  Component Lab                                                      */
/*  Catalog of every recurring building block + 5 design variants.     */
/*  Route: /lab  —  not linked from public nav.                        */
/* ------------------------------------------------------------------ */

const useLab = makeStyles({
  page: { backgroundColor: "var(--colorNeutralBackground3)", paddingBottom: "120px" },
  hero: {
    padding: "64px 32px 32px",
    maxWidth: "1240px",
    margin: "0 auto",
  },
  kicker: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  pageTitle: {
    fontSize: "40px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "12px 0 8px",
    letterSpacing: "-0.02em",
  },
  pageSub: {
    fontSize: "16px",
    color: "var(--maq-text-muted)",
    maxWidth: "720px",
    lineHeight: 1.6,
  },
  toc: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  tocLink: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-navy)",
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "20px",
    padding: "6px 14px",
    textDecoration: "none",
    ":hover": { border: "1px solid var(--maq-blue)", color: "var(--maq-blue)" },
  },
  group: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "48px 32px 0",
  },
  groupHead: {
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    paddingTop: "32px",
    marginBottom: "24px",
  },
  groupTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
  },
  groupDesc: {
    fontSize: "14px",
    color: "var(--maq-text-muted)",
    margin: 0,
  },
  variantStack: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    marginTop: "24px",
  },
  variant: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    overflow: "hidden",
  },
  variantHead: {
    padding: "14px 20px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: "var(--colorNeutralBackground3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
  variantLabel: { fontSize: "13px", fontWeight: 700, color: "var(--maq-navy)" },
  variantNotes: { fontSize: "12px", color: "var(--maq-text-muted)" },
  variantBody: { padding: "32px", backgroundColor: "#fff" },
  rowGrid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr" },
  },
});

interface VariantProps {
  label: string;
  notes?: string;
  bg?: string;
  children: ReactNode;
}

const Variant: FC<VariantProps> = ({ label, notes, bg, children }) => {
  const s = useLab();
  return (
    <div className={s.variant}>
      <div className={s.variantHead}>
        <span className={s.variantLabel}>{label}</span>
        {notes && <span className={s.variantNotes}>{notes}</span>}
      </div>
      <div className={s.variantBody} style={bg ? { backgroundColor: bg } : undefined}>
        {children}
      </div>
    </div>
  );
};

interface GroupProps {
  id: string;
  title: string;
  desc: string;
  children: ReactNode;
}

const Group: FC<GroupProps> = ({ id, title, desc, children }) => {
  const s = useLab();
  return (
    <section id={id} className={s.group}>
      <div className={s.groupHead}>
        <h2 className={s.groupTitle}>{title}</h2>
        <p className={s.groupDesc}>{desc}</p>
      </div>
      <div className={s.variantStack}>{children}</div>
    </section>
  );
};

/* ============================================================== */
/*  1. CARD VARIANTS — aligned to home-page usage                 */
/*     1a Service card    1b Product card    1c Case study card   */
/* ============================================================== */

/* Shared grid + helpers ----------------------------------------- */
const useCardShared = makeStyles({
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
});

/* ---------- 1a · SERVICE CARD (Services section) -------------- */
/* Data shape: icon + name + desc                                 */
const useSvcCard = makeStyles({
  // A — current default: outline + tinted icon chip
  a: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    transition: "all .2s",
    ":hover": {
      border: "1px solid var(--maq-blue)",
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  aIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  // B — accent top bar
  b: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    overflow: "hidden",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-md)", transform: "translateY(-2px)" },
  },
  bBar: { height: "4px", backgroundColor: "var(--maq-blue)" },
  bBody: { padding: "24px" },
  // C — left accent rule, no chip
  c: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderLeft: "4px solid var(--maq-blue)",
    borderRadius: "10px",
    padding: "22px 24px",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-sm)" },
  },
  cIconRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "var(--maq-blue)",
    marginBottom: "10px",
  },
  // D — solid dark feature card
  d: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "12px",
    padding: "24px",
    transition: "all .2s",
    ":hover": { transform: "translateY(-3px)", boxShadow: "var(--maq-shadow-md)" },
  },
  dIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.12)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  // E — icon-row inline (compact, label-style)
  e: {
    backgroundColor: "var(--colorNeutralBackground3)",
    borderRadius: "12px",
    padding: "20px 22px",
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    transition: "all .2s",
    ":hover": { backgroundColor: "var(--maq-blue-pale)" },
  },
  eIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "var(--maq-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  // shared
  name: { fontSize: "16px", fontWeight: 600, color: "var(--maq-navy)", marginBottom: "8px" },
  nameLight: { fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "8px" },
  desc: { fontSize: "13.5px", color: "var(--maq-text-muted)", lineHeight: 1.6 },
  descLight: { fontSize: "13.5px", color: "rgba(255,255,255,0.78)", lineHeight: 1.6 },
});

const svcSample = [
  { icon: <Bot24Regular />, name: "AI Solutions & Agents", desc: "Production GenAI agents and copilots on Azure OpenAI — automating high-value workflows." },
  { icon: <ChartMultiple24Regular />, name: "Insights & Analytics", desc: "Microsoft Power BI Partner of the Year — modernizing legacy BI to Fabric, up to 8× faster." },
  { icon: <Cloud24Regular />, name: "Cloud Modernization", desc: "Azure architecture, migration, and FinOps — 30–40% lower run cost on average." },
];

const ServiceCardLab: FC = () => {
  const g = useCardShared();
  const c = useSvcCard();
  return (
    <>
      <Variant label="A · Outline + tinted icon chip (current Services section)" notes="src/components/Services.tsx">
        <div className={g.grid3}>
          {svcSample.map((x) => (
            <div key={x.name} className={c.a}>
              <div className={c.aIcon}>{x.icon}</div>
              <div className={c.name}>{x.name}</div>
              <div className={c.desc}>{x.desc}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="B · Accent top bar" notes="Stronger visual hierarchy at scan distance">
        <div className={g.grid3}>
          {svcSample.map((x) => (
            <div key={x.name} className={c.b}>
              <div className={c.bBar} />
              <div className={c.bBody}>
                <div className={c.aIcon}>{x.icon}</div>
                <div className={c.name}>{x.name}</div>
                <div className={c.desc}>{x.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="C · Left accent rule (editorial)" notes="Inline icon, no chip — denser look">
        <div className={g.grid3}>
          {svcSample.map((x) => (
            <div key={x.name} className={c.c}>
              <div className={c.cIconRow}>
                {x.icon}
                <div className={c.name} style={{ margin: 0 }}>{x.name}</div>
              </div>
              <div className={c.desc}>{x.desc}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="D · Solid dark (featured / above-the-fold)" notes="High contrast, attention-grabbing">
        <div className={g.grid3}>
          {svcSample.map((x) => (
            <div key={x.name} className={c.d}>
              <div className={c.dIcon}>{x.icon}</div>
              <div className={c.nameLight}>{x.name}</div>
              <div className={c.descLight}>{x.desc}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="E · Compact horizontal tile" notes="Best when you have 7+ services to show">
        <div className={g.grid3}>
          {svcSample.map((x) => (
            <div key={x.name} className={c.e}>
              <div className={c.eIcon}>{x.icon}</div>
              <div>
                <div className={c.name} style={{ marginBottom: 4 }}>{x.name}</div>
                <div className={c.desc}>{x.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Variant>
    </>
  );
};

/* ---------- 1b · PRODUCT CARD (Products section) -------------- */
/* Data shape: initials logo + tagline + name + desc + tags + CTA */
const useProdCard = makeStyles({
  // A — current default: gradient initials + tags + subtle button
  a: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": {
      border: "1px solid var(--maq-blue)",
      transform: "translateY(-3px)",
      boxShadow: "var(--maq-shadow-sm)",
    },
  },
  aLogo: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    backgroundImage: "linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "20px",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  },
  // B — large icon header band
  b: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-md)", transform: "translateY(-3px)" },
  },
  bHead: {
    backgroundImage: "linear-gradient(135deg, var(--maq-blue-pale) 0%, #fff 100%)",
    padding: "24px 28px 16px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  bLogo: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-blue)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "16px",
    marginBottom: "12px",
  },
  bBody: { padding: "20px 28px 24px", display: "flex", flexDirection: "column", flex: 1 },
  // C — flat editorial (no logo, big name)
  c: {
    backgroundColor: "var(--colorNeutralBackground3)",
    borderRadius: "12px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { backgroundColor: "#fff", boxShadow: "var(--maq-shadow-sm)" },
  },
  // D — dark featured product card
  d: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "14px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { transform: "translateY(-3px)", boxShadow: "var(--maq-shadow-md)" },
  },
  dLogo: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    backgroundColor: "var(--maq-blue)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "20px",
    marginBottom: "16px",
  },
  // E — horizontal landscape (logo left, content right)
  e: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "64px 1fr",
    gap: "16px",
    transition: "all .2s",
    ":hover": { border: "1px solid var(--maq-blue)" },
  },
  eLogo: {
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    backgroundImage: "linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "22px",
  },
  // shared text
  tagline: {
    fontSize: "12px",
    color: "var(--maq-blue)",
    fontWeight: 500,
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  taglineLight: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.85)",
    fontWeight: 500,
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  name: { fontSize: "18px", fontWeight: 700, color: "var(--maq-navy)", marginBottom: "8px" },
  nameLight: { fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "8px" },
  desc: { fontSize: "13.5px", color: "var(--maq-text-muted)", lineHeight: 1.6, flex: 1, marginBottom: "16px" },
  descLight: { fontSize: "13.5px", color: "rgba(255,255,255,0.78)", lineHeight: 1.6, flex: 1, marginBottom: "16px" },
  tagRow: { display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" },
});

const prodSample = [
  { initials: "AI", name: "AI-DataLens", tagline: "Conversational analytics", desc: "Talk to your Power BI data in natural language with full row-level security preserved.", tags: ["GenAI", "Power BI"] },
  { initials: "FA", name: "Fabric Admin Agent", tagline: "Fabric governance", desc: "Autonomous agent that monitors capacities, workspaces and item health across Fabric.", tags: ["Fabric", "AI Agent"] },
  { initials: "MF", name: "MigrateFAST", tagline: "Migration accelerator", desc: "AI-assisted migration of legacy DW/ETL/BI to Azure & Fabric — up to 70% faster.", tags: ["Azure", "Fabric"] },
];

const ProductCardLab: FC = () => {
  const g = useCardShared();
  const c = useProdCard();
  const renderTags = () => null;
  return (
    <>
      <Variant label="A · Gradient initials + tags + subtle CTA (current Products section)" notes="src/components/Products.tsx">
        <div className={g.grid3}>
          {prodSample.map((p) => (
            <article key={p.name} className={c.a}>
              <div className={c.aLogo}>{p.initials}</div>
              <div className={c.tagline}>{p.tagline}</div>
              <div className={c.name}>{p.name}</div>
              <div className={c.desc}>{p.desc}</div>
              {renderTags()}
              <TextButton iconAfter={<ArrowRight20Regular />} size="small" style={{ alignSelf: "flex-start", paddingLeft: 0 }}>
                Learn more
              </TextButton>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="B · Tinted header band" notes="More premium / brochure feel">
        <div className={g.grid3}>
          {prodSample.map((p) => (
            <article key={p.name} className={c.b}>
              <div className={c.bHead}>
                <div className={c.bLogo}>{p.initials}</div>
                <div className={c.tagline} style={{ marginBottom: 0 }}>{p.tagline}</div>
              </div>
              <div className={c.bBody}>
                <div className={c.name}>{p.name}</div>
                <div className={c.desc}>{p.desc}</div>
                {renderTags()}
                <PrimaryButton size="small" style={{ alignSelf: "flex-start" }}>
                  View product
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="C · Flat editorial (no logo, big name)" notes="Lets the names breathe; minimal noise">
        <div className={g.grid3}>
          {prodSample.map((p) => (
            <article key={p.name} className={c.c}>
              <div className={c.tagline}>{p.tagline}</div>
              <div className={c.name} style={{ fontSize: 22 }}>{p.name}</div>
              <div className={c.desc}>{p.desc}</div>
              {renderTags()}
              <TextButton iconAfter={<ArrowRight20Regular />} size="small" style={{ alignSelf: "flex-start", paddingLeft: 0 }}>
                Learn more
              </TextButton>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="D · Dark featured tile" notes="Use 1–2 inline as flagship products in a mixed grid">
        <div className={g.grid3}>
          {prodSample.map((p) => (
            <article key={p.name} className={c.d}>
              <div className={c.dLogo}>{p.initials}</div>
              <div className={c.taglineLight}>{p.tagline}</div>
              <div className={c.nameLight}>{p.name}</div>
              <div className={c.descLight}>{p.desc}</div>
              <PrimaryButton iconAfter={<ArrowRight20Regular />} size="small" style={{ alignSelf: "flex-start" }}>
                Learn more
              </PrimaryButton>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="E · Horizontal landscape" notes="Two-column compact list (e.g. /products page)">
        <div className={g.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {prodSample.slice(0, 2).map((p) => (
            <article key={p.name} className={c.e}>
              <div className={c.eLogo}>{p.initials}</div>
              <div>
                <div className={c.tagline}>{p.tagline}</div>
                <div className={c.name}>{p.name}</div>
                <div className={c.desc}>{p.desc}</div>
                {renderTags()}
              </div>
            </article>
          ))}
        </div>
      </Variant>
    </>
  );
};

/* ---------- 1c · CASE STUDY CARD (CaseStudies section) -------- */
/* Data shape: industry tag + big metric + title + teaser + link  */
const useCaseCard = makeStyles({
  // A — current default: tag + huge red metric + title + teaser
  a: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    cursor: "pointer",
    ":hover": {
      border: "1px solid var(--maq-blue)",
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  aMetric: {
    fontSize: "40px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    lineHeight: 1,
    marginBottom: "12px",
    letterSpacing: "-0.02em",
  },
  // B — metric pill on top-right
  b: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-md)", transform: "translateY(-2px)" },
  },
  bMetric: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    fontWeight: 700,
    fontSize: "14px",
    padding: "6px 12px",
    borderRadius: "999px",
  },
  // C — image/gradient cover + content
  c: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-md)", transform: "translateY(-3px)" },
  },
  cCover: {
    height: "120px",
    backgroundImage: "linear-gradient(135deg, var(--maq-blue) 0%, var(--maq-navy) 100%)",
    color: "#fff",
    padding: "20px 24px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cMetric: { fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 },
  cBody: { padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 },
  // D — dark navy editorial card
  d: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { transform: "translateY(-3px)" },
  },
  dMetric: {
    fontSize: "44px",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1,
    marginBottom: "12px",
    letterSpacing: "-0.025em",
  },
  // E — quote-style with metric in margin
  e: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    gap: "20px",
    alignItems: "flex-start",
    transition: "all .2s",
    ":hover": { borderLeft: "4px solid var(--maq-blue)", paddingLeft: "21px" },
  },
  eMetricBox: {
    backgroundColor: "var(--maq-blue-pale)",
    borderRadius: "10px",
    padding: "16px 12px",
    textAlign: "center",
  },
  eMetricN: { fontSize: "26px", fontWeight: 800, color: "var(--maq-blue)", lineHeight: 1, letterSpacing: "-0.02em" },
  eMetricL: { fontSize: "11px", color: "var(--maq-blue)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px", fontWeight: 600 },
  // shared
  title: { fontSize: "15px", fontWeight: 600, color: "var(--maq-navy)", marginBottom: "8px", lineHeight: 1.4 },
  titleLight: { fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "8px", lineHeight: 1.4 },
  teaser: { fontSize: "13px", color: "var(--maq-text-muted)", lineHeight: 1.55, flex: 1, marginBottom: "16px" },
  teaserLight: { fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, flex: 1, marginBottom: "16px" },
  more: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
  moreLight: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
  tagAlign: { alignSelf: "flex-start", marginBottom: "16px" },
});

const caseSample = [
  { industry: "Retail", metric: "8×", title: "Faster report refresh for a top-3 US retailer", teaser: "200+ legacy SSRS reports migrated to Microsoft Fabric in 8 weeks. Refresh from 3.2s to 0.4s.", color: "brand" as const },
  { industry: "Financial services", metric: "60%", title: "Less contract review time at a Fortune 100 insurer", teaser: "Azure OpenAI agent reviews contracts clause-by-clause with full audit trail.", color: "informative" as const },
  { industry: "Technology", metric: "$3.4M", title: "Annual savings via Azure-native migration", teaser: "On-prem analytics moved to Medallion architecture with 4× faster queries.", color: "success" as const },
];

const CaseCardLab: FC = () => {
  const g = useCardShared();
  const c = useCaseCard();
  return (
    <>
      <Variant label="A · Tag + huge red metric + title (current CaseStudies section)" notes="src/components/CaseStudies.tsx">
        <div className={g.grid3}>
          {caseSample.map((x) => (
            <article key={x.title} className={c.a}>
              <div className={c.aMetric}>{x.metric}</div>
              <div className={c.title}>{x.title}</div>
              <div className={c.teaser}>{x.teaser}</div>
              <span className={c.more}>Read full case study</span>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="B · Metric pill, top-right" notes="Title takes the focus; metric supports">
        <div className={g.grid3}>
          {caseSample.map((x) => (
            <article key={x.title} className={c.b}>
              <span className={c.bMetric}>{x.metric}</span>
              <div className={c.title} style={{ fontSize: 17, marginTop: 8 }}>{x.title}</div>
              <div className={c.teaser}>{x.teaser}</div>
              <span className={c.more}>Read full case study</span>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="C · Gradient cover with metric overlay" notes="Most magazine-like; great for /case-studies hub">
        <div className={g.grid3}>
          {caseSample.map((x) => (
            <article key={x.title} className={c.c}>
              <div className={c.cCover}>
                <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85 }}>
                  {x.industry}
                </span>
                <span className={c.cMetric}>{x.metric}</span>
              </div>
              <div className={c.cBody}>
                <div className={c.title}>{x.title}</div>
                <div className={c.teaser}>{x.teaser}</div>
                <span className={c.more}>Read full case study</span>
              </div>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="D · Dark navy editorial" notes="Strong contrast; use for featured row">
        <div className={g.grid3}>
          {caseSample.map((x) => (
            <article key={x.title} className={c.d}>
              <div className={c.dMetric}>{x.metric}</div>
              <div className={c.titleLight}>{x.title}</div>
              <div className={c.teaserLight}>{x.teaser}</div>
              <span className={c.moreLight}>Read full case study</span>
            </article>
          ))}
        </div>
      </Variant>

      <Variant label="E · Side-metric block (KPI tile + body)" notes="Best when metric needs a unit label">
        <div className={g.grid3} style={{ gridTemplateColumns: "1fr" }}>
          {caseSample.map((x) => (
            <article key={x.title} className={c.e}>
              <div className={c.eMetricBox}>
                <div className={c.eMetricN}>{x.metric}</div>
                <div className={c.eMetricL}>Result</div>
              </div>
              <div>
                <div className={c.title} style={{ fontSize: 17 }}>{x.title}</div>
                <div className={c.teaser}>{x.teaser}</div>
                <span className={c.more}>Read full case study</span>
              </div>
            </article>
          ))}
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  1d · COMPETITOR-INSPIRED CARDS                                */
/*  Patterns observed on Accenture, Capgemini, Avanade            */
/* ============================================================== */
const useCompCard = makeStyles({
  // A — Accenture · bold typographic capability card (no icon, hover reveal)
  acn: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "0",
    padding: "32px 28px",
    minHeight: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "all .25s ease",
    position: "relative",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "var(--maq-navy)",
      color: "#fff",
      border: "1px solid var(--maq-navy)",
    },
    ":hover [data-acn-desc]": {
      opacity: 1,
      transform: "translateY(0)",
    },
    ":hover [data-acn-arrow]": {
      transform: "translateX(6px)",
      color: "#fff",
    },
    ":hover [data-acn-title]": {
      color: "#fff",
    },
  },
  acnTitle: {
    fontSize: "26px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    transition: "color .25s",
  },
  acnDesc: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.55,
    marginTop: "16px",
    opacity: 0,
    transform: "translateY(8px)",
    transition: "all .3s ease",
  },
  acnArrow: {
    color: "var(--maq-blue)",
    transition: "all .25s",
    alignSelf: "flex-start",
  },

  // B — Accenture · full-bleed photo client story
  acnStory: {
    backgroundColor: "var(--maq-navy)",
    borderRadius: "0",
    overflow: "hidden",
    position: "relative",
    minHeight: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#fff",
    cursor: "pointer",
    transition: "all .3s",
    ":hover [data-acn-img]": { transform: "scale(1.06)" },
  },
  acnImg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(135deg, #1a2540 0%, #4a1a4a 50%, var(--maq-blue) 100%)",
    transition: "transform .5s ease",
    "::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
    },
  },
  acnStoryBody: {
    position: "relative",
    padding: "28px",
    zIndex: 1,
  },
  acnEyebrow: {
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    marginBottom: "12px",
    opacity: 0.9,
  },
  acnStoryTitle: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },

  // C — Capgemini · image-led service tile with overlay title bar
  cap: {
    backgroundColor: "#fff",
    borderRadius: "0",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "all .3s",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    ":hover [data-cap-img]": { transform: "scale(1.05)" },
    ":hover [data-cap-bar]": { backgroundColor: "var(--maq-blue)", color: "#fff" },
  },
  capImg: {
    height: "180px",
    backgroundImage:
      "linear-gradient(135deg, #0F4C81 0%, #12ABDB 100%)",
    transition: "transform .5s",
  },
  capImgAlt: {
    height: "180px",
    backgroundImage:
      "linear-gradient(135deg, #6B2C91 0%, #E63946 100%)",
    transition: "transform .5s",
  },
  capImgAlt2: {
    height: "180px",
    backgroundImage:
      "linear-gradient(135deg, #14213D 0%, #2E86DE 100%)",
    transition: "transform .5s",
  },
  capBar: {
    backgroundColor: "#fff",
    color: "var(--maq-navy)",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "17px",
    fontWeight: 600,
    transition: "all .25s",
    flex: 1,
  },

  // D — Capgemini · three-pillar gradient block
  capPillar: {
    backgroundImage:
      "linear-gradient(135deg, #0a1f3d 0%, #1e3a5f 50%, #2E86DE 100%)",
    color: "#fff",
    borderRadius: "0",
    padding: "32px 28px",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    transition: "all .3s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    ":hover": { transform: "translateY(-4px)" },
    ":hover [data-cap-glow]": { opacity: 1 },
  },
  capGlow: {
    position: "absolute",
    top: "-40px",
    right: "-40px",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
    opacity: 0.6,
    transition: "opacity .3s",
    pointerEvents: "none",
  },
  capPillarNum: {
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    opacity: 0.7,
    marginBottom: "12px",
  },
  capPillarTitle: {
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    marginBottom: "12px",
    lineHeight: 1.2,
  },
  capPillarDesc: { fontSize: "13.5px", lineHeight: 1.6, opacity: 0.9, flex: 1 },
  capPillarMore: {
    marginTop: "20px",
    fontSize: "13px",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },

  // E — Avanade · Microsoft-style segmented tile with stat
  ava: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "4px",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "20px",
    alignItems: "flex-start",
    transition: "all .2s",
    cursor: "pointer",
    position: "relative",
    ":hover": {
      borderTop: "3px solid var(--maq-red)",
      paddingTop: "26px",
      boxShadow: "var(--maq-shadow-md)",
    },
  },
  avaStat: {
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    padding: "12px 16px",
    borderRadius: "4px",
    textAlign: "center",
    minWidth: "80px",
  },
  avaStatN: { fontSize: "22px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" },
  avaStatL: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 600,
    marginTop: "4px",
  },
  avaTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "var(--maq-navy)",
    marginBottom: "6px",
  },
  avaDesc: { fontSize: "13.5px", color: "var(--maq-text-muted)", lineHeight: 1.55, marginBottom: "12px" },
  avaTag: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "10px",
  },

  // F — Avanade · customer quote story card
  avaQuote: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "4px",
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    transition: "all .2s",
    ":hover": { boxShadow: "var(--maq-shadow-md)", transform: "translateY(-2px)" },
  },
  avaQuoteMark: {
    fontSize: "56px",
    color: "var(--maq-red)",
    lineHeight: 0.5,
    fontFamily: "inherit",
    fontWeight: 700,
    marginBottom: "8px",
  },
  avaQuoteText: {
    fontSize: "16px",
    color: "var(--maq-navy)",
    lineHeight: 1.55,
    fontStyle: "italic",
    flex: 1,
    marginBottom: "20px",
  },
  avaAuthor: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingTop: "16px",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  avaAvatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundImage: "linear-gradient(135deg, var(--maq-red), #6a0a0e)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "14px",
    flexShrink: 0,
  },
  avaAuthorName: { fontSize: "13px", fontWeight: 600, color: "var(--maq-navy)" },
  avaAuthorRole: { fontSize: "12px", color: "var(--maq-text-muted)", marginTop: "2px" },
});

const compService = [
  { title: "Artificial Intelligence & Data", desc: "Use AI with purpose. Production GenAI agents and copilots that scale with your enterprise." },
  { title: "Cloud & Modernization", desc: "Migrate, modernize, optimize. End-to-end Azure transformation from on-prem to cloud-native." },
  { title: "Data Engineering", desc: "Modern Microsoft Fabric data platforms with Medallion architecture." },
];

const compStory = [
  { eyebrow: "Banking · Top-3 US bank", title: "Reinventing customer onboarding with GenAI" },
  { eyebrow: "Retail · Fortune 500", title: "8× faster reporting on Microsoft Fabric" },
  { eyebrow: "Insurance · Global", title: "60% reduction in contract review time" },
];

const compPillars = [
  { num: "01 · Customer First", title: "Reimagine customer experience", desc: "Frog, Sogeti and AI-driven personalization for end-to-end CX transformation." },
  { num: "02 · Intelligent Industry", title: "Where digital meets physical", desc: "Connected products, smart factories, and engineering services for industrial change." },
  { num: "03 · Enterprise Mgmt", title: "Run your business smarter", desc: "Cloud, ERP modernization, finance and supply-chain transformation at scale." },
];

const compAvanade = [
  { tag: "Microsoft Solutions", title: "Modern Workplace with Copilot", desc: "Roll out Microsoft 365 Copilot with adoption, change management and security baked in.", stat: "92%", statL: "Adoption" },
  { tag: "AI & Innovation", title: "Azure OpenAI agentic platform", desc: "Production-ready agent platform on Azure OpenAI with full governance and observability.", stat: "3.5×", statL: "Faster" },
  { tag: "Data & AI Platforms", title: "Microsoft Fabric for the enterprise", desc: "End-to-end Fabric implementation — OneLake, real-time analytics, Power BI.", stat: "60%", statL: "Saved" },
];

const compQuote = [
  { quote: "MAQ Software delivered our Fabric migration ahead of schedule and 30% under budget. Their AI-DataLens product is now used by every analyst in the bank.", initials: "SJ", name: "Sarah Johnson", role: "VP Data & AI Platforms, Top-3 US Bank" },
  { quote: "We replaced 14 disconnected reporting tools with one Power BI estate. Refresh times went from minutes to sub-second.", initials: "MP", name: "Michael Park", role: "CIO, Fortune 100 Insurer" },
];

const CompetitorCardLab: FC = () => {
  const g = useCardShared();
  const c = useCompCard();
  const capImgs = [c.capImg, c.capImgAlt, c.capImgAlt2];
  return (
    <>
      <Variant
        label="A · Accenture-style bold capability card (hover reveals description)"
        notes='Inspired by accenture.com/services — sharp corners, big type, hover-fill to navy. "Reinvent" energy.'
      >
        <div className={g.grid3}>
          {compService.map((x) => (
            <article key={x.title} className={c.acn}>
              <div data-acn-title="" className={c.acnTitle}>{x.title}</div>
              <div data-acn-desc="" className={c.acnDesc}>{x.desc}</div>
              <ArrowRight20Regular data-acn-arrow="" className={c.acnArrow} />
            </article>
          ))}
        </div>
      </Variant>

      <Variant
        label="B · Accenture-style full-bleed photo client story"
        notes='Big visual + dark gradient overlay + small eyebrow + title only. Image zooms on hover.'
      >
        <div className={g.grid3}>
          {compStory.map((x) => (
            <article key={x.title} className={c.acnStory}>
              <div data-acn-img="" className={c.acnImg} />
              <div className={c.acnStoryBody}>
                {/* <div className={c.acnEyebrow}>{x.eyebrow}</div> */}
                <div className={c.acnStoryTitle}>{x.title}</div>
              </div>
            </article>
          ))}
        </div>
      </Variant>

      <Variant
        label="C · Capgemini-style image-led service tile"
        notes='From capgemini.com/services — image cover above, simple title bar below that fills brand color on hover.'
      >
        <div className={g.grid3}>
          {compService.map((x, i) => (
            <article key={x.title} className={c.cap}>
              <div data-cap-img="" className={capImgs[i % capImgs.length]} />
              <div data-cap-bar="" className={c.capBar}>
                <span>{x.title}</span>
                <ArrowRight20Regular />
              </div>
            </article>
          ))}
        </div>
      </Variant>

      <Variant
        label="D · Capgemini-style gradient pillar block"
        notes='Three-pillar pattern (Customer First / Intelligent Industry / Enterprise Mgmt). Glow accent on hover.'
      >
        <div className={g.grid3}>
          {compPillars.map((x) => (
            <article key={x.title} className={c.capPillar}>
              <div data-cap-glow="" className={c.capGlow} />
              <div className={c.capPillarNum}>{x.num}</div>
              <div className={c.capPillarTitle}>{x.title}</div>
              <div className={c.capPillarDesc}>{x.desc}</div>
              <span className={c.capPillarMore}>
                Explore <ArrowRight20Regular fontSize={14} />
              </span>
            </article>
          ))}
        </div>
      </Variant>

      <Variant
        label="E · Avanade-style Microsoft-clean tile with stat"
        notes='Avanade.com vibe — sharp 4px corners, red top accent on hover, side stat tile in tinted blue.'
      >
        <div className={g.grid3}>
          {compAvanade.map((x) => (
            <article key={x.title} className={c.ava}>
              <div>
                <div className={c.avaTitle}>{x.title}</div>
                <div className={c.avaDesc}>{x.desc}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--maq-blue)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                  Learn more
                </span>
              </div>
              <div className={c.avaStat}>
                <div className={c.avaStatN}>{x.stat}</div>
                <div className={c.avaStatL}>{x.statL}</div>
              </div>
            </article>
          ))}
        </div>
      </Variant>

      <Variant
        label="F · Avanade-style customer quote story"
        notes='Big serif quote mark, italic testimonial, divider, avatar + name + role at bottom.'
      >
        <div className={g.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {compQuote.map((x) => (
            <article key={x.name} className={c.avaQuote}>
              <div className={c.avaQuoteMark}>“</div>
              <div className={c.avaQuoteText}>{x.quote}</div>
              <div className={c.avaAuthor}>
                <div className={c.avaAvatar}>{x.initials}</div>
                <div>
                  <div className={c.avaAuthorName}>{x.name}</div>
                  <div className={c.avaAuthorRole}>{x.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  2. SECTION HEADER VARIANTS                                    */
/* ============================================================== */
const useHdr = makeStyles({
  base: { textAlign: "center", margin: "0 auto", maxWidth: "720px" },
  baseLeft: { textAlign: "left", maxWidth: "720px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "12px",
  },
  pillBrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    fontSize: "12px",
    fontWeight: 700,
    padding: "6px 12px",
    borderRadius: "999px",
    marginBottom: "16px",
  },
  rule: {
    width: "40px",
    height: "3px",
    backgroundColor: "var(--maq-blue)",
    marginBottom: "16px",
  },
  ruleCenter: {
    width: "40px",
    height: "3px",
    backgroundColor: "var(--maq-blue)",
    margin: "0 auto 16px",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
  },
  titleXL: {
    fontSize: "44px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 16px",
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
  },
  em: { color: "var(--maq-blue)" },
  sub: { fontSize: "15px", lineHeight: 1.6, color: "var(--maq-text-muted)", margin: 0 },
  splitRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "end",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr", gap: "16px" },
  },
});

const HeaderLab: FC = () => {
  const h = useHdr();
  return (
    <>
      <Variant label="A · Centered eyebrow + title + sub (current default)">
        <div className={h.base}>
          {/* <span className={h.eyebrow}>Our Services</span> */}
          <h3 className={h.title}>Engineered to deliver outcomes</h3>
          <p className={h.sub}>From AI agents to enterprise data platforms — we ship measurable business value.</p>
        </div>
      </Variant>

      <Variant label="B · Minimal heading" notes="Softer, more modern">
        <div className={h.base}>
          <h3 className={h.title}>Engineered to deliver outcomes</h3>
          <p className={h.sub}>From AI agents to enterprise data platforms — we ship measurable business value.</p>
        </div>
      </Variant>

      <Variant label="C · Left-aligned with accent rule" notes="For dense / editorial sections">
        <div className={h.baseLeft}>
          <div className={h.rule} />
          <h3 className={h.title}>Engineered to deliver outcomes</h3>
          <p className={h.sub}>From AI agents to enterprise data platforms — we ship measurable business value.</p>
        </div>
      </Variant>

      <Variant label="D · XL display title with colored emphasis word" notes="Hero-like section opener">
        <div className={h.base}>
          <div className={h.ruleCenter} />
          <h3 className={h.titleXL}>
            Built for <span className={h.em}>enterprise scale</span>
          </h3>
          <p className={h.sub}>From AI agents to enterprise data platforms — we ship measurable business value.</p>
        </div>
      </Variant>

      <Variant label="E · Split row — title left, description right" notes="Long marketing copy">
        <div className={h.splitRow}>
          <div>
            {/* <span className={h.eyebrow}>Our Services</span> */}
            <h3 className={h.title} style={{ margin: 0 }}>
              Engineered to deliver outcomes
            </h3>
          </div>
          <p className={h.sub}>
            From AI agents to enterprise data platforms — we ship measurable business value through proven
            delivery, accelerators, and 1,000+ engineers.
          </p>
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  3. HERO VARIANTS                                              */
/* ============================================================== */
const useHero = makeStyles({
  shell: { borderRadius: "12px", overflow: "hidden" },
  // A — classic split
  a: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "48px",
    alignItems: "center",
    padding: "48px",
    backgroundColor: "var(--colorNeutralBackground3)",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr", padding: "32px" },
  },
  aImg: {
    height: "260px",
    borderRadius: "12px",
    backgroundImage:
      "linear-gradient(135deg, var(--maq-blue) 0%, var(--maq-navy) 100%)",
  },
  // B — centered
  b: {
    textAlign: "center",
    padding: "64px 24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
  },
  // C — gradient bg
  c: {
    padding: "64px 48px",
    backgroundImage:
      "radial-gradient(900px 320px at 20% 0%, var(--maq-blue-pale) 0%, transparent 60%), linear-gradient(180deg, #fff, var(--colorNeutralBackground3))",
    borderRadius: "12px",
  },
  // D — dark
  d: {
    padding: "64px 48px",
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "12px",
  },
  // E — with stats strip
  e: {
    padding: "48px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  statsRow: {
    display: "flex",
    gap: "48px",
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    flexWrap: "wrap",
  },
  statN: { fontSize: "28px", fontWeight: 700, color: "var(--maq-navy)", lineHeight: 1 },
  statL: { fontSize: "12px", color: "var(--maq-text-muted)", marginTop: "6px", letterSpacing: "0.04em", textTransform: "uppercase" },
  // shared
  brow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  h: {
    fontSize: "40px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "10px 0 14px",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  hLight: {
    fontSize: "40px",
    fontWeight: 700,
    color: "#fff",
    margin: "10px 0 14px",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  s: { fontSize: "16px", color: "var(--maq-text-muted)", lineHeight: 1.6, maxWidth: "560px" },
  sLight: { fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: "560px" },
  btns: { display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" },
});

const HeroLab: FC = () => {
  const h = useHero();
  return (
    <>
      <Variant label="A · Split: copy + media (current product hero)">
        <div className={h.a}>
          <div>
            <span className={h.brow}>Microsoft Fabric</span>
            <h3 className={h.h}>Govern Fabric like an enterprise.</h3>
            <p className={h.s}>Automated controls, policy and observability — purpose-built for Fabric admins.</p>
            <div className={h.btns}>
              <PrimaryButton size="large">Book a demo</PrimaryButton>
              <SecondaryButton size="large">Read docs</SecondaryButton>
            </div>
          </div>
          <div className={h.aImg} />
        </div>
      </Variant>

      <Variant label="B · Centered single-column" notes="Marketing landing pages">
        <div className={h.b}>
          <span className={h.brow}>Microsoft Fabric</span>
          <h3 className={h.h}>Govern Fabric like an enterprise.</h3>
          <p className={h.s} style={{ margin: "0 auto" }}>
            Automated controls, policy and observability — purpose-built for Fabric admins.
          </p>
          <div className={h.btns} style={{ justifyContent: "center" }}>
            <PrimaryButton size="large">Book a demo</PrimaryButton>
            <SecondaryButton size="large">Read docs</SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="C · Gradient ambient background" notes="Premium / flagship products">
        <div className={h.c}>
          <span className={h.brow}>Microsoft Fabric</span>
          <h3 className={h.h}>Govern Fabric like an enterprise.</h3>
          <p className={h.s}>Automated controls, policy and observability — purpose-built for Fabric admins.</p>
          <div className={h.btns}>
            <PrimaryButton size="large">Book a demo</PrimaryButton>
            <SecondaryButton size="large">Read docs</SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="D · Dark navy hero" notes="Industries / enterprise pages">
        <div className={h.d}>
          <span className={h.brow}>Microsoft Fabric</span>
          <h3 className={h.hLight}>Govern Fabric like an enterprise.</h3>
          <p className={h.sLight}>Automated controls, policy and observability — purpose-built for Fabric admins.</p>
          <div className={h.btns}>
            <PrimaryButton size="large">Book a demo</PrimaryButton>
            <SecondaryButton size="large" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Read docs
            </SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="E · With stats strip" notes="Proof-driven landing">
        <div className={h.e}>
          <span className={h.brow}>Microsoft Fabric</span>
          <h3 className={h.h}>Govern Fabric like an enterprise.</h3>
          <p className={h.s}>Automated controls, policy and observability — purpose-built for Fabric admins.</p>
          <div className={h.btns}>
            <PrimaryButton size="large">Book a demo</PrimaryButton>
            <SecondaryButton size="large">Read docs</SecondaryButton>
          </div>
          <div className={h.statsRow}>
            <div>
              <div className={h.statN}>1,000+</div>
              <div className={h.statL}>Engineers</div>
            </div>
            <div>
              <div className={h.statN}>500+</div>
              <div className={h.statL}>Enterprises</div>
            </div>
            <div>
              <div className={h.statN}>20+ yrs</div>
              <div className={h.statL}>Microsoft partner</div>
            </div>
          </div>
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  4. CTA BAND VARIANTS                                          */
/* ============================================================== */
const useCta = makeStyles({
  // A — minimal centered
  a: {
    backgroundColor: "var(--colorNeutralBackground3)",
    padding: "48px",
    borderRadius: "12px",
    textAlign: "center",
  },
  // B — accent left rule
  b: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderLeft: "4px solid var(--maq-blue)",
    padding: "32px 40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
  },
  // C — full dark
  c: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    padding: "56px",
    borderRadius: "12px",
    textAlign: "center",
  },
  // D — gradient
  d: {
    backgroundImage: "linear-gradient(135deg, var(--maq-blue) 0%, var(--maq-navy) 100%)",
    color: "#fff",
    padding: "56px",
    borderRadius: "12px",
    textAlign: "center",
  },
  // E — split with form
  e: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "40px",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "32px",
    alignItems: "center",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr" },
  },
  inputRow: {
    display: "flex",
    gap: "8px",
  },
  input: {
    flex: 1,
    height: "44px",
    padding: "0 14px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
  },
  h: { fontSize: "26px", fontWeight: 700, color: "var(--maq-navy)", margin: "0 0 8px", letterSpacing: "-0.02em" },
  hL: { fontSize: "26px", fontWeight: 700, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.02em" },
  s: { fontSize: "15px", color: "var(--maq-text-muted)", margin: 0 },
  sL: { fontSize: "15px", color: "rgba(255,255,255,0.8)", margin: 0 },
  btns: { display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" },
});

const CtaLab: FC = () => {
  const c = useCta();
  return (
    <>
      <Variant label="A · Minimal centered band">
        <div className={c.a}>
          <h3 className={c.h}>Ready to start your modernization?</h3>
          <p className={c.s}>Talk to an engineer — no sales pitch.</p>
          <div className={c.btns}>
            <PrimaryButton size="large">Book a meeting</PrimaryButton>
            <SecondaryButton size="large">Email us</SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="B · Accent rule, inline buttons">
        <div className={c.b}>
          <div>
            <h3 className={c.h} style={{ margin: 0 }}>Ready to start your modernization?</h3>
            <p className={c.s} style={{ marginTop: 6 }}>Talk to an engineer — no sales pitch.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <PrimaryButton size="large">Book a meeting</PrimaryButton>
            <SecondaryButton size="large">Email us</SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="C · Full-bleed dark navy">
        <div className={c.c}>
          <h3 className={c.hL}>Ready to start your modernization?</h3>
          <p className={c.sL}>Talk to an engineer — no sales pitch.</p>
          <div className={c.btns}>
            <PrimaryButton size="large">Book a meeting</PrimaryButton>
            <SecondaryButton size="large" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Email us
            </SecondaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="D · Brand gradient">
        <div className={c.d}>
          <h3 className={c.hL}>Ready to start your modernization?</h3>
          <p className={c.sL}>Talk to an engineer — no sales pitch.</p>
          <div className={c.btns}>
            <PrimaryButton size="large" style={{ backgroundColor: "#fff", color: "var(--maq-blue)" }}>
              Book a meeting <ArrowRight20Regular />
            </PrimaryButton>
          </div>
        </div>
      </Variant>

      <Variant label="E · With email capture form">
        <div className={c.e}>
          <div>
            <h3 className={c.h}>Get the playbook</h3>
            <p className={c.s}>Monthly insights on AI, Fabric, and modern data platforms.</p>
          </div>
          <div className={c.inputRow}>
            <input className={c.input} placeholder="you@company.com" />
            <PrimaryButton size="large">Subscribe</PrimaryButton>
          </div>
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  5. STAT / METRIC BLOCK VARIANTS                               */
/* ============================================================== */
const useStat = makeStyles({
  row: { display: "flex", gap: "32px", flexWrap: "wrap" },
  rowGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    "@media (max-width: 880px)": { gridTemplateColumns: "repeat(2, 1fr)" },
  },
  // A inline minimal
  a: { minWidth: "140px" },
  aN: { fontSize: "32px", fontWeight: 700, color: "var(--maq-navy)", lineHeight: 1 },
  aL: { fontSize: "13px", color: "var(--maq-text-muted)", marginTop: "8px" },
  // B card with rule
  b: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    borderTop: "3px solid var(--maq-blue)",
  },
  // C huge accent number
  cN: { fontSize: "56px", fontWeight: 800, color: "var(--maq-blue)", lineHeight: 1, letterSpacing: "-0.03em" },
  // D dark contrast block
  d: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "12px",
    padding: "24px",
  },
  dN: { fontSize: "32px", fontWeight: 700, color: "#fff", lineHeight: 1 },
  dL: { fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "8px" },
  // E icon + stat
  ePill: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    padding: "16px 20px",
    backgroundColor: "var(--maq-blue-pale)",
    borderRadius: "12px",
  },
  eIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    color: "var(--maq-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const stats = [
  { n: "1,000+", l: "Engineers" },
  { n: "500+", l: "Enterprise clients" },
  { n: "20+", l: "Years on Microsoft" },
  { n: "98%", l: "Retention" },
];

const StatLab: FC = () => {
  const s = useStat();
  return (
    <>
      <Variant label="A · Inline minimal (under hero)">
        <div className={s.row}>
          {stats.map((x) => (
            <div key={x.l} className={s.a}>
              <div className={s.aN}>{x.n}</div>
              <div className={s.aL}>{x.l}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="B · Card with accent top rule">
        <div className={s.rowGrid}>
          {stats.map((x) => (
            <div key={x.l} className={s.b}>
              <div className={s.aN}>{x.n}</div>
              <div className={s.aL}>{x.l}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="C · Oversized brand-colored number">
        <div className={s.rowGrid}>
          {stats.map((x) => (
            <div key={x.l}>
              <div className={s.cN}>{x.n}</div>
              <div className={s.aL} style={{ marginTop: 12 }}>{x.l}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="D · Dark contrast block">
        <div className={s.rowGrid}>
          {stats.map((x) => (
            <div key={x.l} className={s.d}>
              <div className={s.dN}>{x.n}</div>
              <div className={s.dL}>{x.l}</div>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="E · Icon + stat (proof tile)">
        <div className={s.rowGrid}>
          {[
            { n: "1,000+", l: "Engineers", i: <PeopleTeam24Regular /> },
            { n: "500+", l: "Enterprises", i: <ShieldCheckmark24Regular /> },
            { n: "20+", l: "Years on Microsoft", i: <Star24Filled /> },
            { n: "98%", l: "Retention", i: <Sparkle24Regular /> },
          ].map((x) => (
            <div key={x.l} className={s.ePill}>
              <div className={s.eIcon}>{x.i}</div>
              <div>
                <div className={s.aN} style={{ fontSize: 22 }}>{x.n}</div>
                <div className={s.aL} style={{ marginTop: 2 }}>{x.l}</div>
              </div>
            </div>
          ))}
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  6. PRICING CARD VARIANTS                                      */
/* ============================================================== */
const usePrice = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr" },
  },
  // A — minimal
  a: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
  },
  // B — featured highlight
  b: {
    backgroundColor: "#fff",
    border: `2px solid var(--maq-blue)`,
    borderRadius: "12px",
    padding: "28px",
    position: "relative",
    boxShadow: "var(--maq-shadow-md)",
  },
  bBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  // C — dark filled
  c: {
    backgroundColor: "var(--maq-navy)",
    color: "#fff",
    borderRadius: "12px",
    padding: "28px",
  },
  tier: { fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--maq-blue)" },
  tierLight: { fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" },
  price: { fontSize: "36px", fontWeight: 700, color: "var(--maq-navy)", margin: "12px 0 4px", letterSpacing: "-0.02em" },
  priceLight: { fontSize: "36px", fontWeight: 700, color: "#fff", margin: "12px 0 4px", letterSpacing: "-0.02em" },
  per: { fontSize: "13px", color: "var(--maq-text-muted)" },
  perLight: { fontSize: "13px", color: "rgba(255,255,255,0.7)" },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  li: {
    display: "flex",
    gap: "8px",
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    alignItems: "flex-start",
  },
  liLight: {
    display: "flex",
    gap: "8px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    alignItems: "flex-start",
  },
  check: { color: "var(--maq-blue)", flexShrink: 0, marginTop: "2px" },
  checkLight: { color: "#fff", flexShrink: 0, marginTop: "2px" },
});

const tiers = [
  { name: "Silver", price: "$49", per: "/user/mo", feats: ["Up to 5 users", "Email support", "Standard SLA"] },
  { name: "Gold", price: "$99", per: "/user/mo", feats: ["Up to 25 users", "Priority support", "99.9% SLA", "SSO"] },
  { name: "Platinum", price: "Custom", per: "billed annually", feats: ["Unlimited", "Dedicated CSM", "99.99% SLA", "Custom integrations"] },
];

const PriceLab: FC = () => {
  const p = usePrice();
  return (
    <>
      <Variant label="A · Minimal three-tier (current EmbedFAST style)">
        <div className={p.grid}>
          {tiers.map((t) => (
            <div key={t.name} className={p.a}>
              <div className={p.tier}>{t.name}</div>
              <div className={p.price}>{t.price}</div>
              <div className={p.per}>{t.per}</div>
              <ul className={p.ul}>
                {t.feats.map((f) => (
                  <li key={f} className={p.li}><Checkmark20Filled className={p.check} />{f}</li>
                ))}
              </ul>
              <SecondaryButton size="large" style={{ width: "100%" }}>Choose {t.name}</SecondaryButton>
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="B · Featured middle tier">
        <div className={p.grid}>
          {tiers.map((t, i) => (
            <div key={t.name} className={i === 1 ? p.b : p.a}>
              <div className={p.tier}>{t.name}</div>
              <div className={p.price}>{t.price}</div>
              <div className={p.per}>{t.per}</div>
              <ul className={p.ul}>
                {t.feats.map((f) => (
                  <li key={f} className={p.li}><Checkmark20Filled className={p.check} />{f}</li>
                ))}
              </ul>
              {i === 1 ? (
                <PrimaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </PrimaryButton>
              ) : (
                <SecondaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </SecondaryButton>
              )}
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="C · Dark high-tier emphasis">
        <div className={p.grid}>
          {tiers.map((t, i) => (
            <div key={t.name} className={i === 2 ? p.c : p.a}>
              <div className={i === 2 ? p.tierLight : p.tier}>{t.name}</div>
              <div className={i === 2 ? p.priceLight : p.price}>{t.price}</div>
              <div className={i === 2 ? p.perLight : p.per}>{t.per}</div>
              <ul className={p.ul}>
                {t.feats.map((f) => (
                  <li key={f} className={i === 2 ? p.liLight : p.li}>
                    <Checkmark20Filled className={i === 2 ? p.checkLight : p.check} />
                    {f}
                  </li>
                ))}
              </ul>
              {i === 2 ? (
                <PrimaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </PrimaryButton>
              ) : (
                <SecondaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </SecondaryButton>
              )}
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="D · Two-tier comparison" notes="LoadFAST style">
        <div className={p.grid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {tiers.slice(0, 2).map((t, i) => (
            <div key={t.name} className={i === 1 ? p.b : p.a}>
              <div className={p.tier}>{t.name}</div>
              <div className={p.price}>{t.price}</div>
              <div className={p.per}>{t.per}</div>
              <ul className={p.ul}>
                {t.feats.map((f) => (
                  <li key={f} className={p.li}><Checkmark20Filled className={p.check} />{f}</li>
                ))}
              </ul>
              {i === 1 ? (
                <PrimaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </PrimaryButton>
              ) : (
                <SecondaryButton size="large" style={{ width: "100%" }}>
                  Choose {t.name}
                </SecondaryButton>
              )}
            </div>
          ))}
        </div>
      </Variant>

      <Variant label="E · Compact horizontal pricing strip">
        <div
          style={{
            backgroundColor: "#fff",
            border: `1px solid ${tokens.colorNeutralStroke2}`,
            borderRadius: 12,
            padding: 24,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr auto",
            gap: 24,
            alignItems: "center",
          }}
        >
          {tiers.map((t) => (
            <div key={t.name}>
              <div className={p.tier}>{t.name}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "var(--maq-navy)" }}>
                {t.price} <span className={p.per}>{t.per}</span>
              </div>
            </div>
          ))}
          <PrimaryButton size="large">Compare all</PrimaryButton>
        </div>
      </Variant>
    </>
  );
};

/* ============================================================== */
/*  PAGE                                                          */
/* ============================================================== */
const groups: { id: string; title: string; desc: string; render: FC }[] = [
  {
    id: "card-service",
    title: "1a · Service card",
    desc: "Mirrors the Services section on the home page (icon + name + description). Five layout takes on the same data shape.",
    render: ServiceCardLab,
  },
  {
    id: "card-product",
    title: "1b · Product card",
    desc: "Mirrors the Products section (initials logo + tagline + name + description + tags + CTA). Five takes including dark featured and landscape.",
    render: ProductCardLab,
  },
  {
    id: "card-case",
    title: "1c · Case study card",
    desc: "Mirrors the Case Studies section (industry tag + big metric + title + teaser + read-more). Five takes including cover, dark, and side-metric.",
    render: CaseCardLab,
  },
  {
    id: "card-competitors",
    title: "1d · Competitor-inspired",
    desc: "Patterns spotted on Accenture, Capgemini and Avanade — bold typographic capability cards, full-bleed client stories, image-led service tiles, three-pillar gradient blocks, Avanade Microsoft-clean tiles, and quote-style customer stories.",
    render: CompetitorCardLab,
  },
  {
    id: "header",
    title: "2 · Section header",
    desc: "Eyebrow + title + (optional) subtitle. Used at the top of every section across every page.",
    render: HeaderLab,
  },
  {
    id: "hero",
    title: "3 · Page hero",
    desc: "Top-of-page intro band. Currently used as a split layout on every product page.",
    render: HeroLab,
  },
  {
    id: "cta",
    title: "4 · CTA band",
    desc: "End-of-page conversion strip. Currently the same component on every page.",
    render: CtaLab,
  },
  {
    id: "stats",
    title: "5 · Stats / metrics",
    desc: "Proof points (1,000+ engineers, etc). Used in hero, trust strip, and case-study pages.",
    render: StatLab,
  },
  {
    id: "pricing",
    title: "6 · Pricing tier card",
    desc: "Used on EmbedFAST and LoadFAST today. Could be reused on Services and Industries.",
    render: PriceLab,
  },
];

export function ComponentLab() {
  const s = useLab();
  return (
    <div className={s.page}>
      <header className={s.hero}>
        {/* <span className={s.kicker}>Internal · Design Lab</span> */}
        <h1 className={s.pageTitle}>Component playground</h1>
        <p className={s.pageSub}>
          Every recurring building block on the site, with 5–6 design variants each. Pick a winner per
          component and we will wire it through the production pages.
        </p>
        <nav className={s.toc}>
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className={s.tocLink}>
              {g.title}
            </a>
          ))}
        </nav>
      </header>

      {groups.map((g) => {
        const Render = g.render;
        return (
          <Group key={g.id} id={g.id} title={g.title} desc={g.desc}>
            <Render />
          </Group>
        );
      })}
    </div>
  );
}
