import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Relative paths make the generated build work from any GitHub Pages
  // repository path, even if the repository is renamed.
  base: "./",
});
