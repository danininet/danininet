export function DisclaimerBlock({
  title = "Disclaimer",
  text
}: {
  title?: string;
  text: string;
}) {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
      <h2 className="text-lg font-black">{title}</h2>
      <p className="mt-3 text-sm leading-7">{text}</p>
    </section>
  );
}
