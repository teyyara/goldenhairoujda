import ButtonLink from "../components/ButtonLink.jsx";

export default function NotFound() {
  return (
    <section className="empty-page">
      <span className="eyebrow">404</span>
      <h1>Cette page n’existe pas.</h1>
      <ButtonLink to="/">Retour à Golden Hair</ButtonLink>
    </section>
  );
}
