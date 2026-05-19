"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const features = [
  {
    title: "24/7 Call Answering",
    desc: "Every call answered in under one second. No holds, no voicemail, no missed opportunities — ever.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a7.5 7.5 0 010 10.5M13.5 6.75a4.5 4.5 0 010 6" />
      </svg>
    ),
  },
  {
    title: "Smart Appointment Booking",
    desc: "Checks your real-time calendar and books directly — no double-bookings, no back-and-forth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l2.25 2.25 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "SMS Confirmations & Reminders",
    desc: "Automatic confirmation texts and reminder messages slash no-show rates by up to 30%.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.127 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.875l2.25 2.25 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "After-Hours Coverage",
    desc: "Evenings, weekends, holidays — Miss Floss is always there, capturing every booking opportunity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 3l.75 1.5L20.25 5l-1.5.75L18 7.5l-.75-1.75L15.75 5l1.5-.5L18 3z" />
      </svg>
    ),
  },
  {
    title: "Urgent Call Transfers",
    desc: "Dental emergencies are immediately escalated to your on-call staff — with full context, instantly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75l-1.359 1.359a1.5 1.5 0 000 2.121l3.128 3.129a1.5 1.5 0 002.121 0l1.358-1.358m0 0l2.122 2.12a1.5 1.5 0 010 2.122l-1.358 1.358a1.5 1.5 0 01-2.121 0l-3.13-3.128a1.5 1.5 0 010-2.121L9 8.25" />
      </svg>
    ),
  },
  {
    title: "Reschedule & Cancellations",
    desc: "Miss Floss handles changes gracefully — freeing slots and rebooking patients without staff involvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 8.25h18" />
      </svg>
    ),
  },
  {
    title: "Multi-Location Support",
    desc: "One Miss Floss across all your clinic locations, each with its own trained profile and availability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Calendar & PMS Integration",
    desc: "Connects with Dentrix, Eaglesoft, Curve, and ABELDent. Setup is fully handled by our team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#f8fafc] min-h-screen flex flex-col justify-center py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-3">
            Everything Your Front Desk Does.{" "}
            <span className="text-slate-400">Automated.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Miss Floss handles the entire patient communication workflow — without
            attitude, without sick days, without overtime.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-teal-200 p-8 overflow-hidden transition-[box-shadow,border-color] duration-300 cursor-default"
            >
              {/* Teal bottom border reveal on hover */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-14 h-14 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-200 group-hover:border-teal-300 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-base text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
