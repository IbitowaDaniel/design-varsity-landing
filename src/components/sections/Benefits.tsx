"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface BenefitCardProps {
  heading: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string; // falls back to desktopImage
  imageClassName: string;     // image-frame height, e.g. "h-[250px]"
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
}

function BenefitCard({
  heading,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
}: BenefitCardProps) {
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
export default function Benefits() {
  return (
    <Section
    className="scroll-smooth"
      id="benefits"
      eyebrow="Benefits"
      title={
        <>
          Here is what we bring
          <br />
          to the table
        </>
      }
    >
      {/* Box container 1 */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <BenefitCard
          heading="Learn by building real projects"
          subtext="At Design Varsity Africa, you'll design actual apps and websites grounded in real-world scenarios, so you'll have a portfolio that proves you can ship products and not just follow tutorials."
          desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-1.svg"
          tabletMobileImage="/assets/benefits/tablet-mobile/tablet-mobile-benefits-card-image-1.svg"
          imageClassName="h-[250px]"
          imgClassName="w-[317px] h-[252px] xl:w-[484px] xl:h-[250px]"
        />
        <BenefitCard
          heading="Join a community of designers"
          subtext="Become part of a growing community of aspiring and experienced designers, so you'll build real connections and open doors to opportunities you wouldn't find learning alone."
          desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-2.svg"
          tabletMobileImage="/assets/benefits/tablet-mobile/tablet-mobile-benefits-card-image-2.svg"
          imageClassName="h-[250px]"
          imgClassName="w-[288px] h-[252px] xl:w-[484px] xl:h-[250px]"
        />
      </div>

      {/* Box container 2 — desktop-only horizontal; 338px fixed card */}
      <div className="flex flex-col gap-3 xl:flex-row xl:gap-4">
        <div className="flex w-full flex-col md:flex-row gap-3 xl:gap-4">
          <BenefitCard
            heading="Leverage Ai in your workflow"
            subtext="Use Ai as a design partner, not a replacement. Learn how to speed up research, wireframing, and prototyping with the right tools, while keeping your creative edge."
            desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-3.svg"
            imageClassName="h-[220px]"
            imgClassName="w-[285px] h-[207px] xl:w-[285px] xl:h-[207px]"
          />
          <BenefitCard
            heading="Specific career paths"
            subtext="Most platforms treat UI/UX as one size fits all. We split ours into app, web, and dashboard design so you master specific constraints of your lane, not shallow exposure to all three."
            desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-4.svg"
            imageClassName="h-[220px]"
            imgClassName="w-[307px] h-[220px] xl:w-[307px] xl:h-[220px]"
          />
        </div>
        <BenefitCard
          heading="Learn on your own schedule"
          subtext="No live classes. No rigid timetables. Enjoy bite-sized learning and readily available pre-recorded tutorials, giving you the freedom to rewind, pause, and learn at your own pace."
          desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-5.svg"
          imageClassName="h-[220px]"
          imgClassName="w-[288px] h-[193px] xl:w-[288px] xl:h-[193px]"
          className="xl:w-[338px] xl:shrink-0"
        />
      </div>

      {/* Box container 3 — custom frame heights + CTA */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <BenefitCard
          heading="Get feedback that actually helps"
          subtext="Dedicated tutors are available through tutor support lines whenever you're stuck or unsure what to do next, helping you improve with every step."
          desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-6.svg"
          tabletMobileImage="/assets/benefits/tablet-mobile/tablet-mobile-benefits-card-image-4.svg"
          imageClassName="h-[280px]"
          imgClassName="w-[288px] h-[280px] xl:w-[484px] xl:h-[276px]"
        />
        <BenefitCard
          heading="Become a certified designer"
          subtext="Earn a verifiable and professional certificate in app, web or dashboard design that helps employers, clients, and peers recognize your expertise."
          desktopImage="/assets/benefits/desktop/desktop-benefits-card-image-7.svg"
          tabletMobileImage="/assets/benefits/tablet-mobile/tablet-mobile-benefits-card-image-3.svg"
          imageClassName="h-[140px] md:h-[214px]"
          imgClassName="w-[282px] h-[275px] xl:w-[430px] xl:h-[212px]"
          cta={<Button variant="primaryFill" href="https://www.wikihow.com">Start For Free</Button>}
        />
      </div>
    </Section>
  );
}