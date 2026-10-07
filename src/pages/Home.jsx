import ButtonLink from "../components/ButtonLink.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { publicServices, salon } from "../data/site.js";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">BEAUTÉ · COIFFURE · OUJDA</span>
          <h1>
            Votre beauté,
            <em> votre moment.</em>
          </h1>
          <p>
            Une expérience féminine pensée autour de votre style, de votre confiance et du plaisir de prendre du temps pour vous.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/booking">Prendre rendez-vous</ButtonLink>
            <ButtonLink to="/services" variant="ghost">Découvrir les services</ButtonLink>
          </div>
          <div className="hero-meta">
            <span>{salon.areaAddress}</span>
            <span className="meta-dot" aria-hidden="true" />
            <span>Réservation en ligne · en préparation</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Illustration décorative Golden Hair">
          <div className="halo" />
          <div className="silhouette silhouette-back" />
          <div className="silhouette silhouette-front" />
          <div className="art-caption">
            <span>01</span>
            <span>GOLDEN HAIR</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div><strong>5.0</strong><span>Note publique actuelle</span></div>
        <div><strong>120</strong><span>Avis recensés</span></div>
        <div><strong>Oujda</strong><span>شارع الأمم المتحدة</span></div>
      </section>

      <section className="content-section">
        <SectionHeader eyebrow="L’ART DU STYLE" title="Des prestations choisies avec intention">
          <ButtonLink to="/services" variant="text">Voir tout <span>→</span></ButtonLink>
        </SectionHeader>
        <div className="service-grid">
          {publicServices.slice(0, 4).map((service, index) => (
            <article className="service-card" key={service.id}>
              <span className="service-index">0{index + 1}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-foot">
                <span>{service.pricing}</span>
                <span>{service.duration ?? "Durée à confirmer"}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-panel feature-panel-dark">
          <span className="eyebrow">L’EXPÉRIENCE</span>
          <h2>Un espace où le détail compte.</h2>
          <p>
            L’interface est conçue comme un prolongement du salon : claire, douce, élégante et rapide à utiliser sur téléphone.
          </p>
          <ButtonLink to="/booking" variant="light">Choisir mon rendez-vous</ButtonLink>
        </div>
        <div className="feature-panel feature-panel-light">
          <span className="eyebrow">PROCHAINEMENT</span>
          <h2>Galerie, offres et équipe.</h2>
          <p>
            Les modules sont prêts à recevoir les contenus officiels du salon sans modifier l’expérience de réservation.
          </p>
          <ButtonLink to="/contact" variant="ghost">Nous trouver</ButtonLink>
        </div>
      </section>
    </>
  );
}
