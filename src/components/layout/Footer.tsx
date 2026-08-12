import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { recursos } from "../../assets";
import { useContenido } from "../../hooks/useContenido";
import PageContainer from "../common/PageContainer";

export default function Footer() {
  const { contenido } = useContenido();
  const { informacionContacto, navegacion } = contenido;
  const estilosEnlaceContacto = { display: "flex", alignItems: "center", gap: 1.25, color: "rgba(255,255,255,.65)", fontSize: ".87rem", "&:hover": { color: "common.white" } };

  return (
    <Box component="footer" sx={{ mt: "auto", bgcolor: "#3D2043", color: "common.white" }}>
      {/* Pie de página con navegación y datos de contacto. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.35fr .6fr 1fr" }, gap: { xs: 4.5, md: 8.5 }, py: { xs: 6, md: 8.5 } }}>
        <Box sx={{ gridColumn: { sm: "1 / -1", md: "auto" } }}>
          <Box component="img" src={recursos.marca.logoBlanco} alt="Lunara" sx={{ width: { xs: 265, sm: 300, md: 330 }, maxWidth: "100%", mb: 3 }} />
          <Typography sx={{ maxWidth: 430, color: "rgba(255,255,255,.62)", lineHeight: 1.75, textAlign: "justify" }}>
            Acompañamiento cercano, educativo y respetuoso en cada etapa de tu salud sexual y reproductiva.
          </Typography>
        </Box>

        <Stack spacing={1.5} alignItems="flex-start">
          <Typography sx={{ mb: 1, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>Navegación</Typography>
          {navegacion.map((elemento) => <Typography key={elemento.ruta} component={RouterLink} to={elemento.ruta} sx={{ color: "rgba(255,255,255,.65)", fontSize: ".87rem", "&:hover": { color: "common.white" } }}>{elemento.etiqueta}</Typography>)}
        </Stack>

        <Stack spacing={1.5} alignItems="flex-start">
          <Typography sx={{ mb: 1, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>Contacto</Typography>
          <Box component="a" href={`https://wa.me/${informacionContacto.telefono}`} target="_blank" rel="noreferrer" sx={estilosEnlaceContacto}><WhatsAppIcon fontSize="small" />{informacionContacto.telefonoVisible}</Box>
          <Box component="a" href={`mailto:${informacionContacto.correo}`} sx={estilosEnlaceContacto}><MailOutlineRoundedIcon fontSize="small" />{informacionContacto.correo}</Box>
          <Box component="a" href={informacionContacto.urlInstagram} target="_blank" rel="noreferrer" sx={estilosEnlaceContacto}><InstagramIcon fontSize="small" />@{informacionContacto.instagram}</Box>
          <Box sx={estilosEnlaceContacto}><LocationOnRoundedIcon fontSize="small" />{informacionContacto.ciudad}</Box>
        </Stack>
      </PageContainer>
      <Divider sx={{ borderColor: "rgba(255,255,255,.10)" }} />
      <PageContainer sx={{ minHeight: 70, display: "flex", alignItems: "center", color: "rgba(255,255,255,.42)", fontSize: ".72rem" }}>
        © {new Date().getFullYear()} Lunara. Todos los derechos reservados.
      </PageContainer>
    </Box>
  );
}
