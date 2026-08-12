import HomeAboutPreview from "../components/sections/home/HomeAboutPreview";
import HomeBookingCta from "../components/sections/home/HomeBookingCta";
import HomeHero from "../components/sections/home/HomeHero";
import HomeJourney from "../components/sections/home/HomeJourney";
import HomeServices from "../components/sections/home/HomeServices";
import HomeTestimonials from "../components/sections/home/HomeTestimonials";
import HomeValues from "../components/sections/home/HomeValues";

export default function HomePage() {
  return (
    <>
      {/* Composición de las secciones de la página de inicio. */}
      <HomeHero />
      <HomeAboutPreview />
      <HomeJourney />
      <HomeServices />
      <HomeValues />
      <HomeTestimonials />
      <HomeBookingCta />
    </>
  );
}
