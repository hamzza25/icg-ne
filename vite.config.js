import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: "0.0.0.0", // Listen on all interfaces
    port: 5173,
    strictPort: true,
    cors: true, // Enable CORS globally
    // Optionally, if you need HMR to use your domain:
    hmr: {
      host: "icgchemicals.com",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    cors: true, // Enable CORS globally
    hmr: {
      host: "icgchemicals.com",
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
      'icgchemicals': path.resolve(rootDir, './src/icgchemicals'),
    },
  },
});
