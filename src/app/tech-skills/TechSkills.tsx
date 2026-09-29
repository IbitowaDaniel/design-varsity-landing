"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";

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
          <img
            src={icon}
            alt=""
            className="w-[60px] h-[60px] object-contain"
          />
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
/* ---------- Section ---------- */
export default function TechSkills() {
  return (
    <Section
      id="skills"
      eyebrow="Discover your interest"
      title={
        <>
          Which tech skills are
          <br />
          you interested in?
        </>
      }
    >
      {/* Single responsive grid container for all 9 cards */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        
        {/* Final CTA box */}
        <TechSkillsCard
          heading="Software Development"
          subtext="Learn to build real software: front-end, back-end, full-stack development, mobile apps in Flutter, React Native, Kotlin, Swift or Java, and Quality Assurance testing."
          icon="/assets/tech-skills/tech-skills-icon-1.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Marketing & Growth"
          subtext="Discover how you can get products seen, clicked and sold. Learn digital marketing, SEO, copywriting, CRM tools and even e-commerce management on platforms like Shopify."
          icon="/assets/tech-skills/tech-skills-icon-2.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Video Editing & Content Creation"
          subtext="Learn professional video editing in Premiere Pro and CapCut, plus content creation strategy, personal branding, and growth for platforms like TikTok, Instagram, and YouTube."
          icon="/assets/tech-skills/tech-skills-icon-3.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Data Analysis & Engineering"
          subtext="Learn to turn raw data into decisions that matter. Master data analysis and engineering, the vital technical skills that every modern company is desperately looking to hire."
          icon="/assets/tech-skills/tech-skills-icon-4.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="AI & Automation"
          subtext="Learn powerful AI and automation tools with no-code workflows, AI agent building, generative AI, and applied prompt engineering to help scale real-world businesses."
          icon="/assets/tech-skills/tech-skills-icon-5.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Cybersecurity"
          subtext="Learn to protect real systems: security fundamentals, ethical hacking, penetration testing, network security, and SOC analyst skills for modern cybersecurity defense."
          icon="/assets/tech-skills/tech-skills-icon-6.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Machine Learning / AI Engineering"
          subtext="Learn to build the AI everyone is talking about with machine learning fundamentals, MLOps engineering, and production model deployment from ground theory."
          icon="/assets/tech-skills/tech-skills-icon-7.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Motion Design"
          subtext="Learn to bring static designs to life with professional motion graphics in After Effects, plus UI/UX motion design and engaging micro-interactions that feel alive for platforms."
          icon="/assets/tech-skills/tech-skills-icon-8.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
        <TechSkillsCard
          heading="Character Animation"
          subtext="Learn to bring characters to life with mastery of professional animation, complex rigging, and even storytelling, and scriptwriting to create complete and captivating stories."
          icon="/assets/tech-skills/tech-skills-icon-9.svg"
          cta={<Button variant="secondaryFill" href="https://www.wikihow.com">View More</Button>}
        />
         <motion.div
          {...inViewReveal}
          className="col-span-full flex flex-col items-center justify-between gap-4 rounded-lg border-2 border-dashed border-gray-400 bg-white p-3 text-center md:flex-row md:p-4 md:text-left"
        >
          <h3 className="text-card text-gray-900">
            Not sure which of these tech skills to pick?
          </h3>
          <Button variant="primaryFill" href="#" className="md:max-w-[200px]">
            Help me choose
          </Button>
        </motion.div>
       
      </div>
    </Section>
  );
}