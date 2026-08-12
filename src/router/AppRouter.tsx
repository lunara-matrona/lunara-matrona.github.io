import { HashRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import ServicesPage from "../pages/ServicesPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:segmentoUrl" element={<ServiceDetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
