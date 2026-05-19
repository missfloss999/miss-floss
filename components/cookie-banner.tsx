"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ analytics: true }));
    setVisible(false);
  };

  const savePrefs = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ analytics }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-2px_24px_rgba(15,23,42,0.1)] border border-slate-200 p-5 md:p-6">
            {!showPrefs ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  We use cookies to improve your experience and analyze site traffic. By
                  continuing, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-teal-600 hover:text-teal-700 underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </Link>.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setShowPrefs(true)}
                    className="h-9 px-4 text-sm font-medium text-slate-600 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    Manage Preferences
                  </button>
                  <button
                    onClick={acceptAll}
                    className="h-9 px-5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-[0_2px_10px_rgba(13,148,136,0.3)]"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-800">Cookie Preferences</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Essential Cookies</p>
                      <p className="text-xs text-slate-400 mt-0.5">Required for the site to function</p>
                    </div>
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                      Always on
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Analytics Cookies</p>
                      <p className="text-xs text-slate-400 mt-0.5">Help us understand how visitors use the site</p>
                    </div>
                    <button
                      onClick={() => setAnalytics((v) => !v)}
                      aria-pressed={analytics}
                      aria-label="Toggle analytics cookies"
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                        analytics ? "bg-teal-600" : "bg-slate-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
                          analytics ? "translate-x-4" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 pt-1">
                  <button
                    onClick={() => setShowPrefs(false)}
                    className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={savePrefs}
                    className="h-9 px-5 text-sm font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
