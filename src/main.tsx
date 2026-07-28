import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider } from "@fluentui/react-components";
import { BrowserRouter, useLocation } from "react-router-dom";
import { maqLightTheme } from "./theme";
import { App } from "./App";
import { resolvePageTitle } from "./lib/pageTitles";
import "./styles.css";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const redirectOnlyPaths = new Set(["/insights", "/news", "/techcon", "/fabcon", "/fabcon2027"]);

let lastTrackedPage: string | undefined;
let previousPageLocation: string | undefined;

function DocumentTitle() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.title = resolvePageTitle(pathname);
  }, [pathname]);

  return null;
}

function AnalyticsPageView() {
  const location = useLocation();

  React.useEffect(() => {
    const page = `${location.pathname}${location.search}`;

    if (redirectOnlyPaths.has(location.pathname) || page === lastTrackedPage) return;

    const pageLocation = window.location.href;
    const pageReferrer = previousPageLocation ?? document.referrer;

    lastTrackedPage = page;
    previousPageLocation = pageLocation;

    window.gtag("event", "page_view", {
      page_location: pageLocation,
      page_path: page,
      page_referrer: pageReferrer,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={maqLightTheme}>
      {/* basename matches Vite's `base`, so routes work when the site is
          deployed under a sub-path (e.g. /websiteTest/) as well as at the root. */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <DocumentTitle />
        <AnalyticsPageView />
        <App />
      </BrowserRouter>
    </FluentProvider>
  </React.StrictMode>
);
