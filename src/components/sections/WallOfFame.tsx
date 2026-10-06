"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface WallOfFameCardProps {
  heading: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string; // falls back to desktopImage
  imageClassName: string;     // image-frame height, e.g. "h-[250px]"
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
  icon?: string;              // Added icon prop
}

function WallOfFameCard({
  heading,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
  icon,
}: WallOfFameCardProps) {
  const tmImage = tabletMobileImage ?? desktopImage;

  return (
    <motion.article
    {...inViewReveal}
      className={`flex w-full max-w-90 flex-col gap-4 rounded-lg border-2 border-dashed bg-white border-gray-400 p-3 pb-4 md:p-4 ${className}`}
    >
      {/* box text content: gap 4px */}
      <div className="flex flex-col gap-1">
        {/* Added Icon */}
        {icon && (
          <img
            src={icon}
            alt={`${heading} icon`}
            className="w-[36px] h-[36px] mb-1 object-contain"
          />
        )}
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
export default function WallOfFame() {
  return (
    <Section
      eyebrow="Wall Of Fame"
      title={
        <>
          Proof that great things are happening
        </>
      }
    >
      {/* Box container 2 — desktop-only horizontal; 338px fixed card */}
      <div className="flex flex-col items-center gap-3 xl:flex-row xl:gap-4">
        <div className="flex w-full flex-col items-center justify-center md:flex-row gap-3 xl:gap-4">
          <WallOfFameCard
            heading="Alumni Wall"
            subtext="Meet the designers who turned their skills into successful careers, with inspiring stories, career wins, and journeys that began with us."
            desktopImage="/assets/wall-of-fame/wall-of-fame-card-image-1.svg"
            imageClassName="h-[220px]"
            imgClassName="w-[285px] h-[207px] xl:w-[306px] xl:h-[232px]"
            icon="/assets/wall-of-fame/alumni-wall-icon.svg"
            cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
          />
          <WallOfFameCard
            heading="Certificates Wall"
            subtext="Browse our certified candidates and verify credentials instantly, with each certification reflecting the skills, and achievements of those who earned it"
            desktopImage="/assets/wall-of-fame/wall-of-fame-card-image-2.svg"
            imageClassName="h-[220px]"
            imgClassName="w-[307px] h-[220px] xl:w-[306px] xl:h-[232px]"
            icon="/assets/wall-of-fame/certificate-wall-icon.svg"
            cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
          />
        </div>
        <WallOfFameCard
          heading="Projects Wall"
          subtext="Explore projects made by our students, featuring bold ideas, thoughtful designs, and real-world solutions that demonstrate their growing expertise."
          desktopImage="/assets/wall-of-fame/wall-of-fame-card-image-3.svg"
          imageClassName="h-[220px]"
          imgClassName="w-[288px] h-[193px] xl:w-[306px] xl:h-[232px]"
          className="xl:w-[338px] xl:shrink-0"
          icon="/assets/wall-of-fame/project-wall-icon.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
      </div>
    </Section>
  );
}