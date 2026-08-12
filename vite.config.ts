import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // En localhost usamos la raíz.
  // En producción usamos la ruta del repositorio de GitHub Pages.
  base: mode === "production" ? "/portfolio_sami/" : "/",
}));