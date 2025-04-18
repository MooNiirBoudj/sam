import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure output is in 'dist' for Vercel
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
