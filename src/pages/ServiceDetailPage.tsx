import { Navigate, useParams } from "react-router-dom";
import ServiceContactCta from "../components/sections/services/ServiceContactCta";
import ServiceDetailHero from "../components/sections/services/ServiceDetailHero";
import ServiceFaq from "../components/sections/services/ServiceFaq";
import ServiceDetailSkeleton from "../components/sections/services/ServiceDetailSkeleton";
import ServicePrestations from "../components/sections/services/ServicePrestations";
import { useContenido } from "../hooks/useContenido";

export default function ServiceDetailPage() {
  const { contenido, cargando } = useContenido();
  const { servicios } = contenido;
  const { segmentoUrl } = useParams();
  const servicio = servicios.find((elemento) => elemento.segmentoUrl === segmentoUrl);

  if (cargando) return <ServiceDetailSkeleton />;
  if (!servicio) return <Navigate to="/servicios" replace />;

  return (
    <>
      {/* Composición de la ficha detallada de un servicio. */}
      <ServiceDetailHero servicio={servicio} />
      <ServicePrestations servicio={servicio} />
      <ServiceFaq servicio={servicio} />
      <ServiceContactCta />
    </>
  );
}
