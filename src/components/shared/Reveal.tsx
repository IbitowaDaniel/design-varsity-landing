"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface RevealProps {
  children: ReactNode;
  /** seconds — use for stagger: 0, 0.08, 0.16... */
  delay?: number;
  /** travel distance in px, default 20 */
  y?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}