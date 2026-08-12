import { Navigate, useParams } from "react-router-dom";
import ServiceContactCta from "../components/sections/services/ServiceContactCta";
import ServiceDetailHero from "../components/sections/services/ServiceDetailHero";
import ServiceFaq from "../components/sections/services/ServiceFaq";
import ServicePrestations from "../components/sections/services/ServicePrestations";
import { services } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/servicios" replace />;

  return (
    <>
      {/* Composición de la ficha detallada de un servicio. */}
      <ServiceDetailHero service={service} />
      <ServicePrestations service={service} />
      <ServiceFaq service={service} />
      <ServiceContactCta />
    </>
  );
}
