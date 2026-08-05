import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Navigate, Link, useParams } from "react-router-dom";
import ButtonLink from "../components/ui/ButtonLink";
import { services } from "../data/services";
import { whatsappBookingUrl } from "../data/site";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <main>
      <section className="service-detail-hero">
        <div className="page-width service-detail-hero__grid">
          <div className="service-detail-hero__content">
            <Link className="back-link" to="/servicios">
              <ArrowLeft size={18} aria-hidden="true" /> Volver a servicios
            </Link>
            <p className="service-detail-hero__eyebrow">Acompañamiento Lunara</p>
            <h1>{service.title}</h1>
            {service.ageRange && <span className="service-detail-hero__age">{service.ageRange}</span>}
            <p>{service.introduction}</p>
            <ButtonLink to={whatsappBookingUrl} external variant="light">
              Consultar por este servicio <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="service-detail-hero__image-wrap">
            <img src={service.image} alt={`Servicio de ${service.title}`} />
            <div className="service-detail-hero__feature">
              <span>Contenido destacado</span>
              <strong>{service.featuredTopic}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-topics-section">
        <div className="page-width service-detail-grid">
          <div>
            <p className="detail-eyebrow">Temas que podemos abordar</p>
            <h2>Un acompañamiento construido a partir de tus preguntas</h2>
            <div className="topic-list">
              {service.topics.map((topic) => (
                <div key={topic} className="topic-list__item">
                  <Check size={20} aria-hidden="true" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="ideal-card">
            <span>¿Para quién está pensado?</span>
            <p>{service.idealFor}</p>
          </aside>
        </div>
      </section>

      <section className="section service-includes-section">
        <div className="page-width">
          <p className="detail-eyebrow">Cómo es la atención</p>
          <h2>¿Qué incluye el acompañamiento?</h2>
          <div className="includes-grid">
            {service.includes.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="page-width faq-section__grid">
          <div>
            <p className="detail-eyebrow">Preguntas frecuentes</p>
            <h2>Información antes de agendar</h2>
            <p>Estas respuestas entregan una orientación general. La recomendación final depende de cada situación.</p>
          </div>
          <div className="faq-list">
            {service.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-contact-banner">
        <div className="page-width service-contact-banner__card">
          <MessageCircle aria-hidden="true" />
          <div>
            <p>¿No estás segura de qué servicio elegir?</p>
            <h2>Escríbenos y te orientamos</h2>
          </div>
          <ButtonLink to={whatsappBookingUrl} external variant="light">
            Abrir WhatsApp
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
