import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
      <main className="flex flex-col gap-y-12 md:gap-y-20 text-gray-900 items-center justify-center">
        <section className="mx-auto w-full max-w-[1200px] overflow-x-clip bg-white rounded-b-[32px] md:rounded-b-[56px] lg:rounded-b-[64px] px-4 pb-16 pt-24 shadow-section-mobile md:px-8 md:shadow-section-desktop xl:pt-32 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <span className="block text-7xl font-extrabold tracking-tight text-gray-200 sm:text-9xl select-none">
              404
            </span>

            <h1 className="text-hero">
              Oops! Page not found.
            </h1>

            <p className="text-bodyLarge text-gray-500 max-w-[360px] lg:max-w-[640px]">
              This page may have been moved, removed, or the URL wasn't quite right.. Don't worry, let's get you back to mastering UI/UX design.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button variant="primary" href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
}