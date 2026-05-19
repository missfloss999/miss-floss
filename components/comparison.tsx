"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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

const missFlossValues: CellValue[] = features.map(() => true);

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
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-50 border border-teal-200 shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-teal-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-50 border border-amber-200 shrink-0">
        <span className="w-2 h-px rounded-full bg-amber-500" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-slate-200 shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-slate-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function Legend() {
  return (
    <div className="flex items-center justify-center md:justify-end gap-5 mt-4 px-1">
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
  );
}

export default function Comparison() {
  return (
    <section className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Why Clinics Choose Miss Floss
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Other options cover some of the problem. Miss Floss solves all of it.
          </p>
        </motion.div>

        {/* ── Mobile card layout (< md) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden"
        >
          {/* Miss Floss card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border-2 border-teal-500 bg-white shadow-sm p-5 sm:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-teal-700 uppercase tracking-wide">Miss Floss</span>
              <span className="text-xs text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                AI Receptionist
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              {features.map((feat) => (
                <div key={feat} className="flex items-center justify-between py-2 border-b border-teal-50 last:border-0">
                  <span className="text-sm text-slate-700">{feat}</span>
                  <Cell value={true} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Competitor cards */}
          {competitors.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
            >
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-800">{c.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{c.note}</p>
              </div>
              {features.map((feat, i) => (
                <div key={feat} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm text-slate-600 pr-3">{feat}</span>
                  <Cell value={c.values[i]} />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Desktop table layout (md+) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="hidden md:block rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider w-[38%]">
                  Feature
                </th>
                <th className="p-4 bg-teal-50 border-x border-teal-100 w-[16%]">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">Miss Floss</span>
                    <span className="text-[10px] text-teal-500 font-normal">AI Receptionist</span>
                  </div>
                </th>
                {competitors.map((c) => (
                  <th key={c.name} className="p-4 w-[16%]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-slate-600">{c.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{c.note}</span>
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
                  <td className="px-4 py-3.5 text-sm text-slate-700">{feat}</td>
                  <td className="px-4 py-3.5 text-center bg-teal-50/60 border-x border-teal-100">
                    <div className="flex justify-center">
                      <Cell value={missFlossValues[i]} />
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

        <Legend />
      </div>
    </section>
  );
}
