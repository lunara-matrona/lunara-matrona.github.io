import { assets } from "../assets";
import type { ProfessionalProfile } from "../types/content";

export const professionalProfile: ProfessionalProfile = {
  eyebrow: "Quién está detrás de Lunara",

  name: "Samanta Gallardo",

  role: "Matrona · Salud sexual y reproductiva",

  summary: [
    "Matrona y Licenciada en Obstetricia y Puericultura de la Universidad de Valparaíso, con experiencia clínica y comunitaria en salud sexual, reproductiva y neonatal.",
    "Su formación integra atención primaria, ginecoobstetricia, puerperio, atención neonatal, educación en salud y gestión en matronería, con un enfoque cercano, respetuoso y centrado en la persona.",
  ],

  // Imagen temporal: reemplázala por un retrato profesional cuando esté disponible.
  image: assets.home.hero,

  imageAlt: "Samanta Gallardo, matrona detrás de Lunara",

  linkedinUrl: "https://www.linkedin.com/in/samanta-gallardo/",

  linkedinLabel: "Ver perfil en LinkedIn",

  highlightsEyebrow: "Trayectoria profesional",

  highlightsTitle: "Experiencia, formación y certificaciones",

  highlights: [
    {
      id: "internado-salud-familiar-comunitaria",
      type: "experience",
      title: "Internado en Salud Familiar y Comunitaria",
      organization: "CESFAM Cardenal Caro",
      date: "Oct. 2025 - Dic. 2025",
      description:
        "Internado en Atención Primaria de Salud, desarrollando controles clínicos y actividades de promoción y prevención en salud sexual y reproductiva con enfoque familiar y comunitario. Experiencia en inserción y extracción de DIU T Cu e Implanon NXT.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-salud-neonatal",
      type: "experience",
      title: "Internado en Salud Neonatal",
      organization: "Hospital de La Serena",
      date: "Ago. 2025 - Sept. 2025",
      description:
        "Experiencia clínica en las unidades de Recién Nacido Inmediato y Puerperio, realizando procedimientos clínicos, cuidados neonatales básicos, acompañamiento y educación a las familias.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-salud-sexual-reproductiva",
      type: "experience",
      title: "Internado en Salud Sexual y Reproductiva",
      organization: "Hospital de La Serena",
      date: "Jun. 2025 - Jul. 2025",
      description:
        "Internado desarrollado en Urgencia Ginecoobstétrica, Preparto-Parto y Alto Riesgo Obstétrico, realizando atención integral de matronería bajo normativas vigentes y promoviendo una atención respetuosa, humanizada y centrada en la persona.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-gerenciamiento-liderazgo",
      type: "experience",
      title: "Internado en Gerenciamiento y Liderazgo",
      organization: "CESFAM Cardenal Caro",
      date: "Mar. 2025 - May. 2025",
      description:
        "Participación en procesos de gestión en matronería, elaboración de manuales, protocolos y pautas de supervisión, además del desarrollo de herramientas de control para programas preventivos de salud sexual y reproductiva.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "promotora-universidad-valparaiso",
      type: "experience",
      title: "Promotora UV",
      organization: "Universidad de Valparaíso",
      date: "Mar. 2023 - Dic. 2024",
      description:
        "Difusión de la oferta académica institucional en establecimientos educacionales, realización de charlas informativas y orientación a estudiantes sobre los procesos de ingreso universitario.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "ayudantia-embriologia",
      type: "experience",
      title: "Ayudantía de Embriología",
      organization: "Universidad de Valparaíso",
      date: "Mar. 2024 - Jul. 2024",
      description:
        "Apoyo docente en Embriología mediante jornadas de acompañamiento pedagógico, resolución de dudas y tutorías orientadas al desarrollo de casos clínicos.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "presidenta-vinculacion-medio",
      type: "experience",
      title: "Presidenta del Comité de Vinculación con el Medio y Extensión",
      organization:
        "Escuela de Obstetricia y Puericultura · Universidad de Valparaíso",
      date: "Mar. 2023 - Dic. 2023",
      description:
        "Liderazgo y coordinación de iniciativas de vinculación con la comunidad orientadas a la promoción de la salud y Educación Sexual Integral, trabajando colaborativamente con instituciones externas y participando en actividades educativas para la comunidad.",
      url: "https://obstetricia.uv.cl/inicio/index.php/comite-vcmye/",
    },
    {
      id: "feria-salud-sexual-2022",
      type: "experience",
      title: "Feria de Salud Sexual y Afectiva",
      organization: "Universidad de Valparaíso",
      date: "2022",
      description: "Participación en una instancia educativa sobre métodos anticonceptivos y prevención de infecciones de transmisión sexual dirigida a estudiantes.",
      url: "https://obstetricia.uv.cl/inicio/index.php/tag/educacion-sexual/",
    },
    {
      id: "matrona-universidad-valparaiso",
      type: "education",
      title: "Matrona, Licenciada en Obstetricia y Puericultura",
      organization: "Universidad de Valparaíso",
      date: "Mar. 2021 - Dic. 2025",
      description:
        "Formación profesional en Obstetricia y Puericultura, complementada con internados clínicos y comunitarios en atención primaria, salud sexual y reproductiva, neonatología y gestión en matronería.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "capacitacion-implanon-nxt",
      type: "certificate",
      title: "Capacitación en inserción y extracción de Implanon NXT",
      organization: "Organon",
      description:
        "Capacitación orientada a la inserción y extracción del implante anticonceptivo subdérmico Implanon NXT.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },
  ],
};