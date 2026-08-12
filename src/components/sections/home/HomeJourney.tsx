import { Box, Stack, Typography } from "@mui/material";
import { routeSteps } from "../../../data/home";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";
import SectionHeading from "../../ui/SectionHeading";

export default function HomeJourney() {
  return (
    <Section sx={{ color: "common.white", background: "radial-gradient(circle at 85% 10%, rgba(255,255,255,.10), transparent 32%), linear-gradient(135deg, #55275D, #8D3D9A)" }}>
      {/* Ruta cronológica de acompañamiento de la página de inicio. */}
      <PageContainer>
        <SectionHeading eyebrow="Nuestra ruta de acompañamiento" title="Cada etapa trae nuevas preguntas. No tienes que responderlas sola." description="La ruta te ayuda a anticiparte a momentos importantes y a buscar información y apoyo en el momento oportuno." light />
        <Box aria-label="Etapas de acompañamiento" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }, mt: 6, borderTop: { lg: "1px solid rgba(255,255,255,.32)" }, gap: { xs: 1.5, lg: 0 } }}>
          {routeSteps.map((step, index) => (
            <Box component="article" key={step.title} sx={{ minHeight: { xs: 170, md: 190, lg: 220 }, position: "relative", p: 3, border: { xs: "1px solid rgba(255,255,255,.16)", lg: "none" }, borderLeft: { lg: "1px solid rgba(255,255,255,.18)" }, borderRight: { lg: index === routeSteps.length - 1 ? "1px solid rgba(255,255,255,.18)" : "none" }, borderRadius: { xs: 2.25, lg: 0 }, bgcolor: { xs: "rgba(255,255,255,.05)", lg: "transparent" }, "&::before": { display: { xs: "none", lg: "block" }, content: '""', width: 13, height: 13, position: "absolute", top: -7, left: 24, border: "3px solid #74317F", borderRadius: "50%", bgcolor: "common.white" } }}>
              <Typography sx={{ display: "block", mb: { xs: 4.25, lg: 6 }, color: "rgba(255,255,255,.45)", fontSize: ".82rem", fontWeight: 700 }}>{String(index + 1).padStart(2, "0")}</Typography>
              <Typography variant="h3" sx={{ mb: 1.25, fontSize: "1rem" }}>{step.title}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,.72)", fontSize: ".86rem", lineHeight: 1.65 }}>{step.text}</Typography>
            </Box>
          ))}
        </Box>
        <Stack alignItems="center" mt={5.25}><ButtonLink to="/servicios" variant="outline">Ver todos nuestros servicios</ButtonLink></Stack>
      </PageContainer>
    </Section>
  );
}
