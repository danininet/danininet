# DaniniNet Implementation Backlog v01

## Purpose

This backlog turns the DaniniNet strategy, SEO, monetization, visual system and homepage implementation brief into executable work packages.

The goal is to move from planning into a controlled implementation sequence without breaking the existing site.

## Current source documents

- `docs/danininet-polish-brief-v01.md`
- `docs/danininet-seo-internal-linking-brief-v01.md`
- `docs/danininet-monetization-sprint-brief-v01.md`
- `docs/danininet-visual-system-diagrams-v01.md`
- `docs/danininet-home-ui-implementation-brief-v01.md`
- `content/danininet-home-polish-sections-v01.md`

## Phase 1 — Safe homepage monetization polish

### Task 1.1 — Update homepage copy model

Target:

`app/[locale]/page.tsx`

Add to `Copy` type:

- `monetization`
- `partners`
- `heritage`
- `testimonials`

Acceptance:

- TypeScript stays valid.
- SR/DE/EN copy remains complete.
- No unused imports.

### Task 1.2 — Add Badge component

Target:

`app/[locale]/page.tsx`

Create a small local `Badge` component.

Acceptance:

- Badge works on ivory sections.
- Badge works on dark sections or has a readable variant.
- Badge text is real text, not image-only.

### Task 1.3 — Add monetization ladder section

Content:

- Digitalna prodaja lokacije
- Mini Audit
- Gateway Brief
- Full Gateway Setup
- Partner / affiliate
- Premium adresar

Acceptance:

- Every item has a stable localized link.
- Product and mini-audit CTAs are visible.
- No false revenue promises.

### Task 1.4 — Add partner / affiliate trust section

Cards:

- UMH Technologie via GrünePerlen
- Amazon evergreen selection
- Digital tools and partners

Acceptance:

- Every card has badges.
- Every card has a DaniniHub question.
- UMH card has health disclaimer wording.
- No medical claims.
- No invented affiliate terms.

### Task 1.5 — Add old knowledge / recipes / water routine section

Content:

- Stara znanja
- Traditional recipes
- Water routine
- Family rhythm
- Responsible health framing

Acceptance:

- No medical claims.
- Health disclaimer link visible.
- Design is calm and serious.

### Task 1.6 — Add Knjiga utisaka section

Content:

- Product feedback
- Method experience
- Question or suggestion
- Case-study signal

Acceptance:

- Does not fake reviews.
- Explains moderation.
- Links to feedback route.

## Phase 2 — Route creation

Create stable localized routes, even if initially lightweight.

### Required SR routes

- `/sr/daninihub-metod`
- `/sr/proizvodi/digitalna-prodaja-lokacije`
- `/sr/usluge/mini-audit`
- `/sr/usluge/gateway-brief`
- `/sr/alati/affiliate-evergreen`
- `/sr/alati/voda-i-rutine`
- `/sr/partneri/umh-technologie-grueneperlen`
- `/sr/stara-znanja`
- `/sr/recepti`
- `/sr/knjiga-utisaka`
- `/sr/case-studies/calije-park-residence`
- `/sr/legal/affiliate-disclosure`
- `/sr/legal/ai-transparentnost`
- `/sr/legal/health-disclaimer`

### Required DE routes

- `/de/methode`
- `/de/produkte/digitaler-verkauf-von-standorten`
- `/de/services/mini-audit`
- `/de/services/gateway-brief`
- `/de/tools/affiliate-evergreen`
- `/de/tools/wasser-und-routinen`
- `/de/partner/umh-technologie-grueneperlen`
- `/de/altes-wissen`
- `/de/rezepte`
- `/de/feedbackbuch`
- `/de/case-studies/calije-park-residence`
- `/de/legal/affiliate-disclosure`
- `/de/legal/ki-transparenz`
- `/de/legal/health-disclaimer`

### Required EN routes

- `/en/method`
- `/en/products/digital-location-sales`
- `/en/services/mini-audit`
- `/en/services/gateway-brief`
- `/en/tools/affiliate-evergreen`
- `/en/tools/water-and-routines`
- `/en/partners/umh-technologie-grueneperlen`
- `/en/old-knowledge`
- `/en/recipes`
- `/en/book-of-feedback`
- `/en/case-studies/calije-park-residence`
- `/en/legal/affiliate-disclosure`
- `/en/legal/ai-transparency`
- `/en/legal/health-disclaimer`

Acceptance:

- Do not index placeholder routes until content is mature.
- Do not link private Calije files.
- Each route has a visible title, explanation and next action.

## Phase 3 — SEO metadata and structured data

### Task 3.1 — Metadata

Each mature route should have:

- localized title
- localized meta description
- canonical
- hreflang alternates
- Open Graph title and description

### Task 3.2 — Structured data

Add only where true:

- `WebSite`
- `Organization`
- `Article`
- `Product`
- `FAQPage`
- `BreadcrumbList`

Acceptance:

- No fake `Review` schema.
- No fake product ratings.
- Product schema only where price and offer exist.

## Phase 4 — First earning flow

### Flow A — Owned product

Home → Digitalna prodaja lokacije → checkout / buy CTA → mini audit upsell

### Flow B — Mini audit

Home → Mini Audit → intake / contact → Gateway Brief upsell

### Flow C — Affiliate partner

Home → Water and routines → UMH / GrünePerlen → disclosure → outbound affiliate

### Flow D — Case proof

Home → Calije case study → Digitalna prodaja lokacije or audit

### Flow E — Directory

Home → Partners → free listing → premium listing / sponsor

## Phase 5 — Visual assets

Create or implement:

- core system diagram
- Pitaj AI decision gate
- monetization ladder
- internal linking map
- affiliate card template
- badge system

Acceptance:

- Visuals must have real text equivalents.
- Important links cannot exist only inside images.
- Design must remain premium, calm and credible.

## Build and review checklist

Before merging implementation:

- `npm run lint` if available
- `npm run build` if available
- Check SR home page
- Check DE home page
- Check EN home page
- Check all visible links
- Check mobile spacing
- Check legal/disclaimer links
- Check no private Calije links
- Check no medical claims
- Check no profit/investor/sales guarantees

## Immediate next patch recommendation

The next actual code patch should be:

1. update `app/[locale]/page.tsx`,
2. add the four new homepage sections,
3. keep all links stable,
4. keep existing design language,
5. avoid creating many thin routes in the same patch.

This keeps the first UI patch focused and reduces build risk.
