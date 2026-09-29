"use client";

import { motion } from "framer-motion";
import { inViewReveal } from "@/components/shared/motion-presets";
import { useState } from "react";
import { FaqButton } from "@/components/ui/FaqButton";
import { cn } from "@/lib/utils";

export interface FaqItem {
  heading: string;
  text?: string;
}

interface FaqAccordionListProps {
  /** The FAQ items to render. This is the only thing you need to pass in per-page. */
  faqData: FaqItem[];
  /** Index that should be open by default. Defaults to 0 (first item open). Pass null for all closed. */
  defaultOpenIndex?: number | null;
  /** Optional className override for the outer wrapper (defaults to the original max-w-[720px] layout). */
  className?: string;
}

export default function FaqAccordionList({
  faqData,
  defaultOpenIndex = 0,
  className,
}: FaqAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[720px] flex-col gap-6",
        className
      )}
    >
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            {...inViewReveal}
            className="w-full h-auto bg-gray-100 p-3 md:p-4 rounded-[20px] md:rounded-2xl"
          >
            <div className="w-full h-auto bg-white border-2 border-dashed border-gray-400 p-3 md:p-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center justify-between gap-4">
                  <h3 className="text-card text-gray-900 flex-1 min-w-0">
                    {item.heading}
                  </h3>
                  <FaqButton
                    isOpen={isOpen}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1">
                      <p className="text-body text-gray-500 whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}