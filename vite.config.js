import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // increase limit
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ["react", "react-dom"],
          html2pdf: ["html2pdf.js"],
        },
      },
    },
  },
});
