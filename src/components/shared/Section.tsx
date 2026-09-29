
"use client";

import { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface SectionProps {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  className?: string;
  contentWidth?: string;
  direction?: "vertical" | "horizontal";
  contentClassName?: string;
  aboveGrid?: ReactNode;
}

export default function Section({
  eyebrow,
  title,
  children,
  id,
  className = "",
  contentWidth = "",
  direction = "vertical",
  contentClassName = "",
  aboveGrid,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1200px] rounded-b-[32px] px-4 py-8 shadow-section-mobile md:rounded-b-[56px] md:px-8 md:shadow-section-desktop lg:rounded-b-[64px] xl:px-0 xl:py-12 ${className}`}
    >
      {/* section-content */}
      <div className={`mx-auto flex w-full ${contentWidth} flex-col gap-4 md:gap-6 xl:w-[1080px]`}>
        {/* section-heading — eyebrow then title, 80ms apart */}
        <div className="flex flex-col items-center gap-2 px-3 text-center md:px-0">
          <Reveal>
            <Eyebrow label={eyebrow} />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-section text-gray-900">{title}</h2>
          </Reveal>
        </div>

        {/* optional content rendered above the grid-container, e.g. tabs */}
        {aboveGrid}

        {/* grid-container — children animate themselves via inViewReveal */}
        <div
          className={`w-full bg-gray-100 rounded-[20px] md:rounded-2xl p-3 md:p-4 ${contentClassName} ${
            direction === "horizontal"
              ? "flex flex-row gap-3 md:gap-4"
              : "flex flex-col gap-3 md:gap-4"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}