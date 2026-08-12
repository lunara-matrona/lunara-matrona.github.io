import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { whatsappBookingUrl } from "../../../data/site";
import PageContainer from "../../common/PageContainer";
import ButtonLink from "../../ui/ButtonLink";

export default function HomeBookingCta() {
  return (
    <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "secondary.main" }}>
      {/* Llamado final para iniciar una conversación por WhatsApp. */}
      <PageContainer>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={5} sx={{ p: { xs: 4, md: 6.5 }, borderRadius: 4, bgcolor: "secondary.dark", color: "common.white", boxShadow: "0 22px 55px rgba(75,34,82,.16)" }}>
          <Box>
            <Typography sx={{ mb: 1.25, fontSize: ".76rem", fontWeight: 800, letterSpacing: ".17em", textTransform: "uppercase" }}>¿Tienes dudas?</Typography>
            <Typography variant="h2" sx={{ maxWidth: 740, mb: 1.5, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>Conversemos sobre el acompañamiento que necesitas</Typography>
            <Typography sx={{ color: "rgba(255,255,255,.76)", lineHeight: 1.7 }}>También puedes consultar por actividades educativas, colaboraciones y servicios personalizados.</Typography>
          </Box>
          <ButtonLink to={whatsappBookingUrl} external variant="light" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0, width: { xs: "100%", sm: "auto" } }}>Escribir por WhatsApp</ButtonLink>
        </Stack>
      </PageContainer>
    </Box>
  );
}
