type ShareBarProps = {
  url: string;
  title: string;
  label?: string;
};

function enc(value: string) {
  return encodeURIComponent(value);
}

export function ShareBar({ url, title, label = "Share" }: ShareBarProps) {
  const links = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { name: "WhatsApp", href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
    { name: "Email", href: `mailto:?subject=${enc(title)}&body=${enc(url)}` },
  ];

  return (
    <aside className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm">
      <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.name === "Email" ? undefined : "_blank"}
            rel={item.name === "Email" ? undefined : "noopener noreferrer"}
            className="rounded-full border border-black/10 bg-[#f5efe3] px-4 py-2 text-sm font-semibold text-[#15130f] transition hover:border-[#226bbf]/40 hover:text-[#226bbf]"
          >
            {item.name}
          </a>
        ))}
      </div>
    </aside>
  );
}
