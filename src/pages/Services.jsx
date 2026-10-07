import ButtonLink from "../components/ButtonLink.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { publicServices } from "../data/site.js";

export default function Services() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <span className="eyebrow">SERVICES</span>
        <h1>La beauté,<br /><em>selon votre style.</em></h1>
        <p>Les prestations ci-dessous sont celles retrouvées dans les sources publiques consultées. Les tarifs et durées détaillés restent à confirmer par le salon.</p>
      </div>

      <SectionHeader eyebrow="CATALOGUE" title="Prestations actuellement identifiées" />

      <div className="service-list">
        {publicServices.map((service, index) => (
          <article className="service-row" key={service.id}>
            <span className="service-number">0{index + 1}</span>
            <div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
            <div className="service-detail">
              <strong>{service.pricing}</strong>
              <span>{service.duration ?? "Durée à confirmer"}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="content-callout">
        <div>
          <span className="eyebrow">RÉSERVATION</span>
          <h2>Vous savez déjà ce qu’il vous faut ?</h2>
        </div>
        <ButtonLink to="/booking">Continuer vers la réservation</ButtonLink>
      </div>
    </section>
  );
}
