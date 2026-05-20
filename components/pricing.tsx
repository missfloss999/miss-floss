"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-50 border border-teal-200 shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-teal-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$297",
    perDay: "~$10/day",
    period: "CAD/mo",
    subtitle: "Perfect for single-location clinics",
    popular: false,
    features: [
      "Unlimited inbound calls",
      "Appointment booking & rescheduling",
      "SMS confirmations",
      "PIPEDA compliant",
      "Email support",
    ],
    cta: "Book a Demo",
    ctaHref: "https://cal.com/anmol-anand-f7s3pe",
  },
  {
    name: "Growth",
    price: "$497",
    perDay: "~$17/day",
    period: "CAD/mo",
    subtitle: "For busy clinics that can't miss a call",
    popular: true,
    features: [
      "Everything in Starter",
      "Priority onboarding (live in 48h)",
      "Dedicated account manager",
      "Custom voice & greeting",
      "Analytics dashboard",
      "Phone & email support",
    ],
    cta: "Book a Demo",
    ctaHref: "https://cal.com/anmol-anand-f7s3pe",
  },
  {
    name: "Multi-Location",
    price: "Custom",
    perDay: "",
    period: "",
    subtitle: "For dental groups & DSOs",
    popular: false,
    features: [
      "Everything in Growth",
      "Multiple locations",
      "Centralized dashboard",
      "Volume pricing",
      "Enterprise SLA",
      "Dedicated success manager",
    ],
    cta: "Contact Us",
    ctaHref: "https://cal.com/anmol-anand-f7s3pe",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-3">
            Simple, Flat Pricing.{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              No Surprises.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Less than the cost of one missed appointment per week.
          </p>
        </motion.div>

        {/* Price anchor banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-10 rounded-2xl bg-teal-50 border border-teal-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center"
        >
          <span className="text-sm text-slate-500">
            A full-time dental receptionist costs{" "}
            <span className="font-semibold text-slate-700 line-through">$3,500–$4,500/mo</span>
          </span>
          <span className="hidden sm:block w-px h-4 bg-teal-200" />
          <span className="text-sm font-bold text-teal-700">
            Miss Floss starts at $297/mo — and never calls in sick.
          </span>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl bg-white p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-teal-500 shadow-xl shadow-teal-100/60"
                  : "border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-teal-600 shadow-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-500 mb-1">{plan.name}</p>
                <div className="flex items-end gap-1.5 mb-0.5">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-slate-400 mb-1.5">{plan.period}</span>
                  )}
                </div>
                {plan.perDay && (
                  <p className="text-xs font-medium text-teal-600 mb-1">{plan.perDay} — less than the value of one patient walking away</p>
                )}
                <p className="text-sm text-slate-500">{plan.subtitle}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Cancel anytime */}
              <p className="text-xs text-slate-400 text-center mb-4">
                Cancel anytime · No contracts · No setup fees
              </p>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center h-11 rounded-full text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-teal-600 text-white hover:bg-teal-700 shadow-[0_4px_20px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.5)]"
                    : "border border-teal-300 text-teal-700 hover:bg-teal-50"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee + founding member strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {/* 30-day guarantee */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-700">30-Day Money-Back Guarantee</p>
              <p className="text-xs text-slate-400">Not satisfied? Full refund. No questions asked.</p>
            </div>
          </motion.div>

          <span className="hidden sm:block w-px h-10 bg-slate-200" />

          {/* Founding member lock-in */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-700">Founding Member Pricing</p>
              <p className="text-xs text-slate-400">Lock in today's rate forever — price increases as we grow.</p>
            </div>
          </motion.div>

          <span className="hidden sm:block w-px h-10 bg-slate-200" />

          {/* Free trial */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-700">14-Day Free Trial</p>
              <p className="text-xs text-slate-400">No credit card required to get started.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
