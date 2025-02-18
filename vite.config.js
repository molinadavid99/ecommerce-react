import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-react/", // Reemplaza con el nombre de tu repositorio en GitHub
  build: {
    outDir: "dist", // Asegura que la salida se haga en la carpeta dist
  },
});
