import { getSiteContent } from "@/lib/siteContent";

export default function ArticlePage() {
  const { blog, dpl } = getSiteContent();

  return (
    <main className="page">
      <article className="section" style={{ maxWidth: "860px" }}>
        <p className="eyebrow">DaniniNet članak</p>
        <h1>{blog.title}</h1>
        <p className="lead">{blog.lead}</p>

        <div className="card" style={{ marginTop: "32px" }}>
          <h2>Oglas prikazuje podatke. Gateway objašnjava argument.</h2>
          <p>
            Investitorski gateway razdvaja činjenice od pretpostavki, pokazuje
            šta je javno, šta ide u zatvoreni brief i šta zahteva pravnu,
            urbanističku, tehničku ili finansijsku proveru.
          </p>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <h2>{dpl.title}</h2>
          <p>{dpl.subtitle}</p>
          <a href={dpl.checkoutHref} className="button">
            Kupi za {dpl.launchPrice}
          </a>
        </div>
      </article>
    </main>
  );
}
