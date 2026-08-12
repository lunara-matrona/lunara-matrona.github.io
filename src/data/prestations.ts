import { assets } from "../assets";
import type { ServicePrestation } from "../types/content";

// Prestaciones editables de cada categoría de servicio.
export const adolescenciaPrestations: ServicePrestation[] = [
  {
    id: "descubriendo-mi-cuerpo",
    title: "Descubriendo mi cuerpo",
    description:
      "La pubertad trae muchos cambios físicos y emocionales, y es normal tener dudas. En esta consulta abordaremos el desarrollo puberal, la higiene íntima, el autocuidado, el consentimiento, la privacidad y las herramientas necesarias para vivir esta etapa de manera informada y segura.",
    image: assets.services.adolescencia,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "conociendo-mi-ciclo-menstrual",
    title: "Conociendo mi ciclo menstrual",
    description:
      "Aprender sobre el ciclo menstrual desde el inicio permite vivir esta etapa con mayor tranquilidad y confianza. Conversaremos sobre qué ocurre en cada fase del ciclo, que cambios son normales, como registrar las menstruaciones, que productos de gestión existen, entre otros cuidados.",
    image: assets.services.adolescencia,
    duration: "1 hora",
    modality: "Atención por matrona a domicilio.",
    price: "$40.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), material educativo y KIT de higiene menstrual de regalo.",
  },
  {
    id: "hablemos-de-sexualidad",
    title: "Hablemos de sexualidad",
    description:
      "Este espacio es para resolver dudas sin juicios e informarte sobre consentimiento, relaciones saludables, prevención de infecciones de transmisión sexual, embarazo no planificado, diversidad sexo-genérica y cómo tomar decisiones informadas respecto a tu salud sexual.",
    image: assets.services.adolescencia,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "eligiendo-mi-metodo-anticonceptivo",
    title: "Eligiendo mi método anticonceptivo",
    description:
      "Cada persona es distinta y no existe un método anticonceptivo perfecto para todas. Juntas revisaremos las diferentes alternativas, sus beneficios, posibles efectos secundarios y resolveremos todas tus dudas para que puedas elegir el método que mejor se adapte a tu estilo de vida y necesidades.",
    image: assets.services.prestations.anticoncepcion,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const adultezTempranaPrestations: ServicePrestation[] = [
  {
    id: "cuidando-mi-salud-ginecologica",
    title: "Cuidando mi salud ginecológica",
    description:
      "Un espacio para cuidar tu salud de manera integral. Realizaremos un control ginecológico preventivo, evaluaremos tu bienestar sexual y reproductivo, resolveremos dudas, revisaremos antecedentes importantes y conversaremos sobre hábitos saludables y prevención de enfermedades a lo largo de esta etapa de la vida.",
    image: assets.services.adultezTemprana,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    title: "Anticoncepción segura",
    description:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    image: assets.services.prestations.anticoncepcion,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "consulta-general",
    title: "Consulta general",
    description:
      "Si tus menstruaciones son muy abundantes, dolorosas, irregulares, si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    image: assets.services.adultezTemprana,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const adultezMediaPrestations: ServicePrestation[] = [
  {
    id: "cuidando-mi-salud-ginecologica",
    title: "Cuidando mi salud ginecológica",
    description:
      "Un espacio para cuidar tu salud de manera integral. Realizaremos un control ginecológico preventivo, evaluaremos tu bienestar sexual y reproductivo, resolveremos dudas, revisaremos antecedentes importantes y conversaremos sobre hábitos saludables y prevención de enfermedades a lo largo de esta etapa de la vida.",
    image: assets.services.adultezMedia,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    title: "Anticoncepción segura",
    description:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    image: assets.services.prestations.anticoncepcion,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  // La prestación N.º 3 aparece incompleta en el documento original y se deja pendiente de definición.
  {
    id: "consulta-general",
    title: "Consulta general",
    description:
      "Si tus menstruaciones son muy abundantes, dolorosas, irregulares, si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    image: assets.services.adultezMedia,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const gestacionPospartoPrestations: ServicePrestation[] = [
  {
    id: "preparacion-para-el-parto-y-el-nacimiento",
    title: "Preparación para el parto y el nacimiento",
    description:
      "Un espacio para prepararte para el embarazo, nacimiento y llegada de tu bebé al hogar por medio de una ruta de acompañamiento con talleres dinámicos para ti y tu pareja/progenitor o persona significativa. Abordaremos los cambios del embarazo, movimiento y bienestar, preparación para el parto, herramientas para el manejo del dolor, lactancia y cuidados del recién nacido, adaptando cada encuentro a la etapa del embarazo en que te encuentres.",
    image: assets.services.gestacionPosparto,
    duration: "40 min aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$30.000 cada taller · $150.000 pack 6 talleres",
    included:
      "Participación de gestante y pareja/progenitor o persona significativa, traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), material para la realización de los ejercicios (balón kinésico, mat de yoga, balones de masaje, aceites de masaje, etc).",
    details: [
      "Adaptaciones físicas y emocionales del embarazo (se sugiere entre 8-12 semanas).",
      "Movimiento y bienestar en el segundo trimestre (se sugiere entre 13-28 semanas).",
      "Movimiento y bienestar en el tercer trimestre (se sugiere a partir de las 28 semanas).",
      "Preparación para el trabajo de parto y nacimiento (se sugiere desde las 32 semanas).",
      "Herramientas para el alivio del dolor durante el trabajo de parto (se sugiere desde las 32 semanas).",
      "Cuidados del recién nacido y lactancia materna (Cualquier edad gestacional).",
    ],
  },
  {
    id: "un-comienzo-acompanado",
    title: "Un comienzo acompañado",
    description:
      "Un espacio de acompañamiento para la madre, padre y su bebé durante las primeras semanas después del nacimiento. Evaluaremos la evolución del puerperio, bienestar materno y adaptación del recién nacido y sus cuidados, además de acompañar la lactancia, y resolver las dudas que puedan surgir en este nuevo comienzo.",
    image: assets.services.gestacionPosparto,
    duration: "1 hora aprox.",
    modality: "Atención por matrona a domicilio.",
    price: "$40.000",
    included:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y carnet de control.",
  },
];

export const talleresGrupalesPrestations: ServicePrestation[] = [
  {
    id: "charlas-y-talleres-grupales",
    title: "Charlas y talleres grupales",
    description:
      "Espacios para aprender, conversar y compartir. Diseñamos charlas y talleres de salud sexual y reproductiva para colegios, empresas, instituciones y comunidades, abordando distintas etapas de la vida desde una mirada cercana, respetuosa y basada en evidencia. Cada actividad puede adaptarse a la edad, características y necesidades de quienes participan, utilizando herramientas prácticas, dinámicas participativas y un lenguaje cercano.",
    image: assets.services.talleresGrupales,
    price: "Variable según participantes y necesidades",
    included:
      "La duración, modalidad y precio de la intervención dependerá de la cantidad de participantes y las necesidades de la institución/empresa.",
    details: [
      "Jornadas de Bienestar y autocuidado para empresas.",
      "Charlas de educación sexual integral para colegios.",
      "Talleres grupales para comunidades.",
    ],
  },
];
