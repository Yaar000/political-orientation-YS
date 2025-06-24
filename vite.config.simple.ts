import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    sourcemap: false,
    minify: false, // Disable minification for faster builds
    rollupOptions: {
      output: {
        // Disable code splitting for simpler deployment
        manualChunks: undefined,
      }
    }
  },
  base: "/",
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': '"production"'
  }
});