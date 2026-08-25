import { recursos } from "../assets";

const imagenesLocales: Record<string, string> = {
  "assets/images/home/hero-lunara.png": recursos.inicio.portada,
  "assets/images/home/hero-lunara-2.jpg": recursos.inicio.perfilProfesional,
  "assets/images/home/ruta-acompanamiento.png": recursos.inicio.rutaAcompanamiento,
  "assets/images/services/adolescencia.png": recursos.servicios.adolescencia,
  "assets/images/services/adultez-temprana.png": recursos.servicios.adultezTemprana,
  "assets/images/services/adultez-media.png": recursos.servicios.adultezMedia,
  "assets/images/services/gestacion-posparto.png": recursos.servicios.gestacionPosparto,
  "assets/images/services/talleres-grupales.png": recursos.servicios.talleresGrupales,
  "assets/images/services/prestations/anticoncepcion.png":
    recursos.servicios.prestaciones.anticoncepcion,
  "assets/images/services/prestations/acompanamiento-preconcepcional.jpg":
    recursos.servicios.prestaciones.acompanamientoPreconcepcional,
  "assets/images/services/prestations/ciclo-menstrual.jpg":
    recursos.servicios.prestaciones.cicloMenstrual,
  "assets/images/services/prestations/climaterio-menopausia.jpg":
    recursos.servicios.prestaciones.climaterioMenopausia,
  "assets/images/services/prestations/comienzo-acompanado.jpg":
    recursos.servicios.prestaciones.comienzoAcompanado,
  "assets/images/services/prestations/consulta-general.jpg":
    recursos.servicios.prestaciones.consultaGeneral,
  "assets/images/services/prestations/pap-vph.jpg":
    recursos.servicios.prestaciones.papVph,
  "assets/images/services/prestations/preparacion-parto.png":
    recursos.servicios.prestaciones.preparacionParto,
  "assets/images/services/prestations/salud-ginecologica.jpg":
    recursos.servicios.prestaciones.saludGinecologica,
};

/**
 * Mantiene compatibilidad con las rutas actuales del Excel.
 * Si la celda contiene una URL https, se utiliza directamente.
 */
export function resolverImagen(ruta?: string): string | undefined {
  if (!ruta) return undefined;
  return imagenesLocales[ruta] ?? ruta;
}
