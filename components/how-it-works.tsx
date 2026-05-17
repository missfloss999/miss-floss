"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Clinic",
    desc: "We integrate Miss Floss with your existing phone number and practice management software. No new hardware. Our team handles the full setup in 48 hours.",
    badge: "Setup in 48 hours",
  },
  {
    number: "02",
    title: "Patients Call As Normal",
    desc: "Miss Floss answers with your clinic's name, understands the patient's need through natural conversation, and handles the request — booking, rescheduling, FAQ, or escalation.",
    badge: "Zero friction for patients",
  },
  {
    number: "03",
    title: "You Focus on Care",
    desc: "Your calendar fills automatically. Your team gets a clean dashboard of every interaction. No more phone-tag, no more voicemail backlog — just more time for patients.",
    badge: "Instant ROI",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-white min-h-screen flex flex-col justify-center py-10 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-teal-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Up and Running in{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              48 Hours.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            No complex migrations. No technical lift from your team.
            We handle everything.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <div className="hidden lg:block absolute top-10 left-[calc(33.33%+20px)] right-[calc(33.33%+20px)] h-px bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              className="relative flex flex-col"
            >
              <div className="relative w-20 h-20 mb-8 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full bg-teal-50 border border-teal-200 shadow-[0_4px_16px_rgba(13,148,136,0.12)]" />
                <div className="absolute inset-3 rounded-full bg-teal-100 border border-teal-200" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <span className="inline-block text-[10px] font-semibold text-teal-600 tracking-widest uppercase bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full mb-4">
                  {step.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 mx-auto max-w-2xl rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center"
        >
          <p className="text-slate-700 text-base leading-relaxed">
            <span className="text-slate-900 font-semibold">
              No hardware. No training sessions. No disruption.
            </span>{" "}
            Miss Floss is live in your clinic within two business days — with a
            dedicated account manager guiding every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
