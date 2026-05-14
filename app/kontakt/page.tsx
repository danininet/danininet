import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1>Kontakt za proizvode, saradnju i DaniniHub metodu.</h1>
            <p className="lead">
              Kontakt služi za DPL kupovinu, affiliate saradnju, metodološki
              upit, tehnički problem ili dogovor oko sledećeg proizvoda.
            </p>

            <div className="actions">
              <Link href="/proizvodi" className="button">Pogledaj proizvode</Link>
              <Link href="/daninihub-metoda" className="button button--ghost">Upoznaj metodu</Link>
            </div>
          </div>

          <aside className="panel">
            <p className="eyebrow">Email</p>
            <h2>danininet@daninihub.com</h2>
            <p className="text">
              U prvoj poruci navedi temu: DPL kupovina, affiliate saradnja,
              DaniniHub metoda, tehnički problem ili predlog proizvoda.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
