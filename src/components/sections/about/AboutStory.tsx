import { Box, Stack, Typography } from "@mui/material";
import { recursos } from "../../../assets";
import { useContenido } from "../../../hooks/useContenido";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import ButtonLink from "../../ui/ButtonLink";
import SectionHeading from "../../ui/SectionHeading";

export default function AboutStory() {
  const { contenido } = useContenido();
  const { urlReservaWhatsapp } = contenido;
  return (
    <Section>
      {/* Historia y esencia de Lunara dentro de la página Nosotros. */}
      <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, alignItems: "center", gap: { xs: 5.5, md: 8.75 } }}>
        <Box sx={{ position: "relative" }}>
          <Box component="img" src={recursos.inicio.portada} alt="Instancia educativa de acompañamiento en salud sexual y reproductiva" sx={{ width: "100%", minHeight: { xs: 340, sm: 420, md: 560 }, objectFit: "cover", borderRadius: 4, boxShadow: "0 22px 55px rgba(75,34,82,.16)" }} />
          <Typography sx={{ position: "absolute", left: { xs: 1.75, sm: "auto" }, right: { xs: 1.75, sm: 2.25 }, bottom: { xs: 1.75, sm: 2.25 }, px: 2.5, py: 1.5, borderRadius: 999, bgcolor: "rgba(255,255,255,.92)", color: "primary.dark", fontSize: ".8rem", fontWeight: 800, textAlign: "center", boxShadow: "0 12px 30px rgba(75,34,82,.12)" }}>
            Cercanía · educación · respeto
          </Typography>
        </Box>
        <Stack alignItems="flex-start">
          <SectionHeading sobretitulo="Nuestra esencia" titulo="Tu experiencia también importa" />
          <Typography sx={{ mb: 2, color: "text.secondary", lineHeight: 1.85 }}>
            El cuidado en salud no debería sentirse frío, apresurado ni difícil de comprender. En Lunara buscamos que cada atención sea una conversación clara, en la que puedas expresar lo que te preocupa, hacer preguntas y comprender tus alternativas.
          </Typography>
          <Typography sx={{ mb: 4, color: "text.secondary", lineHeight: 1.85 }}>
            El acompañamiento se adapta a tu etapa de vida, contexto familiar y necesidades particulares, manteniendo siempre una mirada preventiva, educativa y respetuosa.
          </Typography>
          <ButtonLink destino={urlReservaWhatsapp} externo variante="solido">Consultar disponibilidad</ButtonLink>
        </Stack>
      </PageContainer>
    </Section>
  );
}
