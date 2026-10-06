import Section from "@/components/shared/Section";
import FaqAccordionList, { FaqItem } from "@/components/shared/FaqAccordionList";


const myPageFaqs: FaqItem[] = [
  {
    heading: "What is this page about?",
    text: "This is where you can explore other in-demand tech skills beyond design, from software development to cybersecurity to AI. Each skill path is run as its own program by the same founding team behind Design Varsity Africa, with working professionals in that field leading the training.",
  },
  {
    heading: "Who are these platforms suitable for?",
    text: "Anyone who wants to build a career in tech, whether you're starting from scratch, switching careers, or simply looking to learn a high-income skill. Each path is built to take you from beginner to job-ready, no matter your background.",
  },
  {
    heading: "Do I need prior tech experience to join?",
    text: "No. Every skill path is beginner friendly, and the interactive lessons are structured to take you from zero experience to a confident, practical skill set.",
  },
  {
    heading: "Do you only teach the skill, or also how to make money from it?",
    text: "Both. Every path is built around helping you become profitable with what you learn, not just skilled at it. Each path comes with tutorials on freelancing, client acquisition, pricing your work, landing a job, and so on.",
  },
  {
    heading: "What if I get stuck while learning?",
    text: "You're not on your own while learning. You can always reach out to tutor support whenever you get stuck on a lesson or a project.",
  },
  {
    heading: "What is the time duration for completing a course?",
    text: "There is no fixed duration. Each program is self-paced, so you can learn whenever it fits your schedule, pause when you need to, and progress at whatever speed works for you.",
  },
  {
    heading: "How is this connected to Design Varsity Africa?",
    text: "This platform is one of several sister programs built by the same founding team behind Design Varsity Africa, each one focused on a different in-demand tech skill and run by professionals working in that field.",
  },
];

export default function FAQs() {
  return (
    <Section
      id="faqs"
      eyebrow="Frequently Asked Questions"
      title={
        <>
          Do you have questions?
          <br />
          We have answers
        </>
      }
      contentClassName="!bg-white"
    >
      <FaqAccordionList faqData={myPageFaqs} />
    </Section>
  );
}