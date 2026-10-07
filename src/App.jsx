import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { salon, publicServices } from "./data/site.js";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import Team from "./pages/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import Offers from "./pages/Offers.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function Shell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Golden Hair — accueil">
          <span className="brand-mark">GH</span>
          <span className="brand-copy">
            <strong>GOLDEN HAIR</strong>
            <small>POUR FEMME · OUJDA</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Fermer" : "Menu"}</span>
          <span aria-hidden="true">↗</span>
        </button>

        <nav id="main-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          {[
            ["/services", "Services"],
            ["/team", "L'équipe"],
            ["/gallery", "Galerie"],
            ["/offers", "Offres"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link className={location.pathname === href ? "active" : ""} key={href} to={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <Link className="nav-cta" to="/booking" onClick={closeMenu}>
            Réserver
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div>
          <span className="eyebrow">Golden Hair</span>
          <p>Salon pour femme à Oujda.</p>
        </div>
        <div className="footer-links">
          <Link to="/booking">Prendre rendez-vous</Link>
          <Link to="/services">Voir les services</Link>
          <a href={salon.mapsUrl} target="_blank" rel="noreferrer">Itinéraire</a>
        </div>
        <small>Les informations commerciales détaillées sont publiées uniquement lorsqu'elles sont vérifiées.</small>
      </footer>
    </div>
  );
}

export default function App() {
  return <Shell />;
}
