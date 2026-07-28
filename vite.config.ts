import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { contentPlugin } from "./plugins/vite-plugin-content";
import { cmsAdminPlugin, spaFallbackPlugin } from "./plugins/vite-plugin-hosting";

export default defineConfig({
  plugins: [react(), contentPlugin(), cmsAdminPlugin(), spaFallbackPlugin()],
  base: "/websiteTest/",
  server: { port: 5173, open: true },
  optimizeDeps: {
    entries: ["index.html"],
  },
});
