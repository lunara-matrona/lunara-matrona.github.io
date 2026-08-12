import { Box, Skeleton, Stack } from "@mui/material";

interface PropiedadesEsqueletoSeccion {
  cantidad?: number;
  oscuro?: boolean;
  columnas?: { xs?: number; sm?: number; md?: number; lg?: number };
  alturaTarjeta?: number;
  mostrarEncabezado?: boolean;
}

export default function EsqueletoSeccion({
  cantidad = 3,
  oscuro = false,
  columnas = { xs: 1, md: 3 },
  alturaTarjeta = 240,
  mostrarEncabezado = true,
}: PropiedadesEsqueletoSeccion) {
  const color = oscuro ? "rgba(255,255,255,.22)" : "rgba(87,47,94,.12)";

  return (
    <Box aria-busy="true" aria-label="Cargando contenido">
      {/* Esqueleto reutilizable mientras se obtiene contenido desde Apps Script. */}
      {mostrarEncabezado && (
        <Stack spacing={1.25} sx={{ mb: 4.5, maxWidth: 680 }}>
          <Skeleton variant="text" width={130} height={22} sx={{ bgcolor: color }} />
          <Skeleton variant="text" width="78%" height={54} sx={{ bgcolor: color }} />
          <Skeleton variant="text" width="100%" height={25} sx={{ bgcolor: color }} />
          <Skeleton variant="text" width="72%" height={25} sx={{ bgcolor: color }} />
        </Stack>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: `repeat(${columnas.xs ?? 1}, minmax(0, 1fr))`,
            sm: `repeat(${columnas.sm ?? columnas.xs ?? 1}, minmax(0, 1fr))`,
            md: `repeat(${columnas.md ?? columnas.sm ?? columnas.xs ?? 1}, minmax(0, 1fr))`,
            lg: `repeat(${columnas.lg ?? columnas.md ?? columnas.sm ?? columnas.xs ?? 1}, minmax(0, 1fr))`,
          },
          gap: 3,
        }}
      >
        {Array.from({ length: cantidad }).map((_, indice) => (
          <Skeleton
            key={indice}
            variant="rounded"
            height={alturaTarjeta}
            sx={{ borderRadius: 3, bgcolor: color }}
          />
        ))}
      </Box>
    </Box>
  );
}
