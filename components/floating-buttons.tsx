"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spring = { type: "spring", stiffness: 320, damping: 24 } as const;

export default function FloatingButtons() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBookDemo = scrollY > 400;
  const showScrollTop = scrollY > 600;

  return (
    <>
      {/* Back to Top — bottom left */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={spring}
            aria-label="Back to top of page"
            className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white border border-teal-400 text-teal-600 text-sm font-semibold shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_6px_24px_rgba(13,148,136,0.2)] hover:border-teal-500 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-4 h-4 shrink-0"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            Back to Top
          </motion.button>
        )}
      </AnimatePresence>

      {/* Book a Demo — bottom right */}
      <AnimatePresence>
        {showBookDemo && (
          <motion.a
            key="book-demo"
            href="https://cal.com/anmol-anand-f7s3pe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a demo call with Miss Floss"
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={spring}
            className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 h-11 px-5 text-sm font-semibold text-white rounded-full shadow-[0_8px_28px_rgba(13,148,136,0.45)] hover:shadow-[0_10px_36px_rgba(13,148,136,0.6)] transition-shadow duration-200"
            style={{ backgroundColor: "#0d9488" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0f766e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d9488")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 shrink-0"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
            </svg>
            Book a Demo
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
