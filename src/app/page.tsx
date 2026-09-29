import Benefits from "@/components/sections/Benefits";
import BeyondCertification from "@/components/sections/BeyondCertification";
import FAQs from "@/components/sections/FAQs";
import { Hero } from "@/components/sections/Hero";
import LearningOutcomes from "@/components/sections/LearningOutcomes";
import Pricing from "@/components/sections/Pricing";
import WallOfFame from "@/components/sections/WallOfFame";
import WhyChooseUs from "@/components/sections/WhyChooseUs";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20">
      <Hero />
      <Benefits />
      <BeyondCertification />
      <WhyChooseUs />
      <WallOfFame />
      <LearningOutcomes />
      <Pricing />
      <FAQs />
      {/* More sections... */}
    </div>
  );
}