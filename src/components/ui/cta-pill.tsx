"use client";

import React from "react";

interface HeroCtaPillProps {
  href?: string;
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroCtaPill({
  href = "/tech-skills",
  text = "Want to learn another tech skill? Click here!",
  onClick,
}: HeroCtaPillProps) {
  return (
    <>
      <style jsx global>{`
        @keyframes subtle-ping {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          60% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .animate-subtle-ping {
          animation: subtle-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <a
        href={href}
        onClick={onClick}
        className="group flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 transition-all duration-200 hover:border-gray-300 hover:bg-gray-100"
      >
        {/* Quick Fade Radar Ping Notification Badge */}
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-subtle-ping rounded-full bg-gray-300"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gray-500"></span>
        </span>

        <span className="text-eyebrowHero text-gray-500">{text}</span>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icons/caret-right-bold.svg"
          alt=""
          aria-hidden
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </a>
    </>
  );
}