import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {visualizer} from "rollup-plugin-visualizer";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: (import.meta.env?.MODE || "development") !== "production", // Fallback to "development"
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  server: {
    port: 3031,
    open: true,
    watch: {
      usePolling: (import.meta.env?.VITE_USE_POLLING || "false") === "true", // Fallback to "false"
    },
  },
  preview: {
    port: 3032,
    open: true,
  },
  build: {
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "@mui/material",
            "@mui/icons-material",
          ],
          animations: ["framer-motion"],
        },
      },
    },
  },
});
