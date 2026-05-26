# DaniniNet Live Readiness Audit

## Date

2026-05-26

## Purpose

This document records the current live-readiness state of DaniniNet after the product, blog, Brevo, registry and documentation work.

It is a practical launch audit, not a generic plan.

---

# 1. Repository

Use for Hostinger import:

`danininet/danininet`

Do not import:

`danininet/daninilans`

DaniniLans is a separate future project and is not yet a valid framework repository.

---

# 2. Confirmed framework state

DaniniNet is a Next.js project.

Required Hostinger settings:

- Repository: `danininet/danininet`
- Branch: `main`
- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`

---

# 3. Completed live-ready work

## 3.1 Product system

Products hub now includes:

- Digitalna prodaja lokacije
- DaniniLans future health/water layer
- Hostinger approved affiliate direction
- Amazon PartnerNet selective affiliate direction
- WELLAN / UMH review direction

Gunnar Kessler is not public and remains rejected by policy.

## 3.2 Prompt wording cleanup

The old prompt-pack wording was removed from the products page and replaced with AI Dialogue Worksheet wording aligned with the method:

`Pitaj AI — AI pita tebe`

## 3.3 DaniniLans separation

DaniniLans is treated as a separate project:

- domain: `daninilans.daninihub.com`
- email: `info@daninilans.daninihub.com`
- separate future repo/site
- health/water reviews and content live there later

## 3.4 Blog hub

Blog hub now focuses on:

- affiliate without guru narrative
- digital products and delivery
- AI dialogue
- Hostinger/tools/infrastructure
- DaniniLans preview
- legal/trust/disclosure

## 3.5 Newsletter / lead flow

The newsletter page no longer uses mailto.

It is connected to:

`POST /api/leads/danininet`

The flow uses:

- `components/leads/LeadCaptureForm.tsx`
- `lib/leads/validateLeadPayload.ts`
- `lib/brevo/client.ts`
- `app/api/leads/danininet/route.ts`

## 3.6 Brevo

Brevo API is server-side only.

Required env variables before production lead testing:

```env
BREVO_API_KEY=
BREVO_DANININET_LIST_ID=
BREVO_DANINILANS_LIST_ID=
BREVO_DANININET_SENDER_EMAIL=info@danininet.daninihub.com
BREVO_DANINILANS_SENDER_EMAIL=info@daninilans.daninihub.com
```

Affiliate links do not go into `.env`.

## 3.7 Reusable components

Added:

- `components/trust/TrustDisclosure.tsx`
- `components/products/ProductCard.tsx`
- `components/media/DaniniVideoBlock.tsx`
- `components/tables/ComparisonTable.tsx`
- `components/leads/LeadCaptureForm.tsx`

---

# 4. Remaining checks before live deploy

## 4.1 Build check

Run or verify via Hostinger/GitHub deployment:

`npm run build`

Potential build risk areas:

- `sib-api-v3-sdk` import type compatibility in `lib/brevo/client.ts`
- env absence for Brevo route should not break build because env is checked at runtime
- client/server boundary for `LeadCaptureForm` should remain valid because it is marked `use client`

## 4.2 Public page checks

After deploy, manually check:

- `/sr`
- `/sr/proizvodi`
- `/sr/proizvodi/digitalna-prodaja-lokacije`
- `/sr/blog`
- `/sr/newsletter`
- `/sr/support`

Repeat for DE/EN routes if public navigation exposes them.

## 4.3 Lead form check

Before testing the form publicly:

- set `BREVO_API_KEY`
- set `BREVO_DANININET_LIST_ID`
- confirm Brevo list exists
- submit test email
- verify contact appears in Brevo
- verify attributes: SOURCE, INTEREST, LOCALE, PROJECT, METHOD, CONSENT_AT

## 4.4 SEO check

Review key pages for:

- title metadata
- description metadata
- Open Graph image
- canonical behavior
- internal links
- no noindex accidentally set

## 4.5 Content/trust check

Verify:

- affiliate disclosure is visible where needed
- health/water disclaimers are present where needed
- DPL does not imply guaranteed profit, investor, sale or permit
- AI is presented as assistant, not authority
- no guru or quick-money claims

---

# 5. Known not-yet-done items

These are not blockers for first live if clearly staged:

1. Full visual polish of product cards.
2. Dedicated Hostinger affiliate landing/guide page.
3. Dedicated Amazon selective recommendation page.
4. Full DaniniLans site build.
5. Full OG image generation system.
6. Full product dashboard UI.
7. Real affiliate links in registry.
8. Brevo automation emails beyond contact capture.

---

# 6. Go / No-Go logic

## Go for initial live if:

- build passes
- products page renders
- blog page renders
- newsletter page renders
- no mailto appears in production lead form
- no forbidden prompt-pack wording appears publicly
- DPL page still renders

## Hold live if:

- build fails
- lead form breaks page rendering
- navigation breaks
- product page has syntax/render error
- Brevo client import breaks build

---

# 7. Next implementation order after live

1. Dedicated Hostinger affiliate article/page.
2. Dedicated Amazon selective recommendation framework.
3. Product registry dashboard view.
4. Brevo automation emails.
5. DaniniLans separate repo/site build.
6. First DaniniLans health/water article cluster.

---

# 8. Final launch note

DaniniNet should go live first as product/commercial/editorial layer.

DaniniLans should start only after DaniniNet is stable, deployable and verified.
