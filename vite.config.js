import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // This ensures relative paths for assets
  assetsInclude: ["**/*.pdf", "**/*.docx", "**/*.JPG", "**/*.jpg"], // JPG fayllarni ham qo'shamiz
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
