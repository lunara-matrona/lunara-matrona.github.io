import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { CategoriaServicio } from "../../types/contenido";

interface PropiedadesTarjetaServicio {
  servicio: CategoriaServicio;
}

export default function ServiceCard({ servicio }: PropiedadesTarjetaServicio) {
  return (
    <Card
      component="article"
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderColor: "divider",
        boxShadow: "0 12px 30px rgba(75,34,82,.1)",
        overflow: "hidden",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": { transform: "translateY(-7px)", boxShadow: "0 22px 55px rgba(75,34,82,.16)" },
        "&:hover .imagen-servicio": { transform: "scale(1.045)" },
      }}
    >
      {/* Tarjeta de acceso a una categoría de servicio. */}
      <Box component={RouterLink} to={`/servicios/${servicio.segmentoUrl}`} aria-label={`Ver ${servicio.titulo}`} sx={{ display: "block", aspectRatio: "4 / 3", overflow: "hidden", bgcolor: "secondary.light" }}>
        <CardMedia className="imagen-servicio" component="img" image={servicio.imagen} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 350ms ease" }} />
      </Box>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 3.25, "&:last-child": { pb: 3.25 } }}>
        <Stack direction="row" alignItems="baseline" justifyContent="space-between" spacing={2}>
          <Typography variant="h3" sx={{ color: "primary.dark", fontSize: "1.18rem" }}>{servicio.titulo}</Typography>
          {servicio.rangoEdad && <Typography sx={{ color: "secondary.dark", fontSize: ".78rem", fontWeight: 700, whiteSpace: "nowrap" }}>{servicio.rangoEdad}</Typography>}
        </Stack>
        <Typography sx={{ flex: 1, my: 2, color: "text.secondary", fontSize: ".91rem", lineHeight: 1.7 }}>{servicio.descripcionCorta}</Typography>
        <Stack component={RouterLink} to={`/servicios/${servicio.segmentoUrl}`} direction="row" alignItems="center" spacing={1} sx={{ width: "fit-content", color: "primary.dark", fontSize: ".86rem", fontWeight: 800 }}>
          <span>Conocer servicio</span><ArrowOutwardRoundedIcon fontSize="small" />
        </Stack>
      </CardContent>
    </Card>
  );
}
