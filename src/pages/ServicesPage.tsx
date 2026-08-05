import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-hero--simple">
        <div className="page-width page-hero__content page-hero__content--centered">
          <p>Servicios</p>
          <h1>Nuestros servicios</h1>
          <span>Conoce las formas en que podemos acompañarte a lo largo de todo el ciclo vital individual y familiar.</span>
        </div>
      </section>

      <section className="section services-page-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="Elige tu etapa"
            title="Atención cercana para necesidades reales"
            description="Cada servicio puede adaptarse a tus preguntas, antecedentes y objetivos. Revisa la información general y escríbenos para orientar tu caso."
            centered
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
