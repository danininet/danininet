import Link from "next/link";

const navItems = [
  { href: "/", label: "Početna" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/daninihub-metoda", label: "DaniniHub metoda" },
  { href: "/digitalni-marketing", label: "Digitalni marketing" },
  { href: "/affiliate-marketing", label: "Affiliate" },
  { href: "/ai-u-praksi", label: "AI u praksi" },
  { href: "/blog", label: "Blog" },
  { href: "/legal", label: "Legal" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
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

        <nav className="site-nav" aria-label="Glavna navigacija">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
