// src/components/sections/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";

const HERO_VISUALS = {
  mobile: "/assets/tech-skills/mobile-hero-visual-image.svg",
  tablet: "/assets/tech-skills/tablet-hero-visual-image.svg",
  desktop: "/assets/tech-skills/desktop-hero-visual-image.svg",
};

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number, y = 20) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-[1200px] overflow-x-clip bg-white rounded-b-[32px] md:rounded-b-[56px] lg:rounded-b-[64] px-4 pb-0 pt-24 shadow-section-mobile md:px-0 md:pt-28 md:shadow-section-desktop xl:pt-[154px]"
    >

      {/* ── Hero content container ── */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full items-center flex-col gap-6 md:w-[640px] md:gap-8 xl:w-[760px]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              {/* Eyebrow pill — first to arrive */}


              {/* Headline */}
              <motion.h1
                id="hero-heading"
                className="text-hero text-center text-gray-900 max-w-[640px]"
                {...fadeUp(0.08)}
              >
                Learn a tech skill and how you can build a career around it.
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-bodyLarge w-full max-w-[580px] text-center text-gray-500"
              {...fadeUp(0.16)}
            >
              No tech background needed. Learn through interactive lessons, hands-on practice, 
              and guided learning, then get the know-how to turn your skill
              into a career, freelance income, or a business.
            </motion.p>
          </div>

          {/* Button group — gap 16; mobile = vertical + fill variants + px-16 */}
          <motion.div
            className="flex w-full flex-col gap-4 px-4 md:w-fit md:flex-row md:items-center md:px-0"
            {...fadeUp(0.24)}
          >
            {/* Mobile: fill variants */}
            <Button variant="primaryFill" href="https://www.wikihow.com" className="md:hidden">
              Take a Quiz
            </Button>
            <Button variant="secondaryFill" href="#skills" className="md:hidden">
              View Skills
            </Button>
            {/* Tablet / desktop: hug variants */}
            <Button variant="primary" href="https://www.wikihow.com" className="hidden md:inline-flex">
              Take a Quiz
            </Button>
            <Button variant="secondary" href="#skills" className="hidden md:inline-flex">
              View Skills
            </Button>
          </motion.div>
        </div>

        {/* Hero visual — larger travel distance, arrives last.
            Since it's right below the fold, whileInView handles users
            who land scrolled down or on slow connections. */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: reduce ? 0 : 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <ResponsiveAsset
            mobile={HERO_VISUALS.mobile}
            tablet={HERO_VISUALS.tablet}
            desktop={HERO_VISUALS.desktop}
            alt="Happy designer holding a laptop, surrounded by the Design Varsity Africa course interface"
            className="w-[420px] md:w-[768px] xl:w-[980px]"
          />
        </motion.div>
      </div>
    </section>
  );
}