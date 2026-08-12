import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { informacionContacto } from "../../../data/sitio";

const elementosContacto = [
  { etiqueta: "Correo", valor: informacionContacto.correo, href: `mailto:${informacionContacto.correo}`, icono: MailOutlineRoundedIcon },
  { etiqueta: "WhatsApp", valor: informacionContacto.telefonoVisible, href: `https://wa.me/${informacionContacto.telefono}`, icono: WhatsAppIcon, externo: true },
  { etiqueta: "Instagram", valor: `@${informacionContacto.instagram}`, href: informacionContacto.urlInstagram, icono: InstagramIcon, externo: true },
  { etiqueta: "Cobertura", valor: informacionContacto.ciudad, icono: LocationOnRoundedIcon },
  { etiqueta: "Horario", valor: informacionContacto.horario, icono: AccessTimeRoundedIcon },
];

export default function ContactInfoPanel() {
  return (
    <Box>
      {/* Información y canales disponibles en la página de contacto. */}
      <Typography sx={{ mb: 1.75, color: "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Canales de contacto</Typography>
      <Typography variant="h2" sx={{ mb: 2.25, fontSize: { xs: "2.15rem", md: "3.65rem" }, lineHeight: 1.08 }}>Estamos para orientarte</Typography>
      <Typography sx={{ mb: 4.75, color: "text.secondary", lineHeight: 1.8 }}>La atención funciona con reserva previa. Para urgencias o síntomas graves, contacta al servicio de urgencia correspondiente.</Typography>

      <Stack spacing={1.5}>
        {elementosContacto.map((elemento) => {
          const Icono = elemento.icono;
          const contenido = (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar sx={{ width: 48, height: 48, bgcolor: "secondary.light", color: "secondary.dark" }}><Icono /></Avatar>
              <Stack spacing={0.35} sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary">{elemento.etiqueta}</Typography>
                <Typography fontWeight={800} sx={{ color: "primary.dark", fontSize: ".91rem", wordBreak: "break-word" }}>{elemento.valor}</Typography>
              </Stack>
            </Stack>
          );

          return elemento.href ? (
            <Paper key={elemento.etiqueta} component="a" href={elemento.href} target={elemento.externo ? "_blank" : undefined} rel={elemento.externo ? "noreferrer" : undefined} variant="outlined" sx={{ p: 1.75, borderRadius: 2, transition: "transform 180ms ease, border-color 180ms ease", "&:hover": { transform: "translateY(-2px)", borderColor: "primary.main" } }}>{contenido}</Paper>
          ) : (
            <Paper key={elemento.etiqueta} variant="outlined" sx={{ p: 1.75, borderRadius: 2 }}>{contenido}</Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
