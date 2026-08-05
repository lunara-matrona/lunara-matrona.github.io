import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation, whatsappBookingUrl } from "../../data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__content page-width">
        <Link className="site-header__brand" to="/" onClick={() => setIsOpen(false)}>
          <img src="/images/brand/lunara-logo-white.png" alt="Lunara, bienestar sexual y reproductivo" />
        </Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav className={`site-header__nav ${isOpen ? "site-header__nav--open" : ""}`} aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }: { isActive: boolean }) => `site-header__link ${isActive ? "site-header__link--active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="site-header__booking"
            href={whatsappBookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
