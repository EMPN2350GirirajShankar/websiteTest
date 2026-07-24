import { lazy, Suspense, type ComponentType } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Hero } from "../components/HeroV2";
// import { TrustBanner } from "../components/TrustBanner";
import { CTA } from "../components/CTA";

const lazyNamed = (loader: () => Promise<Record<string, ComponentType<any>>>, exportName: string) =>
  lazy(async () => {
    const module = await loader();
    return { default: module[exportName] as ComponentType<any> };
  });

const Services = lazyNamed(() => import("../components/Services"), "Services");
const Products = lazyNamed(() => import("../components/Products"), "Products");
const Industries = lazyNamed(() => import("../components/Industries"), "Industries");

const useStyles = makeStyles({
  reserveStack: {
    display: "grid",
    gap: "0",
  },
  reserveSection: {
    minHeight: "520px",
    backgroundColor: "var(--colorNeutralBackground3)",
    borderTop: "1px solid var(--maq-border)",
    "@media (max-width: 960px)": {
      minHeight: "420px",
    },
  },
});

function HomeSectionsFallback() {
  const s = useStyles();
  return (
    <div className={s.reserveStack} aria-hidden="true">
      <div className={s.reserveSection} />
      <div className={s.reserveSection} />
      <div className={s.reserveSection} />
    </div>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      {/* <TrustBanner /> */}

      <Services />
      <Products />
      <Industries />
      <CTA />
    </>
  );
}
