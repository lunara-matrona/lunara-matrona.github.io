import lunaraLogoWhite from "./images/brand/lunara-logo-white.png";
import lunaraSymbolWhite from "./images/brand/lunara-symbol-white.png";
import heroLunara from "./images/home/hero-lunara.png";
import rutaAcompanamiento from "./images/home/ruta-acompanamiento.png";
import adolescencia from "./images/services/adolescencia.png";
import adultezMedia from "./images/services/adultez-media.png";
import adultezTemprana from "./images/services/adultez-temprana.png";
import gestacionPosparto from "./images/services/gestacion-posparto.png";
import talleresGrupales from "./images/services/talleres-grupales.png";

export const assets = {
  brand: {
    logoWhite: lunaraLogoWhite,
    symbolWhite: lunaraSymbolWhite,
  },
  home: {
    hero: heroLunara,
    route: rutaAcompanamiento,
  },
  services: {
    adolescencia,
    adultezMedia,
    adultezTemprana,
    gestacionPosparto,
    talleresGrupales,
  },
} as const;
