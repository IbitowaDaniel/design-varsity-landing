"use client";

import Section from "@/components/shared/Section";
import { motion, type Variants } from "framer-motion";
import { fadeUp, inViewReveal, fadeUpDelay } from "@/components/shared/motion-presets";


const othersItems = [
  "Theoretical exercises and low quality projects",
  "Generic and surface level UI/UX learning curriculum",
  "Isolated learning with no personalized feedback",
  "Pay upfront before you know what you're getting",
  "One-time lump sum payment",
  "Course and video content learning experience only",
  "Outdated curriculum and workflows",
];

const designVarsityItems = [
  "High quality projects built to industry standards",
  "3 focused designer paths: Web, App, and Dashboard",
  "Constant tutor support and actionable feedback",
  "No card free trial to see what the value really is",
  "3 flexible installments payment",
  "Premium resources and a designer community",
  "Market accurate scheme of work",
];


const listItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


interface CompareCardProps {
  title: string;
  items: string[];
  icon: string;
  iconAlt: string;
  iconClassName?: string; // 20 for the X icon, 24 for the check icon
  delay?: number;
}

function CompareCard({ title, items, icon, iconAlt, iconClassName = "", delay = 0 }: CompareCardProps) {
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
    <motion.div {...reveal} className="flex w-full flex-col">
      {/* header frame: bg gray-900, 6px inside stroke, hug */}
      <div className="border-[6px] bg-gray-900 rounded-[12px] border-gray-900">
        <div className="hug w-full rounded-lg bg-white py-5">
          <h3 className="text-card text-center text-gray-900">{title}</h3>
        </div>
      </div>

      {/* content frame: white, dashed L/R/B stroke, vertical stack */}
      <ul className="flex w-motion.full flex-col gap-3 border-x-2 border-b-2 rounded-b-lg border-dashed border-gray-400 bg-white px-3 py-2 md:gap-4 md:px-4">
        {items.map((item, i) => (
          <motion.li
            key={item}
            variants={listItem}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className={`flex w-full items-start gap-2 py-3 ${i < items.length - 1
              ? "border-b-2 border-gray-400 border-dashed"
              : ""
              }`}
          >
            {/* icon + text row (gap 8px) */}
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
              <img
                src={icon}
                alt={iconAlt}
                className={`object-contain ${iconClassName}`}
                loading="lazy"
              />
            </div>
            <span className="text-body text-gray-500">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      eyebrow="Why Choose Us"
      title={
        <>
          What makes us better
          
          than others?
        </>
      }
    >
      {/* outer autolayout: vertical / gap 32px mobile; horizontal / gap 16px desktop+tablet */}
      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-4">
        <CompareCard
          title="Others"
          items={othersItems}
          icon="/assets/icons/why-choose-us-x-icon.svg"
          iconAlt="Not included"
          iconClassName="h-5 w-5"
        />
        <CompareCard
          title="Design Varsity Africa"
          items={designVarsityItems}
          delay={0.12}
          icon="/assets/icons/why-choose-us-check-icon.svg"
          iconAlt="Included"
          iconClassName="h-6 w-6"
        />
      </div>
    </Section>
  );
}