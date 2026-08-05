import { BookOpenCheck, HeartHandshake, Home, ShieldCheck } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeading from "../components/ui/SectionHeading";
import { whatsappBookingUrl } from "../data/site";
import { assetPath } from "../utils/assetPath";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero--about">
        <div className="page-width page-hero__content">
          <p>Nosotros</p>
          <h1>Más que una consulta: un espacio para sentirte acompañada</h1>
          <span>Lunara nace para acercar la educación y el cuidado en salud sexual y reproductiva a cada etapa de la vida.</span>
        </div>
      </section>

      <section className="section about-story">
        <div className="page-width about-story__grid">
          <div className="about-story__image-wrap">
            <img src={assetPath("images/home/hero-lunara.png")} alt="Instancia educativa de acompañamiento en salud sexual y reproductiva" />
            <div className="about-story__badge">Cercanía · educación · respeto</div>
          </div>
          <div className="about-story__content">
            <SectionHeading eyebrow="Nuestra esencia" title="Tu experiencia también importa" />
            <p>
              El cuidado en salud no debería sentirse frío, apresurado ni difícil de comprender. En Lunara buscamos que cada atención sea una conversación clara, en la que puedas expresar lo que te preocupa, hacer preguntas y comprender tus alternativas.
            </p>
            <p>
              El acompañamiento se adapta a tu etapa de vida, contexto familiar y necesidades particulares, manteniendo siempre una mirada preventiva, educativa y respetuosa.
            </p>
            <ButtonLink to={whatsappBookingUrl} external variant="solid">
              Consultar disponibilidad
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="Nuestro enfoque"
            title="Principios que orientan cada atención"
            description="Una forma de acompañar que prioriza la confianza, la información y la participación activa de cada persona."
            centered
            light
          />
          <div className="philosophy-grid">
            <article>
              <ShieldCheck aria-hidden="true" />
              <h2>Respeto y confidencialidad</h2>
              <p>Cada experiencia es escuchada sin juicios, cuidando tu privacidad y tus tiempos.</p>
            </article>
            <article>
              <BookOpenCheck aria-hidden="true" />
              <h2>Educación para decidir</h2>
              <p>La información se explica con lenguaje sencillo para que puedas participar en tus decisiones.</p>
            </article>
            <article>
              <HeartHandshake aria-hidden="true" />
              <h2>Acompañamiento cercano</h2>
              <p>La atención se construye contigo, considerando tus necesidades y red de apoyo.</p>
            </article>
            <article>
              <Home aria-hidden="true" />
              <h2>Comodidad y flexibilidad</h2>
              <p>La modalidad a domicilio permite crear un entorno privado, conocido y tranquilo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="page-width about-cta__card">
          <img src={assetPath("images/brand/lunara-symbol-white.png")} alt="" />
          <div>
            <p>Conoce la ruta de acompañamiento</p>
            <h2>Encuentra el servicio que se adapta a tu etapa</h2>
          </div>
          <ButtonLink to="/servicios" variant="light">
            Ver servicios
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
