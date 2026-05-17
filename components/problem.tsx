"use client";

import { motion, type Variants } from "framer-motion";

const problems = [
  {
    stat: "25%",
    statLabel: "of calls go unanswered",
    title: "Missed Calls = Missed Patients",
    desc: "Every ring that goes to voicemail is a patient who may not call back — and very likely won't.",
    accent: "border-t-red-400",
  },
  {
    stat: "60%",
    statLabel: "of requests come after-hours",
    title: "Evenings and Weekends Go Silent",
    desc: "The majority of appointment requests happen when your office is closed. You're losing them all.",
    accent: "border-t-orange-400",
  },
  {
    stat: "2.5hrs",
    statLabel: "per day on repetitive calls",
    title: "Staff Burnout at the Front Desk",
    desc: "Your receptionist fields 80+ calls a day — booking, rescheduling, answering the same FAQs. It's unsustainable.",
    accent: "border-t-yellow-400",
  },
  {
    stat: "$300",
    statLabel: "avg. value of a missed new patient",
    title: "Every Missed Call Has a Price",
    desc: "A missed new patient call costs you $300–$700 in immediate revenue and years of lifetime value.",
    accent: "border-t-red-400",
  },
  {
    stat: "4 min",
    statLabel: "average hold time at dental offices",
    title: "Patients Are Hanging Up",
    desc: "Long hold times create frustration. Frustrated patients hang up, leave bad reviews, or book elsewhere.",
    accent: "border-t-orange-400",
  },
  {
    stat: "70%",
    statLabel: "of voicemails are never returned",
    title: "Callback Lists That Don't Get Done",
    desc: "Overloaded staff can't keep up. Voicemails pile up. Patients who hear nothing simply move on.",
    accent: "border-t-yellow-400",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Problem() {
  return (
    <section id="problem" className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Every Missed Call Is a{" "}
            <span className="text-slate-400">Missed Patient.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dental clinics across Toronto and the GTA are quietly losing revenue,
            patients, and staff morale — one unanswered phone at a time.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className={`relative group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md p-6 md:p-7 overflow-hidden transition-all duration-300 border-t-2 ${p.accent}`}
            >
              <p className="text-3xl font-bold text-slate-900 mb-0.5">{p.stat}</p>
              <p className="text-xs text-slate-400 mb-4">{p.statLabel}</p>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-base">
            The average GTA dental clinic loses{" "}
            <span className="text-slate-900 font-semibold">
              $8,000–$15,000 per quarter
            </span>{" "}
            in recoverable revenue from missed calls alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
