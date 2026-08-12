import { assets } from "../assets";
import type { ServiceCategory } from "../types/content";
import {
  adolescenciaPrestations,
  adultezMediaPrestations,
  adultezTempranaPrestations,
  gestacionPospartoPrestations,
  talleresGrupalesPrestations,
} from "./prestations";

export const services: ServiceCategory[] = [
  {
    id: "adolescencia",
    slug: "adolescencia",
    title: "Adolescencia",
    ageRange: "10 - 19 años",
    shortDescription:
      "Acompañamiento respetuoso para comprender los primeros cambios y vivirlos con información y confianza.",
    introduction:
      "Un espacio seguro para resolver dudas, conocer el cuerpo y fortalecer el autocuidado durante la adolescencia.",
    image: assets.services.adolescencia,
    notice: [
      "Estos talleres están enfocados hacia niños/as y adolescentes, sin embargo, puede realizarse para padres que busquen herramientas efectivas para dar educación a sus hijos/as.",
      "Si el niño/a o adolescente es menor de 14 años debe estar obligatoriamente acompañado de un tutor legal.",
    ],
    prestations: adolescenciaPrestations,
    faq: [
      {
        question: "¿La consulta puede realizarse con un adulto acompañante?",
        answer:
          "Sí. La modalidad puede acordarse según la edad, el motivo de consulta y las necesidades de la adolescente, resguardando siempre un espacio de confianza.",
      },
      {
        question: "¿Es necesario tener un problema para consultar?",
        answer:
          "No. También puedes consultar de manera preventiva para conocer tu cuerpo, aclarar dudas y aprender hábitos de autocuidado.",
      },
    ],
  },
  {
    id: "adultez-temprana",
    slug: "adultez-temprana",
    title: "Adultez temprana",
    ageRange: "20 - 35 años",
    shortDescription:
      "Orientación preventiva y personalizada para tomar decisiones informadas sobre tu salud sexual y reproductiva.",
    introduction:
      "Atención cercana para controles preventivos, anticoncepción, planificación reproductiva y bienestar sexual.",
    image: assets.services.adultezTemprana,
    prestations: adultezTempranaPrestations,
    faq: [
      {
        question: "¿Qué debo preparar para mi primera consulta?",
        answer:
          "Puedes tener a mano tus antecedentes de salud, medicamentos y exámenes previos. No es necesario preparar respuestas perfectas: la conversación se construye paso a paso.",
      },
      {
        question: "¿Puedo consultar solo para recibir orientación?",
        answer:
          "Sí. La educación y la consejería son parte central del acompañamiento, incluso cuando no se requiere un procedimiento.",
      },
    ],
  },
  {
    id: "adultez-media",
    slug: "adultez-media",
    title: "Adultez media",
    ageRange: "35 - 64 años",
    shortDescription:
      "Cuidado integral para acompañar los cambios físicos, hormonales y emocionales de esta etapa.",
    introduction:
      "Orientación profesional para prevenir, comprender y abordar cambios asociados al ciclo vital adulto.",
    image: assets.services.adultezMedia,
    prestations: adultezMediaPrestations,
    faq: [
      {
        question: "¿Es normal sentir cambios antes de la menopausia?",
        answer:
          "Los cambios pueden presentarse de distintas maneras. Una consulta permite conversar sobre lo que estás viviendo y determinar qué orientación o evaluación necesitas.",
      },
      {
        question: "¿La atención de piso pélvico reemplaza la kinesiología?",
        answer:
          "No. La consulta entrega educación, pesquisa y orientación. Cuando se requiere rehabilitación especializada, se recomienda la evaluación de kinesiología de piso pélvico.",
      },
    ],
  },
  {
    id: "gestacion-posparto",
    slug: "gestacion-y-posparto",
    title: "Gestación y posparto",
    shortDescription:
      "Acompañamiento cálido durante el embarazo, la preparación para el parto y las primeras semanas después del nacimiento.",
    introduction:
      "Información y apoyo para transitar la gestación y el posparto de manera segura, consciente y acompañada.",
    image: assets.services.gestacionPosparto,
    prestations: gestacionPospartoPrestations,
    faq: [
      {
        question: "¿Puede participar mi pareja o acompañante?",
        answer:
          "Sí. La participación de una persona significativa puede ser muy útil para compartir información, organizar apoyos y prepararse en conjunto.",
      },
      {
        question: "¿La consulta reemplaza los controles médicos del embarazo?",
        answer:
          "No. Este acompañamiento complementa los controles indicados por el equipo tratante y no reemplaza la atención médica ni de urgencia.",
      },
    ],
  },
  {
    id: "talleres-grupales",
    slug: "talleres-grupales",
    title: "Talleres grupales",
    shortDescription:
      "Espacios educativos participativos para colegios, comunidades, familias y organizaciones.",
    introduction:
      "Talleres diseñados según la edad, el contexto y los objetivos de cada grupo, con lenguaje cercano y actividades prácticas.",
    image: assets.services.talleresGrupales,
    prestations: talleresGrupalesPrestations,
    faq: [
      {
        question: "¿Los contenidos se pueden personalizar?",
        answer:
          "Sí. Antes de realizar el taller se acuerdan los objetivos, la edad de las personas participantes, la duración y el enfoque más adecuado.",
      },
      {
        question: "¿Los talleres pueden realizarse fuera de La Serena?",
        answer:
          "La factibilidad se evalúa según ubicación, cantidad de participantes y modalidad. Puedes escribir para solicitar una propuesta.",
      },
    ],
  },
];
