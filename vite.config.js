import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPEG"],
  base: "/omars-portfolio/",
  host: 'localhost',
  server: {
    port: 5173,
    open: true,
  },
});

