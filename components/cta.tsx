"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="demo"
      className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6 overflow-hidden"
    >
      {/* Teal glow on white */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-teal-100 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-teal-200/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-teal-300/40 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div>
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Your Competitors Are Already{" "}
            <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
              Answering Every Call.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join dental clinics across Canada who never miss a patient again. Book
            your free 30-minute demo today — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="https://cal.com/anmol-anand-f7s3pe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200 shadow-[0_6px_28px_rgba(13,148,136,0.4)] hover:shadow-[0_8px_36px_rgba(13,148,136,0.55)]"
            >
              Book Your Free Demo
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
              href="tel:+14165550100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-teal-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call Us Today
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              "No credit card required",
              "Setup in 48 hours",
              "Cancel any time",
              "PIPEDA compliant",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-3 h-3 text-teal-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
