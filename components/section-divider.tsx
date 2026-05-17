"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center items-center py-0.5">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-20 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        style={{ originX: 0.5 }}
      />
    </div>
  );
}
