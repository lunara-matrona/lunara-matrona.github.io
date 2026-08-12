import { Box } from "@mui/material";
import { services } from "../../../data/services";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "../../ui/ServiceCard";

export default function ServicesCatalog() {
  return (
    <Section>
      {/* Catálogo completo de servicios disponibles. */}
      <PageContainer>
        <SectionHeading eyebrow="Elige tu etapa" title="Atención cercana para necesidades reales" description="Cada servicio puede adaptarse a tus preguntas, antecedentes y objetivos. Revisa la información general y escríbenos para orientar tu caso." centered />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 3.5 }}>
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </Box>
      </PageContainer>
    </Section>
  );
}
