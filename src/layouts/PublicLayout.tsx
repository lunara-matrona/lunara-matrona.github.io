import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function PublicLayout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Estructura general compartida por todas las páginas públicas. */}
      <ScrollToTop />
      <Header />
      <Box component="main" sx={{ flex: 1 }}><Outlet /></Box>
      <Footer />
    </Box>
  );
}
