"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { WaitlistModal } from "./WaitlistModal";

/* ---------- Card-box (shared spec) ---------- */
interface TechSkillsCardProps {
  heading: string;
  subtext?: string;
  icon?: string;
  className?: string;
  cta?: ReactNode;
}

function TechSkillsCard({
  heading,
  subtext,
  icon,
  className = "",
  cta,
}: TechSkillsCardProps) {
  return (
    <motion.article
      {...inViewReveal}
      className={`flex w-full flex-col justify-between gap-4 rounded-lg border-2 border-dashed bg-white border-gray-400 p-3 pb-4 md:p-4 ${className}`}
    >
      {icon && (
        <div className="flex w-full flex-col items-center justify-center h-fit">
          <img src={icon} alt="" className="w-[60px] h-[60px] object-contain" />
        </div>
      )}

      {/* box text content */}
      <div className="flex flex-col text-center gap-1">
        <h3 className="text-card text-gray-900">{heading}</h3>
        {subtext && <p className="text-body text-gray-500">{subtext}</p>}
      </div>
      {cta}
    </motion.article>
  );
}

/* ---------- Data ---------- */
const SKILLS = [
  {
    heading: "Software Development",
    subtext:
      "Learn to build real software: front-end, back-end, full-stack development, mobile apps in Flutter, React Native, Kotlin, Swift or Java, and Quality Assurance testing.",
  },
  {
    heading: "Marketing & Growth",
    subtext:
      "Discover how you can get products seen, clicked and sold. Learn digital marketing, SEO, copywriting, CRM tools and even e-commerce management on platforms like Shopify.",
  },
  {
    heading: "Video Editing & Content Creation",
    subtext:
      "Learn professional video editing in Premiere Pro and CapCut, plus content creation strategy, personal branding, and growth for platforms like TikTok, Instagram, and YouTube.",
  },
  {
    heading: "Data Analysis & Engineering",
    subtext:
      "Learn to turn raw data into decisions that matter. Master data analysis and engineering, the vital technical skills that every modern company is desperately looking to hire.",
  },
  {
    heading: "AI & Automation",
    subtext:
      "Learn powerful AI and automation tools with no-code workflows, AI agent building, generative AI, and applied prompt engineering to help scale real-world businesses.",
  },
  {
    heading: "Cybersecurity",
    subtext:
      "Learn to protect real systems: security fundamentals, ethical hacking, penetration testing, network security, and SOC analyst skills for modern cybersecurity defense.",
  },
  {
    heading: "Machine Learning / AI Engineering",
    subtext:
      "Learn to build the AI everyone is talking about with machine learning fundamentals, MLOps engineering, and production model deployment from ground theory.",
  },
  {
    heading: "Motion Design",
    subtext:
      "Learn to bring static designs to life with professional motion graphics in After Effects, plus UI/UX motion design and engaging micro-interactions that feel alive for platforms.",
  },
  {
    heading: "Character Animation",
    subtext:
      "Learn to bring characters to life with mastery of professional animation, complex rigging, and even storytelling, and scriptwriting to create complete and captivating stories.",
  },
];

/* ---------- Section ---------- */
export default function TechSkills() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <Section
        id="skills"
        eyebrow="Discover your interest"
        title={
          <>
            Which tech skills are
             
            you interested in?
          </>
        }
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {SKILLS.map((skill, i) => (
            <TechSkillsCard
              key={skill.heading}
              heading={skill.heading}
              subtext={skill.subtext}
              icon={`/assets/tech-skills/tech-skills-icon-${i + 1}.svg`}
              cta={
                <Button
                  variant="secondaryFill"
                  onClick={() => setWaitlistOpen(true)}
                >
                 View More
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      {/* Rendered outside <Section> so animated/transformed ancestors can't affect its fixed positioning */}
    <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </>
  );
}