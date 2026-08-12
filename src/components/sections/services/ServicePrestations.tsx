import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Paper, Stack, Typography } from "@mui/material";
import type { ServiceCategory } from "../../../types/content";
import { whatsappBookingUrl } from "../../../data/site";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";

interface ServicePrestationsProps {
  service: ServiceCategory;
}

export default function ServicePrestations({ service }: ServicePrestationsProps) {
  return (
    <>
      {/* Prestaciones disponibles dentro del servicio seleccionado. */}
      {service.notice && service.notice.length > 0 && (
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
                {service.notice.map((notice) => (
                  <Typography key={notice} color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {notice}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </PageContainer>
        </Section>
      )}

      {service.prestations.map((prestation, index) => {
        const imageOnLeft = index % 2 === 0;

        return (
          <Section
            key={prestation.id}
            sx={{ bgcolor: index % 2 === 0 ? "common.white" : "background.default" }}
          >
            <PageContainer
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                alignItems: "center",
                gap: { xs: 5, md: 8 },
              }}
            >
              <Box sx={{ order: { xs: 1, md: imageOnLeft ? 1 : 2 } }}>
                <Box
                  component="img"
                  src={prestation.image}
                  alt={prestation.title}
                  sx={{
                    width: "100%",
                    height: { xs: 320, sm: 420, md: 520 },
                    objectFit: "cover",
                    borderRadius: 4,
                    boxShadow: "0 22px 55px rgba(75,34,82,.14)",
                  }}
                />
              </Box>

              <Stack
                alignItems="flex-start"
                sx={{ order: { xs: 2, md: imageOnLeft ? 2 : 1 } }}
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
                  Prestación {String(index + 1).padStart(2, "0")}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    mb: 2.5,
                    fontSize: { xs: "2.15rem", md: "3.45rem" },
                    lineHeight: 1.08,
                  }}
                >
                  {prestation.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
                  {prestation.description}
                </Typography>

                {prestation.details && prestation.details.length > 0 && (
                  <Stack component="ul" spacing={1.1} sx={{ mt: 0, mb: 3, pl: 2.5 }}>
                    {prestation.details.map((detail) => (
                      <Typography
                        component="li"
                        key={detail}
                        color="text.secondary"
                        sx={{ pl: 0.5, lineHeight: 1.7 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
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
                    sx={{ mb: prestation.duration || prestation.modality ? 2 : 0, color: "primary.dark", fontSize: { xs: "1.75rem", sm: "2rem" }, fontWeight: 800 }}
                  >
                    {prestation.price}
                  </Typography>

                  {(prestation.duration || prestation.modality) && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 2,
                      }}
                    >
                      {prestation.duration && (
                        <Box>
                          <Typography sx={{ mb: 0.25, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                            Duración
                          </Typography>
                          <Typography color="text.secondary">{prestation.duration}</Typography>
                        </Box>
                      )}
                      {prestation.modality && (
                        <Box>
                          <Typography sx={{ mb: 0.25, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                            Modalidad
                          </Typography>
                          <Typography color="text.secondary">{prestation.modality}</Typography>
                        </Box>
                      )}
                    </Box>
                  )}
                </Paper>

                {prestation.included && (
                  <Typography color="text.secondary" sx={{ mb: 3.5, lineHeight: 1.75 }}>
                    <Box component="span" sx={{ color: "text.primary", fontWeight: 800 }}>
                      Incluye: {" "}
                    </Box>
                    {prestation.included}
                  </Typography>
                )}

                <ButtonLink
                  to={whatsappBookingUrl}
                  external
                  variant="solid"
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
