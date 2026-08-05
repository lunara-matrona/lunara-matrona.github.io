import type { ServiceCategory } from "../types/content";

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
    image: "/images/services/adolescencia.png",
    featuredTopic: "Mi primer ciclo menstrual",
    topics: [
      "Primer ciclo menstrual",
      "Educación sexual integral",
      "Autocuidado y conocimiento corporal",
      "Prevención de infecciones de transmisión sexual",
    ],
    includes: [
      "Conversación privada y sin juicios",
      "Orientación adaptada a la edad",
      "Material educativo para continuar aprendiendo",
      "Espacio para resolver preguntas junto a una persona adulta responsable, cuando corresponda",
    ],
    idealFor:
      "Adolescentes y familias que buscan orientación clara y respetuosa frente a los cambios físicos, emocionales y sociales de esta etapa.",
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
    image: "/images/services/adultez-temprana.png",
    featuredTopic: "Mi primer PAP",
    topics: [
      "Orientación sobre PAP y controles preventivos",
      "Consejería anticonceptiva",
      "Planificación reproductiva",
      "Salud sexual y prevención",
    ],
    includes: [
      "Evaluación inicial y revisión de antecedentes relevantes",
      "Educación para decidir con información",
      "Plan de seguimiento según tus necesidades",
      "Derivación oportuna cuando se requiera otra especialidad",
    ],
    idealFor:
      "Personas que desean iniciar o mantener controles preventivos, resolver dudas sobre anticoncepción o recibir orientación en planificación reproductiva.",
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
    image: "/images/services/adultez-media.png",
    featuredTopic: "Cuidados del piso pélvico",
    topics: [
      "Cuidados del piso pélvico",
      "Climaterio y menopausia",
      "Controles preventivos",
      "Bienestar sexual",
    ],
    includes: [
      "Entrevista enfocada en cambios y síntomas",
      "Educación para el autocuidado cotidiano",
      "Recomendaciones personalizadas y seguimiento",
      "Orientación para consultar con otros profesionales cuando corresponda",
    ],
    idealFor:
      "Personas que atraviesan cambios hormonales, desean fortalecer el piso pélvico o buscan mantener sus controles preventivos al día.",
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
    image: "/images/services/gestacion-posparto.png",
    featuredTopic: "Preparación para el nacimiento",
    topics: [
      "Educación prenatal",
      "Preparación para el parto",
      "Cuidados del posparto",
      "Orientación inicial en lactancia",
    ],
    includes: [
      "Plan educativo según la etapa de gestación",
      "Participación de la pareja o red de apoyo",
      "Orientación para reconocer señales de alerta",
      "Acompañamiento emocional y resolución de dudas",
    ],
    idealFor:
      "Personas gestantes y familias que desean prepararse con anticipación, comprender los cambios del proceso y fortalecer su red de apoyo.",
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
    image: "/images/services/talleres-grupales.png",
    featuredTopic: "Educación que se conversa",
    topics: [
      "Educación menstrual",
      "Salud sexual y reproductiva",
      "Autocuidado y prevención",
      "Preparación para la maternidad y paternidad",
    ],
    includes: [
      "Diagnóstico breve de necesidades",
      "Contenido adaptado al grupo",
      "Material de apoyo",
      "Espacio guiado de preguntas y conversación",
    ],
    idealFor:
      "Colegios, centros comunitarios, empresas, agrupaciones y familias que buscan una actividad educativa clara, respetuosa y participativa.",
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
