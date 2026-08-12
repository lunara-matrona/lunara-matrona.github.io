import { Stack, Typography } from "@mui/material";

interface PropiedadesEncabezadoSeccion {
  sobretitulo?: string;
  titulo: string;
  descripcion?: string;
  centrado?: boolean;
  claro?: boolean;
}

export default function SectionHeading({ sobretitulo, titulo, descripcion, centrado = false, claro = false }: PropiedadesEncabezadoSeccion) {
  return (
    <Stack spacing={2} sx={{ maxWidth: 760, mb: 5.5, mx: centrado ? "auto" : 0, textAlign: centrado ? "center" : "left", color: claro ? "common.white" : "text.primary" }}>
      {/* Título y descripción de una sección de contenido. */}
      {sobretitulo && (
        <Typography sx={{ color: claro ? "common.white" : "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
          {sobretitulo}
        </Typography>
      )}
      <Typography variant="h2" sx={{ fontSize: { xs: "2.15rem", md: "3.65rem" }, lineHeight: 1.08 }}>
        {titulo}
      </Typography>
      {descripcion && (
        <Typography sx={{ maxWidth: 680, mx: centrado ? "auto" : 0, color: claro ? "rgba(255,255,255,.78)" : "text.secondary", fontSize: "1.02rem", lineHeight: 1.8 }}>
          {descripcion}
        </Typography>
      )}
    </Stack>
  );
}
