# Site Discovery — Loop 001

The authorized repository was empty at first inspection. No existing routes, source tree, navigation, sitemap, robots file, forms, APIs, assets, dependencies or deployment configuration were present.

## Planned public routes
- /
- /services
- /booking
- /team
- /gallery
- /offers
- /contact

These are planned routes from Product Contract v1, not existing routes.

## Critical journeys
1. Landing → services → booking → success.
2. Booking → service → date → time → customer details → submit.
3. Booking unavailable/error → correction → retry.
4. Contact/location → directions / verified WhatsApp.

## Booking state matrix
default, loading, available, unavailable, invalid-input, submitting, success, server-error, duplicate-submission, offline/retry.

## Discovery gap
Runtime crawling and browser inventory are not yet applicable because no application exists.
