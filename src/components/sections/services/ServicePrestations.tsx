import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Paper, Stack, Typography } from "@mui/material";

import { useContenido } from "../../../hooks/useContenido";
import type {
  CategoriaServicio,
  OpcionPrestacionServicio,
} from "../../../types/contenido";

import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";

interface PropiedadesPrestacionesServicio {
  servicio: CategoriaServicio;
}

interface GrupoOpcionesPrestacion {
  nombre: string;
  opciones: OpcionPrestacionServicio[];
}

function agruparOpciones(
  opciones: OpcionPrestacionServicio[],
): GrupoOpcionesPrestacion[] {
  const grupos = new Map<string, OpcionPrestacionServicio[]>();

  opciones.forEach((opcion) => {
    const opcionesGrupo = grupos.get(opcion.grupo) ?? [];
    opcionesGrupo.push(opcion);
    grupos.set(opcion.grupo, opcionesGrupo);
  });

  return Array.from(grupos, ([nombre, opcionesGrupo]) => ({
    nombre,
    opciones: opcionesGrupo,
  }));
}

export default function ServicePrestations({
  servicio,
}: PropiedadesPrestacionesServicio) {
  const { contenido } = useContenido();
  const { urlReservaWhatsapp } = contenido;

  return (
    <>
      {/* Avisos importantes antes de revisar las prestaciones. */}
      {servicio.avisos && servicio.avisos.length > 0 && (
        <Section sx={{ py: { xs: 5, md: 6 }, bgcolor: "secondary.light" }}>
          <PageContainer>
            <Paper
              elevation={0}
              sx={{
                maxWidth: 920,
                mx: "auto",
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,.7)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                sx={{
                  mb: 1.5,
                  color: "primary.dark",
                  fontSize: ".76rem",
                  fontWeight: 800,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                }}
              >
                Antes de agendar
              </Typography>

              <Stack spacing={1}>
                {servicio.avisos.map((aviso) => (
                  <Typography
                    key={aviso}
                    color="text.secondary"
                    sx={{ lineHeight: 1.75 }}
                  >
                    {aviso}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </PageContainer>
        </Section>
      )}

      {/* Prestaciones disponibles dentro del servicio seleccionado. */}
      {servicio.prestaciones.map((prestacion, indice) => {
        const imagenALaIzquierda = indice % 2 === 0;
        const gruposOpciones = agruparOpciones(prestacion.opciones ?? []);

        return (
          <Section
            key={prestacion.id}
            sx={{
              bgcolor:
                indice % 2 === 0 ? "common.white" : "background.default",
            }}
          >
            <PageContainer
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                alignItems: "center",
                gap: { xs: 5, md: 8 },
              }}
            >
              <Box
                sx={{
                  order: { xs: 1, md: imagenALaIzquierda ? 1 : 2 },
                  alignSelf: "stretch",
                }}
              >
                <Box
                  component="img"
                  src={prestacion.imagen}
                  alt={prestacion.titulo}
                  sx={{
                    width: "100%",
                    height: { xs: 320, sm: 420, md: "100%" },
                    minHeight: { md: 520 },
                    maxHeight: { md: 760 },
                    objectFit: "cover",
                    borderRadius: 4,
                    boxShadow: "0 22px 55px rgba(75,34,82,.14)",
                  }}
                />
              </Box>

              <Stack
                alignItems="flex-start"
                sx={{ order: { xs: 2, md: imagenALaIzquierda ? 2 : 1 } }}
              >
                <Typography
                  sx={{
                    mb: 1.75,
                    color: "primary.dark",
                    fontSize: ".76rem",
                    fontWeight: 800,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                  }}
                >
                  Prestación {String(indice + 1).padStart(2, "0")}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    mb: 2.5,
                    fontSize: { xs: "2.15rem", md: "3.45rem" },
                    lineHeight: 1.08,
                  }}
                >
                  {prestacion.titulo}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.85 }}
                >
                  {prestacion.descripcion}
                </Typography>

                {prestacion.detalles && prestacion.detalles.length > 0 && (
                  <Box sx={{ width: "100%", mb: 3 }}>
                    <Typography
                      sx={{
                        mb: 1.25,
                        color: "primary.dark",
                        fontSize: ".72rem",
                        fontWeight: 800,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Contenido de la prestación
                    </Typography>

                    <Stack component="ul" spacing={1.1} sx={{ m: 0, pl: 2.5 }}>
                      {prestacion.detalles.map((detalle) => (
                        <Typography
                          component="li"
                          key={detalle}
                          color="text.secondary"
                          sx={{ pl: 0.5, lineHeight: 1.7 }}
                        >
                          {detalle}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                )}

                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    mb: 2.5,
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 3,
                    bgcolor: "secondary.light",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    sx={{
                      mb: 0.5,
                      color: "secondary.dark",
                      fontSize: ".7rem",
                      fontWeight: 800,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Valor de la prestación
                  </Typography>

                  <Typography
                    sx={{
                      mb:
                        prestacion.duracion || prestacion.modalidad ? 2 : 0,
                      color: "primary.dark",
                      fontSize: { xs: "1.75rem", sm: "2rem" },
                      fontWeight: 800,
                    }}
                  >
                    {prestacion.precio}
                  </Typography>

                  {(prestacion.duracion || prestacion.modalidad) && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(2, 1fr)",
                        },
                        gap: 2,
                      }}
                    >
                      {prestacion.duracion && (
                        <Box>
                          <Typography
                            sx={{
                              mb: 0.25,
                              fontSize: ".72rem",
                              fontWeight: 800,
                              textTransform: "uppercase",
                            }}
                          >
                            Duración
                          </Typography>
                          <Typography color="text.secondary">
                            {prestacion.duracion}
                          </Typography>
                        </Box>
                      )}

                      {prestacion.modalidad && (
                        <Box>
                          <Typography
                            sx={{
                              mb: 0.25,
                              fontSize: ".72rem",
                              fontWeight: 800,
                              textTransform: "uppercase",
                            }}
                          >
                            Modalidad
                          </Typography>
                          <Typography color="text.secondary">
                            {prestacion.modalidad}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}
                </Paper>

                {prestacion.nota && (
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      mb: 2.5,
                      p: 2.25,
                      borderRadius: 2.5,
                      bgcolor: "rgba(168,81,182,.06)",
                      borderLeft: "4px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <Typography
                      sx={{
                        mb: 0.5,
                        color: "primary.dark",
                        fontSize: ".72rem",
                        fontWeight: 800,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Importante
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {prestacion.nota}
                    </Typography>
                  </Paper>
                )}

                {gruposOpciones.length > 0 && (
                  <Box sx={{ width: "100%", mb: 3.5 }}>
                    <Typography
                      sx={{
                        mb: 1.5,
                        color: "primary.dark",
                        fontSize: ".76rem",
                        fontWeight: 800,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                      }}
                    >
                      Alternativas y tarifas
                    </Typography>

                    <Stack spacing={2}>
                      {gruposOpciones.map((grupo) => (
                        <Paper
                          key={grupo.nombre}
                          variant="outlined"
                          sx={{
                            overflow: "hidden",
                            borderRadius: 1,
                            borderColor: "divider",
                            bgcolor: "common.white",
                          }}
                        >
                          <Typography
                            sx={{
                              px: 2.25,
                              py: 1.25,
                              bgcolor: "secondary.light",
                              color: "primary.dark",
                              fontSize: ".8rem",
                              fontWeight: 800,
                            }}
                          >
                            {grupo.nombre}
                          </Typography>

                          <Stack
                            divider={
                              <Box
                                sx={{
                                  borderTop: "1px solid",
                                  borderColor: "divider",
                                }}
                              />
                            }
                          >
                            {grupo.opciones.map((opcion) => (
                              <Box key={opcion.id} sx={{ px: 2.25, py: 1.75 }}>
                                <Stack
                                  direction={{ xs: "column", sm: "row" }}
                                  justifyContent="space-between"
                                  alignItems={{ xs: "flex-start", sm: "baseline" }}
                                  gap={0.75}
                                >
                                  <Typography
                                    sx={{
                                      color: "text.primary",
                                      fontWeight: 700,
                                      lineHeight: 1.45,
                                    }}
                                  >
                                    {opcion.titulo}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      flexShrink: 0,
                                      color: "primary.dark",
                                      fontWeight: 800,
                                    }}
                                  >
                                    {opcion.precio}
                                  </Typography>
                                </Stack>

                                {opcion.descripcion && (
                                  <Typography
                                    color="text.secondary"
                                    sx={{
                                      mt: 0.75,
                                      fontSize: ".88rem",
                                      lineHeight: 1.65,
                                    }}
                                  >
                                    {opcion.descripcion}
                                  </Typography>
                                )}
                              </Box>
                            ))}
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>
                  </Box>
                )}

                {prestacion.incluye && (
                  <Typography
                    color="text.secondary"
                    sx={{ mb: 3.5, lineHeight: 1.75, whiteSpace: "pre-line" }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "text.primary", fontWeight: 800 }}
                    >
                      Incluye:{" "}
                    </Box>
                    {prestacion.incluye}
                  </Typography>
                )}

                <ButtonLink
                  destino={urlReservaWhatsapp}
                  externo
                  variante="solido"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Consultar esta prestación
                </ButtonLink>
              </Stack>
            </PageContainer>
          </Section>
        );
      })}
    </>
  );
}
