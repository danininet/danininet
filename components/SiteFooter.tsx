import Link from "next/link";

const links = [
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/daninihub-metoda", label: "DaniniHub metoda" },
  { href: "/affiliate-marketing", label: "Affiliate" },
  { href: "/blog", label: "Blog" },
  { href: "/legal", label: "Legal" },
  { href: "/kontakt", label: "Kontakt" },
];

const legal = [
  { href: "/legal/impressum", label: "Impressum" },
  { href: "/legal/datenschutz", label: "Datenschutz" },
  { href: "/legal/agb", label: "AGB" },
  { href: "/legal/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/legal/ai-transparency", label: "AI transparency" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section>
          <Link href="/" className="site-brand" aria-label="DaniniNet početna">
            <img
              src="/brand/danininet_brand_system_v01/danininet-master-mark.svg"
              alt=""
              className="site-brand__mark"
              aria-hidden="true"
            />
            <span className="site-brand__text">
              <strong>DaniniNet</strong>
              <small>Products · AI · Trust</small>
            </span>
          </Link>

          <p>
            DaniniNet je prodajno-informativni portal DaniniHub ekosistema:
            digitalni proizvodi, affiliate marketing, AI dijalog i odgovoran trust sloj.
          </p>
        </section>

        <section className="site-footer__columns">
          <div>
            <h2>Portal</h2>
            {links.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div>
            <h2>Legal</h2>
            {legal.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
