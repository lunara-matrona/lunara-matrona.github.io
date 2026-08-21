import { recursos } from "../assets";
import PageHero from "../components/common/PageHero";
import AboutPrinciples from "../components/sections/about/AboutPrinciples";
import AboutProfessionalProfile from "../components/sections/about/AboutProfessionalProfile";
import AboutServicesCta from "../components/sections/about/AboutServicesCta";
import AboutStory from "../components/sections/about/AboutStory";

export default function AboutPage() {
  return (
    <>
      {/* Composición de la página Sobre mi. */}
      <PageHero sobretitulo="Sobre Mi" titulo="Más que una consulta: un espacio para sentirte acompañada" descripcion="Lunara nace para acercar la educación y el cuidado en salud sexual y reproductiva a cada etapa de la vida." imagenFondo={recursos.inicio.portada} />
      <AboutProfessionalProfile />
      {/* <AboutStory /> */}
      <AboutPrinciples />
      <AboutServicesCta />
    </>
  );
}
