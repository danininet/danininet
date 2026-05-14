import Link from "next/link";
import { getSiteContent } from "@/lib/siteContent";

export default function DplBonusPackPage() {
  const { bonus, dpl } = getSiteContent();

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">DPL Bonus Pack</p>
            <h1>{bonus.title}</h1>
            <p className="lead">{bonus.lead}</p>

            <div className="actions">
              <Link href="/proizvodi/digitalna-prodaja-lokacije" className="button">
                Pogledaj DPL
              </Link>
              <a href={dpl.checkoutHref} className="button button--ghost">
                Kupi za {dpl.launchPrice}
              </a>
            </div>
          </div>

          <aside className="panel">
            <img
              src="/products/dpl-bonus-cover-sr.png"
              alt={bonus.title}
              style={{ width: "100%", borderRadius: "24px" }}
            />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          {bonus.items.map((item) => (
            <article key={item} className="card">
              <strong>Bonus</strong>
              <h3>{item}</h3>
              <p>Radni materijal za primenu DPL logike.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
