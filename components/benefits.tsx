"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const startTime = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    startTime.current = null;

    const tick = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * to;
      if (ref.current) {
        ref.current.textContent = prefix + current.toFixed(decimals) + suffix;
      }
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  {
    to: 94, prefix: "", suffix: "%", decimals: 0,
    label: "Fewer missed calls",
    desc: "Virtually every inbound call is answered and handled — even during peak hours and after closing.",
  },
  {
    to: 40, prefix: "", suffix: "%", decimals: 0,
    label: "More bookings per month",
    desc: "After-hours and overflow call capture turns previously lost leads into confirmed appointments.",
  },
  {
    to: 3.2, prefix: "", suffix: " hrs", decimals: 1,
    label: "Saved per day, per clinic",
    desc: "Your front desk reclaims hours previously spent on hold, callbacks, and scheduling calls.",
  },
  {
    to: 12, prefix: "$", suffix: "K+", decimals: 0,
    label: "Revenue recovered per quarter",
    desc: "Average recoverable revenue for a mid-size dental practice in the GTA after 90 days with Miss Floss.",
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            The ROI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            The Numbers Don&apos;t Lie.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Real results from clinics that made the switch in Toronto and the GTA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center hover:shadow-md hover:border-teal-200 transition-all duration-300"
            >
              <p className="text-5xl font-bold bg-gradient-to-br from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">
                <CountUp
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  duration={1800}
                />
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-3">{s.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Never miss a lead",
              desc: "Every call is an opportunity. Miss Floss ensures none of them go unanswered, regardless of time, day, or call volume.",
            },
            {
              title: "Happier patients",
              desc: "No hold music. No \"we'll call you back.\" Patients get their answer in seconds and leave the call feeling served.",
            },
            {
              title: "Happier staff",
              desc: "Free your team from repetitive phone work. They can focus on creating an exceptional in-clinic experience.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-3 h-3 text-teal-600"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1.5">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
