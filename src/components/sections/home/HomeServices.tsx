import { Box } from "@mui/material";
import { services } from "../../../data/services";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "../../ui/ServiceCard";

export default function HomeServices() {
  return (
    <Section>
      {/* Catálogo resumido de servicios de la página de inicio. */}
      <PageContainer>
        <SectionHeading
          eyebrow="Servicios"
          title="Acompañamiento para distintos momentos de tu vida"
          description="Elige la etapa que más se acerca a lo que estás viviendo y conoce las formas en que podemos acompañarte."
          centered
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }, gap: 3.5 }}>
          {services.map((service, index) => (
            <Box key={service.id} sx={{ gridColumn: { lg: index < 3 ? "span 2" : index === 3 ? "2 / span 2" : "4 / span 2" } }}>
              <ServiceCard service={service} />
            </Box>
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
