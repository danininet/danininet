# DaniniNet SEO & Internal Linking Brief v01

## Purpose

This brief defines SEO, indexing and internal linking rules for DaniniNet before the next UI/content patch. SEO must be part of the architecture, not a later cosmetic fix.

## Core SEO principle

DaniniNet should be indexable as a structured knowledge and commerce portal around:

- DaniniHub method: Pitaj AI — AI pita tebe
- digital products and artifacts
- affiliate and partner recommendations
- old knowledge, recipes, water and daily routines
- case studies such as Calije Park Residence
- trust, disclaimers and responsible AI usage

## URL architecture

Use stable, human-readable, localized slugs. Avoid changing slugs after indexing.

### Serbian

- `/sr`
- `/sr/daninihub-metod`
- `/sr/proizvodi`
- `/sr/proizvodi/digitalna-prodaja-lokacije`
- `/sr/alati`
- `/sr/alati/affiliate-evergreen`
- `/sr/alati/voda-i-rutine`
- `/sr/partneri`
- `/sr/partneri/umh-technologie-grueneperlen`
- `/sr/stara-znanja`
- `/sr/recepti`
- `/sr/knjiga-utisaka`
- `/sr/case-studies/calije-park-residence`
- `/sr/legal`
- `/sr/legal/affiliate-disclosure`
- `/sr/legal/ai-transparentnost`
- `/sr/legal/health-disclaimer`

### German

- `/de`
- `/de/methode`
- `/de/produkte`
- `/de/produkte/digitaler-verkauf-von-standorten`
- `/de/tools`
- `/de/tools/affiliate-evergreen`
- `/de/tools/wasser-und-routinen`
- `/de/partner`
- `/de/partner/umh-technologie-grueneperlen`
- `/de/altes-wissen`
- `/de/rezepte`
- `/de/feedbackbuch`
- `/de/case-studies/calije-park-residence`
- `/de/legal`
- `/de/legal/affiliate-disclosure`
- `/de/legal/ki-transparenz`
- `/de/legal/health-disclaimer`

### English

- `/en`
- `/en/method`
- `/en/products`
- `/en/products/digital-location-sales`
- `/en/tools`
- `/en/tools/affiliate-evergreen`
- `/en/tools/water-and-routines`
- `/en/partners`
- `/en/partners/umh-technologie-grueneperlen`
- `/en/old-knowledge`
- `/en/recipes`
- `/en/book-of-feedback`
- `/en/case-studies/calije-park-residence`
- `/en/legal`
- `/en/legal/affiliate-disclosure`
- `/en/legal/ai-transparency`
- `/en/legal/health-disclaimer`

## Internal linking rules

Every page should link to:

1. one method page,
2. one monetization/product page,
3. one trust/legal page,
4. one related content page,
5. one next-step CTA.

### Home page links

The home page should link to:

- Products
- Digital Location Sales
- DaniniHub Method
- Tools / Affiliate Evergreen
- Water and Routines
- Partners
- Book of Feedback
- Calije Park Residence case study
- Legal & Trust

### Product pages

Product pages should link to:

- DaniniHub method
- related case study
- legal/disclaimer
- relevant tools or partner products
- next-step CTA such as buy, request audit, or explore partner offer

### Affiliate pages

Affiliate pages must link to:

- affiliate disclosure
- health disclaimer when health/water related
- AI transparency when AI-assisted text or analysis is used
- relevant category page
- relevant method block

### Health / recipes / old knowledge pages

These pages must link to:

- health disclaimer
- water and routines
- UMH / GrünePerlen partner page if relevant
- recipes or old knowledge hub
- DaniniHub method question block

### Case study pages

Case studies must link to:

- product page
- method page
- legal/trust page
- related tools or partner pages
- public live artifact only; do not link private brief assets

## Metadata rules

Each page should have:

- localized title
- localized meta description
- canonical URL
- hreflang alternates for sr/de/en
- Open Graph title and description
- Twitter card metadata

## Suggested title patterns

### SR

- `DaniniNet — Pitaj AI, AI pita tebe`
- `Digitalna prodaja lokacije | DaniniNet`
- `Affiliate evergreen alati | DaniniNet`
- `Voda i rutine | DaniniNet`
- `Stara znanja i recepti | DaniniNet`

### DE

- `DaniniNet — Frag die KI, die KI fragt dich`
- `Digitaler Verkauf von Standorten | DaniniNet`
- `Affiliate Evergreen Tools | DaniniNet`
- `Wasser und Routinen | DaniniNet`
- `Altes Wissen und Rezepte | DaniniNet`

### EN

- `DaniniNet — Ask AI, AI asks you`
- `Digital Location Sales | DaniniNet`
- `Affiliate Evergreen Tools | DaniniNet`
- `Water and Routines | DaniniNet`
- `Old Knowledge and Recipes | DaniniNet`

## Structured data recommendations

Use structured data conservatively and only when true.

Potential schema types:

- `WebSite` for the portal
- `Organization` for DaniniNet / DaniniHub relation
- `Article` for educational articles
- `Product` only for owned digital products with real price and checkout
- `FAQPage` only where real visible FAQ content exists
- `BreadcrumbList` for internal navigation
- `Review` only for real moderated testimonials, never fake placeholders

## Indexing cautions

Do not index placeholder pages with thin content.

Noindex until complete:

- empty partner pages
- empty affiliate category pages
- placeholder testimonial pages
- unfinished legal pages
- test routes

Index when complete:

- home
- method
- products
- digital location sales
- legal/trust
- mature affiliate category pages
- mature health/recipes pages
- real case studies

## Link anchor guidance

Use descriptive anchor text, not generic `click here`.

Good anchors:

- `Pitaj AI — AI pita tebe metoda`
- `Digitalna prodaja lokacije`
- `UMH Technologie preko GrünePerlen`
- `Affiliate disclosure`
- `Health disclaimer`
- `Calije Park Residence case study`
- `Stara znanja i recepti`

## Important boundaries

- Do not link private Calije brief assets.
- Do not invent affiliate terms.
- Do not make medical claims for UMH or any health product.
- Do not create doorway pages just for SEO.
- Do not duplicate the same copy across SR/DE/EN without proper localization.
- Do not change public URLs lightly after launch.

## Next implementation step

Before adding new UI sections to `app/[locale]/page.tsx`, align links with the route map above and ensure every CTA points to a stable localized path.
