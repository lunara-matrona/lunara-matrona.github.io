import { Stack, Typography } from "@mui/material";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <Stack spacing={2} sx={{ maxWidth: 760, mb: 5.5, mx: centered ? "auto" : 0, textAlign: centered ? "center" : "left", color: light ? "common.white" : "text.primary" }}>
      {/* Título y descripción de una sección de contenido. */}
      {eyebrow && (
        <Typography sx={{ color: light ? "common.white" : "primary.dark", fontSize: ".78rem", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase" }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" sx={{ fontSize: { xs: "2.15rem", md: "3.65rem" }, lineHeight: 1.08 }}>
        {title}
      </Typography>
      {description && (
        <Typography sx={{ maxWidth: 680, mx: centered ? "auto" : 0, color: light ? "rgba(255,255,255,.78)" : "text.secondary", fontSize: "1.02rem", lineHeight: 1.8 }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
