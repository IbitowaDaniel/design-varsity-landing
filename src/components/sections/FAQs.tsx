import Section from "@/components/shared/Section";
import FaqAccordionList, { FaqItem } from "@/components/shared/FaqAccordionList";


const myPageFaqs: FaqItem[] = [
  {
    heading: "What is Design Varsity Africa?",
    text: "Design Varsity Africa is an edtech startup designed to kickstart your UI/UX design journey in web/app/dashboard design. You will master essential design fundamentals, leverage AI-powered tools and workflows, and build solid projects at the end of your training.",
  },
  {
    heading: "Who is this platform suitable for?",
    text: "Anyone who wants to master app, web, or dashboard design, whether you're starting from scratch, switching careers, a developer looking to design your own projects, a project manager or builder aiming to create more polished, user-friendly products, or simply someone looking to learn a high-income tech skill then this platform is for you.",
  },
  {
    heading: "Do I need prior design or tech experience to join?",
    text: "No. The learning path of our courses are completely beginner friendly and crafted to help kick start your career as a designer.",
  },
  {
    heading: "What if I get stuck while learning?",
    text: "At Design Varsity Africa, you are not on your own while learning. You can always reach out to the tutor support lines for some guidance whenever you are stuck.",
  },
  {
    heading: "How do I know which designer path is best for me?",
    text: "Before you pay for any course, our onboarding process helps you discover your best-fit path through a short quiz that matches your interests, strengths, and goals with the type of design path you’re most likely to enjoy.",
  },
  {
    heading: "Can I combine two or three certifications into one?",
    text: "Yes, you can. If you successfully complete certifications in two or more design paths, you'll receive an additional bonus certificate that combines those specializations.\nFor example:\nWeb + App Design → Web & App Designer\nWeb + Dashboard Design → Web & Dashboard Designer\nApp + Dashboard Design → App & Dashboard Designer\nWeb + App + Dashboard Design → UI/UX Designer\nThis way, your certifications reflect not only the individual paths you’ve mastered, but also your broader design expertise.",
  },
  {
    heading: "How will employers verify my certification?",
    text: "Every certification is recorded on our public Certificate Wall of Fame. Simply share your certificate ID or the email address associated with your certification, and employers can search for your credentials and view your verified certificates, and issue dates alongside your projects and case studies. No login is required, making it quick and easy for employers to verify your credentials.",
  },
  {
    heading: "What is the time duration for completing the courses?",
    text: "There is no fixed time duration for completing your chosen design path. Design Varsity Africa is completely self-paced, which means you can learn whenever it fits your schedule. Some learners may complete the program in a few months, while others may take longer. You'll have the flexibility to pause, rewind lessons, and progress at a pace that works best for you.",
  },
  {
    heading: "What tool will we be using to design and is the tool free?",
    text: "Figma is the tool we will use to design interfaces. It has a free tier that works in any browser, so there are no expensive software costs involved.",
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
           
          We have answers
        </>
      }
      contentClassName="!bg-white"
    >
      <FaqAccordionList faqData={myPageFaqs} />
    </Section>
  );
}