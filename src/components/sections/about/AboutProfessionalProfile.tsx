import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Stack, Typography } from "@mui/material";
import { perfilProfesional } from "../../../data/perfilProfesional";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";
import ProfessionalHighlightsCarousel from "./ProfessionalHighlightsCarousel";

export default function AboutProfessionalProfile() {
  return (
    <Section sx={{ bgcolor: "background.paper" }}>
      {/* Perfil profesional de la persona detrás de Lunara. */}
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(320px, .82fr) minmax(0, 1.18fr)" },
            alignItems: "center",
            gap: { xs: 4.5, md: 7.5 },
          }}
        >
          <Box
            component="img"
            src={perfilProfesional.imagen}
            alt={perfilProfesional.textoAlternativoImagen}
            sx={{
              width: "100%",
              height: { xs: 360, sm: 460, md: 520 },
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: "0 22px 55px rgba(75,34,82,.14)",
            }}
          />

          <Stack alignItems="flex-start">
            <Typography
              sx={{
                mb: 1.75,
                color: "primary.dark",
                fontSize: ".78rem",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
              }}
            >
              {perfilProfesional.sobretitulo}
            </Typography>

            <Typography
              variant="h2"
              sx={{ mb: 1.5, fontSize: { xs: "2.25rem", md: "3.7rem" }, lineHeight: 1.05 }}
            >
              {perfilProfesional.nombre}
            </Typography>

            <Typography sx={{ mb: 3, color: "primary.main", fontSize: "1rem", fontWeight: 800 }}>
              {perfilProfesional.cargo}
            </Typography>

            {perfilProfesional.resumen.map((parrafo) => (
              <Typography
                key={parrafo}
                sx={{ mb: 2, color: "text.secondary", lineHeight: 1.85, textAlign: "justify" }}
              >
                {parrafo}
              </Typography>
            ))}

            <ButtonLink destino={perfilProfesional.urlLinkedin}
              externo
              variante="solido"
              startIcon={<LinkedInIcon />}
              sx={{ mt: 1.5 }}
            >
              {perfilProfesional.textoLinkedin}
            </ButtonLink>
          </Stack>
        </Box>

        {perfilProfesional.hitos.length > 0 && (
          <Box sx={{ mt: { xs: 6, md: 7.5 }, pt: { xs: 4, md: 5 }, borderTop: "1px solid", borderColor: "divider" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: 2,
                mb: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    color: "primary.dark",
                    fontSize: ".72rem",
                    fontWeight: 800,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                  }}
                >
                  {perfilProfesional.sobretituloTrayectoria}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.35rem", md: "1.65rem" } }}>
                  {perfilProfesional.tituloTrayectoria}
                </Typography>
              </Box>
            </Box>

            <ProfessionalHighlightsCarousel hitos={perfilProfesional.hitos} />
          </Box>
        )}
      </PageContainer>
    </Section>
  );
}
