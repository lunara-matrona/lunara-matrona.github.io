import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceCategory } from "../../types/content";

interface ServiceCardProps {
  service: ServiceCategory;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <Link to={`/servicios/${service.slug}`} className="service-card__image-link" aria-label={`Ver ${service.title}`}>
        <img src={service.image} alt="" className="service-card__image" />
      </Link>
      <div className="service-card__body">
        <div>
          <h3>{service.title}</h3>
          {service.ageRange && <p className="service-card__age">{service.ageRange}</p>}
        </div>
        <p>{service.shortDescription}</p>
        <Link className="service-card__link" to={`/servicios/${service.slug}`}>
          Conocer servicio <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
