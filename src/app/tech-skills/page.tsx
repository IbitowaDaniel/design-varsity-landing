import FAQs from "./FAQs";
import TechSkills from "./TechSkills";
import TheAdvantage from "./TheAdvantage";
import { Hero } from "./tech-courses-hero";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-20">
      <Hero />
      <TechSkills />
      <TheAdvantage />
      <FAQs />
      {/* More sections... */}
    </div>
  );
}