import { recursos } from "../assets";
import type { PrestacionServicio } from "../types/contenido";

// Prestaciones editables de cada categoría de servicio.
export const prestacionesAdolescencia: PrestacionServicio[] = [
  {
    id: "descubriendo-mi-cuerpo",
    titulo: "Descubriendo mi cuerpo",
    descripcion:
      "La pubertad trae muchos cambios físicos y emocionales, y es normal tener dudas. En esta consulta abordaremos el desarrollo puberal, la higiene íntima, el autocuidado, el consentimiento, la privacidad y las herramientas necesarias para vivir esta etapa de manera informada y segura.",
    imagen: recursos.servicios.adolescencia,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "conociendo-mi-ciclo-menstrual",
    titulo: "Conociendo mi ciclo menstrual",
    descripcion:
      "Aprender sobre el ciclo menstrual desde el inicio permite vivir esta etapa con mayor tranquilidad y confianza. Conversaremos sobre qué ocurre en cada fase del ciclo, que cambios son normales, como registrar las menstruaciones, que productos de gestión existen, entre otros cuidados.",
    imagen: recursos.servicios.adolescencia,
    duracion: "1 hora",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$40.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), material educativo y KIT de higiene menstrual de regalo.",
  },
  {
    id: "hablemos-de-sexualidad",
    titulo: "Hablemos de sexualidad",
    descripcion:
      "Este espacio es para resolver dudas sin juicios e informarte sobre consentimiento, relaciones saludables, prevención de infecciones de transmisión sexual, embarazo no planificado, diversidad sexo-genérica y cómo tomar decisiones informadas respecto a tu salud sexual.",
    imagen: recursos.servicios.adolescencia,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "eligiendo-mi-metodo-anticonceptivo",
    titulo: "Eligiendo mi método anticonceptivo",
    descripcion:
      "Cada persona es distinta y no existe un método anticonceptivo perfecto para todas. Juntas revisaremos las diferentes alternativas, sus beneficios, posibles efectos secundarios y resolveremos todas tus dudas para que puedas elegir el método que mejor se adapte a tu estilo de vida y necesidades.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const prestacionesAdultezTemprana: PrestacionServicio[] = [
  {
    id: "cuidando-mi-salud-ginecologica",
    titulo: "Cuidando mi salud ginecológica",
    descripcion:
      "Un espacio para cuidar tu salud de manera integral. Realizaremos un control ginecológico preventivo, evaluaremos tu bienestar sexual y reproductivo, resolveremos dudas, revisaremos antecedentes importantes y conversaremos sobre hábitos saludables y prevención de enfermedades a lo largo de esta etapa de la vida.",
    imagen: recursos.servicios.adultezTemprana,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    titulo: "Anticoncepción segura",
    descripcion:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "consulta-general",
    titulo: "Consulta general",
    descripcion:
      "Si tus menstruaciones son muy abundantes, dolorosas, irregulares, si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    imagen: recursos.servicios.adultezTemprana,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const prestacionesAdultezMedia: PrestacionServicio[] = [
  {
    id: "cuidando-mi-salud-ginecologica",
    titulo: "Cuidando mi salud ginecológica",
    descripcion:
      "Un espacio para cuidar tu salud de manera integral. Realizaremos un control ginecológico preventivo, evaluaremos tu bienestar sexual y reproductivo, resolveremos dudas, revisaremos antecedentes importantes y conversaremos sobre hábitos saludables y prevención de enfermedades a lo largo de esta etapa de la vida.",
    imagen: recursos.servicios.adultezMedia,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    titulo: "Anticoncepción segura",
    descripcion:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  // La prestación N.º 3 aparece incompleta en el documento original y se deja pendiente de definición.
  {
    id: "consulta-general",
    titulo: "Consulta general",
    descripcion:
      "Si tus menstruaciones son muy abundantes, dolorosas, irregulares, si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    imagen: recursos.servicios.adultezMedia,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const prestacionesGestacionPosparto: PrestacionServicio[] = [
  {
    id: "preparacion-para-el-parto-y-el-nacimiento",
    titulo: "Preparación para el parto y el nacimiento",
    descripcion:
      "Un espacio para prepararte para el embarazo, nacimiento y llegada de tu bebé al hogar por medio de una ruta de acompañamiento con talleres dinámicos para ti y tu pareja/progenitor o persona significativa. Abordaremos los cambios del embarazo, movimiento y bienestar, preparación para el parto, herramientas para el manejo del dolor, lactancia y cuidados del recién nacido, adaptando cada encuentro a la etapa del embarazo en que te encuentres.",
    imagen: recursos.servicios.gestacionPosparto,
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$30.000 cada taller · $150.000 pack 6 talleres",
    incluye:
      "Participación de gestante y pareja/progenitor o persona significativa, traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), material para la realización de los ejercicios (balón kinésico, mat de yoga, balones de masaje, aceites de masaje, etc).",
    detalles: [
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
    titulo: "Un comienzo acompañado",
    descripcion:
      "Un espacio de acompañamiento para la madre, padre y su bebé durante las primeras semanas después del nacimiento. Evaluaremos la evolución del puerperio, bienestar materno y adaptación del recién nacido y sus cuidados, además de acompañar la lactancia, y resolver las dudas que puedan surgir en este nuevo comienzo.",
    imagen: recursos.servicios.gestacionPosparto,
    duracion: "1 hora aprox.",
    modalidad: "Atención por matrona a domicilio.",
    precio: "$40.000",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y carnet de control.",
  },
];

export const prestacionesTalleresGrupales: PrestacionServicio[] = [
  {
    id: "charlas-y-talleres-grupales",
    titulo: "Charlas y talleres grupales",
    descripcion:
      "Espacios para aprender, conversar y compartir. Diseñamos charlas y talleres de salud sexual y reproductiva para colegios, empresas, instituciones y comunidades, abordando distintas etapas de la vida desde una mirada cercana, respetuosa y basada en evidencia. Cada actividad puede adaptarse a la edad, características y necesidades de quienes participan, utilizando herramientas prácticas, dinámicas participativas y un lenguaje cercano.",
    imagen: recursos.servicios.talleresGrupales,
    precio: "Variable según participantes y necesidades",
    incluye:
      "La duración, modalidad y precio de la intervención dependerá de la cantidad de participantes y las necesidades de la institución/empresa.",
    detalles: [
      "Jornadas de Bienestar y autocuidado para empresas.",
      "Charlas de educación sexual integral para colegios.",
      "Talleres grupales para comunidades.",
    ],
  },
];
