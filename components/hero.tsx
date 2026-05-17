"use client";

import { motion, type Variants } from "framer-motion";

function VoiceWave() {
  const bars = 20;
  return (
    <div className="flex items-center justify-center gap-[2.5px] h-7">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-teal-500"
          animate={{ scaleY: [0.15, 1, 0.25, 0.75, 0.15] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: (i * 1.5) / bars,
            ease: "easeInOut",
          }}
          style={{ height: "100%", transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

function AICallCard() {
  const messages = [
    { from: "patient" as const, text: "Hi, I'd like to book a cleaning.", delay: 0.6 },
    {
      from: "ai" as const,
      text: "Of course! We have Thursday at 2:00 PM or Friday at 10:00 AM. Which works for you?",
      delay: 1.4,
    },
    { from: "patient" as const, text: "Thursday at 2 works.", delay: 2.4 },
    {
      from: "ai" as const,
      text: "Done! Confirmed for Thursday, March 14 at 2:00 PM with Dr. Chen. Confirmation text is on its way.",
      delay: 3.2,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[360px] mx-auto"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
        className="relative"
      >
        {/* Card glow */}
        <div className="absolute -inset-3 bg-teal-500/8 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/80">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="relative shrink-0">
                <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path
                      d="M12 2C9 2 6.5 4.5 6.5 7.5c0 2.2 1.3 4.1 3.2 5V21h4.6v-8.5c1.9-.9 3.2-2.8 3.2-5C17.5 4.5 15 2 12 2z"
                      fill="#0d9488"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 leading-none">Miss Floss AI</p>
                <p className="text-[10px] text-teal-600 mt-0.5">Always answering</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          </div>

          {/* Caller info */}
          <div className="px-4 py-2 bg-teal-50/60 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-3.5 h-3.5 text-teal-600 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-[11px] text-slate-500">(416) 555-0192 · Connected 0:47</span>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 min-h-[200px] bg-white">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: msg.delay, duration: 0.25 }}
                className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                    msg.from === "ai"
                      ? "bg-teal-50 text-teal-900 border border-teal-100 rounded-tl-sm"
                      : "bg-slate-100 text-slate-700 border border-slate-200 rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2 }}
            >
              <span className="inline-flex items-center gap-1.5 text-[10px] text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Appointment booked · SMS sent
              </span>
            </motion.div>
          </div>

          {/* Wave footer */}
          <div className="px-4 pb-4 bg-white">
            <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
              <VoiceWave />
            </div>
          </div>
        </div>

        {/* Floating stat badges */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className="absolute -right-4 top-10 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-lg shadow-slate-200/60"
        >
          <p className="text-[9px] text-slate-400 uppercase tracking-wide">Calls answered today</p>
          <p className="text-xl font-bold text-teal-600 leading-none mt-0.5">147</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="absolute -left-4 bottom-14 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-lg shadow-slate-200/60"
        >
          <p className="text-[9px] text-slate-400 uppercase tracking-wide">Missed calls</p>
          <p className="text-xl font-bold text-slate-900 leading-none mt-0.5">0</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const headlineVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Static background layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.07) 0%, transparent 60%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-3.5 py-1.5 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              AI-Powered Dental Reception · Canada
            </motion.div>

            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
            >
              <span className="block">
                {["Every", "Missed", "Call"].map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-teal-600">
                {["Is", "Lost", "Revenue."].map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10"
            >
              Miss Floss answers every call, books every appointment, and fills
              your schedule — 24/7. No voicemail. No missed opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200 shadow-[0_4px_20px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.5)]"
              >
                Book a Free Demo
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-200 transition-colors duration-200"
              >
                See How It Works
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2.5"
            >
              {["PIPEDA Compliant", "Toronto & GTA", "Live in 48 hours", "24/7 availability"].map(
                (label) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-teal-500" />
                    {label}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* AI Visualization */}
          <div className="flex justify-center lg:justify-end">
            <AICallCard />
          </div>
        </div>
      </div>
    </section>
  );
}
