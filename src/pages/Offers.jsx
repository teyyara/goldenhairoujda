import ButtonLink from "../components/ButtonLink.jsx";

export default function Offers() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <span className="eyebrow">OFFRES</span>
        <h1>Des attentions<br /><em>quand elles sont là.</em></h1>
        <p>La page est prête pour accueillir les promotions officielles, leurs conditions et leurs dates de validité.</p>
      </div>

      <article className="offer-empty">
        <span className="eyebrow">PROCHAINEMENT</span>
        <h2>Aucune offre publiée pour le moment.</h2>
        <p>Les offres seront ajoutées uniquement avec un intitulé, un avantage, une période et des conditions validés par le salon.</p>
        <ButtonLink to="/booking">Prendre rendez-vous</ButtonLink>
      </article>
    </section>
  );
}
