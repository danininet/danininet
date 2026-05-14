import Link from "next/link";

export default function CalijeCaseStudyPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">Proof artifact</p>
            <h1>Calije Park Residence</h1>
            <p className="lead">
              Calije Park Residence ostaje javni dokaz procesa: kako se realna
              lokacija može pretvoriti u gateway, brief logiku, vizuelni narativ
              i lead tok.
            </p>
            <p className="text">
              Privatni brief, pregovarački detalji i poverljivi materijali ne
              idu u javni DaniniNet sloj.
            </p>

            <div className="actions">
              <Link href="/proizvodi/digitalna-prodaja-lokacije" className="button">DPL proizvod</Link>
              <a href="https://calije.daninihub.com" className="button button--ghost" target="_blank" rel="noreferrer">
                Otvori proof artifact
              </a>
            </div>
          </div>

          <aside className="panel">
            <p className="eyebrow">Granica</p>
            <h2>Case study, ne javni pregovarački dokument.</h2>
            <p className="text">
              Calije se koristi kao dokaz metode, ali ne kao master stil
              DaniniNet sajta i ne kao mesto za privatne informacije.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
