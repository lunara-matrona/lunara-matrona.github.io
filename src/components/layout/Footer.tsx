import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { assets } from "../../assets";
import { contactInfo, navigation } from "../../data/site";
import PageContainer from "../common/PageContainer";

export default function Footer() {
  const contactLinkSx = { display: "flex", alignItems: "center", gap: 1.25, color: "rgba(255,255,255,.65)", fontSize: ".87rem", "&:hover": { color: "common.white" } };

  return (
    <Box component="footer" sx={{ mt: "auto", bgcolor: "#3D2043", color: "common.white" }}>
      {/* Pie de página con navegación y datos de contacto. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.35fr .6fr 1fr" }, gap: { xs: 4.5, md: 8.5 }, py: { xs: 6, md: 8.5 } }}>
        <Box sx={{ gridColumn: { sm: "1 / -1", md: "auto" } }}>
          <Box component="img" src={assets.brand.logoWhite} alt="Lunara" sx={{ width: { xs: 265, sm: 300, md: 330 }, maxWidth: "100%", mb: 3 }} />
          <Typography sx={{ maxWidth: 430, color: "rgba(255,255,255,.62)", lineHeight: 1.75, textAlign: "justify" }}>
            Acompañamiento cercano, educativo y respetuoso en cada etapa de tu salud sexual y reproductiva.
          </Typography>
        </Box>

        <Stack spacing={1.5} alignItems="flex-start">
          <Typography sx={{ mb: 1, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>Navegación</Typography>
          {navigation.map((item) => <Typography key={item.path} component={RouterLink} to={item.path} sx={{ color: "rgba(255,255,255,.65)", fontSize: ".87rem", "&:hover": { color: "common.white" } }}>{item.label}</Typography>)}
        </Stack>

        <Stack spacing={1.5} alignItems="flex-start">
          <Typography sx={{ mb: 1, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>Contacto</Typography>
          <Box component="a" href={`https://wa.me/${contactInfo.phoneValue}`} target="_blank" rel="noreferrer" sx={contactLinkSx}><WhatsAppIcon fontSize="small" />{contactInfo.phoneDisplay}</Box>
          <Box component="a" href={`mailto:${contactInfo.email}`} sx={contactLinkSx}><MailOutlineRoundedIcon fontSize="small" />{contactInfo.email}</Box>
          <Box component="a" href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" sx={contactLinkSx}><InstagramIcon fontSize="small" />@{contactInfo.instagram}</Box>
          <Box sx={contactLinkSx}><LocationOnRoundedIcon fontSize="small" />{contactInfo.city}</Box>
        </Stack>
      </PageContainer>
      <Divider sx={{ borderColor: "rgba(255,255,255,.10)" }} />
      <PageContainer sx={{ minHeight: 70, display: "flex", alignItems: "center", color: "rgba(255,255,255,.42)", fontSize: ".72rem" }}>
        © {new Date().getFullYear()} Lunara. Todos los derechos reservados.
      </PageContainer>
    </Box>
  );
}
