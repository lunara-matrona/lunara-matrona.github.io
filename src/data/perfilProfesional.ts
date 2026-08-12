import { recursos } from "../assets";
import type { PerfilProfesional } from "../types/contenido";

export const perfilProfesional: PerfilProfesional = {
  sobretitulo: "Quién está detrás de Lunara",

  nombre: "Samanta Gallardo",

  cargo: "Matrona · Salud sexual y reproductiva",

  resumen: [
    "Matrona y Licenciada en Obstetricia y Puericultura de la Universidad de Valparaíso, con experiencia clínica y comunitaria en salud sexual, reproductiva y neonatal.",
    "Su formación integra atención primaria, ginecoobstetricia, puerperio, atención neonatal, educación en salud y gestión en matronería, con un enfoque cercano, respetuoso y centrado en la persona.",
  ],

  // Imagen temporal: reemplázala por un retrato profesional cuando esté disponible.
  imagen: recursos.inicio.portada,

  textoAlternativoImagen: "Samanta Gallardo, matrona detrás de Lunara",

  urlLinkedin: "https://www.linkedin.com/in/samanta-gallardo/",

  textoLinkedin: "Ver perfil en LinkedIn",

  sobretituloTrayectoria: "Trayectoria profesional",

  tituloTrayectoria: "Experiencia, formación y certificaciones",

  hitos: [
    {
      id: "internado-salud-familiar-comunitaria",
      tipo: "experiencia",
      titulo: "Internado en Salud Familiar y Comunitaria",
      organizacion: "CESFAM Cardenal Caro",
      fecha: "Oct. 2025 - Dic. 2025",
      descripcion:
        "Internado en Atención Primaria de Salud, desarrollando controles clínicos y actividades de promoción y prevención en salud sexual y reproductiva con enfoque familiar y comunitario. Experiencia en inserción y extracción de DIU T Cu e Implanon NXT.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-salud-neonatal",
      tipo: "experiencia",
      titulo: "Internado en Salud Neonatal",
      organizacion: "Hospital de La Serena",
      fecha: "Ago. 2025 - Sept. 2025",
      descripcion:
        "Experiencia clínica en las unidades de Recién Nacido Inmediato y Puerperio, realizando procedimientos clínicos, cuidados neonatales básicos, acompañamiento y educación a las familias.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-salud-sexual-reproductiva",
      tipo: "experiencia",
      titulo: "Internado en Salud Sexual y Reproductiva",
      organizacion: "Hospital de La Serena",
      fecha: "Jun. 2025 - Jul. 2025",
      descripcion:
        "Internado desarrollado en Urgencia Ginecoobstétrica, Preparto-Parto y Alto Riesgo Obstétrico, realizando atención integral de matronería bajo normativas vigentes y promoviendo una atención respetuosa, humanizada y centrada en la persona.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "internado-gerenciamiento-liderazgo",
      tipo: "experiencia",
      titulo: "Internado en Gerenciamiento y Liderazgo",
      organizacion: "CESFAM Cardenal Caro",
      fecha: "Mar. 2025 - May. 2025",
      descripcion:
        "Participación en procesos de gestión en matronería, elaboración de manuales, protocolos y pautas de supervisión, además del desarrollo de herramientas de control para programas preventivos de salud sexual y reproductiva.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "promotora-universidad-valparaiso",
      tipo: "experiencia",
      titulo: "Promotora UV",
      organizacion: "Universidad de Valparaíso",
      fecha: "Mar. 2023 - Dic. 2024",
      descripcion:
        "Difusión de la oferta académica institucional en establecimientos educacionales, realización de charlas informativas y orientación a estudiantes sobre los procesos de ingreso universitario.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "ayudantia-embriologia",
      tipo: "experiencia",
      titulo: "Ayudantía de Embriología",
      organizacion: "Universidad de Valparaíso",
      fecha: "Mar. 2024 - Jul. 2024",
      descripcion:
        "Apoyo docente en Embriología mediante jornadas de acompañamiento pedagógico, resolución de dudas y tutorías orientadas al desarrollo de casos clínicos.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "presidenta-vinculacion-medio",
      tipo: "experiencia",
      titulo: "Presidenta del Comité de Vinculación con el Medio y Extensión",
      organizacion:
        "Escuela de Obstetricia y Puericultura · Universidad de Valparaíso",
      fecha: "Mar. 2023 - Dic. 2023",
      descripcion:
        "Liderazgo y coordinación de iniciativas de vinculación con la comunidad orientadas a la promoción de la salud y Educación Sexual Integral, trabajando colaborativamente con instituciones externas y participando en actividades educativas para la comunidad.",
      url: "https://obstetricia.uv.cl/inicio/index.php/comite-vcmye/",
    },
    {
      id: "feria-salud-sexual-2022",
      tipo: "experiencia",
      titulo: "Feria de Salud Sexual y Afectiva",
      organizacion: "Universidad de Valparaíso",
      fecha: "2022",
      descripcion: "Participación en una instancia educativa sobre métodos anticonceptivos y prevención de infecciones de transmisión sexual dirigida a estudiantes.",
      url: "https://obstetricia.uv.cl/inicio/index.php/tag/educacion-sexual/",
    },
    {
      id: "matrona-universidad-valparaiso",
      tipo: "educacion",
      titulo: "Matrona, Licenciada en Obstetricia y Puericultura",
      organizacion: "Universidad de Valparaíso",
      fecha: "Mar. 2021 - Dic. 2025",
      descripcion:
        "Formación profesional en Obstetricia y Puericultura, complementada con internados clínicos y comunitarios en atención primaria, salud sexual y reproductiva, neonatología y gestión en matronería.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },

    {
      id: "capacitacion-implanon-nxt",
      tipo: "certificado",
      titulo: "Capacitación en inserción y extracción de Implanon NXT",
      organizacion: "Organon",
      descripcion:
        "Capacitación orientada a la inserción y extracción del implante anticonceptivo subdérmico Implanon NXT.",
      url: "https://www.linkedin.com/in/samanta-gallardo/",
    },
  ],
};