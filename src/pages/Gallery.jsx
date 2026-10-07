import ButtonLink from "../components/ButtonLink.jsx";

const cards = [
  ["01", "Le geste", "Placeholders visuels en attente des photos officielles du salon."],
  ["02", "La couleur", "La galerie accueillera les réalisations validées par Golden Hair."],
  ["03", "La transformation", "Avant / après et détails beauté pourront être ajoutés ici."],
  ["04", "L’espace", "L’intérieur du salon sera présenté dès réception d’images utilisables."],
];

export default function Gallery() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <span className="eyebrow">GALERIE</span>
        <h1>Le style en<br /><em>images.</em></h1>
        <p>Aucune photo tierce n’est utilisée comme si elle appartenait au salon. La galerie attend les visuels officiels et leur autorisation d’usage.</p>
      </div>

      <div className="gallery-grid">
        {cards.map(([number, title, copy], index) => (
          <article className={`gallery-card gallery-card-${index + 1}`} key={number}>
            <span>{number}</span>
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="content-callout">
        <div>
          <span className="eyebrow">PRÊTE À COMMENCER ?</span>
          <h2>Votre prochain look vous attend.</h2>
        </div>
        <ButtonLink to="/booking">Réserver</ButtonLink>
      </div>
    </section>
  );
}
