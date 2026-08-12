import { Box, Stack, Typography } from "@mui/material";
import PageContainer from "../components/common/PageContainer";
import ButtonLink from "../components/ui/ButtonLink";

export default function NotFoundPage() {
  return (
    <Box component="section" sx={{ minHeight: "70vh", display: "grid", placeItems: "center", py: 10, color: "common.white", textAlign: "center", background: "linear-gradient(135deg, #8D3D9A, #55275D)" }}>
      {/* Mensaje mostrado cuando la ruta solicitada no existe. */}
      <PageContainer>
        <Stack alignItems="center">
          <Typography sx={{ color: "rgba(255,255,255,.30)", fontSize: "clamp(6rem, 20vw, 12rem)", fontWeight: 800, lineHeight: .9 }}>404</Typography>
          <Typography variant="h1" sx={{ mt: 3, mb: 2, fontSize: { xs: "2.5rem", md: "4rem" } }}>Esta página no existe</Typography>
          <Typography sx={{ mb: 3.5, color: "rgba(255,255,255,.75)" }}>Puede que el enlace haya cambiado o que la dirección esté incompleta.</Typography>
          <ButtonLink destino="/" variante="claro">Volver al inicio</ButtonLink>
        </Stack>
      </PageContainer>
    </Box>
  );
}
