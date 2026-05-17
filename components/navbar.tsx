"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center shadow-[0_2px_10px_rgba(13,148,136,0.35)] group-hover:shadow-[0_4px_16px_rgba(13,148,136,0.5)] transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path
                  d="M12 2C9 2 6.5 4.5 6.5 7.5c0 2.2 1.3 4.1 3.2 5V21h4.6v-8.5c1.9-.9 3.2-2.8 3.2-5C17.5 4.5 15 2 12 2z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Miss Floss
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-all duration-200 shadow-[0_2px_12px_rgba(13,148,136,0.3)] hover:shadow-[0_4px_20px_rgba(13,148,136,0.45)]"
            >
              Book a Demo
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${scrolled ? "top-14" : "top-16"} left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm p-6 md:hidden`}
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors"
              >
                Book a Demo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
