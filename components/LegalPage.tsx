type LegalPageProps = {
  title: string;
  children?: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="page">
      <section className="section">
        <p className="eyebrow">Legal & Trust</p>
        <h1>{title}</h1>
        <div className="panel">
          <div className="text">
            {children ?? (
              <p>
                Ova stranica je deo DaniniNet Legal & Trust sloja. Sadržaj je
                informativan i ne predstavlja pravni savet.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
