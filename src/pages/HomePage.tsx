import MainLayout from "../layout/MainLayout";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServiceSection";

export default function HomePage() {
  return (
    <MainLayout>

      <HeroSection />

      <AboutSection />

      <ServicesSection />

    </MainLayout>
  );
}