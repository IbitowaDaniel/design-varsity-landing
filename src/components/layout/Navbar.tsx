"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Only track active sections on the home page
      if (!isHome) {
        setActiveHref("");
        return;
      }

      const offset = 140; // roughly navbar height + some breathing room
      let current = "";

      // Last section whose top has passed the offset wins
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (!el) continue;

        const { top, bottom } = el.getBoundingClientRect();
        if (top <= offset && bottom > offset) {
          current = link.href;
          break;
        }
      }

      // If the user hit the bottom of the page, highlight the last section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = navLinks[navLinks.length - 1].href;

      setActiveHref(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsOpen(false); // Close mobile menu if open

    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home, Next.js handles routing automatically via the updated href
  };

  return (
    <nav className="w-full fixed top-0 z-50">
      {/* DESKTOP */}
      <div
        className={`
          mx-auto hidden xl:flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "max-w-[1120px] mt-4 rounded-xl border-2 border-gray-200 bg-white px-6 pt-3 pb-4"
            : "max-w-[1200px] border-2 border-transparent bg-white px-0 py-6"
          }
        `}
      >
        <a href="/" className="h-[32px] w-[60px]">
          <img
            src="/assets/icons/logo.svg"
            alt="Design Varsity Africa"
            className="h-full w-full"
          />
        </a>

        <div className="flex items-center gap-9">
          {navLinks.map((link) => {
            const finalHref = isHome ? link.href : `/${link.href}`;
            const isActive = activeHref === link.href;
            return (
              <a key={link.label}
                href={finalHref}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`text-body transition-colors hover:text-amber-700 ${isActive ? "text-amber-700" : "text-gray-500"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <Button href="https://www.wikihow.com">Start For Free</Button>
      </div>

      {/* MOBILE — header row */}
      <div
        className={`
          flex xl:hidden items-center justify-between
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "mx-4 mt-4 rounded-xl border-2 border-gray-200 bg-white px-2 py-3"
            : "mx-4 border-2 border-transparent bg-white py-6"
          }
        `}
      >
        <a href="/" className="h-[32px] w-[60px] ">
          <img
            src="/assets/icons/logo.svg"
            alt="Design Varsity Africa"
            className="h-full w-full"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center text-gray-900"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <img
              src="/assets/icons/x-bold.svg"
              alt="Close menu"
              className="h-6 w-6"
            />
          ) : (
            <img
              src="/assets/icons/list-bold.svg"
              alt="Open menu"
              className="h-6 w-6"
            />
          )}
        </button>
      </div>

      {/* MOBILE — animated overlay */}
      <div
        className={`
          xl:hidden overflow-hidden bg-white
          transition-[height,opacity] duration-500 ease-in-out
          ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0"}
          ${scrolled ? "pt-4" : ""}
        `}
      >
        <div className="mx-auto max-w-[1199px] py-4 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => {
              const finalHref = isHome ? link.href : `/${link.href}`;
              const isActive = activeHref === link.href;
              return (
                <a key={link.label}
                  href={finalHref}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`
                    text-body px-0 py-2 text-center
                    transition-all duration-500 hover:text-amber-700
                    ${isActive ? "text-amber-700" : "text-gray-500"}
                    ${isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
                  `}
                  style={{ transitionDelay: isOpen ? `${200 + i * 75}ms` : "0ms" }}
                >
                  {link.label}
                </a>
              );
            })}
            <div
              className={`
                pt-2 flex items-center justify-center
                transition-all duration-500
                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
              style={{
                transitionDelay: isOpen ? `${200 + navLinks.length * 75}ms` : "0ms",
              }}
            >
              <Button variant="primaryFill" href="https://www.wikihow.com" className="max-w-96">
                Start For Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}