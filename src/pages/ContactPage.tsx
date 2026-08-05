import { Clock3, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactInfo } from "../data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Consulta desde el sitio web");
    const message = String(form.get("message") ?? "");
    const body = `Hola Lunara, mi nombre es ${name}. Mi correo de contacto es ${email}.\n\n${message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main>
      <section className="page-hero page-hero--contact">
        <div className="page-width page-hero__content">
          <p>Contacto</p>
          <h1>Conversemos</h1>
          <span>
            Si tienes preguntas, buscas un acompañamiento específico o quieres proponer una colaboración educativa, puedes escribirnos por el medio que te resulte más cómodo.
          </span>
        </div>
      </section>

      <section className="section contact-section">
        <div className="page-width contact-grid">
          <div className="contact-info-panel">
            <p className="detail-eyebrow">Canales de contacto</p>
            <h2>Estamos para orientarte</h2>
            <p>
              La atención funciona con reserva previa. Para urgencias o síntomas graves, contacta al servicio de urgencia correspondiente.
            </p>

            <div className="contact-list">
              <a href={`mailto:${contactInfo.email}`}>
                <span className="contact-list__icon"><Mail aria-hidden="true" /></span>
                <span><small>Correo</small><strong>{contactInfo.email}</strong></span>
              </a>
              <a href={`https://wa.me/${contactInfo.phoneValue}`} target="_blank" rel="noreferrer">
                <span className="contact-list__icon"><MessageCircle aria-hidden="true" /></span>
                <span><small>WhatsApp</small><strong>{contactInfo.phoneDisplay}</strong></span>
              </a>
              <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer">
                <span className="contact-list__icon"><Instagram aria-hidden="true" /></span>
                <span><small>Instagram</small><strong>@{contactInfo.instagram}</strong></span>
              </a>
              <div>
                <span className="contact-list__icon"><MapPin aria-hidden="true" /></span>
                <span><small>Cobertura</small><strong>{contactInfo.city}</strong></span>
              </div>
              <div>
                <span className="contact-list__icon"><Clock3 aria-hidden="true" /></span>
                <span><small>Horario</small><strong>{contactInfo.schedule}</strong></span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="detail-eyebrow">Escríbenos</p>
            <h2>Envía una consulta</h2>
            <div className="form-grid">
              <label>
                Nombre
                <input name="name" type="text" required placeholder="Tu nombre" />
              </label>
              <label>
                Correo
                <input name="email" type="email" required placeholder="tu@email.com" />
              </label>
              <label className="form-grid__full">
                Motivo
                <select name="subject" defaultValue="Consulta sobre servicios">
                  <option>Consulta sobre servicios</option>
                  <option>Solicitud de taller grupal</option>
                  <option>Colaboración o actividad educativa</option>
                  <option>Otra consulta</option>
                </select>
              </label>
              <label className="form-grid__full">
                Mensaje
                <textarea name="message" rows={6} required placeholder="Cuéntanos de manera general en qué podemos orientarte." />
              </label>
            </div>
            <p className="form-note">Evita incluir diagnósticos, documentos clínicos u otros datos sensibles en este formulario.</p>
            <button className="button button--solid" type="submit">Preparar correo</button>
            {sent && <p className="form-success">Se abrió tu aplicación de correo con el mensaje preparado.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
