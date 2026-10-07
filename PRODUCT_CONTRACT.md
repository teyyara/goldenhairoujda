# Product Contract v1.0

## Objective
Create a trustworthy, mobile-first digital storefront for Salon Golden Hair pour Femme in Oujda that turns discovery into appointment bookings without forcing clients to call first.

## Audience
Women in Oujda looking for hair, beauty, styling, coloring, extensions, bridal, and related salon services.

## Primary user intent
Understand services; see verified price/duration; choose a service; choose an available date/time; submit a booking; receive a clear confirmation; reach the salon through verified contact/location actions.

## Functional requirements
- REQ-001: Clear salon identity and booking CTA.
- REQ-002: Services catalog with verified name, price, duration.
- REQ-003: Staff/team presentation when verified.
- REQ-004: Choose a service and available date/time.
- REQ-005: Reject unavailable/conflicting slots server-side.
- REQ-006: Validate customer fields with accessible errors.
- REQ-007: Successful booking produces confirmation and booking reference.
- REQ-008: WhatsApp/contact action only after target verification.
- REQ-009: Location directions without a required paid API.
- REQ-010: Mobile-first and keyboard usable.
- REQ-011: No fabricated prices, hours, staff identities, testimonials, or business claims.
- REQ-012: Booking states cover loading, empty, unavailable, invalid, success, error, and duplicate submission.
- REQ-013: Preserve auditable AEOS Git checkpoints.

## Optional / phase-ready modules
Offers, gallery, reviews, staff/service management, cancellation/rescheduling, analytics, reminders, multilingual refinement.

## Design direction
Refined, feminine, premium, calm beauty editorial; strong typography, generous whitespace, tactile surfaces, subtle motion, high-clarity booking CTA; no imitation of another brand.

## Technical direction
React + Vite; Cloudflare Pages/Workers target; Cloudflare D1 booking datastore; server-side booking validation; no payment in v1; no required paid API.

## Accessibility
Default target WCAG 2.2 AA with semantic HTML, labels, visible focus, keyboard flow, error association, contrast review, responsive touch usability, and runtime axe validation when available.

## Definition of done
All MUST requirements mapped to evidence; runnable build; critical booking journey validated end-to-end; responsive/keyboard validation; relevant security/accessibility checks; visual examination; artifact identity recorded; no unresolved critical blockers; exact validated artifact promoted.