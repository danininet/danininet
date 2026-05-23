# DaniniNet Visual System Diagrams v01

## Purpose

This file defines visual assets, diagrams, tables and UI blocks for the next DaniniNet implementation pass. These visuals should help the site communicate monetization, SEO structure, internal linking, partner logic and the DaniniHub OS method without generic AI clichés.

## Visual style

- Premium dark base: charcoal / deep navy
- Ivory readable cards
- Muted gold or muted lime accent
- Swiss-minimal layout discipline
- Serious icons, no neon robots, no cyber clichés
- Use badges, flow arrows, cards, proof blocks and tables

## 1. Core system diagram

```mermaid
flowchart LR
  A[DaniniHub OS\nMethod & decision engine] --> B[DaniniNet\nPublic commercial portal]
  B --> C[Digital products]
  B --> D[Mini audits & services]
  B --> E[Affiliate / partner products]
  B --> F[SEO knowledge hubs]
  B --> G[Case studies]
  G --> H[Calije Park Residence\nProof artifact]
  E --> I[UMH Technologie via GrünePerlen]
  E --> J[Amazon evergreen selection]
  F --> K[Old knowledge / recipes / water routines]
```

### UI interpretation

Use as a homepage graphic block:

- Left card: DaniniHub OS
- Center card: DaniniNet
- Right column: revenue paths
- Bottom proof card: Calije Park Residence
- Accent badges: Method, Product, Partner, Proof, SEO

## 2. Pitaj AI decision gate

```mermaid
flowchart TD
  A[Idea / product / partner offer] --> B{Pitaj AI — AI pita tebe}
  B --> C[Who is it for?]
  B --> D[What proof exists?]
  B --> E[What must not be promised?]
  B --> F[What is the next action?]
  C --> G[Artifact]
  D --> G
  E --> G
  F --> G
  G --> H[Page / product / audit / partner link]
```

### UI interpretation

Create as a repeated component:

- Small box title: `Pitaj AI — AI pita tebe`
- Four question chips:
  - Kome služi?
  - Koji dokaz postoji?
  - Šta ne obećavamo?
  - Koji je sledeći korak?

This block should appear on product, affiliate, health and case-study pages.

## 3. Monetization ladder

| Level | Offer | Price model | Role | Main CTA |
|---|---:|---:|---|---|
| 1 | Digitalna prodaja lokacije | 29 EUR launch / 49 EUR regular | First owned digital product | Buy guide |
| 2 | Mini Audit | 49 EUR | Low-friction service | Request audit |
| 3 | Gateway Brief | 149–299 EUR | Structured artifact | Order brief |
| 4 | Full Gateway Setup | 499–999 EUR | Implementation package | Start setup |
| 5 | Affiliate / Partner | Commission-based | Supporting revenue | View partner product |
| 6 | Directory Premium | 19–49 EUR/month | Recurring revenue | Join directory |
| 7 | Featured sponsor | 99 EUR/month or campaign | Category visibility | Become sponsor |

### UI interpretation

Use a vertical stepper or horizontal ladder. Make `Digitalna prodaja lokacije`, `Mini Audit`, and `UMH/GrünePerlen` visible early.

## 4. Homepage commercial flow

```mermaid
flowchart TD
  H[Homepage] --> M[Method\nPitaj AI — AI pita tebe]
  H --> P[Owned product\nDigitalna prodaja lokacije]
  H --> A[Mini Audit]
  H --> T[Tools / Affiliate evergreen]
  H --> W[Water & routines]
  H --> C[Calije case study]
  H --> L[Legal & Trust]

  P --> A
  C --> P
  T --> L
  W --> L
  A --> B[Gateway Brief]
  B --> S[Full Gateway Setup]
```

### UI interpretation

Homepage must not only explain the brand. It must show routes to money:

- Buy product
- Request mini audit
- View partner products
- Open case study
- Read trust/legal

## 5. SEO / internal linking map

```mermaid
flowchart LR
  Home[/sr /de /en/] --> Method[Method]
  Home --> Products[Products]
  Home --> Tools[Tools]
  Home --> Health[Water / routines]
  Home --> Case[Calije case study]
  Home --> Legal[Legal & Trust]

  Products --> DPL[Digital Location Sales]
  DPL --> Case
  DPL --> Legal
  DPL --> Method

  Tools --> Affiliate[Affiliate evergreen]
  Affiliate --> Disclosure[Affiliate disclosure]
  Affiliate --> HealthDisclaimer[Health disclaimer]
  Affiliate --> UMH[UMH Technologie / GrünePerlen]

  Health --> Recipes[Old knowledge / recipes]
  Recipes --> HealthDisclaimer
  Health --> UMH
```

### UI interpretation

Add internal link panels at bottom of each page:

- Related product
- Related method
- Related trust page
- Related case study
- Next action

## 6. Affiliate card structure

| Field | Example |
|---|---|
| Product | UMH Technologie via GrünePerlen |
| Category | Water / Routine / Health |
| Region | DACH-ready |
| Badge | Partner product, Affiliate link, Health disclaimer |
| For whom | Users interested in water routine and responsible purchase decisions |
| Not for | Users expecting medical treatment claims |
| Question | Da li ti treba bolja dnevna rutina, manje plastike, ukus vode ili tvrdnja koju moraš posebno proveriti? |
| Disclosure link | Affiliate disclosure + Health disclaimer |

## 7. Badge system

Recommended badge groups:

### Trust
- Human review
- No guarantee
- Health disclaimer
- Affiliate disclosure
- AI transparency

### Region
- DACH-ready
- Balkan-ready
- Global

### Commercial
- Digital product
- Partner product
- Affiliate link
- Mini audit
- Evergreen

### Method
- Pitaj AI Gate
- Proof before claim
- Artifact before campaign
- Question before recommendation

## 8. Icon system

| Pillar | Icon direction | Avoid |
|---|---|---|
| Income | chart, transaction, market path | money rain, hype arrows |
| Intelligence | question, dialogue, decision gate | robot face, neon brain |
| Health | water drop, kitchen, routine | medical cross claims |
| Artifact | document layers, proof card | generic file icon only |
| Partner | network, handshake, link | random chain link spam |
| Trust | shield, check, disclosure card | fake award badges |

## 9. Suggested homepage visual blocks

### Block A — System map
A dark hero-adjacent diagram showing DaniniHub OS → DaniniNet → revenue paths.

### Block B — Monetization ladder
A premium ivory section with the seven revenue levels.

### Block C — Decision gate
A reusable dark card with four question chips.

### Block D — Affiliate partner card
A trust-first partner card for UMH Technologie via GrünePerlen.

### Block E — Internal linking panel
At bottom of pages, show next steps with descriptive links.

## 10. Implementation rules

- Use semantic HTML where possible.
- Do not hide important links inside only visual graphics.
- Diagrams must have text equivalents for SEO and accessibility.
- If using SVG diagrams, keep labels as text where possible.
- Every visual block must support SR/DE/EN localization.
- No private Calije assets.
- No invented affiliate claims.
- No medical claims.
