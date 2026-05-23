# DaniniNet Home UI Implementation Brief v01

## Purpose

This brief turns the existing strategy, SEO, monetization and visual system into a concrete homepage implementation plan for `app/[locale]/page.tsx`.

The goal is not to redesign randomly. The homepage must become a sophisticated commercial front that explains DaniniNet, routes visitors toward money paths, supports indexing, and keeps the DaniniHub OS method visible.

## Current file

Target file:

`app/[locale]/page.tsx`

Current strengths:

- localized SR/DE/EN copy object
- Income / Intelligence / Health positioning
- existing hero, system, pillars, product, method, content, trust and final CTA sections
- inline SVG icon component
- premium dark/ivory visual language

## Required homepage order

Recommended section order:

1. Hero
2. System logic
3. Pillars: Income / Intelligence / Health
4. Owned product: Digitalna prodaja lokacije
5. Method block: Pitaj AI — AI pita tebe
6. Monetization ladder / service path
7. Partner & affiliate trust layer
8. Old knowledge / recipes / water routine layer
9. Knjiga utisaka / moderated feedback layer
10. Content / SEO categories
11. Trust / legal / disclaimers
12. Final CTA

## New copy groups to add to `Copy` type

Add these groups:

```ts
monetization: {
  title: string;
  text: string;
  items: { label: string; offer: string; price: string; role: string; href: string }[];
};
partners: {
  title: string;
  text: string;
  cards: { key: VisualKey; title: string; badges: string[]; text: string; question: string; href: string }[];
};
heritage: {
  title: string;
  text: string;
  badges: string[];
  href: string;
};
testimonials: {
  title: string;
  text: string;
  categories: string[];
  href: string;
};
```

## Link and CTA rules

Every visible card should link to a stable localized route, even if the route is created in a later patch. Avoid `#` links.

### SR links

- Product: `/sr/proizvodi/digitalna-prodaja-lokacije`
- Mini audit: `/sr/usluge/mini-audit`
- Gateway brief: `/sr/usluge/gateway-brief`
- Tools: `/sr/alati/affiliate-evergreen`
- Water routines: `/sr/alati/voda-i-rutine`
- UMH / GrünePerlen: `/sr/partneri/umh-technologie-grueneperlen`
- Old knowledge: `/sr/stara-znanja`
- Recipes: `/sr/recepti`
- Feedback book: `/sr/knjiga-utisaka`
- Calije: `/sr/case-studies/calije-park-residence`
- Affiliate disclosure: `/sr/legal/affiliate-disclosure`
- AI transparency: `/sr/legal/ai-transparentnost`
- Health disclaimer: `/sr/legal/health-disclaimer`

### DE links

- Product: `/de/produkte/digitaler-verkauf-von-standorten`
- Mini audit: `/de/services/mini-audit`
- Gateway brief: `/de/services/gateway-brief`
- Tools: `/de/tools/affiliate-evergreen`
- Water routines: `/de/tools/wasser-und-routinen`
- UMH / GrünePerlen: `/de/partner/umh-technologie-grueneperlen`
- Old knowledge: `/de/altes-wissen`
- Recipes: `/de/rezepte`
- Feedback book: `/de/feedbackbuch`
- Calije: `/de/case-studies/calije-park-residence`
- Affiliate disclosure: `/de/legal/affiliate-disclosure`
- AI transparency: `/de/legal/ki-transparenz`
- Health disclaimer: `/de/legal/health-disclaimer`

### EN links

- Product: `/en/products/digital-location-sales`
- Mini audit: `/en/services/mini-audit`
- Gateway brief: `/en/services/gateway-brief`
- Tools: `/en/tools/affiliate-evergreen`
- Water routines: `/en/tools/water-and-routines`
- UMH / GrünePerlen: `/en/partners/umh-technologie-grueneperlen`
- Old knowledge: `/en/old-knowledge`
- Recipes: `/en/recipes`
- Feedback book: `/en/book-of-feedback`
- Calije: `/en/case-studies/calije-park-residence`
- Affiliate disclosure: `/en/legal/affiliate-disclosure`
- AI transparency: `/en/legal/ai-transparency`
- Health disclaimer: `/en/legal/health-disclaimer`

## Badge component

Add a small inline `Badge` component:

```tsx
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#C5A35A]/30 bg-[#C5A35A]/10 px-3 py-1 text-xs font-medium text-[#8F7133]">
      {children}
    </span>
  );
}
```

For dark sections, use a variant or CSS utility class to keep contrast readable.

## Monetization section content

### SR

Title: `Put od ideje do prihoda mora biti vidljiv.`
Text: `DaniniNet ne gradi publiku bez pravca. Svaka poseta treba da ima sledeći korak: vodič, mini audit, gateway brief, partner proizvod ili dokazni case study.`
Items:

1. Digitalna prodaja lokacije — 29/49 EUR — prvi digitalni proizvod
2. Mini Audit — 49 EUR — brz ulaz u uslugu
3. Gateway Brief — 149–299 EUR — strukturisan artifact
4. Full Gateway Setup — 499–999 EUR — implementacioni paket
5. Partner / affiliate — provizija — podržavajući prihod
6. Premium adresar — 19–49 EUR mesečno — recurring layer

### DE

Title: `Der Weg von der Idee zum Umsatz muss sichtbar sein.`
Text: `DaniniNet baut keine Zielgruppe ohne Richtung. Jeder Besuch braucht einen nächsten Schritt: Leitfaden, Mini-Audit, Gateway Brief, Partnerprodukt oder Case Study.`

### EN

Title: `The path from idea to revenue must be visible.`
Text: `DaniniNet does not build an audience without direction. Every visit needs a next step: guide, mini audit, gateway brief, partner product or proof case study.`

## Partner section content

Use cards:

1. UMH Technologie via GrünePerlen
2. Amazon evergreen selection
3. Digital tools and partners

Each card must include:

- badges
- body text
- `Pitaj AI` question
- link to partner/category page
- no medical claims
- no invented affiliate terms

## Heritage section content

Purpose: integrate old knowledge, recipes, water, routines, family and daily rituals.

It should be visually calm and serious, not wellness-hype.

Required badges:

- Old knowledge
- Water routine
- Recipes
- Human review
- Health disclaimer

## Testimonials section content

Purpose: introduce `Knjiga utisaka` without fake reviews.

Required categories:

- Product feedback
- Method experience
- Question or suggestion
- New case-study signal

## SEO and accessibility requirements

- Use semantic headings in order.
- Keep all visual cards text-based, not image-only.
- Links must be real `<Link>` elements.
- Use descriptive anchor text.
- Do not use private Calije links.
- Do not add noindex here; noindex rules belong to route metadata later.
- Avoid duplicate titles across SR/DE/EN.

## Build safety

- Avoid importing unused components.
- Current `Image` import appears unused; remove only if lint/build confirms it is unused.
- Keep `ReactNode` because `Card` and `Badge` use it.
- Do not create new external dependencies.
- Do not replace the full page with a skeleton.
- Preserve existing localized copy unless improving it.

## Suggested implementation method

1. Update `Copy` type.
2. Add localized copy blocks.
3. Add `Badge` component.
4. Add `OfferCard` or inline mapped UI.
5. Insert new sections after method/product and before content/trust.
6. Ensure all mapped arrays have stable keys.
7. Build locally before merge if possible.

## Final acceptance checklist

- Homepage has visible product CTA.
- Homepage has mini-audit/service path.
- Homepage has UMH / GrünePerlen partner card.
- Homepage has old knowledge / recipes / water routine block.
- Homepage has `Knjiga utisaka` block.
- Homepage has badges.
- Homepage has meaningful internal links.
- Homepage still has trust/legal section.
- No medical, legal, financial, investment or profit guarantees.
- No private Calije assets linked.
