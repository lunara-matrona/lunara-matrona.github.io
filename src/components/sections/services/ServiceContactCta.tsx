import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Stack, Typography } from "@mui/material";
import { whatsappBookingUrl } from "../../../data/site";
import PageContainer from "../../common/PageContainer";
import ButtonLink from "../../ui/ButtonLink";

export default function ServiceContactCta() {
  return (
    <Box component="section" sx={{ py: { xs: 7.5, md: 8.75 }, bgcolor: "secondary.light" }}>
      {/* Orientación final para elegir el servicio correcto. */}
      <PageContainer>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} spacing={4} sx={{ p: { xs: 4, md: 5.5 }, borderRadius: 4, bgcolor: "secondary.dark", color: "common.white", boxShadow: "0 22px 55px rgba(75,34,82,.16)" }}>
          <WhatsAppIcon sx={{ fontSize: 56, flexShrink: 0 }} />
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ mb: 1, fontSize: ".76rem", fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase" }}>¿No estás segura de qué servicio elegir?</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, lineHeight: 1.1 }}>Escríbenos y te orientamos</Typography>
          </Box>
          <ButtonLink to={whatsappBookingUrl} external variant="light" sx={{ width: { xs: "100%", sm: "auto" }, flexShrink: 0 }}>Abrir WhatsApp</ButtonLink>
        </Stack>
      </PageContainer>
    </Box>
  );
}
