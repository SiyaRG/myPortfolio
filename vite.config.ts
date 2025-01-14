import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    hmr: true, // Let Vite handle this automatically
    headers: {
      "Cache-Control": "no-store", // Disable caching
    },
    watch: {
      usePolling: true,
    },
  },
});
