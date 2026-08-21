import { recursos } from "../assets";
import type { CategoriaServicio } from "../types/contenido";
import {
  prestacionesAdolescencia,
  prestacionesAdultezMedia,
  prestacionesAdultezTemprana,
  prestacionesGestacionPosparto,
  prestacionesTalleresGrupales,
} from "./prestaciones";

export const servicios: CategoriaServicio[] = [
  {
    id: "adolescencia",
    segmentoUrl: "adolescencia",
    titulo: "Adolescencia",
    rangoEdad: "10 - 19 años",
    descripcionCorta:
      "Acompañamiento respetuoso para comprender los primeros cambios y vivirlos con información y confianza.",
    introduccion:
      "Un espacio seguro para resolver dudas, conocer el cuerpo y fortalecer el autocuidado durante la adolescencia.",
    imagen: recursos.servicios.adolescencia,
    avisos: [
      "Estos talleres están enfocados hacia niños/as y adolescentes, sin embargo, puede realizarse para padres que busquen herramientas efectivas para dar educación a sus hijos/as.",
      "Si el niño/a o adolescente es menor de 14 años debe estar obligatoriamente acompañado de un tutor legal.",
    ],
    prestaciones: prestacionesAdolescencia,
    preguntasFrecuentes: [
      {
        pregunta: "¿La consulta puede realizarse con un adulto acompañante?",
        respuesta:
          "Sí. La modalidad puede acordarse según la edad, el motivo de consulta y las necesidades de la adolescente, resguardando siempre un espacio de confianza.",
      },
      {
        pregunta: "¿Es necesario tener un problema para consultar?",
        respuesta:
          "No. También puedes consultar de manera preventiva para conocer tu cuerpo, aclarar dudas y aprender hábitos de autocuidado.",
      },
    ],
  },
  {
    id: "adultez-temprana",
    segmentoUrl: "adultez-temprana",
    titulo: "Adultez temprana",
    rangoEdad: "20 - 40 años",
    descripcionCorta:
      "Orientación preventiva y personalizada para tomar decisiones informadas sobre tu salud sexual y reproductiva.",
    introduccion:
      "Atención cercana para controles preventivos, anticoncepción, planificación reproductiva y bienestar sexual.",
    imagen: recursos.servicios.adultezTemprana,
    prestaciones: prestacionesAdultezTemprana,
    preguntasFrecuentes: [
      {
        pregunta: "¿Qué debo preparar para mi primera consulta?",
        respuesta:
          "Puedes tener a mano tus antecedentes de salud, medicamentos y exámenes previos. No es necesario preparar respuestas perfectas: la conversación se construye paso a paso.",
      },
      {
        pregunta: "¿Puedo consultar solo para recibir orientación?",
        respuesta:
          "Sí. La educación y la consejería son parte central del acompañamiento, incluso cuando no se requiere un procedimiento.",
      },
    ],
  },
  {
    id: "adultez-media",
    segmentoUrl: "adultez-media",
    titulo: "Adultez media",
    rangoEdad: "40 - 64 años",
    descripcionCorta:
      "Cuidado integral para acompañar los cambios físicos, hormonales y emocionales de esta etapa.",
    introduccion:
      "Orientación profesional para prevenir, comprender y abordar cambios asociados al ciclo vital adulto.",
    imagen: recursos.servicios.adultezMedia,
    prestaciones: prestacionesAdultezMedia,
    preguntasFrecuentes: [
      {
        pregunta: "¿Es normal sentir cambios antes de la menopausia?",
        respuesta:
          "Los cambios pueden presentarse de distintas maneras. Una consulta permite conversar sobre lo que estás viviendo y determinar qué orientación o evaluación necesitas.",
      },
      {
        pregunta: "¿La atención de piso pélvico reemplaza la kinesiología?",
        respuesta:
          "No. La consulta entrega educación, pesquisa y orientación. Cuando se requiere rehabilitación especializada, se recomienda la evaluación de kinesiología de piso pélvico.",
      },
    ],
  },
  {
    id: "gestacion-posparto",
    segmentoUrl: "gestacion-y-posparto",
    titulo: "Gestación y posparto",
    descripcionCorta:
      "Acompañamiento cálido durante el embarazo, la preparación para el parto y las primeras semanas después del nacimiento.",
    introduccion:
      "Información y apoyo para transitar la gestación y el posparto de manera segura, consciente y acompañada.",
    imagen: recursos.servicios.gestacionPosparto,
    prestaciones: prestacionesGestacionPosparto,
    preguntasFrecuentes: [
      {
        pregunta: "¿Puede participar mi pareja o acompañante?",
        respuesta:
          "Sí. La participación de una persona significativa puede ser muy útil para compartir información, organizar apoyos y prepararse en conjunto.",
      },
      {
        pregunta: "¿La consulta reemplaza los controles médicos del embarazo?",
        respuesta:
          "No. Este acompañamiento complementa los controles indicados por el equipo tratante y no reemplaza la atención médica ni de urgencia.",
      },
    ],
  },
  {
    id: "talleres-grupales",
    segmentoUrl: "talleres-grupales",
    titulo: "Talleres grupales",
    descripcionCorta:
      "Espacios educativos participativos para colegios, comunidades, familias y organizaciones.",
    introduccion:
      "Talleres diseñados según la edad, el contexto y los objetivos de cada grupo, con lenguaje cercano y actividades prácticas.",
    imagen: recursos.servicios.talleresGrupales,
    prestaciones: prestacionesTalleresGrupales,
    preguntasFrecuentes: [
      {
        pregunta: "¿Los contenidos se pueden personalizar?",
        respuesta:
          "Sí. Antes de realizar el taller se acuerdan los objetivos, la edad de las personas participantes, la duración y el enfoque más adecuado.",
      },
      {
        pregunta: "¿Los talleres pueden realizarse fuera de La Serena?",
        respuesta:
          "La factibilidad se evalúa según ubicación, cantidad de participantes y modalidad. Puedes escribir para solicitar una propuesta.",
      },
    ],
  },
];
