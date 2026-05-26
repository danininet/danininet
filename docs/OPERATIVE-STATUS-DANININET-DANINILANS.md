# Operative Status — DaniniNet + DaniniLans

## Datum

2026-05-26

## Svrha dokumenta

Ovaj dokument je operativni status i radni nastavak za DaniniNet i DaniniLans.

Nije brainstorming, nije skeleton i nije generički plan. Ovo je dokument koji beleži zaključane odluke, urađene artifacte, pravila implementacije i sledeće konkretne korake.

---

# 1. Zaključane odluke

## 1.1 Domeni i email adrese

DaniniLans koristi isključivo:

- `daninilans.daninihub.com`
- `info@daninilans.daninihub.com`

DaniniNet kontakt/adresa:

- `info@danininet.daninihub.com`

Ne koristiti nepostojeće domene.

---

## 1.2 Tehnološki pravac

Za DaniniNet i DaniniLans koristiti:

- Next.js App Router
- Node.js runtime gde treba
- server-side API routes za forme i Brevo integraciju
- metadata API za SEO
- reusable komponente za trust, product cards, video i comparison tables

Ne koristiti Express za javni SEO layer osim ako postoji poseban backend razlog.

---

## 1.3 Metoda

Svi članci, recenzije, proizvodi, vodiči, video scenariji i lead flow-ovi rade po metodi:

**Pitaj AI — AI pita tebe**

Pravilo:

- AI može pomoći u strukturi, analizi i pitanjima.
- AI ne odlučuje umesto čoveka.
- AI sme da postavi maksimalno 3 podpitanja.
- Čovek proverava, misli i donosi odluku.

Ovo važi za poslovne, privatne, online, offline, health, affiliate i digital-product teme.

---

# 2. DaniniNet — uloga

DaniniNet je javni prodajno-informativni artifact layer.

Primarna uloga:

- centralni proizvodi
- affiliate/product registry
- digitalni proizvodi
- blog/SEO hub
- lead capture
- edukacija početnika
- transparentne preporuke
- product cards
- trust/disclosure sistem

DaniniNet nije generički affiliate blog i nije katalog nasumičnih linkova.

---

# 3. DaniniLans — uloga

DaniniLans je DaniniHub health/water/lifestyle artifact layer.

Primarna uloga:

- voda
- hidratacija
- filteri
- zdrav stil života
- ishrana
- rutine
- ergonomija digitalnog života
- health/water recenzije
- AI-assisted edukacija
- transparentne affiliate preporuke

DaniniLans nastaje iz postojećih NutriLans materijala i preuzima novi naziv, bolji brend i jasniju DaniniHub metodu.

---

# 4. Affiliate/product registry

Registry je centralni izvor istine za proizvode i partnere.

Fajl:

- `lib/affiliate/registry.ts`

U registry ulaze:

- owned products
- affiliate partners
- partner products
- review products
- rejected products
- statusi
- tržišta
- publika
- risk level
- method fit
- disclosure types
- linkovi

Affiliate linkovi ne idu u `.env`.

`.env` se koristi samo za tajne i tehničku konfiguraciju, npr. Brevo API key i list IDs.

---

# 5. Status proizvoda i partnera

## 5.1 Owned / active

### Digitalna prodaja lokacije

Glavni DaniniNet digitalni proizvod.

Status: active / flagship

---

## 5.2 Owned / DaniniLans

### DaniniLans

Health/water/lifestyle artifact layer.

Status: owned / future artifact / active planning

---

## 5.3 Approved

### Hostinger

Status: approved

Uloga:

- hosting
- domeni
- blog setup
- affiliate početnici
- landing page infrastruktura

---

## 5.4 Approved-selective

### Amazon PartnerNet

Status: approved-selective

Dozvoljeno samo kurirano:

- water/filter products
- creator setup
- ergonomija
- knjige
- zdrav rad za računarom

Ne praviti generički Amazon katalog.

---

## 5.5 Review

### WELLAN

Status: review

Dozvoljeno uz stroge health/trust granice.

### UMH

Status: review

Dozvoljeno uz neutralan jezik i bez medicinskih tvrdnji.

### Angela Sukau

Status: review

Ne ide javno dok se ne proveri konkretna ponuda, ton, uslovi i tvrdnje.

### Grüne Perle

Status: needs-verification

Ne ide javno dok se ne potvrdi tačan proizvod/link.

---

## 5.6 Rejected

### Gunnar Kessler

Status: rejected

Razlog:

- guru / quick-money narativ rizik
- trust konflikt sa DaniniNet pozicioniranjem
- ne ide javno

---

# 6. Brevo lead flow

Mailto forme se ne koriste za production.

Fajl specifikacije:

- `docs/brevo-lead-flow.md`

Pravilo:

- frontend forma šalje na server-side API route
- Brevo API key je server-only
- nema API ključa u browseru
- forma mora imati consent
- forma mora imati disclosure
- ne prikupljati nepotrebne podatke
- ne prikupljati osetljive zdravstvene podatke

Planirane rute:

- `POST /api/leads/danininet`
- `POST /api/leads/daninilans`

---

# 7. Komponente dodate u repo

## 7.1 TrustDisclosure

Fajl:

- `components/trust/TrustDisclosure.tsx`

Namena:

- AI disclosure
- affiliate disclosure
- health disclaimer
- digital product disclaimer
- general trust disclaimer

---

## 7.2 ProductCard

Fajl:

- `components/products/ProductCard.tsx`

Namena:

- kartice proizvoda
- affiliate kartice
- owned product cards
- review product cards

---

## 7.3 DaniniVideoBlock

Fajl:

- `components/media/DaniniVideoBlock.tsx`

Namena:

- video artifact sekcija
- DPL intro
- DaniniLans intro
- AI method explainer
- hydration/water explainers

---

## 7.4 ComparisonTable

Fajl:

- `components/tables/ComparisonTable.tsx`

Namena:

- poređenja filtera
- water systems comparison
- public vs private
- ordinary listing vs digital gateway
- product comparison
- review comparison

---

# 8. Dokumentacija dodata u repo

- `docs/affiliate-product-registry.md`
- `docs/daninilans-project-brief.md`
- `docs/daninilans-seo-visual-checklist.md`
- `docs/brevo-lead-flow.md`
- `docs/OPERATIVE-STATUS-DANININET-DANINILANS.md`

---

# 9. SEO pravila

Svaka važna stranica mora imati:

- title
- description
- canonical URL
- Open Graph image
- Twitter/X image
- robots rule
- schema gde je opravdano
- internal links
- disclosure blok

DaniniLans canonical baza:

- `https://daninilans.daninihub.com`

---

# 10. Visual/content pravila

Stranice treba da koriste:

- hero sekcije
- ikonice
- tabele
- dijagrame
- video blokove
- disclosure cards
- product/review cards
- comparison tables
- CTA sekcije

Izbegavati:

- guru stil
- aggressive sales banner
- medicinska obećanja
- lažne rezultate
- miracle claims
- fake authority

---

# 11. Blog metodologija

Svaki članak:

1. Problem
2. Kontekst
3. Do 3 AI podpitanja
4. Analiza
5. Artifact / praktičan izlaz
6. Čovek donosi odluku
7. Disclaimer
8. CTA

---

# 12. Sledeći redosled rada

## 12.1 DaniniNet

1. Proširiti Products page da koristi registry i prikazuje više proizvoda.
2. Očistiti zabranjene prompt izraze iz postojećih stranica.
3. Proširiti Blog hub na kategorije.
4. Uvesti TrustDisclosure blokove.
5. Pripremiti Brevo API lead route.
6. Ukloniti mailto logiku iz production formi.

## 12.2 DaniniLans

1. Kreirati poddomen `daninilans.daninihub.com`.
2. Napraviti Next.js App Router structure.
3. Postaviti homepage.
4. Postaviti SEO metadata.
5. Postaviti health/water content cluster.
6. Dodati prvi video block.
7. Dodati water/filter comparison page.
8. Dodati disclosure page.
9. Povezati lead formu preko Brevo route.

---

# 13. Pravilo kvaliteta

Bez skeletona.

Svaki sledeći artifact mora imati:

- jasnu svrhu
- jasan status
- jasan disclaimer
- SEO namenu
- gde se koristi
- šta ne sme da tvrdi
- kako se uklapa u DaniniHub metodu

---

# 14. Kratak handoff za novi chat

Nastavljamo DaniniNet + DaniniLans.

Repo:
- `danininet/danininet`

Zaključano:
- DaniniLans domen: `daninilans.daninihub.com`
- DaniniLans email: `info@daninilans.daninihub.com`
- DaniniNet email: `info@danininet.daninihub.com`
- metoda: Pitaj AI — AI pita tebe
- AI max 3 podpitanja
- čovek donosi odluku
- affiliate linkovi u registry, ne u `.env`
- Brevo API server-side
- mailto ne koristiti za production
- Gunnar Kessler rejected
- Hostinger approved
- Amazon selective
- WELLAN/UMH review
- Angela review
- Grüne Perle needs-verification

Najvažniji fajlovi:
- `lib/affiliate/registry.ts`
- `components/trust/TrustDisclosure.tsx`
- `components/products/ProductCard.tsx`
- `components/media/DaniniVideoBlock.tsx`
- `components/tables/ComparisonTable.tsx`
- `docs/brevo-lead-flow.md`
- `docs/daninilans-project-brief.md`
- `docs/daninilans-seo-visual-checklist.md`
- `docs/affiliate-product-registry.md`
- `docs/OPERATIVE-STATUS-DANININET-DANINILANS.md`

Naredni rad:
1. Products page registry integration.
2. Blog hub category upgrade.
3. Brevo API route.
4. DaniniLans homepage structure.
5. SEO metadata and visual content system.
