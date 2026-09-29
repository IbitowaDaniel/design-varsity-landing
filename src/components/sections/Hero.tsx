// src/components/sections/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { HeroCtaPill } from "@/components/ui/cta-pill";

const HERO_VISUALS = {
  mobile: "/assets/hero/mobile-hero-visual-image.svg",
  tablet: "/assets/hero/tablet-hero-visual-image.svg",
  desktop: "/assets/hero/desktop-hero-visual-image.svg",
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
      {/* Floating Figma logo — fades in late, then gently floats */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src="/assets/hero/hero-graphic-1.svg"
        alt=""
        aria-hidden
        className="absolute hidden md:left-1 md:top-[140px] md:block md:w-[70px] xl:left-16 xl:top-[180px] xl:w-[96px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          reduce
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: 1, y: [0, -16, 0] }
        }
        transition={{
          opacity: { duration: 0.5, delay: 0.7, ease: EASE },
          scale: { duration: 0.5, delay: 0.7, ease: EASE },
          y: { duration: 5, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Floating star — same treatment, offset timing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src="/assets/hero/hero-graphic-2.svg"
        alt=""
        aria-hidden
        className="absolute hidden md:right-8 md:top-[250px] md:block md:w-[40px] xl:right-[196px] xl:top-[240px] xl:w-[60px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          reduce
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: 1, y: [0, -8, 0] }
        }
        transition={{
          opacity: { duration: 0.5, delay: 0.85, ease: EASE },
          scale: { duration: 0.5, delay: 0.85, ease: EASE },
          y: { duration: 4, delay: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* ── Hero content container ── */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full items-center flex-col gap-6 md:w-[640px] md:gap-8 xl:w-[760px]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              {/* Eyebrow pill — first to arrive */}
              <motion.div {...fadeUp(0)}>
                {/* TODO: add real destination once the page exists */}
                <HeroCtaPill />
              </motion.div>

              {/* Headline */}
              <motion.h1
                id="hero-heading"
                className="text-hero text-center text-gray-900"
                {...fadeUp(0.08)}
              >
                Learn how to design Websites, Apps &amp; Dashboards like a pro
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p
              className="text-bodyLarge w-full max-w-[580px] text-center text-gray-500"
              {...fadeUp(0.16)}
            >
              Master app, web and dashboard design by building real world
              projects with AI-assisted workflows, bite-sized learning,
              expert instructors, and join a community of aspiring designers.
            </motion.p>
          </div>

          {/* Button group — gap 16; mobile = vertical + fill variants + px-16 */}
          <motion.div
            className="flex w-full flex-col gap-4 px-4 md:w-fit md:flex-row md:items-center md:px-0"
            {...fadeUp(0.24)}
          >
            {/* Mobile: fill variants */}
            <Button variant="primaryFill" href="https://www.wikihow.com" className="md:hidden">
              Start For Free
            </Button>
            <Button variant="secondaryFill" href="#pricing" className="md:hidden">
              View Pricing
            </Button>
            {/* Tablet / desktop: hug variants */}
            <Button variant="primary" href="https://www.wikihow.com" className="hidden md:inline-flex">
              Start For Free
            </Button>
            <Button variant="secondary" href="#pricing" className="hidden md:inline-flex">
              View Pricing
            </Button>
          </motion.div>
        </div>

        {/* Hero visual — larger travel distance, arrives last.
            Since it's right below the fold, whileInView handles users
            who land scrolled down or on slow connections. */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: reduce ? 0 : 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <ResponsiveAsset
            mobile={HERO_VISUALS.mobile}
            tablet={HERO_VISUALS.tablet}
            desktop={HERO_VISUALS.desktop}
            alt="Happy designer holding a laptop, surrounded by the Design Varsity Africa course interface"
            className="w-[420px] md:w-[768px] xl:w-[980px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}