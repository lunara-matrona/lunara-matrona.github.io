import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ServiceCategory } from "../../../types/content";
import { whatsappBookingUrl } from "../../../data/site";
import PageContainer from "../../common/PageContainer";
import ButtonLink from "../../ui/ButtonLink";

interface ServiceDetailHeroProps {
  service: ServiceCategory;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <Box component="section" sx={{ py: { xs: 6.5, md: 10 }, color: "common.white", background: "linear-gradient(135deg, #55275D, #8D3D9A)" }}>
      {/* Portada con la información principal del servicio seleccionado. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, alignItems: "center", gap: { xs: 6, md: 8 } }}>
        <Stack alignItems="flex-start">
          <Stack component={RouterLink} to="/servicios" direction="row" alignItems="center" spacing={1} sx={{ mb: 5, color: "rgba(255,255,255,.75)", fontWeight: 700, "&:hover": { color: "common.white" } }}>
            <ArrowBackRoundedIcon fontSize="small" /><span>Volver a servicios</span>
          </Stack>
          <Typography sx={{ mb: 1.75, fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>Acompañamiento Lunara</Typography>
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: "3.1rem", md: "5rem" }, lineHeight: 1 }}>{service.title}</Typography>
          {service.ageRange && <Chip label={service.ageRange} sx={{ mb: 2.5, bgcolor: "rgba(255,255,255,.13)", color: "common.white", fontWeight: 800 }} />}
          <Typography sx={{ maxWidth: 600, mb: 4, color: "rgba(255,255,255,.8)", fontSize: "1.04rem", lineHeight: 1.8 }}>{service.introduction}</Typography>
          <ButtonLink to={whatsappBookingUrl} external variant="light" endIcon={<ArrowForwardRoundedIcon />}>Consultar por este servicio</ButtonLink>
        </Stack>

        <Box sx={{ position: "relative", pb: { xs: 4.5, sm: 0 } }}>
          <Box component="img" src={service.image} alt={`Servicio de ${service.title}`} sx={{ width: "100%", height: { xs: 340, sm: 440, md: 560 }, objectFit: "cover", borderRadius: 4, boxShadow: "0 22px 55px rgba(44,17,50,.28)" }} />
          <Box sx={{ position: "absolute", left: { xs: 1.75, sm: "auto" }, right: { xs: 1.75, sm: 2.25 }, bottom: { xs: 0, sm: 2.25 }, maxWidth: { sm: 280 }, p: 2.5, borderRadius: 2.5, bgcolor: "common.white", color: "primary.dark", boxShadow: "0 18px 40px rgba(44,17,50,.22)" }}>
            <Typography sx={{ mb: .5, color: "text.secondary", fontSize: ".68rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>Prestación destacada</Typography>
            <Typography fontWeight={800}>{service.prestations[0]?.title ?? "Consulta personalizada"}</Typography>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
