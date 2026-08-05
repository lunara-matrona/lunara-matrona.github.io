import type { ContactInfo, NavigationItem } from "../types/content";

export const navigation: NavigationItem[] = [
  { label: "Inicio", path: "/" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Servicios", path: "/servicios" },
  { label: "Contacto", path: "/contacto" },
];

export const contactInfo: ContactInfo = {
  email: "lunara.salud@gmail.com",
  phoneDisplay: "+56 9 2988 9698",
  phoneValue: "56929889698",
  instagram: "lunara.laserena",
  instagramUrl: "https://www.instagram.com/lunara.laserena",
  city: "La Serena y Coquimbo",
  schedule: "Atención con reserva previa",
};

export const whatsappBookingUrl =
  "https://wa.me/56929889698?text=Hola%20Lunara%2C%20quisiera%20consultar%20por%20una%20atenci%C3%B3n.";
