"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { inViewReveal } from "@/components/shared/motion-presets";

import Section from "@/components/shared/Section";
import { ResponsiveAsset } from "@/components/shared/ResponsiveAsset";
import { ReactNode } from "react";

/* ---------- Card-box (shared spec) ---------- */
interface LearningOutcomeCardProps {
  heading: string;
  subtext: string;
  desktopImage: string;
  tabletMobileImage?: string; // falls back to desktopImage
  imageClassName: string;     // image-frame height, e.g. "h-[250px]"
  imgClassName: string;
  className?: string;
  cta?: ReactNode;
}

function LearningOutcomeCard({
  heading,
  subtext,
  desktopImage,
  tabletMobileImage,
  imageClassName,
  imgClassName,
  className = "",
  cta,
}: LearningOutcomeCardProps) {
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

/* ---------- Tab data ---------- */
type OutcomeItem = {
  heading: string;
  subtext: string;
  desktopImage: string;
};

type TabKey = "all" | "web" | "app" | "dashboard";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Design" },
  { key: "app", label: "App Design" },
  { key: "dashboard", label: "Dashboard Design" },
];

// Reused image slots per card position (left, middle, right-wide).
// Swap these for path-specific art once it exists — same 3 slots each tab.
const IMAGE_SLOTS = [
  "/assets/learning-outcomes/learning-outcomes-all-1.svg",
  "/assets/learning-outcomes/learning-outcomes-all-2.svg",
  "/assets/learning-outcomes/learning-outcomes-all-3.svg",
  "/assets/learning-outcomes/learning-outcomes-web-1.svg",
  "/assets/learning-outcomes/learning-outcomes-web-2.svg",
  "/assets/learning-outcomes/learning-outcomes-web-3.svg",
  "/assets/learning-outcomes/learning-outcomes-app-1.svg",
  "/assets/learning-outcomes/learning-outcomes-app-2.svg",
  "/assets/learning-outcomes/learning-outcomes-app-3.svg",
  "/assets/learning-outcomes/learning-outcomes-dashboard-1.svg",
  "/assets/learning-outcomes/learning-outcomes-dashboard-2.svg",
  "/assets/learning-outcomes/learning-outcomes-dashboard-3.svg",
];

const OUTCOMES: Record<TabKey, OutcomeItem[]> = {
  all: [
    {
      heading: "Designing for consistency",
      subtext:
        "Master reusable components and style systems, thereby learning to design the backbone of products rather than just isolated screens/layouts.",
      desktopImage: IMAGE_SLOTS[0],
    },
    {
      heading: "Showcasing how you think",
      subtext:
        "Learn to craft portfolio stories that walk through your process from problem to solution, so hiring managers see the thinking behind your designs.",
      desktopImage: IMAGE_SLOTS[1],
    },
    {
      heading: "Bringing designs to life",
      subtext:
        "Build interactive, clickable prototypes that feel like real products, so you can test user flows and iterate before a single line of code is written.",
      desktopImage: IMAGE_SLOTS[2],
    },
  ],
  web: [
    {
      heading: "Increasing site conversion",
      subtext:
        "Go beyond making things look good by learning behavioral psychology, A/B testing, and strategic UX patterns that turn visitors into customers.",
      desktopImage: IMAGE_SLOTS[3],
    },
    {
      heading: "Responsive design",
      subtext:
        "Design sites that adapt across mobile, tablet, and desktop, so you can deliver one experience that works beautifully on any device your users use.",

      desktopImage: IMAGE_SLOTS[4],
    },
    {
      heading: "Designing for growth",
      subtext:
        "Learn how to design website pages, landing pages, and product pages built to move a business forward, not just look good in a portfolio.",
      desktopImage: IMAGE_SLOTS[5],
    },
  ],
  app: [
    {
      heading: "Designing for every state",
      subtext:
        "Design for empty states, errors, and edge cases most beginners overlook, so your apps hold up under messy, everyday real-world use.",
      desktopImage: IMAGE_SLOTS[6],
    },
    {
      heading: "Micro-interactions",
      subtext:
        "Master small details like button states, loading animations, toggles and things that make an app feel finished, polished, and alive in the user's hands.",
      desktopImage: IMAGE_SLOTS[7],
    },
    {
      heading: "Hooking users",
      subtext:
        "Craft first-time experiences that guide new users to their \"aha moment\" fast, so people stick around instead of deleting your app on day one.",
      desktopImage: IMAGE_SLOTS[8],
    },
  ],
  dashboard: [
    {
      heading: "Making data actionable",
      subtext:
        "Learn to design dashboards that help users spot what matters in seconds, so people make confident decisions instead of drowning in information.",
      desktopImage: IMAGE_SLOTS[9],
    },
    {
      heading: "Role-based design",
      subtext:
        "Structure permissions and views so admins, managers, and everyday users each see exactly what they need, nothing more, nothing less.",
      desktopImage: IMAGE_SLOTS[10],
    },
    {
      heading: "Clear information hierarchy",
      subtext:
        "Organize raw data into tables, filters, and reports so people find what they need fast, without digging through cluttered, overwhelming screens.",
      desktopImage: IMAGE_SLOTS[11],
    },
  ],
};

/* ---------- Tab bar ---------- */
function TabBar({
  activeTab,
  onChange,
}: {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Learning outcomes by path"
      className="flex w-full flex-wrap justify-center gap-2 px-3 md:gap-3 md:px-0"
    >
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.key)}
            className={`rounded-sm border-2 border-dashed px-4 py-2 text-sm font-medium transition-colors md:text-base ${isActive
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Section ---------- */
export default function LearningOutcomes() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const items = OUTCOMES[activeTab];

  return (
    <Section
      eyebrow="Learning Outcomes"
      title={
        <>
          These are the things
           
          you will master
        </>
      }
      aboveGrid={<TabBar activeTab={activeTab} onChange={setActiveTab} />}
    >
      {/* Cards — same layout shell for every tab, driven by `items` */}
      <div
        key={activeTab}
        className="flex flex-col gap-3 xl:flex-row xl:gap-4"
      >
        <div className="flex w-full flex-col md:flex-row gap-3 xl:gap-4">
          <LearningOutcomeCard
            heading={items[0].heading}
            subtext={items[0].subtext}
            desktopImage={items[0].desktopImage}
            imageClassName="h-[284px]"
            imgClassName="w-[307px] h-[284px]"
          />
          <LearningOutcomeCard
            heading={items[1].heading}
            subtext={items[1].subtext}
            desktopImage={items[1].desktopImage}
            imageClassName="h-[284px]"
            imgClassName="w-[307px] h-[284px]"
          />
        </div>
        <LearningOutcomeCard
          heading={items[2].heading}
          subtext={items[2].subtext}
          desktopImage={items[2].desktopImage}
          imageClassName="h-[284px]"
          imgClassName="w-[307px] h-[284px]"
          className="xl:w-[338px] xl:shrink-0"
        />
      </div>
    </Section>
  );
}