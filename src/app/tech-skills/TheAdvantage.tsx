"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface TheAdvantageCardProps {
  heading: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string; // falls back to desktopImage
  imageClassName: string;     // image-frame height, e.g. "h-[250px]"
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
}

function TheAdvantageCard({
  heading,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
}: TheAdvantageCardProps) {
  const tmImage = tabletMobileImage ?? desktopImage;

  return (
    <motion.article
      {...inViewReveal}
      className={`flex w-full flex-col gap-4 rounded-lg border-2 border-dashed border-gray-400 bg-white p-3 md:p-4 ${className}`}
    >
      {/* box text content: gap 4px */}
      <div className="flex flex-col gap-1">
        <h3 className="text-card text-gray-900">{heading}</h3>
        <p className="text-body text-gray-500">{subtext}</p>
      </div>

      {/* image-frame: fill width, fixed height */}
      <div className={`flex w-full items-center justify-center overflow-hidden ${imageClassName}`}>
        <ResponsiveAsset
          mobile={tmImage}
          tablet={tmImage}
          desktop={desktopImage}
          alt={heading}
          imgClassName={imgClassName}
        />
      </div>

      {cta}
    </motion.article>
  );
}

/* ---------- Section ---------- */
export default function TheAdvantage() {
  return (
    <Section
      eyebrow="The advantage"
      title={
        <>
          Why choose to learn a tech skill with us?
        </>
      }
    >

      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <TheAdvantageCard
          heading="Collaborate across skills"
          subtext="One community, ten skill paths. Team up with developers, designers, marketers, and creators on real projects, just like professional teams do, and build connections that last."
          desktopImage="/assets/tech-skills/the-advantage/desktop/desktop-the-advantage-card-image-1.svg"
          tabletMobileImage="/assets/tech-skills/the-advantage/tablet-mobile/tablet-mobile-the-advantage-card-image-1.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[484px] xl:h-[252px]"
          className="md:flex-1"
        />
        <TheAdvantageCard
          heading="Build a career, not just a skill"
          subtext="Go beyond the lessons. Learn how to find work, price your services, and pitch with confidence, so your skill becomes a job, freelance income, or a business you can grow."
          desktopImage="/assets/tech-skills/the-advantage/desktop/desktop-the-advantage-card-image-2.svg"
          tabletMobileImage="/assets/tech-skills/the-advantage/tablet-mobile/tablet-mobile-the-advantage-card-image-2.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[484px] xl:h-[252px]"
          className="md:flex-1"
        />
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <TheAdvantageCard
          heading="Industry-standard learning"
          subtext="Every path is built around the tools, workflows, and standards professionals actually use, taught by expert instructors through hands-on projects that mirror real work."
          desktopImage="/assets/tech-skills/the-advantage/desktop/desktop-the-advantage-card-image-3.svg"
          tabletMobileImage="/assets/tech-skills/the-advantage/tablet-mobile/tablet-mobile-the-advantage-card-image-3.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[484px] xl:h-[252px]"
          className="md:flex-1"
        />
        <TheAdvantageCard
          heading="Built for complete beginners"
          subtext="Bite-sized, guided lessons take you from your first steps of learning to finished projects that you can show clients and employers, with feedback and support at every stage."
          desktopImage="/assets/tech-skills/the-advantage/desktop/desktop-the-advantage-card-image-4.svg"
          tabletMobileImage="/assets/tech-skills/the-advantage/tablet-mobile/tablet-mobile-the-advantage-card-image-4.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[484px] xl:h-[252px]"
          className="md:flex-1"
        />
      </div>


    </Section>
  );
}