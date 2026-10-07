import { useMemo, useState } from "react";
import ButtonLink from "../components/ButtonLink.jsx";
import { publicServices } from "../data/site.js";
import { createSlots, validateBooking } from "../lib/booking.js";

function formatDate(date) {
  return new Intl.DateTimeFormat("fr-MA", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(`${date}T12:00:00`));
}

function getUpcomingDates(count = 7) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < count; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().slice(0, 10));
  }

  return dates;
}

export default function Booking() {
  const dates = useMemo(() => getUpcomingDates(), []);
  const [values, setValues] = useState({
    serviceId: "",
    date: dates[0],
    time: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const slots = useMemo(() => {
    const blocked = values.date.endsWith("-07") ? ["11:00", "15:30", "18:00"] : ["10:30", "14:00"];
    return createSlots({ date: values.date, unavailable: blocked });
  }, [values.date]);

  const setField = (field, value) => {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="booking-page booking-success">
        <div className="success-card">
          <span className="success-icon" aria-hidden="true">✓</span>
          <span className="eyebrow">DEMANDE ENREGISTRÉE</span>
          <h1>Votre créneau est prêt<br /><em>à être confirmé.</em></h1>
          <p>
            Votre demande de rendez-vous pour <strong>{formatDate(values.date)}</strong> à <strong>{values.time}</strong> a été préparée.
            Le backend de réservation réel sera connecté après provisionnement de l’agenda et des règles du salon.
          </p>
          <div className="summary-grid">
            <div><span>Prestation</span><strong>{publicServices.find((s) => s.id === values.serviceId)?.name}</strong></div>
            <div><span>Nom</span><strong>{values.name}</strong></div>
            <div><span>Téléphone</span><strong>{values.phone}</strong></div>
            <div><span>Créneau</span><strong>{values.time}</strong></div>
          </div>
          <ButtonLink to="/">Retour à l’accueil</ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-page">
      <div className="page-intro booking-intro">
        <span className="eyebrow">RENDEZ-VOUS</span>
        <h1>Votre prochain<br /><em>moment commence ici.</em></h1>
        <p>Choisissez une prestation, une date et un créneau. Cette première version valide l’expérience et les états de réservation ; la disponibilité réelle sera branchée au planning du salon avant mise en production.</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>01 · Prestation</legend>
          <div className="booking-options">
            {publicServices.map((service) => (
              <label key={service.id} className={`choice-card ${values.serviceId === service.id ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={values.serviceId === service.id}
                  onChange={(event) => setField("serviceId", event.target.value)}
                />
                <span>
                  <strong>{service.name}</strong>
                  <small>{service.pricing} · {service.duration ?? "durée à confirmer"}</small>
                </span>
                <b aria-hidden="true">+</b>
              </label>
            ))}
          </div>
          {errors.serviceId ? <p className="form-error" role="alert">{errors.serviceId}</p> : null}
        </fieldset>

        <fieldset>
          <legend>02 · Date & heure</legend>
          <div className="date-scroller" aria-label="Dates disponibles">
            {dates.map((date) => (
              <button key={date} className={values.date === date ? "date-choice selected" : "date-choice"} type="button" onClick={() => setField("date", date)}>
                <span>{new Intl.DateTimeFormat("fr-MA", { weekday: "short" }).format(new Date(`${date}T12:00:00`))}</span>
                <strong>{new Date(`${date}T12:00:00`).getDate()}</strong>
              </button>
            ))}
          </div>
          {errors.date ? <p className="form-error" role="alert">{errors.date}</p> : null}

          <div className="slot-grid">
            {slots.filter((slot) => slot.available).map((slot) => (
              <button
                key={slot.id}
                type="button"
                className={values.time === slot.time ? "slot selected" : "slot"}
                onClick={() => setField("time", slot.time)}
              >
                {slot.time}
              </button>
            ))}
          </div>
          {errors.time ? <p className="form-error" role="alert">{errors.time}</p> : null}
        </fieldset>

        <fieldset>
          <legend>03 · Vos coordonnées</legend>
          <div className="field-grid">
            <label>
              <span>Nom complet</span>
              <input value={values.name} onChange={(event) => setField("name", event.target.value)} autoComplete="name" />
              {errors.name ? <small className="form-error">{errors.name}</small> : null}
            </label>
            <label>
              <span>Téléphone</span>
              <input value={values.phone} onChange={(event) => setField("phone", event.target.value)} inputMode="tel" autoComplete="tel" />
              {errors.phone ? <small className="form-error">{errors.phone}</small> : null}
            </label>
          </div>
        </fieldset>

        <div className="booking-submit">
          <button className="button button-solid" type="submit">Vérifier ma demande <span>→</span></button>
          <p>En production, ce bouton sera suivi d’une validation serveur et d’une confirmation définitive du créneau.</p>
        </div>
      </form>
    </section>
  );
}
