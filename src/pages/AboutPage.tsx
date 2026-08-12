import { assets } from "../assets";
import PageHero from "../components/common/PageHero";
import AboutPrinciples from "../components/sections/about/AboutPrinciples";
import AboutProfessionalProfile from "../components/sections/about/AboutProfessionalProfile";
import AboutServicesCta from "../components/sections/about/AboutServicesCta";
import AboutStory from "../components/sections/about/AboutStory";

export default function AboutPage() {
  return (
    <>
      {/* Composición de la página Nosotros. */}
      <PageHero eyebrow="Nosotros" title="Más que una consulta: un espacio para sentirte acompañada" description="Lunara nace para acercar la educación y el cuidado en salud sexual y reproductiva a cada etapa de la vida." backgroundImage={assets.home.hero} />
      <AboutProfessionalProfile />
      <AboutStory />
      <AboutPrinciples />
      <AboutServicesCta />
    </>
  );
}
