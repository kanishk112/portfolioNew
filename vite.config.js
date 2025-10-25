import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages repo is `kanishk112/portfolioNew` so set base to the repo name
  // This ensures built asset URLs are prefixed with /portfolioNew/ on GitHub Pages
  base: '/portfolioNew/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase size limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add other chunks as needed
        },
      },
    },
  },
});
