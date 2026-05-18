import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

const copy = {
  sr: {
    metaTitle: "Šta je affiliate marketing i kako početi bez lažnih obećanja | DaniniNet",
    metaDescription: "Affiliate marketing objašnjen bez nerealnih obećanja: preporuke, provizije, disclosure, izbor proizvoda, SEO i poverenje.",
    eyebrow: "Affiliate marketing · evergreen vodič",
    title: "Šta je affiliate marketing i kako početi bez lažnih obećanja",
    intro: "Affiliate marketing nije magična online zarada, niti sistem u kome samo ubacite link i čekate proviziju. U ozbiljnom obliku, affiliate marketing je odnos poverenja: čitalac ima problem, sadržaj mu pomaže da ga razume, a preporuka se pojavljuje tek kada ima smisla.",
    updated: "Evergreen vodič · DaniniNet standard",
    flow: ["Čitalac", "Problem", "Sadržaj", "Preporuka", "Affiliate link", "Kupovina", "Provizija"],
    trust: ["Koristan sadržaj", "Jasna preporuka", "Transparentan disclosure"],
    sections: {
      whatTitle: "Šta je affiliate marketing?",
      whatText: "Affiliate marketing je model u kome preporučujete proizvod ili uslugu drugog prodavca. Kada korisnik klikne vaš affiliate link i izvrši kupovinu ili drugu dogovorenu radnju, vi možete dobiti proviziju. Kupac obično ne plaća više zbog toga, ali mora znati da link može biti affiliate.",
      notTitle: "Šta affiliate marketing nije",
      notItems: ["nije garantovana zarada", "nije pasivni prihod bez rada", "nije spamovanje linkova", "nije prepisivanje tuđih recenzija", "nije obećanje da će svaki korisnik imati isti rezultat"],
      healthyTitle: "Kako izgleda zdrav affiliate tok",
      healthyText: "Zdrav affiliate tok ne počinje linkom, nego razumevanjem publike. DaniniNet pristup ide ovim redom: problem, pitanje, dokaz, granica, preporuka i tek onda link.",
      nicheTitle: "Kako izabrati nišu",
      nicheText: "Niša ne treba da se bira samo po visini provizije. Bolja niša je ona u kojoj možete dugo pisati koristan sadržaj, razumeti publiku i preporučiti proizvode bez pritiska.",
      productTitle: "Kako izabrati proizvod",
      productText: "Dobar affiliate proizvod mora biti relevantan, razumljiv, dostupan ciljnoj publici, sa jasnim uslovima, reputacijom prodavca i realnom vrednošću za korisnika.",
      seoTitle: "SEO u affiliate marketingu",
      seoText: "SEO članak ne treba da lovi samo kupovne ključne reči. Najstabilniji affiliate sadržaj često počinje informativnim pretragama: šta je, kako radi, za koga je, koje greške izbeći i šta proveriti pre kupovine.",
      disclosureTitle: "Affiliate disclosure nije slabost, nego poverenje",
      disclosureText: "Jasna affiliate napomena ne umanjuje vrednost preporuke. Naprotiv, ona pokazuje da ne skrivate komercijalni odnos i da čitalac može svesno doneti odluku.",
      aiTitle: "Kako se AI uklapa u DaniniNet metodu",
      aiText: "AI može pomoći u strukturi članka, pitanjima, poređenju argumenata i pronalaženju rupa u objašnjenju. Ali AI ne sme izmišljati lično iskustvo, rezultate, zaradu ili dokaze. Zato DaniniNet koristi princip: Pitaj AI — AI pita tebe.",
      mistakesTitle: "Najčešće greške početnika",
      checklistTitle: "DaniniNet affiliate checklist",
      closingTitle: "Zaključak: affiliate marketing počinje poverenjem",
      closingText: "Affiliate marketing može biti realan digitalni kanal, ali ne kao prečica. Njegova dugoročna vrednost nastaje kada sadržaj pomaže čitaocu, preporuka je označena, a obećanja ostaju u granicama dokaza.",
    },
    steps: ["Izaberi temu", "Razumi problem publike", "Napravi koristan sadržaj", "Uvedi proizvod kao opciju", "Označi affiliate link", "Prati signal", "Poboljšaj sadržaj"],
    badBetter: [
      ["Loš pristup", "Bolji pristup"],
      ["Kupi odmah jer je najbolji", "Kome ovo može koristiti i zašto"],
      ["Garantovana zarada", "Nema garancije rezultata"],
      ["Najbolje za svakoga", "Za koga jeste, a za koga nije"],
      ["Sakriven affiliate link", "Jasno označen affiliate odnos"],
    ],
    mistakes: ["biranje proizvoda samo zbog provizije", "pisanje generičkih recenzija", "obećavanje zarade", "skrivanje affiliate odnosa", "ignorisan SEO i interni linkovi", "neproveravanje regionalne dostupnosti", "nepraćenje klikova i konverzija"],
    checklist: ["Ko je čitalac?", "Koji problem ima?", "Koji proizvod može biti opcija?", "Šta ne smeš obećati?", "Gde je disclosure?", "Koji je sledeći korak?", "Kako meriš signal?"],
    faq: [
      ["Da li affiliate marketing garantuje zaradu?", "Ne. Affiliate marketing ne garantuje zaradu, provizije, prodaju ili uspeh kampanje."],
      ["Šta je affiliate link?", "Affiliate link je poseban link preko koga prodavac ili platforma može prepoznati da je korisnik došao preko vaše preporuke."],
      ["Da li kupac plaća više preko affiliate linka?", "U većini programa kupac ne plaća više, ali uslovi zavise od prodavca i platforme."],
      ["Da li treba označiti affiliate link?", "Da. Transparentna affiliate napomena je deo poverenja i odgovorne komunikacije."],
      ["Kako početnik bira prvi proizvod?", "Po relevantnosti za publiku, reputaciji prodavca, jasnim uslovima, dostupnosti i sposobnosti da proizvod objasni bez lažnih obećanja."],
    ],
    links: {
      products: "Pogledaj DaniniNet proizvode",
      dpl: "Primer digitalnog proizvoda",
      caseStudy: "Case study: lokacija kao investitorski argument",
      affiliate: "Affiliate disclosure",
      disclaimer: "Disclaimer",
      ai: "AI transparentnost",
      health: "Zdrav stil života",
      guestbook: "Postavi pitanje u knjizi utisaka",
    },
    disclaimer: "Ovaj članak je edukativan i informativan. Ne predstavlja finansijski, poslovni, poreski ili pravni savet. DaniniNet ne garantuje zaradu, provizije, prodaju, rezultate affiliate kampanja ili uspeh bilo kog proizvoda.",
  },
} as const;

function getCopy(lang: Locale) {
  return copy.sr;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = normalizeLocale(locale);
  const t = getCopy(lang);
  const url = `${siteUrl}/${lang}/blog/sta-je-affiliate-marketing-bez-laznih-obecanja`;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: t.metaTitle,
      description: t.metaDescription,
      siteName: "DaniniNet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}

function FlowDiagram({ items }: { items: readonly string[] }) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Affiliate flow</p>
      <div className="mt-6 grid gap-3 md:grid-cols-7">
        {items.map((item, index) => (
          <div key={item} className="relative rounded-2xl bg-[#f5efe3] p-4 text-center">
            <span className="block text-xs font-semibold text-[#226bbf]">0{index + 1}</span>
            <span className="mt-2 block text-sm font-semibold">{item}</span>
            {index < items.length - 1 ? <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[#226bbf] md:block">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustTriangle({ items }: { items: readonly string[] }) {
  return (
    <div className="rounded-[2rem] bg-[#07142b] p-8 text-white shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Trust triangle</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center">
            <span className="text-sm text-[#d7b46a]">0{index + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function AffiliateMarketingArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = getCopy(lang);
  const articleUrl = `${siteUrl}/${lang}/blog/sta-je-affiliate-marketing-bez-laznih-obecanja`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: t.title,
      description: t.metaDescription,
      url: articleUrl,
      author: { "@type": "Organization", name: "DaniniNet" },
      publisher: { "@type": "Organization", name: "DaniniNet" },
      inLanguage: lang,
      mainEntityOfPage: articleUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DaniniNet", item: `${siteUrl}/${lang}` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/${lang}/blog` },
        { "@type": "ListItem", position: 3, name: t.title, item: articleUrl },
      ],
    },
  ];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/blog/sta-je-affiliate-marketing-bez-laznih-obecanja`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <section className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">{t.updated}</span>
              <Link href={localizedPath(lang, "products")} className="rounded-full bg-[#d9ecff] px-4 py-2 font-semibold text-[#07142b]">{t.links.products}</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <FlowDiagram items={t.flow} />
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:self-start">
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Interni linkovi</p>
            <div className="mt-5 grid gap-3 text-sm">
              <Link href={localizedPath(lang, "products")}>{t.links.products}</Link>
              <Link href={localizedPath(lang, "dpl")}>{t.links.dpl}</Link>
              <Link href={`/${lang}/blog/kako-se-lokacija-pretvara-u-investitorski-argument`}>{t.links.caseStudy}</Link>
              <Link href={`/${lang}/legal/affiliate-disclosure`}>{t.links.affiliate}</Link>
              <Link href={`/${lang}/legal/disclaimer`}>{t.links.disclaimer}</Link>
              <Link href={`/${lang}/legal/ai-transparentnost`}>{t.links.ai}</Link>
              <Link href={localizedPath(lang, "health")}>{t.links.health}</Link>
              <Link href={localizedPath(lang, "guestbook")}>{t.links.guestbook}</Link>
            </div>
          </aside>

          <div className="grid gap-8">
            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.whatTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.whatText}</p>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.notTitle}</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {t.sections.notItems.map((item) => <p key={item} className="rounded-2xl bg-[#f5efe3] p-4 text-[#706a5d]">{item}</p>)}
              </div>
            </section>

            <TrustTriangle items={t.trust} />

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.healthyTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.healthyText}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {t.steps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-[#f5efe3] p-4">
                    <span className="text-sm font-semibold text-[#226bbf]">0{index + 1}</span>
                    <p className="mt-1 font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold">{t.sections.nicheTitle}</h2>
                <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.nicheText}</p>
              </div>
              <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold">{t.sections.productTitle}</h2>
                <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.productText}</p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">Loš pristup vs bolji pristup</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                {t.badBetter.map(([bad, better], index) => (
                  <div key={`${bad}-${better}`} className={`grid md:grid-cols-2 ${index === 0 ? "bg-[#07142b] text-white" : "bg-white text-[#706a5d]"} border-b border-black/10 last:border-b-0`}>
                    <div className="p-4 font-semibold">{bad}</div>
                    <div className="p-4">{better}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.seoTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.seoText}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {["šta je affiliate marketing", "kako početi affiliate marketing", "affiliate marketing za početnike", "affiliate disclosure primer", "najčešće greške affiliate marketing", "kako izabrati affiliate proizvod"].map((kw) => (
                  <span key={kw} className="rounded-full border border-black/10 bg-[#f5efe3] px-4 py-3 text-sm text-[#706a5d]">{kw}</span>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.disclosureTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.disclosureText}</p>
              <Link href={`/${lang}/legal/affiliate-disclosure`} className="mt-6 inline-flex rounded-full bg-[#07142b] px-5 py-3 text-sm font-semibold text-white">{t.links.affiliate}</Link>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.aiTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.sections.aiText}</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-semibold">{t.sections.mistakesTitle}</h2>
                <ul className="mt-5 grid gap-3">
                  {t.mistakes.map((item) => <li key={item} className="rounded-2xl bg-[#f5efe3] p-4 text-[#706a5d]">{item}</li>)}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-[#07142b] p-8 text-white shadow-sm">
                <h2 className="text-3xl font-semibold">{t.sections.checklistTitle}</h2>
                <ul className="mt-5 grid gap-3">
                  {t.checklist.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-300">{item}</li>)}
                </ul>
              </div>
            </section>

            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">FAQ</h2>
              <div className="mt-6 grid gap-4">
                {t.faq.map(([q, a]) => (
                  <div key={q} className="rounded-2xl bg-[#f5efe3] p-5">
                    <h3 className="font-semibold">{q}</h3>
                    <p className="mt-2 leading-7 text-[#706a5d]">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] bg-[#07142b] p-8 text-white shadow-sm">
              <h2 className="text-3xl font-semibold">{t.sections.closingTitle}</h2>
              <p className="mt-5 leading-8 text-slate-300">{t.sections.closingText}</p>
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-slate-300">{t.disclaimer}</p>
            </section>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
