type DisclosureType = "affiliate" | "ai-assisted" | "health" | "digital-product" | "general";

const copy: Record<DisclosureType, { title: string; text: string }> = {
  general: {
    title: "Granice i poverenje",
    text: "Sadržaj je edukativnog i informativnog karaktera. DaniniNet koristi metodu Pitaj AI — AI pita tebe: AI može pomoći u strukturi, analizi i pitanjima, ali čovek proverava, misli i donosi odluku.",
  },
  "ai-assisted": {
    title: "AI-assisted content",
    text: "U izradi sadržaja može biti korišćena AI asistencija. AI nije autoritet, ne odlučuje umesto korisnika i ne zamenjuje stručnu proveru. U metodi DaniniHub AI sme da postavi do tri podpitanja radi razjašnjenja.",
  },
  affiliate: {
    title: "Affiliate disclosure",
    text: "Neki linkovi mogu biti affiliate linkovi. DaniniNet može ostvariti proviziju bez dodatnog troška za korisnika. Preporuke moraju ostati transparentne, odgovorne i bez garancije rezultata.",
  },
  health: {
    title: "Health / water disclaimer",
    text: "Sadržaj o vodi, ishrani i zdravom stilu života nije medicinski savet, dijagnoza ili terapija. Za zdravstvene odluke treba konsultovati kvalifikovanog stručnjaka i proveriti dokumentaciju proizvoda.",
  },
  "digital-product": {
    title: "Digital product disclaimer",
    text: "Digitalni proizvodi su edukativni i informativni. Ne predstavljaju pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet i ne garantuju profit, prodaju, investitore ili dozvole.",
  },
};

export function TrustDisclosure({ types = ["general", "ai-assisted"] }: { types?: DisclosureType[] }) {
  const unique = Array.from(new Set(types));
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {unique.map((type) => (
          <div key={type} className="rounded-2xl bg-[#fffaf1] p-5">
            <h3 className="text-base font-semibold text-[#07142b]">{copy[type].title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#706a5d]">{copy[type].text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
