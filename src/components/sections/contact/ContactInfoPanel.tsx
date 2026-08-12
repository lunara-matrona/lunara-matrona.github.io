import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { contactInfo } from "../../../data/site";

const contactItems = [
  { label: "Correo", value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: MailOutlineRoundedIcon },
  { label: "WhatsApp", value: contactInfo.phoneDisplay, href: `https://wa.me/${contactInfo.phoneValue}`, icon: WhatsAppIcon, external: true },
  { label: "Instagram", value: `@${contactInfo.instagram}`, href: contactInfo.instagramUrl, icon: InstagramIcon, external: true },
  { label: "Cobertura", value: contactInfo.city, icon: LocationOnRoundedIcon },
  { label: "Horario", value: contactInfo.schedule, icon: AccessTimeRoundedIcon },
];

export default function ContactInfoPanel() {
  return (
    <Box>
      {/* Información y canales disponibles en la página de contacto. */}
      <Typography sx={{ mb: 1.75, color: "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Canales de contacto</Typography>
      <Typography variant="h2" sx={{ mb: 2.25, fontSize: { xs: "2.15rem", md: "3.65rem" }, lineHeight: 1.08 }}>Estamos para orientarte</Typography>
      <Typography sx={{ mb: 4.75, color: "text.secondary", lineHeight: 1.8 }}>La atención funciona con reserva previa. Para urgencias o síntomas graves, contacta al servicio de urgencia correspondiente.</Typography>

      <Stack spacing={1.5}>
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar sx={{ width: 48, height: 48, bgcolor: "secondary.light", color: "secondary.dark" }}><Icon /></Avatar>
              <Stack spacing={0.35} sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                <Typography fontWeight={800} sx={{ color: "primary.dark", fontSize: ".91rem", wordBreak: "break-word" }}>{item.value}</Typography>
              </Stack>
            </Stack>
          );

          return item.href ? (
            <Paper key={item.label} component="a" href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} variant="outlined" sx={{ p: 1.75, borderRadius: 2, transition: "transform 180ms ease, border-color 180ms ease", "&:hover": { transform: "translateY(-2px)", borderColor: "primary.main" } }}>{content}</Paper>
          ) : (
            <Paper key={item.label} variant="outlined" sx={{ p: 1.75, borderRadius: 2 }}>{content}</Paper>
          );
        })}
      </Stack>
    </Box>
  );
}
