import SectionHeader from "../components/SectionHeader.jsx";
import { team } from "../data/site.js";

export default function Team() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <span className="eyebrow">L’ÉQUIPE</span>
        <h1>Des mains expertes,<br /><em>des profils à découvrir.</em></h1>
        <p>La structure est prête pour présenter les coiffeuses et professionnelles du salon, leurs spécialités et leurs disponibilités.</p>
      </div>

      <SectionHeader eyebrow="PROFILS" title="Équipe à confirmer" />

      <div className="team-grid">
        {team.map((member) => (
          <article className="team-card" key={member.id}>
            <div className="portrait-placeholder" aria-hidden="true"><span>GH</span></div>
            <div>
              <span className="eyebrow">PROFIL EN PRÉPARATION</span>
              <h2>{member.name}</h2>
              <p>{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
