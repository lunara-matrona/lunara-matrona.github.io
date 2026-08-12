import { Box, Stack, Typography } from "@mui/material";
import { recursos } from "../../../assets";
import PageContainer from "../../common/PageContainer";
import ButtonLink from "../../ui/ButtonLink";

export default function AboutServicesCta() {
  return (
    <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "secondary.light" }}>
      {/* Acceso desde Nosotros hacia el catálogo de servicios. */}
      <PageContainer>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} spacing={4} sx={{ p: { xs: 4, md: 5.5 }, borderRadius: 4, bgcolor: "secondary.dark", color: "common.white", boxShadow: "0 22px 55px rgba(75,34,82,.16)" }}>
          <Box component="img" src={recursos.marca.simboloBlanco} alt="" sx={{ width: { xs: 75, md: 95 }, flexShrink: 0 }} />
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: ".76rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>Conoce la ruta de acompañamiento</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, lineHeight: 1.1 }}>Encuentra el servicio que se adapta a tu etapa</Typography>
          </Box>
          <ButtonLink destino="/servicios" variante="claro" sx={{ width: { xs: "100%", sm: "auto" }, flexShrink: 0 }}>Ver servicios</ButtonLink>
        </Stack>
      </PageContainer>
    </Box>
  );
}
