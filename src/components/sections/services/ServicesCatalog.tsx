import { Box } from "@mui/material";
import { servicios } from "../../../data/servicios";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "../../ui/ServiceCard";

export default function ServicesCatalog() {
  return (
    <Section>
      {/* Catálogo completo de servicios disponibles. */}
      <PageContainer>
        <SectionHeading sobretitulo="Elige tu etapa" titulo="Atención cercana para necesidades reales" descripcion="Cada servicio puede adaptarse a tus preguntas, antecedentes y objetivos. Revisa la información general y escríbenos para orientar tu caso." centrado />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 3.5 }}>
          {servicios.map((servicio) => <ServiceCard key={servicio.id} servicio={servicio} />)}
        </Box>
      </PageContainer>
    </Section>
  );
}
