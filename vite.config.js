import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {fileURLToPath, URL} from "url";
import {visualizer} from "rollup-plugin-visualizer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3031,
    open: true, // For development server
  },
  preview: {
    port: 3031,
    open: true, // For preview server
  },
});
