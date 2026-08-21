import { recursos } from "../assets";
import type {
  OpcionPrestacionServicio,
  PrestacionServicio,
} from "../types/contenido";

const opcionesPapVph: OpcionPrestacionServicio[] = [
  {
    id: "toma-domicilio",
    grupo: "Toma de muestra",
    titulo: "Solo toma de PAP y/o VPH",
    precio: "$20.000",
  },
  {
    id: "toma-en-control",
    grupo: "Toma de muestra",
    titulo: "Dentro de un control ginecológico",
    precio: "$10.000",
  },
  {
    id: "pap-particular",
    grupo: "Procesamiento PAP en Histomed",
    titulo: "Particular",
    precio: "$30.000",
  },
  {
    id: "pap-fonasa",
    grupo: "Procesamiento PAP en Histomed",
    titulo: "Fonasa",
    precio: "$7.820",
    descripcion:
      "Requiere comprar el bono en Histomed, Balmaceda 1015, oficina 217.",
  },
  {
    id: "pap-isapre",
    grupo: "Procesamiento PAP en Histomed",
    titulo: "ISAPRE",
    precio: "Según convenio",
    descripcion:
      "Si existe convenio, se entrega el código de prestación para comprar el bono directamente con la ISAPRE.",
  },
  {
    id: "thinprep-vph-particular",
    grupo: "Procesamiento ThinPrep y marcación VPH en Histomed",
    titulo: "Particular",
    precio: "$68.000",
  },
];

const notaPapVph =
  "La toma de la muestra se realiza a domicilio. El procesamiento lo realiza el laboratorio Histomed y su tarifa se cobra por separado.";

// Prestaciones editables de cada categoría de servicio.
export const prestacionesAdolescencia: PrestacionServicio[] = [
  {
    id: "descubriendo-mi-cuerpo",
    titulo: "Descubriendo mi cuerpo",
    descripcion:
      "La pubertad trae muchos cambios físicos y emocionales, y es normal tener dudas. En esta consulta abordaremos el desarrollo puberal, la higiene íntima, el autocuidado, el consentimiento, la privacidad y las herramientas necesarias para vivir esta etapa de manera informada y segura.",
    imagen: recursos.servicios.adolescencia,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "conociendo-mi-ciclo-menstrual",
    titulo: "Conociendo mi ciclo menstrual",
    descripcion:
      "Aprender sobre el ciclo menstrual desde el inicio permite vivir esta etapa con mayor tranquilidad y confianza. Conversaremos sobre qué ocurre en cada fase del ciclo, qué cambios son normales, cómo registrar las menstruaciones, qué productos de gestión existen y otros cuidados.",
    imagen: recursos.servicios.prestaciones.cicloMenstrual,
    precio: "$40.000",
    duracion: "1 hora",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), material educativo y kit de higiene menstrual de regalo.",
  },
  {
    id: "hablemos-de-sexualidad",
    titulo: "Hablemos de sexualidad",
    descripcion:
      "Este espacio es para resolver dudas sin juicios e informarte sobre consentimiento, relaciones saludables, prevención de infecciones de transmisión sexual, embarazo no planificado, diversidad sexo-genérica y cómo tomar decisiones informadas respecto a tu salud sexual.",
    imagen: recursos.inicio.portada,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material educativo.",
  },
  {
    id: "eligiendo-mi-metodo-anticonceptivo",
    titulo: "Eligiendo mi método anticonceptivo",
    descripcion:
      "Cada persona es distinta y no existe un método anticonceptivo perfecto para todas. Juntas revisaremos las diferentes alternativas, sus beneficios, posibles efectos secundarios y resolveremos todas tus dudas para que puedas elegir el método que mejor se adapte a tu estilo de vida y necesidades.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.\n\nServicios adicionales en anticoncepción (insumos incluidos, excepto el método):\nInserción Implanon NXT: $30.000\nExtracción Implanon NXT: $30.000\nRecambio Implanon NXT: $50.000\nAdministración de inyección anticonceptiva: $5.000 dentro del control o $10.000 solo administración a domicilio.",
  },
];

export const prestacionesAdultezTemprana: PrestacionServicio[] = [
  {
    id: "cuidando-mi-salud-ginecologica",
    titulo: "Cuidando mi salud ginecológica",
    descripcion:
      "Un espacio para cuidar tu salud de manera integral. Realizaremos un control ginecológico preventivo, evaluaremos tu bienestar sexual y reproductivo, resolveremos dudas, revisaremos antecedentes importantes y conversaremos sobre hábitos saludables y prevención de enfermedades a lo largo de esta etapa de la vida.",
    imagen: recursos.servicios.prestaciones.saludGinecologica,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    titulo: "Anticoncepción segura",
    descripcion:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.\n\nServicios adicionales en anticoncepción (insumos incluidos, excepto el método):\nInserción Implanon NXT: $30.000\nExtracción Implanon NXT: $30.000\nRecambio Implanon NXT: $50.000\nAdministración de inyección anticonceptiva: $5.000 dentro del control o $10.000 solo administración a domicilio.",
  },
  {
    id: "consulta-general",
    titulo: "Consulta general",
    descripcion:
      "Si tus menstruaciones son muy abundantes, dolorosas o irregulares; si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    imagen: recursos.servicios.prestaciones.consultaGeneral,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "toma-de-examen-preventivos-pap-y-vph",
    titulo: "Toma de exámenes preventivos PAP y VPH",
    descripcion:
      "Toma de Papanicolaou y ThinPrep con marcación VPH de manera cercana, respetuosa y profesional, brindándote un espacio de confianza para cuidar tu salud y mantener al día la prevención del cáncer cervicouterino.",
    imagen: recursos.servicios.prestaciones.papVph,
    precio: "Desde $10.000",
    duracion: "20 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    nota: notaPapVph,
    opciones: opcionesPapVph,
  },
  {
    id: "acompañamiento-preconcepcional",
    titulo: "Acompañamiento preconcepcional",
    descripcion:
      "¿Están pensando en buscar un embarazo? Este espacio les permitirá prepararse juntos para esta nueva etapa, revisando antecedentes de salud, hábitos y cuidados de ambos, resolviendo dudas y entregando herramientas para favorecer una gestación saludable desde el comienzo.",
    imagen: recursos.servicios.prestaciones.acompanamientoPreconcepcional,
    precio: "$40.000",
    duracion: "1 hora aprox.",
    modalidad: "Atención por matrona a domicilio.",
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
    imagen: recursos.servicios.prestaciones.saludGinecologica,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "anticoncepcion-segura",
    titulo: "Anticoncepción segura",
    descripcion:
      "Te acompaño a elegir el método que mejor se adapte a tu estilo de vida y necesidades. Si ya utilizas un método anticonceptivo, es importante realizar controles periódicos para evaluar cómo te has sentido, resolver dudas y confirmar que continúa siendo la mejor alternativa para ti.",
    imagen: recursos.servicios.prestaciones.anticoncepcion,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Servicios adicionales en anticoncepción (insumos incluidos, excepto el método):\nInserción Implanon NXT: $30.000\nExtracción Implanon NXT: $30.000\nRecambio Implanon NXT: $50.000\nAdministración de inyección anticonceptiva: $5.000 dentro del control o $10.000 solo administración a domicilio.",
  },
  {
    id: "toma-de-examen-preventivos-pap-y-vph-media",
    titulo: "Toma de exámenes preventivos PAP y VPH",
    descripcion:
      "Toma de Papanicolaou y ThinPrep con marcación VPH de manera cercana, respetuosa y profesional, brindándote un espacio de confianza para cuidar tu salud y mantener al día la prevención del cáncer cervicouterino.",
    imagen: recursos.servicios.prestaciones.papVph,
    precio: "Desde $10.000",
    duracion: "20 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    nota: notaPapVph,
    opciones: opcionesPapVph,
  },
  {
    id: "acompañamiento-durante-el-climaterio-y-la-transición-hacia-la-menopausia",
    titulo: "Acompañamiento durante el climaterio y la transición hacia la menopausia",
    descripcion:
      "Un espacio para transicionar esta etapa acompañada y sin tabúes. Puedes acudir si ya estás experimentando cambios o síntomas, o si simplemente quieres anticiparte y prepararte. Juntas revisaremos tu salud, resolveremos dudas y conversaremos sobre herramientas para cuidar tu bienestar.",
    imagen: recursos.servicios.prestaciones.climaterioMenopausia,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
  {
    id: "consulta-general",
    titulo: "Consulta general",
    descripcion:
      "Si tus menstruaciones son muy abundantes, dolorosas o irregulares; si quieres conversar sobre salud sexual, deseo, molestias durante las relaciones, infecciones vaginales recurrentes, cambios en el flujo vaginal o cualquier otra inquietud relacionada con tu bienestar íntimo, revisemos juntas lo que está ocurriendo y definamos si requiere estudio, tratamiento o seguimiento.",
    imagen: recursos.servicios.prestaciones.consultaGeneral,
    precio: "$30.000",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas), carnet de control, recetas y órdenes de exámenes según corresponda.",
  },
];

export const prestacionesGestacionPosparto: PrestacionServicio[] = [
  {
    id: "preparacion-para-el-parto-y-el-nacimiento",
    titulo: "Preparación para el parto y el nacimiento",
    descripcion:
      "Un espacio para prepararte para el embarazo, nacimiento y llegada de tu bebé al hogar por medio de una ruta de acompañamiento con talleres dinámicos para ti y tu pareja, progenitor o persona significativa. Abordaremos los cambios del embarazo, movimiento y bienestar, preparación para el parto, herramientas para el manejo del dolor, lactancia y cuidados del recién nacido.",
    imagen: recursos.servicios.prestaciones.preparacionParto,
    precio: "$30.000 cada taller · $150.000 pack de 6 talleres",
    duracion: "40 min aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Participación de gestante y pareja, progenitor o persona significativa; traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y material para los ejercicios.",
    detalles: [
      "Adaptaciones físicas y emocionales del embarazo (se sugiere entre 8-12 semanas).",
      "Movimiento y bienestar en el segundo trimestre (se sugiere entre 13-28 semanas).",
      "Movimiento y bienestar en el tercer trimestre (se sugiere a partir de las 28 semanas).",
      "Preparación para el trabajo de parto y nacimiento (se sugiere desde las 32 semanas).",
      "Herramientas para el alivio del dolor durante el trabajo de parto (se sugiere desde las 32 semanas).",
      "Cuidados del recién nacido y lactancia materna (cualquier edad gestacional).",
    ],
  },
  {
    id: "un-comienzo-acompanado",
    titulo: "Un comienzo acompañado",
    descripcion:
      "Un espacio de acompañamiento para la madre, el padre y su bebé durante las primeras semanas después del nacimiento. Evaluaremos la evolución del puerperio, el bienestar materno, la adaptación y los cuidados del recién nacido, además de acompañar la lactancia y resolver las dudas que puedan surgir.",
    imagen: recursos.servicios.prestaciones.comienzoAcompanado,
    precio: "$40.000",
    duracion: "1 hora aprox.",
    modalidad: "Atención por matrona a domicilio.",
    incluye:
      "Traslado al domicilio dentro de La Serena (costo adicional para otros sectores/comunas) y carnet de control.",
  },
];

export const prestacionesTalleresGrupales: PrestacionServicio[] = [
  {
    id: "charlas-y-talleres-grupales",
    titulo: "Charlas y talleres grupales",
    descripcion:
      "Espacios para aprender, conversar y compartir. Diseñamos charlas y talleres de salud sexual y reproductiva para colegios, empresas, instituciones y comunidades, abordando distintas etapas de la vida desde una mirada cercana, respetuosa y basada en evidencia.",
    imagen: recursos.servicios.talleresGrupales,
    precio: "Variable según participantes y necesidades",
    incluye:
      "La duración, modalidad y precio dependerán de la cantidad de participantes y de las necesidades de la institución o empresa.",
    detalles: [
      "Jornadas de bienestar y autocuidado para empresas.",
      "Charlas de educación sexual integral para colegios.",
      "Talleres grupales para comunidades.",
    ],
  },
];
