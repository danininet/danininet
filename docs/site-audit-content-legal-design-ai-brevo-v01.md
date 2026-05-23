# DaniniNet Site Audit — Content, Legal, Design, AI, Brevo

Status: execution backlog, not strategy brainstorming.

## Goal

Bring the whole DaniniNet site from early implementation into a coherent premium public system:

- remove generic wording
- complete multilingual copy where routes exist
- make legal/trust pages useful, not empty
- unify visual identity
- connect forms to Brevo only where it serves a clear flow
- add AI/agent function only where it supports the DaniniHub method
- avoid placeholders, fake promises, medical claims, fake reviews and generic SEO pages

## Non-negotiable rules

1. No skeleton pages.
2. No lorem ipsum or coming-soon content.
3. No fake testimonials.
4. No private Calije materials.
5. No sales, investor, profit, health or legal guarantees.
6. No broad AI chat widget without a defined business purpose.
7. No Brevo form that collects emails without a clear reason, consent text and follow-up logic.
8. Every public page must have a next step.
9. Every monetized/affiliate/health page must have a disclosure block.
10. SR/DE/EN copy must be stylistically adapted, not mechanically translated.

## Site areas to audit and improve

### 1. Homepage

Current status:

- commercial homepage exists
- monetization ladder added
- partner/affiliate blocks added
- old knowledge/water/recipes and guestbook added
- brand mark unified

Needed polish:

- check all links point to existing or planned priority routes
- add stronger final trust microcopy
- ensure no linked route is a dead thin page without content
- eventually move repeated blocks into shared components

### 2. Product: Digitalna prodaja lokacije

Current status:

- real page exists
- metadata added
- Mini Audit upsell added
- trust/legal links added

Needed polish:

- confirm cover asset exists
- ensure Gumroad production URL is correct in environment
- add Product JSON-LD only after checkout URL and price are final
- add visible refund/support note if required by Gumroad flow

### 3. Mini Audit route

Priority: next implementation.

This page must include:

- what Mini Audit is
- who it is for
- what user submits
- what DaniniNet checks
- what user receives
- delivery expectation
- price: 49 EUR
- no guarantee disclaimer
- link back to Digitalna prodaja lokacije
- link forward to Gateway Brief
- Brevo/contact flow if there is a clear intake form

Suggested form fields:

- name
- email
- country/region
- asset type: parcel / apartment / house / location / project / existing ad / other
- language: SR / DE / EN
- current material link
- what the user wants: sale / presentation / investor signal / partner signal / better ad / unknown
- consent checkbox

Brevo use:

- valid for Mini Audit intake
- valid for support/contact
- valid for post-purchase follow-up
- not valid for random newsletter capture at this stage

### 4. Gateway Brief route

Priority: after Mini Audit.

Must be a serious service page, not a placeholder:

- 149–299 EUR range
- explains deliverable
- public/private split
- no legal/financial/investment advice
- suitable after Mini Audit or existing materials

### 5. Legal & Trust pages

Must be completed as real trust cards/pages:

- Legal overview
- Impressum
- Privacy / GDPR
- Cookies
- Terms
- General disclaimer
- Affiliate disclosure
- AI transparency
- Health disclaimer

Each legal page needs:

- plain-language summary
- what this page covers
- what it does not cover
- contact/support link
- localized SR/DE/EN copy
- date/version note if practical

### 6. AI / agent function

Do not add a generic chatbot.

Potential useful AI function:

**DaniniHub Question Gate**

Purpose:

- guide a visitor through 3 questions before recommending product/service/partner route
- no free-form advice
- no legal/financial/medical/investment output
- returns one of:
  - read method page
  - buy Digitalna prodaja lokacije
  - request Mini Audit
  - request Gateway Brief
  - read legal/trust page
  - partner/affiliate route with disclosure

Questions:

1. What are you trying to present or improve?
2. What evidence/material do you already have?
3. What is the next decision you need?

Output style:

- short explanation
- route recommendation
- risk/disclaimer reminder
- no promise of outcome

Implementation idea:

- route: `/api/question-gate`
- UI block: homepage + Mini Audit page
- can use OpenAI key if present in env
- must not expose key client-side
- must have fallback deterministic routing if API fails

### 7. Brevo integration

Potential routes:

- `/api/contact`
- `/api/mini-audit-intake`
- `/api/support`

Rules:

- server-side only
- env keys only
- no key logging
- consent text visible
- user gets confirmation copy
- owner gets notification email
- optional Brevo contact list only after explicit consent

### 8. Design system polish

Current style:

- dark navy
- ivory
- gold
- light blue
- rounded premium cards

Needed:

- one shared BrandMark
- consistent buttons
- consistent section intro
- consistent legal cards
- consistent form fields
- mobile header review
- avoid too many slightly different nav/logo implementations

### 9. Routes to inspect next

Known priority files/routes to fetch or create:

- `components/layout/SiteShell.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/proizvodi/digitalna-prodaja-lokacije/page.tsx`
- `app/[locale]/usluge/mini-audit/page.tsx`
- `app/[locale]/services/mini-audit/page.tsx`
- `app/[locale]/legal/page.tsx`
- `app/[locale]/legal/affiliate-disclosure/page.tsx`
- `app/[locale]/legal/ai-transparentnost/page.tsx`
- `app/[locale]/legal/health-disclaimer/page.tsx`
- `app/api/contact/route.ts`
- `app/api/mini-audit-intake/route.ts`

## Immediate execution order

1. Create serious Mini Audit page.
2. Add or polish legal/trust priority pages.
3. Add Brevo-ready intake API only if the form page exists.
4. Add deterministic DaniniHub Question Gate spec or API route.
5. Refactor shared visual components if repetition becomes risky.

## Acceptance checklist

- no generic pages added
- all new pages have SR/DE/EN content
- all monetized pages have disclaimer
- all forms include consent and purpose
- AI function has safe routing limits
- Brevo is server-side only
- no private Calije assets
- first earning flow is coherent:

Home → Digitalna prodaja lokacije → Mini Audit → Gateway Brief
