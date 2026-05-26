import Link from "next/link";

export type ProductCardProps = {
  label: string;
  title: string;
  text: string;
  status: string;
  href?: string;
  points?: string[];
  cta?: string;
};

export function ProductCard({
  label,
  title,
  text,
  status,
  href = "#",
  points = [],
  cta = "Otvori",
}: ProductCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-[#226bbf]">{label}</p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#07142b]">{title}</h3>
      <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>

      <div className="mt-5 inline-flex rounded-full bg-[#fff7e8] px-4 py-2 text-sm font-semibold text-[#795d1e]">
        {status}
      </div>

      {points.length > 0 ? (
        <ul className="mt-5 grid gap-2 text-sm text-[#706a5d]">
          {points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      ) : null}

      <Link
        href={href}
        className="mt-6 inline-flex rounded-full bg-[#07142b] px-5 py-3 text-sm font-semibold text-white"
      >
        {cta}
      </Link>
    </article>
  );
}
