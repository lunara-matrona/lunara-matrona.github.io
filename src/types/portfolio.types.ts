export interface Profile {
  nombre: string;
  profesion: string;
  descripcion: string;
  email: string;
  telefono: string;
  foto: string;
}

export interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export interface Review {
  nombre: string;
  comentario: string;
  puntuacion: number;
}

export interface Skill {
  habilidad: string;
}

export interface PortfolioResponse {
  perfil: Profile;
  trabajos: Project[];
  resenas: Review[];
  habilidades: Skill[];
}