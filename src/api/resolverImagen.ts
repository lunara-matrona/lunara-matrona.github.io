import { recursos } from "../assets";

const imagenesLocales: Record<string, string> = {
  "assets/images/home/hero-lunara.png": recursos.inicio.portada,
  "assets/images/home/ruta-acompanamiento.png": recursos.inicio.rutaAcompanamiento,
  "assets/images/services/adolescencia.png": recursos.servicios.adolescencia,
  "assets/images/services/adultez-temprana.png": recursos.servicios.adultezTemprana,
  "assets/images/services/adultez-media.png": recursos.servicios.adultezMedia,
  "assets/images/services/gestacion-posparto.png": recursos.servicios.gestacionPosparto,
  "assets/images/services/talleres-grupales.png": recursos.servicios.talleresGrupales,
  "assets/images/services/prestations/anticoncepcion.png":
    recursos.servicios.prestaciones.anticoncepcion,
};

/**
 * Mantiene compatibilidad con las rutas actuales del Excel.
 * Si la celda contiene una URL https, se utiliza directamente.
 */
export function resolverImagen(ruta?: string): string | undefined {
  if (!ruta) return undefined;
  return imagenesLocales[ruta] ?? ruta;
}
