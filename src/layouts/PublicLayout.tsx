import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function PublicLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
