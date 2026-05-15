type SystemMapProps = {
  title?: string;
  items?: string[];
  variant?: "dark" | "light";
};

const defaultItems = ["Idea", "AI Dialogue", "Content / SEO", "Product", "Trust / Conversion"];

export function SystemMap({ title = "DaniniNet System Map", items = defaultItems, variant = "dark" }: SystemMapProps) {
  const dark = variant === "dark";

  return (
    <div className={dark ? "rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-white" : "rounded-[2rem] border border-black/10 bg-white p-6 text-[#15130f]"}>
      <div className="flex items-center justify-between gap-4">
        <p className={dark ? "text-sm uppercase tracking-[0.22em] text-[#b9d7f0]" : "text-sm uppercase tracking-[0.22em] text-[#226bbf]"}>{title}</p>
        <span className={dark ? "h-px flex-1 bg-white/10" : "h-px flex-1 bg-black/10"} />
      </div>
      <div className="mt-7 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className={dark ? "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4" : "group flex items-center gap-4 rounded-2xl border border-black/10 bg-[#fffaf1] p-4"}>
            <span className={dark ? "grid h-9 w-9 place-items-center rounded-full bg-[#d9ecff] text-sm font-semibold text-[#07142b]" : "grid h-9 w-9 place-items-center rounded-full bg-[#07142b] text-sm font-semibold text-white"}>{index + 1}</span>
            <span className="font-medium">{item}</span>
            {index < items.length - 1 && <span className={dark ? "ml-auto hidden h-px w-10 bg-[#b8944d]/60 md:block" : "ml-auto hidden h-px w-10 bg-[#226bbf]/40 md:block"} />}
          </div>
        ))}
      </div>
      <div className={dark ? "mt-7 h-2 rounded-full bg-gradient-to-r from-[#b8944d] via-[#7db7e8] to-white/20" : "mt-7 h-2 rounded-full bg-gradient-to-r from-[#07142b] via-[#226bbf] to-[#b8944d]"} />
    </div>
  );
}
