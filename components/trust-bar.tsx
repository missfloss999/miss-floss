const items = [
  { value: "94%", label: "Fewer Missed Calls" },
  { value: "24/7", label: "Always Answering" },
  { value: "48 hrs", label: "Live in Your Clinic" },
  { value: "$12K+", label: "Revenue Recovered / Quarter" },
];

export default function TrustBar() {
  return (
    <div className="relative bg-slate-900 py-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-700/60">
        {items.map((item) => (
          <div key={item.label} className="text-center md:px-8">
            <p className="text-2xl font-bold text-teal-400 tracking-tight">{item.value}</p>
            <p className="text-sm text-slate-400 mt-1 leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
