# NEW CHAT HANDOFF — DaniniLans

## Project

DaniniLans

## Canonical domain

`daninilans.daninihub.com`

## Email

`info@daninilans.daninihub.com`

## Repository

Target repository:

`danininet/daninilans`

Current repository status:

The repo currently contains only README and is not yet importable by Hostinger as a framework project.

It needs real Next.js structure before Hostinger import:

- package.json
- next.config.ts
- tsconfig.json
- app/layout.tsx
- app/page.tsx
- app/globals.css
- public assets

---

# Strategic decision

DaniniLans must be a separate project/site, not mixed into DaniniNet work.

Reason:

- cleaner SEO authority
- health/water topical focus
- separate trust/disclaimer requirements
- independent subdomain
- separate Brevo list
- easier content production

---

# Relationship to DaniniNet

DaniniNet remains:

- product layer
- affiliate/product registry
- commercial overview
- digital products
- general affiliate/business content

DaniniLans becomes:

- health/water/lifestyle editorial authority layer
- water and hydration content
- filter and healthy lifestyle reviews
- AI-assisted decision method content
- responsible affiliate recommendations

Reviews for water/health/lifestyle should primarily live on DaniniLans.

Product registry and commercial summaries remain connected to DaniniNet.

---

# Method

Everything follows:

**Pitaj AI — AI pita tebe**

Rules:

- AI may help structure content, comparisons and questions.
- AI may ask up to 3 clarification questions.
- AI does not decide for the user.
- Human thinks, verifies and decides.
- Every article/review must include trust/disclaimer layer.

---

# Brand positioning

DaniniLans is not:

- generic wellness blog
- miracle health site
- guru funnel
- fake medical authority
- random affiliate catalog
- AI-generated SEO spam

DaniniLans is:

- evidence-aware
- practical
- calm
- premium
- human-led
- AI-assisted
- trust-first
- health/water/lifestyle artifact layer

---

# Main topics

1. Water quality
2. Hydration
3. Home water filters
4. Water treatment systems
5. Healthy lifestyle
6. Nutrition basics
7. Healthy digital work routine
8. Ergonomics
9. Responsible product reviews
10. AI-assisted decision method

---

# Initial pages

1. Home
2. Voda / Water
3. Hidratacija
4. Filteri
5. Recenzije
6. Zdrav stil života
7. Metoda
8. Disclosure
9. Kontakt

---

# Initial article plan

1. Zašto DaniniLans nije običan health blog
2. Kako razmišljati o kvalitetu vode bez panike i bez hype-a
3. Hidratacija: šta možeš da proveriš pre nego što kupiš bilo šta
4. Filteri za vodu: osnovne razlike, prednosti i ograničenja
5. WELLAN i UMH: neutralan pregled bez medicinskih obećanja
6. AI-assisted dijalog za zdravije svakodnevne odluke
7. Zdrav rad za računarom: voda, pauze, ergonomija i rutina

---

# Visual and SEO requirements

Every important page should include:

- metadata title
- metadata description
- canonical URL
- Open Graph image
- clean hero visual
- icons
- comparison table when useful
- video block where relevant
- trust/disclaimer section
- internal links
- FAQ section for evergreen pages

Visual mood:

- calm
- premium
- clean
- water/flow inspired
- no neon AI cliché
- no miracle health imagery
- no guru banners

---

# First video

Title:

`Zašto DaniniLans nije običan health blog`

Length:

60–90 seconds

Purpose:

- explain method
- explain AI-assisted dialogue
- explain human decision layer
- explain disclosure
- introduce water/hydration/lifestyle focus

---

# Technical stack

Use:

- Next.js App Router
- TypeScript
- Tailwind
- metadata API
- server-side Brevo route
- reusable components

Do not use Express for the public site.

---

# Brevo

DaniniLans uses its own lead list and email identity:

- `info@daninilans.daninihub.com`
- Brevo API server-side only
- no mailto forms in production
- no API key in frontend
- no sensitive health data collection

Suggested route:

`POST /api/leads/daninilans`

---

# Mandatory disclaimers

Health:

Content about water, nutrition and healthy lifestyle is educational and informational. It is not medical advice, diagnosis or therapy.

Affiliate:

Some links may be affiliate links. DaniniHub/DaniniLans may earn a commission without additional cost to the user.

AI:

AI may assist in structuring questions, comparisons and explanations. AI is not an authority and does not replace human judgement or expert verification.

---

# Existing source material

Drive contains existing NutriLans materials that should be reviewed and restructured into DaniniLans:

- water/hydration PDF
- NutriLans nutrition documents
- water filter and product recommendation content
- WELLAN / UMH related material

Do not copy blindly. Restructure under DaniniHub method and trust rules.

---

# First new-chat task

In the new DaniniLans project chat:

1. Inspect repo `danininet/daninilans`.
2. Build real Next.js App Router foundation.
3. Add homepage with SEO metadata.
4. Add disclosure system.
5. Add first content cluster plan.
6. Prepare Hostinger import compatibility.
7. Do not mix DaniniNet product work into this repo.

---

# Current priority before DaniniLans build

Finish DaniniNet live-ready flow first:

1. products page cleanup and expansion
2. registry integration
3. Brevo lead flow
4. blog hub cleanup
5. deploy/import check

Then start DaniniLans as separate build.
