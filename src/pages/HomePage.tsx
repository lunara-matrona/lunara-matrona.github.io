import MainLayout from "../layout/MainLayout";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServiceSection";
import { usePortfolio } from "../hooks/userPortfolio";
import { Alert, CircularProgress } from "@mui/material";
import ReviewSection from "../sections/ReviewSection";

export default function HomePage() {
  const { portfolio, loading, error } = usePortfolio();
  
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    )
  }

  if (!portfolio) {
    return null;
  }
  return (
    <MainLayout>

      <HeroSection profile={portfolio.perfil} />

      <AboutSection profile={portfolio.perfil} />

      <ServicesSection />

      <ReviewSection reviews={portfolio.resenas} />

    </MainLayout>
  );
}