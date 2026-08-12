import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { Testimonio } from "../../types/contenido";

interface PropiedadesTarjetaTestimonio {
  testimonio: Testimonio;
}

export default function TestimonioCard({ testimonio }: PropiedadesTarjetaTestimonio) {
  return (
    <Card
      component="article"
      variant="outlined"
      sx={{
        height: "100%",
        minHeight: 255,
        color: "common.white",
        borderColor: "rgba(255,255,255,.14)",
        bgcolor: "rgba(255,255,255,.10)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Tarjeta compacta utilizada dentro del carrusel de testimonios. */}
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          p: 3,
          "&:last-child": { pb: 3 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ color: "secondary.light" }}
        >
          <FormatQuoteRoundedIcon sx={{ fontSize: 32 }} />
          <Stack direction="row" aria-label={`${testimonio.puntuacion} de 5 estrellas`}>
            {Array.from({ length: testimonio.puntuacion }).map((_, indice) => (
              <StarRoundedIcon key={indice} sx={{ fontSize: 17 }} />
            ))}
          </Stack>
        </Stack>

        <Typography
          component="blockquote"
          sx={{
            flex: 1,
            m: 0,
            py: 2.5,
            color: "rgba(255,255,255,.92)",
            fontSize: ".92rem",
            lineHeight: 1.7,
            textAlign: "justify",
          }}
        >
          “{testimonio.comentario}”
        </Typography>

        <Stack spacing={0.35}>
          <Typography fontWeight={800}>{testimonio.nombre}</Typography>
          <Typography sx={{ color: "rgba(255,255,255,.60)", fontSize: ".8rem" }}>
            {testimonio.servicio}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
