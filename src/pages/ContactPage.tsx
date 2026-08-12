import PageHero from "../components/common/PageHero";
import PageContainer from "../components/common/PageContainer";
import Section from "../components/common/Section";
import ContactForm from "../components/sections/contact/ContactForm";
import ContactInfoPanel from "../components/sections/contact/ContactInfoPanel";

export default function ContactPage() {
  return (
    <>
      {/* Composición de la página de contacto. */}
      <PageHero sobretitulo="Contacto" titulo="Conversemos" descripcion="Si tienes preguntas, buscas un acompañamiento específico o quieres proponer una colaboración educativa, puedes escribirnos por el medio que te resulte más cómodo." />
      <Section>
        <PageContainer sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: ".9fr 1.1fr" }, gap: { xs: 5.5, md: 8.75 } }}>
          <ContactInfoPanel />
          <ContactForm />
        </PageContainer>
      </Section>
    </>
  );
}
