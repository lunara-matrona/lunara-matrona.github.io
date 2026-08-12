import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Stack, Typography } from "@mui/material";
import { professionalProfile } from "../../../data/professionalProfile";
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
            src={professionalProfile.image}
            alt={professionalProfile.imageAlt}
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
              {professionalProfile.eyebrow}
            </Typography>

            <Typography
              variant="h2"
              sx={{ mb: 1.5, fontSize: { xs: "2.25rem", md: "3.7rem" }, lineHeight: 1.05 }}
            >
              {professionalProfile.name}
            </Typography>

            <Typography sx={{ mb: 3, color: "primary.main", fontSize: "1rem", fontWeight: 800 }}>
              {professionalProfile.role}
            </Typography>

            {professionalProfile.summary.map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{ mb: 2, color: "text.secondary", lineHeight: 1.85, textAlign: "justify" }}
              >
                {paragraph}
              </Typography>
            ))}

            <ButtonLink
              to={professionalProfile.linkedinUrl}
              external
              variant="solid"
              startIcon={<LinkedInIcon />}
              sx={{ mt: 1.5 }}
            >
              {professionalProfile.linkedinLabel}
            </ButtonLink>
          </Stack>
        </Box>

        {professionalProfile.highlights.length > 0 && (
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
                  {professionalProfile.highlightsEyebrow}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.35rem", md: "1.65rem" } }}>
                  {professionalProfile.highlightsTitle}
                </Typography>
              </Box>
            </Box>

            <ProfessionalHighlightsCarousel items={professionalProfile.highlights} />
          </Box>
        )}
      </PageContainer>
    </Section>
  );
}
