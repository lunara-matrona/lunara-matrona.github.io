import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { Testimonio } from "../../types/contenido";

interface PropiedadesTarjetaTestimonio {
  testimonio: Testimonio;
}

export default function TestimonioCard({ testimonio }: PropiedadesTarjetaTestimonio) {
  return (
    <Card component="article" variant="outlined" sx={{ minHeight: 315, color: "common.white", borderColor: "rgba(255,255,255,.14)", bgcolor: "rgba(255,255,255,.10)", backdropFilter: "blur(10px)" }}>
      {/* Testimonio destacado dentro de la página de inicio. */}
      <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", p: 3.75, "&:last-child": { pb: 3.75 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ color: "secondary.light" }}>
          <FormatQuoteRoundedIcon sx={{ fontSize: 38 }} />
          <Stack direction="row" aria-label={`${testimonio.puntuacion} de 5 estrellas`}>
            {Array.from({ length: testimonio.puntuacion }).map((_, indice) => <StarRoundedIcon key={indice} sx={{ fontSize: 19 }} />)}
          </Stack>
        </Stack>
        <Typography component="blockquote" sx={{ flex: 1, m: 0, py: 3.5, color: "rgba(255,255,255,.92)", fontSize: ".97rem", lineHeight: 1.85 }}>
          “{testimonio.comentario}”
        </Typography>
        <Stack spacing={0.5}>
          <Typography fontWeight={800}>{testimonio.nombre}</Typography>
          <Typography sx={{ color: "rgba(255,255,255,.60)", fontSize: ".82rem" }}>{testimonio.servicio}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
