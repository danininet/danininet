import { getSiteContent } from "@/lib/siteContent";

export default function DigitalnaProdajaLokacijePage() {
  const { dpl, bonus } = getSiteContent();

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">{dpl.eyebrow}</p>
            <h1>{dpl.title}</h1>
            <p className="lead">{dpl.subtitle}</p>
            <p className="text">{dpl.lead}</p>

            <div className="actions">
              <a href={dpl.checkoutHref} className="button">
                Kupi DPL PDF — {dpl.launchPrice}
              </a>
              <a href="/proizvodi/dpl-bonus-pack" className="button button--ghost">
                Pogledaj Bonus Pack
              </a>
            </div>
          </div>

          <aside className="panel">
            <img
              src={dpl.coverSr}
              alt={dpl.title}
              style={{ width: "100%", borderRadius: "24px" }}
            />
            <div className="price">{dpl.launchPrice}</div>
            <p className="text">Regular cena: {dpl.regularPrice}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Šta dobijaš</p>
        <h2>Radni okvir za jasniju digitalnu prezentaciju.</h2>

        <div className="grid">
          {dpl.sections.map((section) => (
            <article key={section.title} className="card">
              <strong>DPL okvir</strong>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">Uključeno</p>
            <h2>{bonus.title}</h2>
            <p className="lead">{bonus.lead}</p>
            <div className="actions">
              <a href={dpl.checkoutHref} className="button">
                Kupi za {dpl.launchPrice}
              </a>
            </div>
          </div>

          <aside className="panel">
            <p className="eyebrow">Granice</p>
            <h2>Edukativni proizvod, ne garancija ishoda.</h2>
            <p className="text">{dpl.disclaimer}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
