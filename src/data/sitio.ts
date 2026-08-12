import type { InformacionContacto, ElementoNavegacion } from "../types/contenido";

export const navegacion: ElementoNavegacion[] = [
  { etiqueta: "Inicio", ruta: "/" },
  { etiqueta: "Nosotros", ruta: "/nosotros" },
  { etiqueta: "Servicios", ruta: "/servicios" },
  { etiqueta: "Contacto", ruta: "/contacto" },
];

export const informacionContacto: InformacionContacto = {
  correo: "lunara.salud@gmail.com",
  telefonoVisible: "+56 9 2988 9698",
  telefono: "56929889698",
  instagram: "lunara.laserena",
  urlInstagram: "https://www.instagram.com/lunara.laserena",
  ciudad: "La Serena y Coquimbo",
  horario: "Atención con reserva previa",
};

export const urlReservaWhatsapp =
  "https://wa.me/56929889698?text=Hola%20Lunara%2C%20quisiera%20consultar%20por%20una%20atenci%C3%B3n.";
