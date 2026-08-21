import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import { Box, Card, CardActionArea, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import type { HitoProfesional, TipoHitoProfesional } from "../../../types/contenido";

interface PropiedadesCarruselHitosProfesionales {
  hitos: HitoProfesional[];
}

const metadatosHitos: Record<TipoHitoProfesional, { etiqueta: string; icono: typeof WorkOutlineRoundedIcon }> = {
  experiencia: { etiqueta: "Experiencia", icono: WorkOutlineRoundedIcon },
  certificado: { etiqueta: "Certificado", icono: WorkspacePremiumRoundedIcon },
  educacion: { etiqueta: "Formación", icono: SchoolRoundedIcon },
  reconocimiento: { etiqueta: "Reconocimiento", icono: EmojiEventsRoundedIcon },
};

export default function CarruselHitosProfesionales({ hitos }: PropiedadesCarruselHitosProfesionales) {
  const referenciaCarrusel = useRef<HTMLDivElement>(null);
  const hitosVisibles = hitos.filter((hito) => hito.mostrarHito);

  const desplazarCarrusel = (direccion: "izquierda" | "derecha") => {
    referenciaCarrusel.current?.scrollBy({
      left: direccion === "derecha" ? 310 : -310,
      behavior: "smooth",
    });
  };

  if (hitosVisibles.length === 0) {
    return null;
  }

  return (
    <Box sx={{ position: "relative" }}>
      {/* Carrusel compacto de experiencias, formación, certificados y reconocimientos. */}
      <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mb: 1.5 }}>
        <IconButton
          aria-label="Ver elementos anteriores"
          onClick={() => desplazarCarrusel("izquierda")}
          size="small"
          sx={{ border: "1px solid", borderColor: "divider", bgcolor: "common.white" }}
        >
          <ArrowBackRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="Ver elementos siguientes"
          onClick={() => desplazarCarrusel("derecha")}
          size="small"
          sx={{ border: "1px solid", borderColor: "divider", bgcolor: "common.white" }}
        >
          <ArrowForwardRoundedIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Box
        ref={referenciaCarrusel}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 1,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {hitosVisibles.map((hito) => {
          const metadatos = metadatosHitos[hito.tipo];
          const Icono = metadatos.icono;

          const contenidoTarjeta = (
            <Box
              sx={{
                height: "100%",
                display: "grid",
                gridTemplateColumns: hito.imagen ? "82px minmax(0, 1fr)" : "1fr",
                gap: 2,
                p: 2.25,
              }}
            >
              {hito.imagen && (
                <Box
                  component="img"
                  src={hito.imagen}
                  alt=""
                  sx={{ width: 82, height: 92, objectFit: "cover", borderRadius: 2 }}
                />
              )}

              <Stack spacing={1} sx={{ minWidth: 0 }}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                  <Chip
                    icon={<Icono sx={{ fontSize: "16px !important" }} />}
                    label={metadatos.etiqueta}
                    size="small"
                    sx={{
                      height: 26,
                      bgcolor: "secondary.light",
                      color: "primary.dark",
                      fontSize: ".72rem",
                      fontWeight: 800,
                    }}
                  />
                  {hito.fecha && (
                    <Typography sx={{ color: "text.secondary", fontSize: ".72rem", fontWeight: 700 }}>
                      {hito.fecha}
                    </Typography>
                  )}
                </Stack>

                <Typography sx={{ color: "primary.dark", fontSize: ".94rem", fontWeight: 800, lineHeight: 1.35 }}>
                  {hito.titulo}
                </Typography>

                {hito.organizacion && (
                  <Typography sx={{ color: "text.secondary", fontSize: ".74rem", fontWeight: 700, lineHeight: 1.45 }}>
                    {hito.organizacion}
                  </Typography>
                )}

                {hito.descripcion && (
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: ".76rem",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {hito.descripcion}
                  </Typography>
                )}
              </Stack>
            </Box>
          );

          return (
            <Card
              key={hito.id}
              component="article"
              variant="outlined"
              sx={{
                flex: "0 0 285px",
                minHeight: 172,
                scrollSnapAlign: "start",
                borderColor: "divider",
                bgcolor: "common.white",
                boxShadow: "0 10px 28px rgba(75,34,82,.06)",
              }}
            >
              {hito.url ? (
                <CardActionArea
                  component="a"
                  href={hito.url}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ height: "100%", alignItems: "stretch" }}
                >
                  {contenidoTarjeta}
                </CardActionArea>
              ) : (
                contenidoTarjeta
              )}
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
