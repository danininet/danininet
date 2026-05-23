# Codex Task — Homepage Commercial Polish v01

## Objective

Implement the first focused DaniniNet homepage commercial polish in `app/[locale]/page.tsx`.

This is a code task, not another strategy document.

## Context

The repository already contains strategy and implementation references:

- `docs/danininet-polish-brief-v01.md`
- `docs/danininet-seo-internal-linking-brief-v01.md`
- `docs/danininet-monetization-sprint-brief-v01.md`
- `docs/danininet-visual-system-diagrams-v01.md`
- `docs/danininet-home-ui-implementation-brief-v01.md`
- `docs/danininet-implementation-backlog-v01.md`
- `content/danininet-home-polish-sections-v01.md`

## Target file

`app/[locale]/page.tsx`

## Implementation scope

Update the existing page. Do not replace it with a new skeleton.

Add four homepage layers:

1. Monetization ladder
2. Partner / affiliate trust layer
3. Old knowledge / recipes / water routine layer
4. Knjiga utisaka / moderated feedback layer

## Required type additions

Extend `Copy` with:

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

## Required component additions

Add local `Badge` component:

```tsx
function Badge({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const toneClass = tone === "dark"
    ? "border-[#C5A35A]/35 bg-[#C5A35A]/10 text-[#E9D8A8]"
    : "border-[#C5A35A]/30 bg-[#C5A35A]/10 text-[#8F7133]";
  return <span className={`rounded-full border px-3 py-1 text-xs font-medium ${toneClass}`}>{children}</span>;
}
```

## Section placement

Place new sections after the existing product/method section and before the existing content section.

Recommended order:

1. existing hero
2. existing system
3. existing pillars
4. existing product/method
5. new monetization ladder
6. new partners section
7. new heritage section
8. new testimonials section
9. existing content
10. existing trust
11. existing final CTA

## SR copy

### monetization

Title: `Put od ideje do prihoda mora biti vidljiv.`
Text: `DaniniNet ne gradi publiku bez pravca. Svaka poseta treba da ima sledeći korak: vodič, mini audit, gateway brief, partner proizvod ili dokazni case study.`
Items:

- `01` / `Digitalna prodaja lokacije` / `29 EUR launch · 49 EUR regular` / `Prvi digitalni proizvod` / `/sr/proizvodi/digitalna-prodaja-lokacije`
- `02` / `Mini Audit` / `49 EUR` / `Brz ulaz u uslugu` / `/sr/usluge/mini-audit`
- `03` / `Gateway Brief` / `149–299 EUR` / `Strukturisan poslovni artifact` / `/sr/usluge/gateway-brief`
- `04` / `Full Gateway Setup` / `499–999 EUR` / `Implementacioni paket` / `/sr/usluge/full-gateway-setup`
- `05` / `Partner / affiliate` / `Provizija` / `Podržavajući prihod` / `/sr/alati/affiliate-evergreen`
- `06` / `Premium adresar` / `19–49 EUR mesečno` / `Recurring layer` / `/sr/partneri`

### partners

Title: `Partner proizvodi nisu reklama. Oni prolaze kroz DaniniHub pitanje.`
Text: `Svaki alat, knjiga, proizvod ili partner mora imati kontekst: kome služi, kome ne služi, u kom regionu ima smisla, koja ograničenja postoje i šta korisnik treba da proveri pre kupovine.`
Cards:

1. UMH Technologie preko GrünePerlen
   - key: water
   - badges: Partner product, Affiliate link, Health disclaimer, DACH-ready
   - text: Partnerski proizvod u okviru teme voda, rutina i odgovorna kupovina. Predstavlja se bez medicinskih obećanja i bez tvrdnji o lečenju.
   - question: Pitaj AI — AI pita tebe: da li ti treba bolja dnevna rutina, manje plastike, ukus vode ili tvrdnja koju moraš posebno proveriti?
   - href: `/sr/partneri/umh-technologie-grueneperlen`

2. Amazon evergreen izbor
   - key: affiliate
   - badges: Evergreen, Affiliate link, Global, Human review
   - text: Knjige, home-office oprema, video/content alati, kuhinjski dodaci i praktični proizvodi koji mogu podržati rad, rutinu i učenje.
   - question: Da li ovaj proizvod rešava problem koji imaš danas, ili samo kupuješ osećaj napretka?
   - href: `/sr/alati/affiliate-evergreen`

3. Digitalni alati i partneri
   - key: digital
   - badges: AI-assisted, DACH-ready, No guarantee
   - text: AI, marketing, SEO, video i produktivnost alati biraju se po upotrebljivosti, a ne po hype-u.
   - question: Da li ćeš ovaj alat koristiti u narednih sedam dana?
   - href: `/sr/alati`

### heritage

Title: `Stara znanja nisu nostalgija. Ona su filter za svakodnevnu disciplinu.`
Text: `DaniniNet Health sloj povezuje vodu, stare recepte, kuhinju, porodične navike i jednostavne dnevne rituale. Ne prodaje medicinska obećanja, već odgovoran okvir za navike koje korisnik može razumeti, proveriti i uklopiti u život.`
Badges: Old knowledge, Water routine, Recipes, Human review, Health disclaimer
Href: `/sr/stara-znanja`

### testimonials

Title: `Knjiga utisaka nije zid lažnih pohvala.`
Text: `To je moderisan prostor za pitanja, iskustva, sugestije i signale iz stvarne upotrebe. Utisci pomažu da se DaniniNet proizvodi i DaniniHub metoda popravljaju, a ne da se pravi veštački marketing.`
Categories: Iskustvo sa proizvodom, Pitanje ili sugestija, Iskustvo sa metodom, Signal za novi case study
Href: `/sr/knjiga-utisaka`

## DE and EN copy

Use the copy already prepared in:

`content/danininet-home-polish-sections-v01.md`

Make DE and EN equivalent, not empty placeholders.

## UI requirements

- Use existing dark/ivory/gold design language.
- Use `Icon` component for partner cards.
- Use real text links via `Link`.
- Use mapped arrays with stable keys.
- Keep typography premium and calm.
- Avoid clutter.

## SEO requirements

- Every visible card must link to a stable localized URL.
- Do not use `#` links.
- Use descriptive link text.
- Keep visible text equivalent to any visual flow.

## Safety boundaries

- Do not touch Calije code.
- Do not touch DaniniHub backend.
- Do not link private Calije files.
- Do not create new dependencies.
- Do not add medical claims.
- Do not add fake reviews.
- Do not promise profit, sales, investors or health results.
- Do not invent affiliate terms.

## Build expectations

After patch:

- TypeScript should pass.
- Lint should not complain about unused imports.
- If `Image` is unused, remove it.
- `ReactNode` must remain if `Card` and `Badge` use it.

## Acceptance checklist

- Homepage visibly routes to Digitalna prodaja lokacije.
- Homepage visibly routes to Mini Audit.
- Homepage includes UMH / GrünePerlen card.
- Homepage includes old knowledge / recipes / water routine block.
- Homepage includes Knjiga utisaka block.
- Homepage includes meaningful badges.
- Homepage keeps existing content and trust sections.
- Homepage remains localized SR/DE/EN.
- No private assets or unsafe claims are introduced.
