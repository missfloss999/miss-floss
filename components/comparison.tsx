"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const features = [
  "Available 24/7",
  "Books appointments",
  "Reschedules & cancels",
  "SMS confirmations",
  "Human-like voice",
  "Dental context aware",
  "PIPEDA compliant",
  "Multi-location support",
  "Flat monthly pricing",
  "Live in 48 hours",
];

type CellValue = true | false | "partial";

const competitors: { name: string; note: string; values: CellValue[] }[] = [
  {
    name: "Answering Service",
    note: "Takes messages",
    values: [true, false, false, false, false, false, false, true, false, false],
  },
  {
    name: "Human Receptionist",
    note: "9-5 only",
    values: [false, true, true, true, true, true, true, "partial", false, false],
  },
  {
    name: "Generic AI Bot",
    note: "Text-only chat",
    values: [true, "partial", false, "partial", false, false, false, true, "partial", true],
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 border border-teal-200">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-teal-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-50 border border-amber-200">
        <span className="w-2 h-px rounded-full bg-amber-500" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-slate-200">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-slate-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            Comparison
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Why Clinics Choose Miss Floss
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Other options cover some of the problem. Miss Floss solves all of it.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white"
        >
          <table className="w-full" style={{ minWidth: "560px" }}>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider sticky left-0 bg-slate-50 z-10 min-w-[140px]">
                  Feature
                </th>
                <th className="p-4 bg-teal-50 border-x border-teal-100 min-w-[100px]">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                      Miss Floss
                    </span>
                    <span className="text-[10px] text-teal-500 font-normal">
                      AI Receptionist
                    </span>
                  </div>
                </th>
                {competitors.map((c) => (
                  <th key={c.name} className="p-4 min-w-[100px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-slate-600">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        {c.note}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {features.map((feat, i) => (
                <tr
                  key={feat}
                  className={`border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                  }`}
                >
                  <td className={`px-4 py-3.5 text-sm text-slate-700 sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}`}>{feat}</td>
                  <td className="px-4 py-3.5 text-center bg-teal-50/60 border-x border-teal-100">
                    <div className="flex justify-center">
                      <Cell value={true} />
                    </div>
                  </td>
                  {competitors.map((c) => (
                    <td key={c.name} className="px-4 py-3.5 text-center">
                      <div className="flex justify-center">
                        <Cell value={c.values[i]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="flex items-center justify-end gap-5 mt-4 px-1">
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-teal-50 border border-teal-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Included
          </span>
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-50 border border-amber-200">
              <span className="w-1.5 h-px bg-amber-500 rounded-full" />
            </span>
            Partial
          </span>
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-slate-100 border border-slate-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5 text-slate-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            Not available
          </span>
        </div>
      </div>
    </section>
  );
}
