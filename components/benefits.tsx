"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2500,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });
  const [done, setDone] = useState(false);
  const frameRef = useRef<number>(0);

  // Count-up loop
  useEffect(() => {
    if (!inView) return;
    setDone(false);
    let startTime: number | null = null;

    const easeOutExpo = (t: number): number =>
      t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = easeOutExpo(progress);

      if (numberRef.current) {
        numberRef.current.textContent =
          prefix + (eased * to).toFixed(decimals) + suffix;
        numberRef.current.style.transform = `scale(${0.8 + 0.2 * eased})`;
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, to, prefix, suffix, decimals, duration]);

  // Teal glow pulse on completion
  useEffect(() => {
    if (!done || !numberRef.current) return;
    const el = numberRef.current;
    el.style.transition = "filter 0.5s ease";
    el.style.filter = "drop-shadow(0 0 14px rgba(13,148,136,0.55))";
    // Pulse: brighten then settle
    const settle = setTimeout(() => {
      el.style.filter = "drop-shadow(0 0 6px rgba(13,148,136,0.35))";
    }, 600);
    return () => clearTimeout(settle);
  }, [done]);

  const showPlus = !suffix.endsWith("+");

  return (
    <span ref={containerRef} className="inline-flex items-end justify-center">
      <span
        ref={numberRef}
        className="bg-gradient-to-br from-teal-600 to-teal-500 bg-clip-text text-transparent inline-block"
        style={{ transformOrigin: "center", transform: "scale(0.8)" }}
      >
        {prefix}0{suffix}
      </span>
      {showPlus && (
        <span
          className="text-teal-500 font-bold select-none"
          style={{
            fontSize: "0.48em",
            lineHeight: 1,
            marginBottom: "0.3em",
            marginLeft: "2px",
            opacity: done ? 1 : 0,
            transform: done ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s",
          }}
        >
          +
        </span>
      )}
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
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const hasLockedRef = useRef(false);

  // Hold the viewport on this section for 2s while numbers count
  useEffect(() => {
    if (!sectionInView || hasLockedRef.current) return;
    hasLockedRef.current = true;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = prev;
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = prev;
    };
  }, [sectionInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            The ROI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            The Numbers Don&apos;t Lie.
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Real results from clinics that made the switch in Toronto and the GTA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 text-center hover:shadow-md hover:border-teal-200 transition-all duration-300"
            >
              <p className="text-5xl font-bold mb-2">
                <CountUp
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  duration={2500}
                />
              </p>
              <p className="text-base font-semibold text-slate-800 mb-3">{s.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <h3 className="text-base font-semibold text-slate-800 mb-1.5">{b.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
