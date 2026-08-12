import logoLunaraBlancoCuadrado from "./images/brand/lunara-logo-white.png";
import logoLunaraBlanco from "./images/brand/lunara-logo-white-wide.png";
import simboloLunaraBlanco from "./images/brand/lunara-symbol-white.png";
import portadaLunara from "./images/home/hero-lunara.png";
import rutaAcompanamiento from "./images/home/ruta-acompanamiento.png";
import adolescencia from "./images/services/adolescencia.png";
import adultezMedia from "./images/services/adultez-media.png";
import adultezTemprana from "./images/services/adultez-temprana.png";
import gestacionPosparto from "./images/services/gestacion-posparto.png";
import talleresGrupales from "./images/services/talleres-grupales.png";
import anticoncepcion from "./images/services/prestations/anticoncepcion.png";

export const recursos = {
  marca: {
    logoBlanco: logoLunaraBlanco,
    logoCuadradoBlanco: logoLunaraBlancoCuadrado,
    simboloBlanco: simboloLunaraBlanco,
  },
  inicio: {
    portada: portadaLunara,
    rutaAcompanamiento,
  },
  servicios: {
    adolescencia,
    adultezMedia,
    adultezTemprana,
    gestacionPosparto,
    talleresGrupales,
    prestaciones: {
      anticoncepcion,
    },
  },
} as const;
