import { Box } from "@mui/material";
import { useContenido } from "../../../hooks/useContenido";
import PageContainer from "../../common/PageContainer";
import Section from "../../common/Section";
import EsqueletoSeccion from "../../ui/EsqueletoSeccion";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "../../ui/ServiceCard";

export default function ServicesCatalog() {
  const { contenido, cargando } = useContenido();
  const { servicios } = contenido;

  if (cargando) {
    return (
      <Section>
        <PageContainer>
          <EsqueletoSeccion cantidad={5} columnas={{ xs: 1, md: 2, lg: 3 }} alturaTarjeta={340} />
        </PageContainer>
      </Section>
    );
  }
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
