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
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          radix: ['@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-tooltip'],
        }
      }
    }
  },
  base: "/",
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': '"production"'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
});