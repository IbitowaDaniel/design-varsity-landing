"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface BeyondCertificationCardProps {
  heading: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string; // falls back to desktopImage
  imageClassName: string;     // image-frame height, e.g. "h-[250px]"
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
}

function BeyondCertificationCard({
  heading,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
}: BeyondCertificationCardProps) {
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
export default function BeyondCertification() {
  return (
    <Section
      eyebrow="Beyond Certification"
      title={
        <>
          What you get beyond
           
          being certified
        </>
      }
    >
      {/* Box container 1 */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <BeyondCertificationCard
          heading="Get job ready"
          subtext="Learn how to create stronger applications, position your skills, and stand out to employers and clients on freelance platforms like LinkedIn, Upwork, Contra, and more."
          desktopImage="/assets/beyond-certification/desktop/desktop-beyond-certification-card-image-1.svg"
          tabletMobileImage="/assets/beyond-certification/tablet-mobile/tablet-mobile-beyond-certification-card-image-1.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[568px] xl:h-[252px]"
          className="md:flex-1 xl:flex-none xl:w-[600px]"
        />
        <BeyondCertificationCard
          heading="Access real opportunities"
          subtext="We connect with organizations looking for talents and share roles with our graduates, giving you access to internship and job offers beyond your own search."
          desktopImage="/assets/beyond-certification/desktop/desktop-beyond-certification-card-image-2.svg"
          tabletMobileImage="/assets/beyond-certification/tablet-mobile/tablet-mobile-beyond-certification-card-image-2.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[400px] xl:h-[228px]"
          className="md:flex-1"
        />
      </div>


      {/* Box container 2 */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <BeyondCertificationCard
          heading="Learn the business of design"
          subtext="Learn how to negotiate, manage contracts, pitch, and confidently convert prospects into clients while building the business skills needed to grow a sustainable design career."
          desktopImage="/assets/beyond-certification/desktop/desktop-beyond-certification-card-image-3.svg"
          tabletMobileImage="/assets/beyond-certification/tablet-mobile/tablet-mobile-beyond-certification-card-image-3.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[568px] xl:h-[252px]"
          className="md:flex-1"
        />
        <BeyondCertificationCard
          heading="Portfolio & personal branding "
          subtext="Get practical advice on building a portfolio that gets you hired, while learning how to develop a strong personal brand and showcase your skills across social media."
          desktopImage="/assets/beyond-certification/desktop/desktop-beyond-certification-card-image-4.svg"
          tabletMobileImage="/assets/beyond-certification/tablet-mobile/tablet-mobile-beyond-certification-card-image-4.svg"
          imageClassName="h-[224px] xl:h-[250px]"
          imgClassName="w-[272px] h-[222px] xl:w-[400px] xl:h-[228px]"
          className="md:flex-1"
        />
      </div>


    </Section>
  );
}