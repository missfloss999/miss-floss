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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Back to Top — appears above Book a Demo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={spring}
            role="button"
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white border border-teal-600 text-teal-600 text-sm font-medium shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_6px_24px_rgba(13,148,136,0.2)] hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
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

      {/* Book a Demo — anchored to bottom-right */}
      <AnimatePresence>
        {showBookDemo && (
          <motion.a
            key="book-demo"
            href="https://cal.com/anmol-anand-f7s3pe"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Book a demo with Miss Floss"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={spring}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-teal-600 text-white text-sm font-medium shadow-[0_8px_28px_rgba(13,148,136,0.45)] hover:bg-teal-700 hover:shadow-[0_10px_36px_rgba(13,148,136,0.6)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
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
    </div>
  );
}
