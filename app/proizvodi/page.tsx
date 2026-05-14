import Link from "next/link";
import { getSiteContent } from "@/lib/siteContent";

export default function ProizvodiPage() {
  const { dpl, bonus } = getSiteContent();

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">DaniniNet proizvodi</p>
            <h1>Proizvodi koji vode od ideje do prodajnog sistema.</h1>
            <p className="lead">
              Prvi fokus je {dpl.title}: proizvod nastao iz realnog DaniniHub
              procesa i Calije Park Residence case study-ja.
            </p>

            <div className="actions">
              <Link href="/proizvodi/digitalna-prodaja-lokacije" className="button">
                DPL prodajna stranica
              </Link>
              <a href={dpl.checkoutHref} className="button button--ghost">
                Kupi za {dpl.launchPrice}
              </a>
            </div>
          </div>

          <aside className="panel">
            <p className="eyebrow">Glavni proizvod</p>
            <h2>{dpl.title}</h2>
            <p className="text">{dpl.subtitle}</p>
            <div className="price">{dpl.launchPrice}</div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <article className="card">
            <strong>PDF proizvod</strong>
            <h3>{dpl.title}</h3>
            <p>{dpl.lead}</p>
          </article>

          <article className="card">
            <strong>Bonus</strong>
            <h3>{bonus.title}</h3>
            <p>{bonus.lead}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
