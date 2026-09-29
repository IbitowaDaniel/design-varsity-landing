"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HeroCtaPill } from "@/components/ui/cta-pill";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handlePricingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const pricingHref = isHome ? "#pricing" : "/#pricing";

  return (
    <footer className="mx-auto pt-12 flex w-full max-w-[1200px] flex-col gap-[24px] bg-white pb-[24px] md:gap-[32px] md:pb-[32px]">
      {/* Top Frame */}
      <div className="flex w-full flex-col p-[24px] md:p-[32px] xl:p-[48px] rounded-b-[32px] md:rounded-b-[56px] xl:rounded-b-[64px] border-b-[2px] border-dashed border-gray-400">
        {/* Inner container: vertical on mobile/tablet, horizontal on desktop */}
        <div className="flex w-full h-auto flex-col xl:flex-row gap-[32px] md:gap-[48px] xl:gap-[64px] justify-between">

          {/* First frame: Logo & CTA button */}
          <div className="flex w-full xl:max-w-[420px] flex-col gap-[16px]">
            {/* Logo container */}
            <div className="flex w-fit h-fit items-center gap-[12px]">
              <a href="/" className="h-[32px] w-[60px] relative">
                <Image
                  src="/assets/icons/logo.svg"
                  alt="Design Varsity Africa Logo"
                  fill
                  className="h-full w-full object-contain"
                />
              </a>
              <div className="h-[35px] w-[4px] rounded-full bg-gray-300" />
              <span className="text-card text-gray-900">
                Design Varsity Africa
              </span>
            </div>

            {/* Content + Buttons container */}
            <div className="flex w-full max-w-105 flex-col gap-[16px]">
              <p className="text-body text-gray-500" style={{ lineHeight: "32px" }}>
                We're on a mission to make world-class UI/UX education affordable and accessible to African designers.
              </p>

              {/* Action buttons */}
              <div className="flex w-full flex-col gap-4 md:w-fit md:flex-row md:items-center md:px-0">
                {/* Mobile: fill variants */}
                <Button variant="primaryFill" href="https://www.wikihow.com" className="md:hidden">
                  Start For Free
                </Button>
                <Button
                  variant="secondaryFill"
                  href={pricingHref}
                  onClick={handlePricingClick}
                  className="md:hidden"
                >
                  View Pricing
                </Button>
                {/* Tablet / desktop: hug variants */}
                <Button variant="primary" href="https://www.wikihow.com" className="hidden md:inline-flex">
                  Start For Free
                </Button>
                <Button
                  variant="secondary"
                  href={pricingHref}
                  onClick={handlePricingClick}
                  className="hidden md:inline-flex scroll-smooth"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>

          {/* Second frame: Explore, Legal, and Social links */}
          <div className="flex w-full flex-col md:flex-row xl:flex-row gap-[32px] md:gap-[48px] md:justify-between md:max-w-3xl flex-1">

            {/* Column 1: Explore */}
            <div className="flex w-fit h-fit flex-col gap-[12px]">
              <h3 className="text-card text-gray-900">Explore</h3>
              <div className="flex flex-col gap-[8px]">
                <a
                  href="https://www.wikihow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-gray-500 hover:text-amber-700 transition-colors"
                >
                  Alumni
                </a>
                <a
                  href="https://www.wikihow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-gray-500 hover:text-amber-700 transition-colors"
                >
                  Certificates
                </a>
                <a
                  href="https://www.wikihow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-gray-500 hover:text-amber-700 transition-colors"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* Column 2: Legal */}
            <div className="flex w-fit h-fit flex-col gap-[12px]">
              <h3 className="text-card text-gray-900">Legal</h3>
              <div className="flex flex-col gap-[8px]">
                <Link href="/terms" className="text-body text-gray-500 hover:text-amber-700 transition-colors">
                  Terms of service
                </Link>
                <Link href="/privacy" className="text-body text-gray-500 hover:text-amber-700 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Column 3: Socials */}
            <div className="flex w-fit h-fit flex-col gap-[12px]">
              <h3 className="text-card text-gray-900">Socials</h3>
              <div className="flex flex-col gap-[8px]">
                <span className="text-body text-gray-500">Follow us on:</span>
                <div className="flex items-center gap-[12px] pt-1">
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:scale-105 transition-opacity relative w-[24px] h-[24px]">
                    <Image src="/assets/icons/socials/x-logo.svg" alt="X" width={24} height={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-105 transition-opacity relative w-[24px] h-[24px]">
                    <Image src="/assets/icons/socials/instagram-logo.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:scale-105 transition-opacity relative w-[24px] h-[24px]">
                    <Image src="/assets/icons/socials/tiktok-logo.svg" alt="TikTok" width={24} height={24} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-105 transition-opacity relative w-[24px] h-[24px]">
                    <Image src="/assets/icons/socials/youtube-logo.svg" alt="YouTube" width={24} height={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-105 transition-opacity relative w-[24px] h-[24px]">
                    <Image src="/assets/icons/socials/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />
                  </a>
                </div>
                <a href="mailto:hello@designvarsityafrica.com" className="text-body text-gray-500 hover:text-amber-700 transition-colors pt-1">
                  hello@designvarsityafrica.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Frame */}
      <div className="flex w-full h-auto flex-col md:flex-row items-center justify-between px-[16px] md:px-[32px] xl:px-[48px] gap-[16px] md:gap-auto">
        <p className="text-body text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Design Varsity Africa. All rights reserved.
        </p>
        <HeroCtaPill />
      </div>
    </footer>
  );
}