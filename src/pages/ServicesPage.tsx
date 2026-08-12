import PageHero from "../components/common/PageHero";
import ServicesCatalog from "../components/sections/services/ServicesCatalog";

export default function ServicesPage() {
  return (
    <>
      {/* Composición de la página principal de servicios. */}
      <PageHero sobretitulo="Servicios" titulo="Nuestros servicios" descripcion="Conoce las formas en que podemos acompañarte a lo largo de todo el ciclo vital individual y familiar." centrado />
      <ServicesCatalog />
    </>
  );
}
