"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function StatCountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  colorClass,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  colorClass: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1800;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const val = easeOutCubic(progress) * to;
      if (numberRef.current)
        numberRef.current.textContent = prefix + val.toFixed(decimals) + suffix;
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, to, prefix, suffix, decimals]);

  return (
    <span ref={containerRef}>
      <span ref={numberRef} className={colorClass}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}

const problems = [
  {
    to: 25, prefix: "", suffix: "%", decimals: 0,
    statLabel: "of calls go unanswered",
    title: "Missed Calls = Missed Patients",
    desc: "Every ring that goes to voicemail is a patient who may not call back — and very likely won't.",
    accent: "border-t-red-400",
    colorClass: "text-red-500",
  },
  {
    to: 60, prefix: "", suffix: "%", decimals: 0,
    statLabel: "of requests come after-hours",
    title: "Evenings and Weekends Go Silent",
    desc: "The majority of appointment requests happen when your office is closed. You're losing them all.",
    accent: "border-t-orange-400",
    colorClass: "text-orange-500",
  },
  {
    to: 2.5, prefix: "", suffix: " hrs", decimals: 1,
    statLabel: "per day on repetitive calls",
    title: "Staff Burnout at the Front Desk",
    desc: "Your receptionist fields 80+ calls a day — booking, rescheduling, answering the same FAQs. It's unsustainable.",
    accent: "border-t-yellow-400",
    colorClass: "text-amber-500",
  },
  {
    to: 300, prefix: "$", suffix: "", decimals: 0,
    statLabel: "avg. value of a missed new patient",
    title: "Every Missed Call Has a Price",
    desc: "A missed new patient call costs you $300–$700 in immediate revenue and years of lifetime value.",
    accent: "border-t-red-400",
    colorClass: "text-red-500",
  },
  {
    to: 4, prefix: "", suffix: " min", decimals: 0,
    statLabel: "average hold time at dental offices",
    title: "Patients Are Hanging Up",
    desc: "Long hold times create frustration. Frustrated patients hang up, leave bad reviews, or book elsewhere.",
    accent: "border-t-orange-400",
    colorClass: "text-orange-500",
  },
  {
    to: 70, prefix: "", suffix: "%", decimals: 0,
    statLabel: "of voicemails are never returned",
    title: "Callback Lists That Don't Get Done",
    desc: "Overloaded staff can't keep up. Voicemails pile up. Patients who hear nothing simply move on.",
    accent: "border-t-red-400",
    colorClass: "text-red-500",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 tracking-tight">
            Your Front Desk Is Costing You More Than You Think
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            While your staff juggles patients, phones, and paperwork — new patients
            are calling your competitors.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`relative group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md p-6 md:p-7 overflow-hidden transition-all duration-300 border-t-2 ${p.accent}`}
            >
              <p className="text-3xl font-bold text-slate-900 mb-0.5">
                <StatCountUp
                  to={p.to}
                  prefix={p.prefix}
                  suffix={p.suffix}
                  decimals={p.decimals}
                  colorClass={p.colorClass}
                />
              </p>
              <p className="text-sm text-slate-400 mb-4">{p.statLabel}</p>
              <h3 className="text-base font-semibold text-slate-800 mb-2">{p.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-lg leading-relaxed">
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
