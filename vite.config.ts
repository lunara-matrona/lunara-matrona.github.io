import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // En desarrollo se sirve desde la raíz. GitHub Actions reemplaza esta
  // opción durante el build con la ruta exacta del repositorio.
  base: "/portfolio-sami/",
});
