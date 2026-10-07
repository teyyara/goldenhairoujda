# Keyphrase Research Dossier

**Keyphrase:** make a website for Salon Golden Hair pour Femme Oujda — Online Beauty Booking System  
**Research date:** 2026-10-07  
**Research state:** COMPLETE for implementation planning; material business-content gaps remain.

## Normalized interpretation
Build a mobile-first website for a specific women's beauty salon in Oujda with a real online appointment workflow. The business appears established and highly reviewed, while public service/pricing data is incomplete or inconsistent. The implementation must separate verified facts from client-approved content.

## Entity evidence
**FACT / high confidence:** Current local-business data identifies Salon golden hair pour femme at شارع الأمم المتحدة, Oujda, Morocco, with 5.0/5 and 120 reviews at retrieval time; it shows phone +212 628478924 and hours roughly 09:30–20:00/20:30 depending on weekday.

**FACT / medium confidence:** Zafaf lists the salon at شارع الأمم المتحدة and describes women’s hair services including dégradé, brushing, coloration, and extensions; it also describes bridal/guest styling and WhatsApp quote requests. It shows 6 photos and 114 Google reviews.

**CONFLICT:** Secondary sources disagree on phone numbers, review counts, and operating hours. These must not be copied into approved site content without client verification.

**FACT / medium confidence:** Public directory data associates TikTok handle @goldenhair662 with the salon.

**DISCOVERY CLUE only:** Another directory lists hair extensions, balayage, children's haircuts, curly haircuts, braiding, and coloring. This is not an approved catalog.

## Market / UX
A current Oujda salon directory markets 24/7 online booking, verified reviews, and immediate confirmation. This supports low-friction online booking as a locally relevant UX expectation.

## Technology evidence
Google Calendar appointment schedules can expose booking pages, block busy times, and be shared/embedded; richer features can be paid.
Google Apps Script web apps can expose doGet/doPost endpoints and execute under the deploying user's identity.
Google Maps Embed is described as no-charge for requests but requires an API key and billing account, so it is not a required dependency for this zero-paid project.
Cloudflare Pages Free currently allows up to 500 builds/month and 100 custom domains per project.
Cloudflare Workers Free currently allows 100,000 requests/day.
Cloudflare D1 Free currently provides 5 million row reads/day, 100,000 row writes/day, and 5 GB total storage; free daily limits are enforced.

## Architecture inference
A custom booking domain on Workers + D1 provides tighter control of service duration, staff assignment, availability and conflict prevention than a generic single-calendar embed. React + Vite is an appropriate lightweight interactive frontend baseline.

## Risks
Business-content drift; double booking; optimistic false confirmation; timezone errors; staff/service mismatch; abuse/rate limiting; unnecessary privacy collection; image rights.

## Content gaps
Approved service catalog, prices, durations, staff roster/photos, exact hours/exceptions, verified phone/WhatsApp, salon-owned gallery, cancellation/no-show policy, production datastore/deployment provisioning.

## Saturation
Multiple business queries, local directories, business listing data, image discovery, booking-market evidence, and official platform documentation were checked. Further searches mainly returned duplicates or unrelated salons.
