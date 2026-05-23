# Codex Task — SEO Routes & Metadata v01

## Objective

Prepare the next implementation step after the homepage commercial polish: stable localized routes, metadata, internal links and indexing boundaries for DaniniNet.

This task must prevent the homepage from linking to weak, empty or SEO-dangerous pages.

## Scope

Do not create all pages at once as thin placeholders. Create only the minimum mature routes needed for the first earning and indexing flow.

## Priority routes for first implementation

### Serbian

1. `/sr/daninihub-metod`
2. `/sr/proizvodi/digitalna-prodaja-lokacije`
3. `/sr/usluge/mini-audit`
4. `/sr/case-studies/calije-park-residence`
5. `/sr/legal/affiliate-disclosure`
6. `/sr/legal/ai-transparentnost`
7. `/sr/legal/health-disclaimer`

### German

1. `/de/methode`
2. `/de/produkte/digitaler-verkauf-von-standorten`
3. `/de/services/mini-audit`
4. `/de/case-studies/calije-park-residence`
5. `/de/legal/affiliate-disclosure`
6. `/de/legal/ki-transparenz`
7. `/de/legal/health-disclaimer`

### English

1. `/en/method`
2. `/en/products/digital-location-sales`
3. `/en/services/mini-audit`
4. `/en/case-studies/calije-park-residence`
5. `/en/legal/affiliate-disclosure`
6. `/en/legal/ai-transparency`
7. `/en/legal/health-disclaimer`

## Secondary routes after first pass

Create later, only with mature content:

- `/sr/alati/affiliate-evergreen`
- `/sr/alati/voda-i-rutine`
- `/sr/partneri/umh-technologie-grueneperlen`
- `/sr/stara-znanja`
- `/sr/recepti`
- `/sr/knjiga-utisaka`

and equivalent DE/EN routes.

## Required page structure

Each mature route must include:

1. clear localized H1
2. short positioning paragraph
3. DaniniHub method block or question gate
4. internal links to related pages
5. trust/legal link where relevant
6. one primary CTA
7. one secondary CTA

## Metadata requirements

Each route should have:

- localized title
- localized description
- canonical URL
- alternates for SR/DE/EN where equivalent routes exist
- Open Graph title
- Open Graph description

## Suggested metadata patterns

### Home

SR title: `DaniniNet — Pitaj AI, AI pita tebe`
DE title: `DaniniNet — Frag die KI, die KI fragt dich`
EN title: `DaniniNet — Ask AI, AI asks you`

### Method

SR title: `Pitaj AI — AI pita tebe | DaniniNet`
DE title: `Frag die KI — die KI fragt dich | DaniniNet`
EN title: `Ask AI — AI asks you | DaniniNet`

### Product

SR title: `Digitalna prodaja lokacije | DaniniNet`
DE title: `Digitaler Verkauf von Standorten | DaniniNet`
EN title: `Digital Location Sales | DaniniNet`

### Mini Audit

SR title: `Mini audit digitalnog artifacta | DaniniNet`
DE title: `Mini-Audit für digitale Artefakte | DaniniNet`
EN title: `Mini Audit for Digital Artifacts | DaniniNet`

### Calije Case Study

SR title: `Calije Park Residence case study | DaniniNet`
DE title: `Calije Park Residence Case Study | DaniniNet`
EN title: `Calije Park Residence Case Study | DaniniNet`

## Internal linking rules

### Method page must link to

- Digitalna prodaja lokacije
- Mini Audit
- Calije case study
- AI transparency

### Product page must link to

- Method page
- Mini Audit
- Calije case study
- Disclaimer / legal trust

### Mini Audit page must link to

- Product page
- Gateway Brief future route
- Method page
- Legal disclaimer

### Calije case study page must link to

- Live public Calije site only
- Digitalna prodaja lokacije
- Mini Audit
- Method page
- Legal/trust page

Do not link private Calije brief or private assets.

### Affiliate disclosure page must link to

- Tools / affiliate evergreen future route
- UMH / GrünePerlen future route
- AI transparency
- Health disclaimer

### AI transparency page must link to

- Method page
- Product page
- Affiliate disclosure

### Health disclaimer page must link to

- Water and routines future route
- UMH / GrünePerlen future route
- Affiliate disclosure

## Indexing rules

Index:

- home
- method
- product
- mini audit
- Calije case study
- legal/disclosure pages when complete

Noindex until mature:

- empty tools pages
- empty affiliate category pages
- empty partner product pages
- empty recipes pages
- empty feedback book
- test routes

## Structured data

Use only conservative structured data:

- `WebSite` on home
- `Organization` if organization details are real
- `Article` for mature educational pages
- `Product` only for Digitalna prodaja lokacije when checkout/price is real
- `BreadcrumbList` for mature routes
- `FAQPage` only when visible FAQ exists

Never add fake reviews or fake ratings.

## Acceptance checklist

- Homepage links do not point to `#`.
- Priority routes exist or homepage points only to routes that will be implemented in the same pass.
- No private Calije files are linked.
- Metadata is localized.
- Internal links are descriptive.
- Thin placeholder pages are noindexed or not created yet.
- No medical, investment, sales, legal or financial guarantees.
