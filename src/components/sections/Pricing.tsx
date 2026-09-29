"use client";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { inViewReveal, fadeUpDelay } from "@/components/shared/motion-presets";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface PricingCardProps {
  heading: string;
  cancelledPrice: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string;
  imageClassName: string;
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
  icon?: string;
  delay?: number;
  badge?: string; // ← NEW
}

function PricingCard({
  heading,
  cancelledPrice,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
  icon,
  delay = 0,
  badge, // ← NEW
}: PricingCardProps) {
  const tmImage = tabletMobileImage ?? desktopImage;

  const reveal =
    delay > 0
      ? {
        variants: fadeUpDelay(delay),
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-40px" },
      }
      : inViewReveal;

  return (
    <div
      className={`relative w-full max-w-90 md:w-1/2 xl:w-[338px] xl:shrink-0 ${className}`}
    >
      {/* ← NEW: Badge sits OUTSIDE the motion.article so the reveal animation can't affect it */}
      {/* Badge — same reveal timing as its card */}
      {badge && (
        <motion.span
          {...reveal}
          className="absolute top-2 right-2 z-10 rounded-md bg-amber-200 px-4 py-2 uppercase text-popularBadge text-gray-700"
        >
          {badge}
        </motion.span>
      )}

      <motion.article
        {...reveal}
        className="flex w-full flex-col gap-4 border-2 border-dashed rounded-lg bg-white border-gray-400 p-3 pb-4 md:p-4"
      >
        <div className="flex flex-col gap-1">
          {icon && (
            <img
              src={icon}
              alt={`${heading} icon`}
              className="w-[36px] h-[36px] mb-1 object-contain"
            />
          )}
          <p className="text-body text-gray-500">{subtext}</p>
          <div className="flex flex-row w-full gap-1">
            <h3 className="text-card text-gray-900">{heading}</h3>
            <h3 className="text-card text-gray-400 line-through">{cancelledPrice}</h3>
          </div>
        </div>

        <div
          className={`flex w-full h-[300px] items-center bg-gray-50 border-gray-700 border border-dashed rounded-[12px] justify-center overflow-hidden ${imageClassName}`}
        >
          <ResponsiveAsset
            mobile={tmImage}
            tablet={tmImage}
            desktop={desktopImage}
            alt=""
            imgClassName={imgClassName}
          />
        </div>

        {cta}
      </motion.article>
    </div>
  );
}

/* ---------- Graphic Feature Card Component ---------- */
interface FeatureCardProps {
  icon: string;
  text: string;
}

function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <motion.div
      {...inViewReveal}
      className="flex w-full flex-col items-center justify-center rounded-lg bg-white border-2 border-dashed border-gray-400 p-4 h-[170px]">
      <img
        src={icon}
        alt=""
        className="w-[60px] h-[60px] object-contain mb-4"
      />
      <p className="text-card text-gray-900 text-center">{text}</p>
    </motion.div>
  );
}

/* ---------- Section ---------- */
export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={
        <>
          Start for free, pay only
          <br />
          when you see value
        </>
      }
    >
      {/* Main auto layout container with 16px (gap-4) spacing */}
      <div className="flex flex-col w-full gap-4">
        {/* Pricing Cards Container */}
        <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:justify-between">
          <div className="flex flex-col md:flex-row w-full xl:contents gap-4 items-center justify-center">
            <PricingCard
              heading="₦54,900"
              cancelledPrice="₦84,900"
              subtext="Web design"
              desktopImage="/assets/pricing/pricing-card-image-1.svg"
              imageClassName=""
              imgClassName="w-[285px] h-[207px] xl:w-[306px] xl:h-[232px]"
              icon="/assets/pricing/web-design-icon.svg"
              cta={<Button variant="secondaryFill" href="https://www.wikihow.com">Start For Free</Button>}
            />
            <PricingCard
              heading="₦74,900"
              cancelledPrice="₦119,000"
              subtext="App design"
              badge="Most Popular" // ← NEW
              delay={0.1}
              desktopImage="/assets/pricing/pricing-card-image-2.svg"
              imageClassName="!bg-amber-50 !border-amber-700"
              imgClassName="w-[307px] h-[220px] xl:w-[306px] xl:h-[232px]"
              icon="/assets/pricing/app-design-icon.svg"
              cta={<Button variant="primaryFill" href="https://www.wikihow.com">Start For Free</Button>}
            />
          </div>
          <PricingCard
            heading="₦64,900"
            cancelledPrice="₦99,900"
            subtext="Dashboard design"
            desktopImage="/assets/pricing/pricing-card-image-3.svg"
            imageClassName=""
            imgClassName="w-[288px] h-[193px] xl:w-[306px] xl:h-[232px]"
            icon="/assets/pricing/dashboard-design-icon.svg"
            cta={<Button variant="secondaryFill" href="https://www.wikihow.com">Start For Free</Button>}
          />
        </div>

        {/* Graphic Feature Cards Section */}
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="flex flex-col md:flex-row w-full gap-4">
            <FeatureCard
              icon="/assets/pricing/pricing-section-icon-1.svg"
              text="No card free trial"
            />
            <FeatureCard
              icon="/assets/pricing/pricing-section-icon-2.svg"
              text="Lifetime access"
            />
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <FeatureCard
              icon="/assets/pricing/pricing-section-icon-3.svg"
              text="Pay in 3 installments"
            />
            <FeatureCard
              icon="/assets/pricing/pricing-section-icon-4.svg"
              text="Verifiable certificate"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}