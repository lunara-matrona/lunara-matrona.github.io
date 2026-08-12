import type { ContenidoSitio } from "../types/contenido";
import { pasosRuta, valoresInicio } from "./inicio";
import { principiosNosotros } from "./nosotros";
import { perfilProfesional } from "./perfilProfesional";
import { servicios } from "./servicios";
import {
  informacionContacto,
  mostrarSeccionTestimonios,
  navegacion,
  urlReservaWhatsapp,
} from "./sitio";
import { testimonios } from "./testimonios";

/**
 * Respaldo local: la página continúa funcionando si el Web App no está disponible.
 */
export const contenidoLocal: ContenidoSitio = {
  navegacion,
  informacionContacto,
  urlReservaWhatsapp,
  pasosRuta,
  valoresInicio: [...valoresInicio],
  principiosNosotros: [...principiosNosotros],
  mostrarSeccionTestimonios,
  testimonios,
  servicios,
  perfilProfesional,
};
