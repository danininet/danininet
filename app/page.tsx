import Link from "next/link";
import { getSiteContent } from "@/lib/siteContent";

export default function HomePage() {
  const content = getSiteContent();

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1>{content.home.title}</h1>
            <p className="lead">{content.home.lead}</p>

            <div className="actions">
              <Link href={content.home.primaryCtaHref} className="button">
                {content.home.primaryCtaLabel}
              </Link>
              <a href={content.home.secondaryCtaHref} className="button button--ghost">
                {content.home.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <aside className="panel">
            <img
              src={content.dpl.coverSr}
              alt="Digitalna prodaja lokacije"
              style={{ width: "100%", borderRadius: "24px" }}
            />
          </aside>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">DaniniNet komercijalni tok</p>
        <h2>DaniniHub metod → Calije case study → DPL proizvod → Gumroad checkout.</h2>

        <div className="grid">
          {content.dpl.sections.slice(0, 3).map((section) => (
            <article key={section.title} className="card">
              <strong>DPL</strong>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
