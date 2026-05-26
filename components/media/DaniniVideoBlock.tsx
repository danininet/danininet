export function DaniniVideoBlock({
  eyebrow = "Video artifact",
  title,
  text,
  src,
  poster,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  src?: string;
  poster?: string;
}) {
  return (
    <section className="rounded-[2.25rem] bg-[#07142b] p-6 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">{title}</h2>
          <p className="mt-4 leading-8 text-slate-300">{text}</p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
          {src ? (
            <video controls preload="metadata" poster={poster} className="aspect-video w-full bg-black">
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex aspect-video items-center justify-center p-8 text-center text-sm leading-7 text-slate-300">
              Video slot prepared. Add MP4 under /public/videos and pass src when the asset is ready.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
