import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";

const required = [
  "package.json",
  "index.html",
  "vite.config.js",
  "src/main.jsx",
  "src/App.jsx",
  "src/styles.css",
  "src/data/site.js",
  "src/lib/booking.js",
];

for (const file of required) {
  await access(file);
}

const app = await readFile("src/App.jsx", "utf8");
const booking = await readFile("src/pages/Booking.jsx", "utf8");

if (!app.includes("/booking")) throw new Error("Booking route missing.");
if (!booking.includes("validateBooking")) throw new Error("Booking validation missing.");

console.log(`Project structure check passed: ${required.length} required files present.`);
