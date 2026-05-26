type ComparisonRow = {
  label: string;
  valueA: string;
  valueB: string;
};

export function ComparisonTable({
  title,
  leftTitle,
  rightTitle,
  rows,
}: {
  title: string;
  leftTitle: string;
  rightTitle: string;
  rows: ComparisonRow[];
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/10 bg-[#07142b] px-6 py-5 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#f7f8fb] text-sm uppercase tracking-[0.12em] text-[#4d6078]">
              <th className="px-6 py-4">Tema</th>
              <th className="px-6 py-4">{leftTitle}</th>
              <th className="px-6 py-4">{rightTitle}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-black/5 align-top">
                <td className="px-6 py-5 font-semibold text-[#07142b]">{row.label}</td>
                <td className="px-6 py-5 leading-7 text-[#706a5d]">{row.valueA}</td>
                <td className="px-6 py-5 leading-7 text-[#706a5d]">{row.valueB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
