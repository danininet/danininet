# DaniniNet Polish Brief v01

## Purpose

This brief defines the next professional polish pass for DaniniNet. It is linked to GitHub issue #11 and should guide any implementation branch or Codex work.

DaniniNet must stay a sophisticated umbrella platform, not a one-product landing page and not an old SEO/lead-magnet funnel.

## Core hierarchy

1. DaniniHub OS = method, decision engine, artifact system.
2. DaniniNet = public commercial portal, marketplace of knowledge, products, partners and affiliate recommendations.
3. Calije Park Residence = proof artifact and case study.
4. Products, services and affiliate offers = monetization layer.

## Central method

The phrase and method **Pitaj AI — AI pita tebe** must appear as a recurring decision framework, not only as a single slogan.

The method should be used before:

- buying a digital product,
- ordering a mini audit,
- choosing an affiliate product,
- using an AI tool,
- publishing a claim,
- presenting a location,
- recommending a health/water/lifestyle product.

Example micro-copy:

> Pitaj AI — AI pita tebe: da li ti ovaj alat rešava stvaran problem danas, ili samo kupuješ osećaj napretka?

## Home page polish goals

The existing `app/[locale]/page.tsx` already contains the main foundation:

- Income · Intelligence · Health,
- product layer,
- method section,
- blog/content section,
- trust/disclaimer section,
- SR/DE/EN localized copy,
- SVG icon system.

The next pass should add or strengthen:

1. recurring method badges,
2. partner/affiliate cards,
3. old knowledge and recipes as part of Health,
4. testimonial / Knjiga utisaka block,
5. region and trust badges,
6. UMH Technologie via GrünePerlen as partner product placeholder,
7. evergreen Amazon / third-party catalog concept,
8. non-guru, non-neon, premium design language.

## Affiliate layer

Affiliate is not a spam catalog.

It must be editorial, transparent and filtered through DaniniHub questions.

### Required affiliate card fields

- Product / partner name
- Category
- Region: DACH-ready / Balkan-ready / Global
- Status: Evergreen / Partner product / Affiliate link
- Who it is for
- Who it is not for
- Decision question
- Disclaimer

### Known partner signal

UMH Technologie is an affiliate/partner product through GrünePerlen. Do not make medical claims. Present it inside the Health / Water / Routine context.

Safe copy direction:

> UMH Technologie preko GrünePerlen predstavlja se u okviru DaniniNet Health stuba: voda, rutina i odgovorna kupovina. Sadržaj je informativan i ne predstavlja medicinski savet, dijagnozu ili obećanje zdravstvenog efekta.

## Health / old knowledge / recipes

Health is not random content. It belongs to the DaniniHub triad.

Add language around:

- old knowledge,
- traditional recipes,
- water as routine,
- family and kitchen habits,
- simple daily rituals,
- no medical promises,
- human review and responsible framing.

Possible SR copy:

> Stara znanja nisu nostalgija. Ona su filter za jednostavne navike: voda, kuhinja, recepti, porodični ritam i svakodnevna disciplina — bez medicinskih obećanja i bez ekstremnih tvrdnji.

## Knjiga utisaka

Add a moderated trust/community block.

It should not fake reviews. It should explain the categories of feedback:

- iskustvo sa proizvodom,
- pitanje ili sugestija,
- iskustvo sa metodom,
- signal za novi case study.

Possible SR copy:

> Knjiga utisaka nije zid lažnih pohvala. To je moderisani prostor za pitanja, iskustva, sugestije i signale koji pomažu da se DaniniNet proizvodi i DaniniHub metoda popravljaju na osnovu stvarne upotrebe.

## Badge system

Use concise badges:

- AI-assisted
- Pitaj AI Gate
- Affiliate link
- Partner product
- DACH-ready
- Balkan-ready
- Global
- Evergreen
- Health disclaimer
- Human review
- No guarantee

## Design direction

- premium dark base,
- ivory readable panels,
- muted gold / lime accent,
- serious cards,
- coherent icons,
- no robot clichés,
- no neon AI aesthetics,
- no guru marketing visual style.

## Implementation boundaries

Do not touch Calije code except for public case-study links.
Do not touch DaniniHub Express/backend.
Do not invent affiliate terms or medical claims.
Do not make lead magnets the main strategy.
Do not remove existing localized copy without replacing it with equal or better localized content.

## Suggested next implementation steps

1. Create a safe branch from main.
2. Update `app/[locale]/page.tsx` with three new localized copy groups:
   - `partners`
   - `heritage`
   - `testimonials`
3. Add one reusable `Badge` component inside the page or shared component file.
4. Render these sections between content and trust, or between method and content depending on layout rhythm.
5. Keep TypeScript strict and avoid unused imports.
6. Open a PR referencing issue #11.
