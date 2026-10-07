export function createSlots({ date, startHour = 9, endHour = 19, stepMinutes = 30, unavailable = [] }) {
  const slots = [];
  const blocked = new Set(unavailable);

  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += stepMinutes) {
    const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
    const mins = String(minutes % 60).padStart(2, "0");
    const time = `${hours}:${mins}`;
    slots.push({
      id: `${date}-${time}`,
      time,
      available: !blocked.has(time),
    });
  }

  return slots;
}

export function validateBooking(values) {
  const errors = {};

  if (!values.serviceId) errors.serviceId = "Choisissez une prestation.";
  if (!values.date) errors.date = "Choisissez une date.";
  if (!values.time) errors.time = "Choisissez une heure.";
  if (!values.name.trim()) errors.name = "Indiquez votre nom.";
  if (!values.phone.trim()) errors.phone = "Indiquez votre numéro de téléphone.";

  if (values.phone.trim() && !/[0-9+\s().-]{8,}/.test(values.phone.trim())) {
    errors.phone = "Vérifiez le numéro indiqué.";
  }

  return errors;
}
