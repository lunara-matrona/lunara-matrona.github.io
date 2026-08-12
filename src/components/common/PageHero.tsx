import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import PageContainer from "./PageContainer";

interface PropiedadesPageHero {
  sobretitulo: string;
  titulo: string;
  descripcion: string;
  centrado?: boolean;
  imagenFondo?: string;
  sx?: SxProps<Theme>;
}

export default function PageHero({ sobretitulo, titulo, descripcion, centrado = false, imagenFondo, sx }: PropiedadesPageHero) {
  const estilosPersonalizados = Array.isArray(sx) ? sx : sx ? [sx] : [];

  return (
    <Box
      component="section"
      sx={[
        {
          minHeight: { xs: 360, md: 410 },
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          color: "common.white",
          background: imagenFondo
            ? `linear-gradient(90deg, rgba(82,36,91,.92), rgba(147,63,160,.72)), url(${imagenFondo}) center 43% / cover`
            : "linear-gradient(135deg, #8D3D9A, #55275D)",
          "&::after": {
            content: '""',
            width: 420,
            height: 420,
            position: "absolute",
            right: -100,
            bottom: -220,
            border: "1px solid rgba(255,255,255,.18)",
            borderRadius: "50%",
            boxShadow: "0 0 0 70px rgba(255,255,255,.05), 0 0 0 140px rgba(255,255,255,.03)",
          },
        },
        ...estilosPersonalizados,
      ]}
    >
      {/* Encabezado visual de la página interior. */}
      <PageContainer sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 8.5 }, textAlign: centrado ? "center" : "left" }}>
        <Typography sx={{ mb: 2.25, fontSize: ".8rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
          {sobretitulo}
        </Typography>
        <Typography variant="h1" sx={{ maxWidth: 900, mx: centrado ? "auto" : 0, mb: 2.5, fontSize: { xs: "3rem", md: "5.25rem" }, lineHeight: 1 }}>
          {titulo}
        </Typography>
        <Typography sx={{ maxWidth: 760, mx: centrado ? "auto" : 0, color: "rgba(255,255,255,.78)", fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.75 }}>
          {descripcion}
        </Typography>
      </PageContainer>
    </Box>
  );
}
