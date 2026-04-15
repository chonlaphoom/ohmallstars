import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin(),
    sitemap({
      hostname: "https://chonlaphoomth.me",
      dynamicRoutes: ["/", "/experience", "/about", "/blogs", "/gallery"],
      priority: {
        "/": 1.0,
        "/experience": 0.8,
        "/about": 0.8,
        "/blogs": 0.8,
        "/gallery": 0.8,
      },
      changefreq: {
        "/": "weekly",
        "/experience": "monthly",
        "/about": "monthly",
        "/blogs": "weekly",
        "/gallery": "monthly",
      },
    }),
  ],
  server: {
    port: 3000,
    allowedHosts: [""],
  },
  build: {
    target: "esnext",
  },
});
