# DaniniNet Live Sequence

## Goal

Prepare DaniniNet for live deployment without mixing DaniniLans implementation into this repository phase.

---

## Live priority

1. Product hub must clearly show more than one direction.
2. Affiliate/product registry must remain source of truth.
3. Blog hub must support editorial categories, not random articles.
4. Lead capture must move to Brevo API server-side.
5. Mailto forms are not production-ready.
6. Disclosures must be visible and reusable.
7. Build must pass.
8. Hostinger must import `danininet/danininet`, not `danininet/daninilans`.

---

## Current verified facts

- `danininet/danininet` is a valid Next.js project.
- `package.json` has `next build`, `next start`, and `next dev`.
- `danininet/daninilans` is not yet a framework project and should not be imported for DaniniNet deployment.

---

## Files already added for live readiness

- `lib/affiliate/registry.ts`
- `components/trust/TrustDisclosure.tsx`
- `components/products/ProductCard.tsx`
- `components/media/DaniniVideoBlock.tsx`
- `components/tables/ComparisonTable.tsx`
- `docs/affiliate-product-registry.md`
- `docs/brevo-lead-flow.md`
- `docs/BREVO-API-IMPLEMENTATION-SPEC.md`
- `docs/HOSTINGER-DEPLOY-READINESS.md`
- `docs/OPERATIVE-STATUS-DANININET-DANINILANS.md`
- `docs/NEW-CHAT-HANDOFF-DANINILANS.md`

---

## Required next code changes

### 1. Products page

Update `app/[locale]/proizvodi/page.tsx` to:

- remove remaining forbidden prompt-pack wording
- show Digitalna prodaja lokacije
- show DaniniLans as separate upcoming health/water artifact
- show Hostinger approved affiliate direction
- show Amazon selective direction
- show WELLAN/UMH review direction
- exclude Gunnar Kessler from public UI
- include affiliate/AI/digital-product disclosure

### 2. Blog page

Update `app/[locale]/blog/page.tsx` to:

- remove project mixing
- present editorial categories
- include AI method block
- include affiliate disclosure logic
- include DaniniLans preview only as future separate project
- keep DaniniNet focused on product/commercial/editorial layer

### 3. Brevo lead routes

Add:

- `lib/brevo/client.ts`
- `lib/leads/validateLeadPayload.ts`
- `app/api/leads/danininet/route.ts`
- later: `app/api/leads/daninilans/route.ts` in DaniniLans project or shared pattern

### 4. Lead forms

Replace any production mailto form with server-side POST.

### 5. SEO audit

Check key pages for:

- metadata title
- description
- canonical logic
- Open Graph image
- internal links
- disclosure block

---

## Deployment checklist

Before Hostinger import/deploy:

1. Correct repo: `danininet/danininet`.
2. Branch: `main`.
3. Framework: Next.js.
4. Install: `npm install`.
5. Build: `npm run build`.
6. Start: `npm run start`.
7. Do not import `danininet/daninilans` yet.
8. Add Brevo env only when API routes are implemented.
9. Do not add affiliate links to `.env`.
10. Verify public pages manually after deploy.

---

## Post-deploy verification

Check:

- homepage
- products page
- DPL page
- blog page
- support/contact page
- newsletter/lead page if enabled
- no forbidden prompt-pack wording
- disclosure visibility
- mobile layout
- page speed basics
- forms do not expose secrets

---

## Decision

Finish DaniniNet live first.

Start DaniniLans in separate chat/repo after DaniniNet is deployable.
