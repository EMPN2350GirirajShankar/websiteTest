import { useEffect } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Announcement as AnnouncementRibbon } from "./components/Announcement2";
import { HeaderV2 } from "./components/HeaderV2";
import { Footer } from "./components/Footer";
import { FooterV2 } from "./components/FooterV2";
import { Home } from "./pages/Home";
import { HomeV3 } from "./pages/HomeV3";
import { IndustryRetail } from "./pages/IndustryRetail";
import { IndustryFinancialServices } from "./pages/IndustryFinancialServices";
import { IndustryHealthcareLifeSciences } from "./pages/IndustryHealthcareLifeSciences";
import { IndustryTechnology } from "./pages/IndustryTechnology";
import { IndustryPublicSector } from "./pages/IndustryPublicSector";
import { IndustryManufacturing } from "./pages/IndustryManufacturing";
import { ProductsHome } from "./pages/ProductsHome";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductFabricAdminAgent } from "./pages/ProductFabricAdminAgent";
import { ProductAIDataLens } from "./pages/ProductAIDataLens";
import { ProductEmbedFAST } from "./pages/ProductEmbedFAST";
import { ProductCertyFAST } from "./pages/ProductCertyFAST";
import { ProductCertyFASTInstallationGuide } from "./pages/ProductCertyFASTInstallationGuide";
import { ProductLoadFAST } from "./pages/ProductLoadFAST";
import { ProductMigrateFAST } from "./pages/ProductMigrateFAST";
import { ComponentLab } from "./pages/ComponentLab";
import { ServiceAgenticAI } from "./pages/ServiceAgenticAI";
import { ServiceCloud } from "./pages/ServiceCloud";
import { ServiceReportingBI } from "./pages/ServiceReportingBI";
import { ServiceBusinessApps } from "./pages/ServiceBusinessApps";
import { ServiceSecurityCompliance } from "./pages/ServiceSecurityCompliance";
import { ServiceDataAndAnalytics } from "./pages/ServiceDataAndAnalytics";
import { PartnershipSnowflake } from "./pages/PartnershipSnowflake";
import { PartnershipDatabricks } from "./pages/PartnershipDatabricks";
import { InsightsCaseStudies } from "./pages/InsightsCaseStudies";
import { InsightsConsultingOffers } from "./pages/InsightsConsultingOffers";
import { InsightsPowerBICustomVisualGuide } from "./pages/InsightsPowerBICustomVisualGuide";
import { InsightsCustomVisualDetail } from "./pages/InsightsCustomVisualDetail";
import { InsightsVisualChooser } from "./pages/InsightsVisualChooser";
import { InsightsBestPracticeGuides } from "./pages/InsightsBestPracticeGuides";
import { InsightsDatabricksBestPractices } from "./pages/InsightsDatabricksBestPractices";
import { InsightsAzureDatabricksBestPractices } from "./pages/InsightsAzureDatabricksBestPractices";
import { InsightsGitHubCopilotBestPractices } from "./pages/InsightsGitHubCopilotBestPractices";
import { InsightsPowerBICopilotBestPractices } from "./pages/InsightsPowerBICopilotBestPractices";
import { InsightsPowerBIBestPractices } from "./pages/InsightsPowerBIBestPractices";
import { InsightsSnowflakePowerBIBestPractices } from "./pages/InsightsSnowflakePowerBIBestPractices";
import { InsightsKnowledgeBotBestPractices } from "./pages/InsightsKnowledgeBotBestPractices";
import { InsightsDAXBestPractices } from "./pages/InsightsDAXBestPractices";
import { InsightsAzureDevOpsBestPractices } from "./pages/InsightsAzureDevOpsBestPractices";
import { InsightsAzureArchitectureBestPractices } from "./pages/InsightsAzureArchitectureBestPractices";
import { InsightsAzureSecurityBestPractices } from "./pages/InsightsAzureSecurityBestPractices";
import { InsightsDataValidationBestPractices } from "./pages/InsightsDataValidationBestPractices";
import { InsightsDynamics365DevelopmentBestPractices } from "./pages/InsightsDynamics365DevelopmentBestPractices";
import { InsightsDynamics365DeploymentBestPractices } from "./pages/InsightsDynamics365DeploymentBestPractices";
import { InsightsPowerAppsBestPractices } from "./pages/InsightsPowerAppsBestPractices";
import { InsightsDataverseSecurityBestPractices } from "./pages/InsightsDataverseSecurityBestPractices";
import { PartnershipMicrosoft } from "./pages/PartnershipMicrosoft";
import { AboutWhoWeAre } from "./pages/AboutWhoWeAre";
import { AboutSustainability } from "./pages/AboutSustainability";
import { AboutEvents } from "./pages/AboutEvents";
import { AboutCareers } from "./pages/AboutCareers";
import { AboutPrivacyStatement } from "./pages/AboutPrivacyStatement";
import { Contact } from "./pages/Contact";
import { TermsOfService } from "./pages/TermsOfService";
import { PowerBIVisualsEULA } from "./pages/PowerBIVisualsEULA";
import { TechCon365 } from "./pages/TechCon365";
import { TechCon365Dallas } from "./pages/TechCon365Dallas";
import { TechCon365Seattle } from "./pages/TechCon365Seattle";
import { FabCon2027 } from "./pages/FabCon2027";
import { NotFound } from "./pages/NotFound";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: "100vh",
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function SiteHeader() {
  return <HeaderV2 />;
}

function SiteFooter() {
  return <FooterV2 />;
}

export function App() {
  const s = useStyles();

  // Warm key route chunks after initial paint so first navigation feels instant.
  useEffect(() => {
    const prefetchKeyRoutes = () => {
      void import("./pages/IndustryRetail");
      void import("./pages/IndustryFinancialServices");
      void import("./pages/IndustryHealthcareLifeSciences");
      void import("./pages/IndustryTechnology");
      void import("./pages/IndustryManufacturing");
      void import("./pages/IndustryPublicSector");

      void import("./pages/ServiceDataAndAnalytics");
      void import("./pages/ServiceAgenticAI");
      void import("./pages/ServiceReportingBI");
      void import("./pages/ServiceBusinessApps");
      void import("./pages/ServiceCloud");
      void import("./pages/ServiceSecurityCompliance");

      void import("./pages/ProductFabricAdminAgent");
      void import("./pages/ProductAIDataLens");
      void import("./pages/ProductEmbedFAST");
      void import("./pages/ProductCertyFAST");
      void import("./pages/ProductCertyFASTInstallationGuide");
      void import("./pages/ProductLoadFAST");
      void import("./pages/ProductMigrateFAST");

      void import("./pages/InsightsCaseStudies");
      void import("./pages/InsightsBestPracticeGuides");
      void import("./pages/InsightsPowerBICustomVisualGuide");

      void import("./pages/PartnershipMicrosoft");
      void import("./pages/PartnershipSnowflake");
      void import("./pages/PartnershipDatabricks");

      void import("./pages/AboutWhoWeAre");
      void import("./pages/AboutCareers");
      void import("./pages/AboutSustainability");
      void import("./pages/Contact");
    };

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const ric = (window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    }).requestIdleCallback;

    if (ric) {
      idleId = ric(prefetchKeyRoutes, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(prefetchKeyRoutes, 1200);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      if (idleId !== undefined) {
        (window as Window & { cancelIdleCallback?: (handle: number) => void }).cancelIdleCallback?.(idleId);
      }
    };
  }, []);

  // Ensure SPA responds immediately when the viewport changes (device toolbar or resize).
  // Some browsers/devtools don't always force a repaint that re-applies CSS-in-JS styles
  // or media-query-dependent layout; keeping a body class in sync with matchMedia
  // ensures styles tied to `.is-mobile` or generic reflow happen immediately.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 940px)");
    const update = (e?: MediaQueryListEvent | MediaQueryList) => {
      try {
        const matches = mq.matches;
        // diagnostic log to help debug when running in devtools
        // eslint-disable-next-line no-console
        // also set a DOM attribute so it is easy to inspect in Elements panel
        try {
          document.body.setAttribute("data-is-mobile", String(matches));
        } catch (e) {
          /* ignore */
        }
        if (matches) document.body.classList.add("is-mobile");
        else document.body.classList.remove("is-mobile");
      } catch (err) {
        // ignore
      }
    };

    // Initial set
    update(mq);

    // matchMedia change listener (modern + legacy)
    if ((mq as any).addEventListener) mq.addEventListener("change", update as any);
    else (mq as any).addListener(update as any);

    // Fallback: also respond to resize and orientationchange events
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // Some devtools/device-toolbar toggles don't reliably emit events immediately.
    // Polling briefly after mount can catch these cases in practice.
    let pollHandle: number | null = null;
    let pollCount = 0;
    const startPoll = () => {
      pollHandle = window.setInterval(() => {
        pollCount += 1;
        update();
        if (pollCount > 8 && pollHandle != null) {
          window.clearInterval(pollHandle);
          pollHandle = null;
        }
      }, 150);
    };
    startPoll();

    // cleanup
    return () => {
      if ((mq as any).removeEventListener) mq.removeEventListener("change", update as any);
      else (mq as any).removeListener(update as any);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (pollHandle != null) {
        window.clearInterval(pollHandle);
        pollHandle = null;
      }
    };
  }, []);

  return (
    <div className={s.root}>
      <ScrollToTop />
      <SiteHeader />
      {/* <AnnouncementRibbon /> */}
      <main className="site-main">
      <Routes>
        <Route path="/" element={<HomeV3 />} />
        <Route path="/homev3" element={<HomeV3 />} />
        <Route path="/industries/retail" element={<IndustryRetail />} />
        <Route path="/industries/financial-services" element={<IndustryFinancialServices />} />
        <Route path="/industries/healthcare-life-sciences" element={<IndustryHealthcareLifeSciences />} />
        <Route path="/industries/technology" element={<IndustryTechnology />} />
        <Route path="/industries/manufacturing" element={<IndustryManufacturing />} />
        <Route path="/industries/public-sector" element={<IndustryPublicSector />} />
        <Route path="/services/agentic-ai" element={<ServiceAgenticAI />} />
        <Route path="/services/cloud" element={<ServiceCloud />} />
        <Route path="/services/reporting-bi" element={<ServiceReportingBI />} />
        <Route path="/services/business-apps" element={<ServiceBusinessApps />} />
        <Route path="/services/security-compliance" element={<ServiceSecurityCompliance />} />
        <Route path="/services/data-and-analytics" element={<ServiceDataAndAnalytics />} />
        <Route
          path="/partnerships/microsoft"
          element={<PartnershipMicrosoft />}
        />
        <Route path="/insights" element={<Navigate to="/insights/case-studies" replace />} />
        <Route path="/case-studies" element={<Navigate to="/insights/case-studies" replace />} />
        <Route path="/case-studies/*" element={<Navigate to="/insights/case-studies" replace />} />
        <Route path="/insights/case-studies" element={<InsightsCaseStudies />} />
        <Route path="/insights/consulting-offers" element={<InsightsConsultingOffers />} />
        <Route
          path="/insights/power-bi-custom-visual-guide"
          element={<InsightsPowerBICustomVisualGuide />}
        />
        <Route
          path="/insights/power-bi-custom-visual-guide/:slug"
          element={<InsightsCustomVisualDetail />}
        />
        <Route path="/insights/visual-chooser" element={<InsightsVisualChooser />} />
        <Route path="/insights/best-practice-guides" element={<InsightsBestPracticeGuides />} />
        <Route
          path="/insights/databricks-best-practices"
          element={<InsightsDatabricksBestPractices />}
        />
        <Route
          path="/insights/azure-databricks-best-practices"
          element={<InsightsAzureDatabricksBestPractices />}
        />
        <Route
          path="/insights/github-copilot-best-practices"
          element={<InsightsGitHubCopilotBestPractices />}
        />
        <Route
          path="/insights/power-bi-copilot-best-practices"
          element={<InsightsPowerBICopilotBestPractices />}
        />
        <Route
          path="/insights/power-bi-best-practices"
          element={<InsightsPowerBIBestPractices />}
        />
        <Route
          path="/insights/snowflake-and-power-bi-best-practices"
          element={<InsightsSnowflakePowerBIBestPractices />}
        />
        <Route
          path="/insights/knowledge-bot-best-practices"
          element={<InsightsKnowledgeBotBestPractices />}
        />
        <Route
          path="/insights/dax-best-practices"
          element={<InsightsDAXBestPractices />}
        />
        <Route
          path="/insights/azure-dev-ops-best-practices-guide"
          element={<InsightsAzureDevOpsBestPractices />}
        />
        <Route
          path="/insights/azure-architecture-best-practices"
          element={<InsightsAzureArchitectureBestPractices />}
        />
        <Route
          path="/insights/azure-security-best-practices"
          element={<InsightsAzureSecurityBestPractices />}
        />
        <Route
          path="/insights/data-validation-best-practices"
          element={<InsightsDataValidationBestPractices />}
        />
        <Route
          path="/insights/dynamics-365-development-best-practices"
          element={<InsightsDynamics365DevelopmentBestPractices />}
        />
        <Route
          path="/insights/dynamics-365-deployment-best-practices"
          element={<InsightsDynamics365DeploymentBestPractices />}
        />
        <Route
          path="/insights/power-apps-best-practices"
          element={<InsightsPowerAppsBestPractices />}
        />
        <Route
          path="/insights/dataverse-security-best-practices"
          element={<InsightsDataverseSecurityBestPractices />}
        />
        <Route
          path="/partnerships/snowflake"
          element={<PartnershipSnowflake />}
        />
        <Route
          path="/partnerships/databricks"
          element={<PartnershipDatabricks />}
        />
        <Route path="/products" element={<ProductsHome />} />
        <Route
          path="/products/fabric-admin-agent"
          element={<ProductFabricAdminAgent />}
        />
        <Route
          path="/products/ai-datalens"
          element={<ProductAIDataLens />}
        />
        <Route
          path="/products/embedfast"
          element={<ProductEmbedFAST />}
        />
        <Route
          path="/products/certyfast"
          element={<ProductCertyFAST />}
        />
        <Route
          path="/products/certyfast/installation-and-usage-guide"
          element={<ProductCertyFASTInstallationGuide />}
        />
        <Route
          path="/products/loadfast"
          element={<ProductLoadFAST />}
        />
        <Route
          path="/products/migratefast"
          element={<ProductMigrateFAST />}
        />
        <Route
          path="/products/:slug"
          element={<ProductDetail />}
        />
        <Route path="/lab" element={<ComponentLab />} />
        <Route
          path="/who-we-are"
          element={<AboutWhoWeAre />}
        />
        <Route
          path="/about/who-we-are"
          element={<AboutWhoWeAre />}
        />
        <Route
          path="/sustainability"
          element={<AboutSustainability />}
        />
        <Route
          path="/about/sustainability"
          element={<AboutSustainability />}
        />
        <Route
          path="/privacystatement"
          element={<AboutPrivacyStatement />}
        />
        <Route path="/pbivisualeula" element={<PowerBIVisualsEULA />} />
        <Route path="/pbivisualseula" element={<PowerBIVisualsEULA />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<AboutEvents />} />
        <Route path="/news" element={<Navigate to="/events" replace />} />
        <Route path="/careers" element={<AboutCareers />} />
        <Route path="/about/careers" element={<AboutCareers />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/techcon365" element={<TechCon365 />} />
        <Route path="/techcon365-dallas" element={<TechCon365Dallas />} />
        <Route path="/techcon365-seattle" element={<TechCon365Seattle />} />
        <Route path="/fabcon-2027" element={<FabCon2027 />} />
        <Route path="/events/techcon365" element={<TechCon365 />} />
        <Route path="/events/techcon365/dallas" element={<TechCon365Dallas />} />
        <Route path="/events/techcon365/seattle" element={<TechCon365Seattle />} />
        <Route path="/events/fabcon2027" element={<FabCon2027 />} />
        <Route path="/events/fabcon-2027" element={<FabCon2027 />} />
        <Route path="/techcon" element={<Navigate to="/techcon365" replace />} />
        <Route path="/fabcon" element={<Navigate to="/fabcon-2027" replace />} />
        <Route path="/fabcon2027" element={<Navigate to="/fabcon-2027" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
