# Decision Ledger

## DEC-001 — Custom booking model
Chosen over a generic booking embed because the brief needs service duration, staff assignment, availability and conflict detection.
Risk: R3 initially; R4 if payments/auth/sensitive-data behavior is introduced.
Reversible: YES.

## DEC-002 — Cloudflare Pages/Workers + D1
Chosen as the current zero-paid-dependency target because published current free limits provide a serverless runtime and SQL datastore suitable for this scale.
Tradeoff: free limits/provider policy can change.
Risk: R3.
Reversible: YES.

## DEC-003 — No required Google Maps billing setup
Use regular Maps place/directions links or another no-billing map presentation unless a billing-enabled API setup is explicitly provisioned.
Risk: R0/R1.
Reversible: YES.
