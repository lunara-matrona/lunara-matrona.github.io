import { Box } from "@mui/material";
import { testimonios } from "../../../data/testimonios";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";
import TestimonialCard from "../../ui/TestimonialCard";

export default function HomeTestimonials() {
  return (
    <Section sx={{ background: "linear-gradient(145deg, #8D3D9A, #55275D)" }}>
      {/* Testimonios y experiencias mostrados en la página de inicio. */}
      <PageContainer>
        <SectionHeading sobretitulo="Testimonios" titulo="Experiencias de acompañamiento" descripcion="Estos textos son ejemplos de diseño y deben reemplazarse por testimonios reales autorizados antes de publicar el sitio." claro />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {testimonios.map((testimonio) => <TestimonialCard key={testimonio.id} testimonio={testimonio} />)}
        </Box>
      </PageContainer>
    </Section>
  );
}
