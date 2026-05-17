"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Will Miss Floss replace my receptionist?",
    a: "No. Miss Floss handles the high-volume, repetitive call work — answering, booking, reminders — so your receptionist can focus on what actually matters: the patients standing in front of them. Think of it as adding a tireless team member, not removing a human one.",
  },
  {
    q: "Which scheduling systems does Miss Floss integrate with?",
    a: "Miss Floss integrates with all major dental practice management systems, including Dentrix, Eaglesoft, Curve Dental, ABELDent, and more. Our team handles the full integration during onboarding — no technical effort required from your side.",
  },
  {
    q: "Is patient data secure? Is Miss Floss PIPEDA compliant?",
    a: "Absolutely. Security is foundational. All patient data is encrypted end-to-end, stored in Canadian data centers, and fully compliant with PIPEDA and provincial privacy legislation. We undergo regular third-party security audits, and we never sell or share patient data.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most clinics are fully operational within 48–72 hours of signing up. We handle the technical setup, train the AI on your clinic's specific workflow, schedule, terminology, and FAQs, and assign you a dedicated account manager for ongoing support.",
  },
  {
    q: "What happens if a call is too complex for Miss Floss?",
    a: "Miss Floss knows when to hand off. Any urgent situation, clinical question, or request that falls outside her capabilities is immediately transferred to your staff — with a brief summary so your team knows exactly what the call is about before they pick up.",
  },
  {
    q: "What does Miss Floss cost?",
    a: "Miss Floss is available at a flat monthly rate — no per-call fees, no surprise charges, no long-term lock-in contracts. Most clinics recover the full monthly cost within the first week of additional bookings alone. Book a demo and we'll share pricing tailored to your clinic's size and call volume.",
  },
  {
    q: "Can Miss Floss handle multiple clinic locations?",
    a: "Yes — Miss Floss was built with multi-location practices and dental support organizations (DSOs) in mind. Each location gets its own trained AI profile with location-specific availability, FAQs, and staff escalation rules. You get a unified dashboard across all locations.",
  },
  {
    q: "What if a patient insists on speaking to a human?",
    a: "Any patient who requests a human agent is transferred immediately — gracefully and without friction. Miss Floss will hand off the call with full context about why the patient called, so your staff can pick up seamlessly. No patient is ever left without an option.",
  },
];

function FAQItem({
  q, a, isOpen, onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-medium transition-colors duration-200 ${
            isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
          }`}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            isOpen
              ? "border-teal-400 bg-teal-50 text-teal-600"
              : "border-slate-300 text-slate-400 group-hover:border-slate-400"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-3 h-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-500 leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
            Answers to the Hard Questions.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            We know switching to AI feels like a big step. Here&apos;s everything
            you need to know before you do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          Still have questions?{" "}
          <a
            href="mailto:hello@missfloss.ai"
            className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
          >
            Talk to our team →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
