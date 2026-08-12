export interface ElementoNavegacion {
  etiqueta: string;
  ruta: string;
}

export interface InformacionContacto {
  correo: string;
  telefonoVisible: string;
  telefono: string;
  instagram: string;
  urlInstagram: string;
  ciudad: string;
  horario: string;
}

export interface PreguntaFrecuenteServicio {
  pregunta: string;
  respuesta: string;
}

export interface PrestacionServicio {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: string;
  duracion?: string;
  modalidad?: string;
  incluye?: string;
  detalles?: string[];
}

export interface CategoriaServicio {
  id: string;
  segmentoUrl: string;
  titulo: string;
  rangoEdad?: string;
  descripcionCorta: string;
  introduccion: string;
  imagen: string;
  avisos?: string[];
  prestaciones: PrestacionServicio[];
  preguntasFrecuentes: PreguntaFrecuenteServicio[];
}

export interface Testimonio {
  id: string;
  nombre: string;
  servicio: string;
  comentario: string;
  puntuacion: 1 | 2 | 3 | 4 | 5;
  esEjemplo: boolean;
}

export type TipoHitoProfesional = "experiencia" | "certificado" | "educacion" | "reconocimiento";

export interface HitoProfesional {
  id: string;
  tipo: TipoHitoProfesional;
  titulo: string;
  organizacion?: string;
  fecha?: string;
  descripcion?: string;
  imagen?: string;
  url?: string;
}

export interface PerfilProfesional {
  sobretitulo: string;
  nombre: string;
  cargo: string;
  resumen: string[];
  imagen: string;
  textoAlternativoImagen: string;
  urlLinkedin: string;
  textoLinkedin: string;
  sobretituloTrayectoria: string;
  tituloTrayectoria: string;
  hitos: HitoProfesional[];
}
