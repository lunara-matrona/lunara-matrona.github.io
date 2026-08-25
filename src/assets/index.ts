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
import acompanamientoPreconcepcional from "./images/services/prestations/acompanamiento-preconcepcional.jpg";
import cicloMenstrual from "./images/services/prestations/ciclo-menstrual.jpg";
import climaterioMenopausia from "./images/services/prestations/climaterio-menopausia.jpg";
import comienzoAcompanado from "./images/services/prestations/comienzo-acompanado.jpg";
import consultaGeneral from "./images/services/prestations/consulta-general.jpg";
import papVph from "./images/services/prestations/pap-vph.jpg";
import preparacionParto from "./images/services/prestations/preparacion-parto.png";
import saludGinecologica from "./images/services/prestations/salud-ginecologica.jpg";

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
      acompanamientoPreconcepcional,
      cicloMenstrual,
      climaterioMenopausia,
      comienzoAcompanado,
      consultaGeneral,
      papVph,
      preparacionParto,
      saludGinecologica,
    },
  },
} as const;
