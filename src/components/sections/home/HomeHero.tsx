import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { recursos } from "../../../assets";
import { useContenido } from "../../../hooks/useContenido";
import PageContainer from "../../common/PageContainer";
import ButtonLink from "../../ui/ButtonLink";

export default function HomeHero() {
  const { contenido } = useContenido();
  const { urlReservaWhatsapp } = contenido;
  return (
    <Box component="section" sx={{ minHeight: { xs: 690, sm: 720, md: "calc(100vh - 92px)" }, position: "relative", display: "flex", alignItems: "center", overflow: "hidden", bgcolor: "primary.dark" }}>
      {/* Portada principal de la página de inicio. */}
      <Box sx={{ position: "absolute", inset: 0, backgroundImage: `url(${recursos.inicio.portada})`, backgroundSize: "cover", backgroundPosition: { xs: "62% center", sm: "58% center", md: "center 48%" }, transform: "scale(1.015)" }} />
      <Box sx={{ position: "absolute", inset: 0, background: { xs: "linear-gradient(90deg, rgba(67,23,74,.96), rgba(97,34,108,.88))", sm: "linear-gradient(90deg, rgba(69,24,77,.93) 0%, rgba(111,40,122,.78) 68%, rgba(166,78,181,.42) 100%)", md: "linear-gradient(90deg, rgba(75,28,83,.92) 0%, rgba(126,47,139,.72) 46%, rgba(166,78,181,.32) 100%)" } }} />
      <PageContainer sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 10 } }}>
        <Box sx={{ maxWidth: 760, color: "common.white" }}>
          <Typography sx={{ mb: 2.25, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Atención de matrona a domicilio</Typography>
          <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: "clamp(2.8rem, 14vw, 3.3rem)", sm: "4.4rem", md: "clamp(3rem, 6vw, 5.8rem)" }, lineHeight: .98 }}>
            Acompañamiento en cada etapa de tu salud sexual y reproductiva
          </Typography>
          <Typography sx={{ maxWidth: 650, mb: 4.25, color: "rgba(255,255,255,.91)", fontSize: { xs: "1rem", md: "1.18rem" }, lineHeight: 1.75 }}>
            Un entorno cercano, educativo y respetuoso para resolver dudas, prepararte para nuevas etapas y tomar decisiones con confianza.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.75} sx={{ alignItems: { xs: "stretch", sm: "center" } }}>
            <ButtonLink destino={urlReservaWhatsapp} externo variante="claro" endIcon={<ArrowForwardRoundedIcon />}>Agendar atención</ButtonLink>
            <ButtonLink destino="/servicios" variante="contorno">Ver servicios</ButtonLink>
          </Stack>
        </Box>
      </PageContainer>
    </Box>
  );
}
