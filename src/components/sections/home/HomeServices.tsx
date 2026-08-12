import { Box } from "@mui/material";
import { servicios } from "../../../data/servicios";
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
          sobretitulo="Servicios"
          titulo="Acompañamiento para distintos momentos de tu vida"
          descripcion="Elige la etapa que más se acerca a lo que estás viviendo y conoce las formas en que podemos acompañarte."
          centrado
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }, gap: 3.5 }}>
          {servicios.map((servicio, indice) => (
            <Box key={servicio.id} sx={{ gridColumn: { lg: indice < 3 ? "span 2" : indice === 3 ? "2 / span 2" : "4 / span 2" } }}>
              <ServiceCard servicio={servicio} />
            </Box>
          ))}
        </Box>
      </PageContainer>
    </Section>
  );
}
