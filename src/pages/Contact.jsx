import ButtonLink from "../components/ButtonLink.jsx";
import { salon, openingHours } from "../data/site.js";

export default function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="page-intro">
        <span className="eyebrow">CONTACT & ACCÈS</span>
        <h1>On se retrouve<br /><em>à Oujda.</em></h1>
        <p>La fiche publique consultée situe le salon شارع الأمم المتحدة, Oujda. Les horaires et le numéro à publier restent à confirmer.</p>
      </div>

      <div className="contact-grid">
        <article className="contact-card contact-card-dark">
          <span className="eyebrow">ADRESSE</span>
          <h2>{salon.areaAddress}</h2>
          <ButtonLink to={salon.mapsUrl} variant="light" external>Ouvrir l’itinéraire</ButtonLink>
        </article>

        <article className="contact-card">
          <span className="eyebrow">HORAIRES</span>
          <div className="hours-list">
            {openingHours.map((item) => (
              <div key={item.day}><span>{item.day}</span><strong>{item.value ?? "À confirmer"}</strong></div>
            ))}
          </div>
        </article>
      </div>

      <div className="contact-note">
        <span className="eyebrow">TÉLÉPHONE / WHATSAPP</span>
        <p>Aucun numéro n’est affiché comme officiel tant que les sources publiques ne concordent pas et que le salon n’a pas fourni sa destination de contact validée.</p>
      </div>
    </section>
  );
}
