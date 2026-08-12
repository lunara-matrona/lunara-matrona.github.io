import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, IconButton, Stack } from "@mui/material";
import { useMemo, useRef } from "react";
import { useContenido } from "../../../hooks/useContenido";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import EsqueletoSeccion from "../../ui/EsqueletoSeccion";
import SectionHeading from "../../ui/SectionHeading";
import TestimonialCard from "../../ui/TestimonialCard";

export default function HomeTestimonials() {
  const { contenido, cargando } = useContenido();
  const { mostrarSeccionTestimonios, testimonios } = contenido;
  const carruselRef = useRef<HTMLDivElement>(null);

  const testimoniosVisibles = useMemo(
    () => testimonios.filter((testimonio) => testimonio.mostrarTestimonio),
    [testimonios],
  );

  const desplazar = (direccion: "anterior" | "siguiente") => {
    const carrusel = carruselRef.current;
    if (!carrusel) return;

    const distancia = Math.min(carrusel.clientWidth * 0.85, 390);
    carrusel.scrollBy({
      left: direccion === "siguiente" ? distancia : -distancia,
      behavior: "smooth",
    });
  };

  if (cargando) {
    return (
      <Section sx={{ background: "linear-gradient(145deg, #8D3D9A, #55275D)" }}>
        <PageContainer>
          <EsqueletoSeccion
            oscuro
            cantidad={3}
            columnas={{ xs: 1, sm: 2, md: 3 }}
            alturaTarjeta={255}
          />
        </PageContainer>
      </Section>
    );
  }

  if (!mostrarSeccionTestimonios || testimoniosVisibles.length === 0) {
    return null;
  }

  return (
    <Section sx={{ background: "linear-gradient(145deg, #8D3D9A, #55275D)" }}>
      {/* Carrusel de testimonios habilitados desde Google Sheets. */}
      <PageContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: 2,
            mb: 4,
          }}
        >
          <Box sx={{ maxWidth: 760 }}>
            <SectionHeading
              sobretitulo="Testimonios"
              titulo="Experiencias de acompañamiento"
              descripcion="Experiencias compartidas por personas que han participado en espacios de acompañamiento de Lunara."
              claro
            />
          </Box>

          {testimoniosVisibles.length > 1 && (
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Ver testimonio anterior"
                onClick={() => desplazar("anterior")}
                sx={{
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,.28)",
                  bgcolor: "rgba(255,255,255,.08)",
                  "&:hover": { bgcolor: "rgba(255,255,255,.16)" },
                }}
              >
                <ChevronLeftRoundedIcon />
              </IconButton>

              <IconButton
                aria-label="Ver siguiente testimonio"
                onClick={() => desplazar("siguiente")}
                sx={{
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,.28)",
                  bgcolor: "rgba(255,255,255,.08)",
                  "&:hover": { bgcolor: "rgba(255,255,255,.16)" },
                }}
              >
                <ChevronRightRoundedIcon />
              </IconButton>
            </Stack>
          )}
        </Box>

        <Box
          ref={carruselRef}
          sx={{
            display: "flex",
            gap: 2.5,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            pb: 1.25,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimoniosVisibles.map((testimonio) => (
            <Box
              key={testimonio.id}
              sx={{
                flex: {
                  xs: "0 0 min(86vw, 340px)",
                  sm: "0 0 345px",
                  md: "0 0 360px",
                },
                scrollSnapAlign: "start",
              }}
            >
              <TestimonialCard testimonio={testimonio} />
            </Box>
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
