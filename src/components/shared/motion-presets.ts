import type { Variants } from "framer-motion";
import { EASE } from "./Reveal";

/** The standard "card enters the viewport" animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

/**
 * Spread onto any motion.* element to give it the standard
 * section-card reveal. No wrapper div, no broken flex sizing.
 *
 *   <motion.article {...inViewReveal} className="...">
 */
export const inViewReveal = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
} as const;

/** fadeUp with a custom delay — for staggering siblings, e.g. the 2nd card */
export const fadeUpDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: EASE } },
});