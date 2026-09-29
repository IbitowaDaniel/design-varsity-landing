// src/app/terms/page.tsx
import { TermsSection } from "@/components/shared/LegalSection";
import { termsData } from "@/data/privacy-content";

export default function PrivacyPage() {
  return (
    <section className="flex flex-col gap-y-12 md:gap-y-20">
    <div className="mx-auto w-full max-w-[1200px] overflow-x-clip bg-white rounded-b-[32px] md:rounded-b-[56px] lg:rounded-b-[64] px-4 pb-12 md:pb-16 pt-24 shadow-section-mobile md:px-0 md:pt-28 md:shadow-section-desktop xl:pt-[154px]">
      {/* Content wrapper with restricted reading width */}
      <div className="mx-auto w-full max-w-[640px] md:max-w-[720px] flex flex-col">
        
        {/* Page Header */}
        <div className="flex flex-col gap-2 pb-8 border-b-2 border-gray-200">
          <h1 className="text-hero text-gray-900">Privacy Policy</h1>
          <p className="text-card text-gray-500">Last Updated: August, 2026</p>
        </div>

        {/* Terms Content Body */}
        <div className="mt-8 flex flex-col gap-y-12">
          {termsData.map((section) => (
            <TermsSection key={section.id} {...section} />
          ))}
        </div>

      </div>
    </div>
    </section>
  );
}