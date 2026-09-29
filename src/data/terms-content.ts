// src/data/terms-content.ts

export interface TermItem {
  id: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
  subsections?: {
    title: string;
    paragraphs?: string[];
    listItems?: string[];
  }[];
}

export const termsData: TermItem[] = [
  {
    id: "1",
    title: "1. Welcome to Design Varsity Africa",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your access to and use of the Design Varsity Africa platform, website, courses, community features, and all related services (collectively, the \"Platform\"). Design Varsity Africa is an edtech startup incorporated in Nigeria, built for Nigerians and Africans who want to master UI/UX design through specialized paths in App Design, Web Design, and Dashboard Design.",
      "By creating an account, enrolling in a course, or accessing any part of the Platform, you agree to be bound by these Terms. If you do not agree, please do not use the Platform."
    ]
  },
  {
    id: "2",
    title: "2. Who Can Use the Platform",
    paragraphs: [
      "You must be at least 16 years old to create an account and enroll in our courses. By registering, you confirm that all information you provide is accurate, complete, and current. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account."
    ]
  },
  {
    "id": "3",
    "title": "3. What We Offer",
    "paragraphs": [
      "Design Varsity Africa provides self-paced, pre-recorded online courses in three distinct design paths:",
      "• Web Design - ₦54,900 • App Design - ₦74,900 • Dashboard Design - ₦64,900",
      "Each path is designed to take you from beginner to job-ready through bite-sized lessons, real-world projects, AI-assisted workflows, tutor support, and community access. Upon successful completion, you will earn a verifiable certificate in your chosen specialization.",
      "You may also combine certifications. Completing multiple paths earns you a bonus combined certificate (for example, Web + App Design becomes \"Web & App Designer\"; completing all three earns the \"UI/UX Designer\" certification)."
    ]
  },
  {
    id: "4",
    title: "4. Free Trial & “Start for Free”",
    paragraphs: [
      "We offer a free trial that grants you access to the first few lessons of your chosen design path at no cost. This allows you to explore the course structure, teaching style, and platform before committing financially.",
      "Once the free trial lessons are completed, you will be prompted to pay to continue. No payment is required to begin."
    ]
  },
  {
    id: "5",
    title: "5. Payment & Enrollment Structure",
    paragraphs: [
      "You may pay for your course in three (3) installments. The specific installment amounts and schedule will be displayed at checkout.",
      "Failure to pay an installment by its due date will result in restricted access to modules beyond the current checkpoint until payment is made.",
      "How Installment Gating Works: As you progress through the course modules, you will reach specific module checkpoints. To unlock content beyond a checkpoint, you must have paid the next installment. This means:"
    ],
    listItems: [
      "First Installment: Unlocks immediate access to paid content after the free trial.",
      "Second Installment: Required at a designated module checkpoint to continue progressing.",
      "Final Installment: Required at a later designated module checkpoint to access remaining course content and become eligible for certification."
    ],
  },
  {
    id: "6",
    title: "6. Refund Policy",
    paragraphs: [
      "We want you to be confident in your investment. Our refund policy is designed to be fair while protecting the integrity of our content and systems."
    ],
    subsections: [
      {
        title: "6.1 No Refunds for Change of Mind",
        paragraphs: [
          "Once you make any installment payment (or full payment) and gain access to paid course content, that payment is non-refundable if you simply change your mind, lose interest, or decide not to continue. By paying, you receive immediate access to digital content, tools, and resources that cannot be returned.",
        ]
      },
      {
        title: "6.2 Eligible Refund Situations",
        paragraphs: [
          "You may request a refund only if you can demonstrate, with proof, that you did not receive what you paid for. In all eligible cases, you must provide documented proof of the issue. Refund requests must be submitted within 14 days of discovering the problem.",
          "Eligible situations include:",
        ],
        listItems: [
          "You paid but your account never received access to the purchased content.",
          "The course you purchased is not actually available or has been discontinued without alternative provision.",
          "A substantial portion of the promised course is missing (not merely a single lesson or resource, but materially incomplete content).",
          "The platform has a persistent technical problem that prevents you from accessing the course for an extended period, and our support team cannot resolve it.",
          "The product materially differs from what was represented in our marketing, course descriptions, or sales materials.",
        ]
      },
      {
        title: "6.3 Overpayment Refunds",
        paragraphs: [
          "If you accidentally overpay (for example, paying ₦150,000 instead of ₦15,000), you may request a refund of the excess amount. You must provide proof of the overpayment (such as a bank receipt or transaction record). We will verify the error and refund the overpaid amount.",
        ]
      },
      {
        title: "6.4 Non-Refundable Fees",
        paragraphs: [
          "Approved refunds may be subject to deduction of non-refundable payment processing fees and any bank or payment-provider fees directly associated with processing the refund, where applicable and lawfully chargeable. This does not include general business operating costs.",
        ]
      },
      {
        title: "6.5 How to Request a Refund",
        paragraphs: [
          "Contact us at support@designvarsityafrica.com with your full name, registered email, proof of payment, and a detailed explanation of the issue. We will review your request and respond within 7 business days.",
        ]
      },
    ]
  },
  {
    id: "7",
    title: "7. Course Content & Intellectual Property",
    paragraphs: [
      "All course materials—including videos, text, templates, resources, and curriculum—are the exclusive intellectual property of Design Varsity Africa and our licensors. Your enrollment grants you a limited, non-exclusive, non-transferable license to access and use the content for your personal learning only.",
      "Violation of these restrictions will result in immediate termination of your account and potential legal action. You may not:"
    ],
    listItems: [
      "Download, copy, share, sell, or distribute course content outside the Platform.",
      "Use course materials to create a competing product or course.",
      "Share your account credentials with others.",
      "Resell or transfer your enrollment to another person."
    ]
  },
  {
    id: "8",
    title: "8. Student Projects & the Projects Wall",
    paragraphs: [
      "As part of your learning, you will submit projects and assignments for review. By submitting a project that is approved by our tutors, you grant Design Varsity Africa a non-exclusive, perpetual, royalty-free, worldwide license to display, publish, and promote that project on our Projects Wall and other marketing or promotional materials.",
      "You retain full ownership of your original work. We simply request the right to showcase your success to inspire future students and demonstrate the quality of our training. If you ever wish to have your project removed from the Projects Wall, you may contact us to make that request.",
    ]
  },
  {
    id: "9",
    title: "9. Certificates, Verification & the Certificate Wall",
    paragraphs: [
      "Upon successfully completing your course and all required projects, you will receive a digital certificate in your chosen design path. If you complete multiple paths, you will receive the corresponding combined certification.",
      "Your certification is considered public, verifiable information. We publish certified graduates on our public Certificate Wall of Fame, which includes your name, certificate ID, design path(s), issue date, and links to your approved projects and case studies. This allows employers, clients, and peers to verify your credentials quickly without needing to log in.",
      "By earning a certificate, you consent to this public display for verification purposes.",
    ]
  },
  {
    id: "10",
    title: "10. Tutor Support & Community Guidelines",
    paragraphs: [
      "Our tutor support lines are available to help when you are stuck. Response times may vary, but we aim to provide helpful, actionable guidance. We reserve the right to remove any content or suspend any user who violates these community standards.",
      "When engaging with our community (forums, groups, or events), you agree to:"
    ],
    listItems: [
      "Be respectful and professional.",
      'Not harass, discriminate against, or attack other members.',
      'Not spam, promote unrelated services, or share harmful content.',
      'Respect the intellectual property of others.',
    ]
  },
  {
    id: "11",
    title: "11. Platform Availability & Technical Issues",
    paragraphs: [
      "We work hard to keep the Platform available and functional. However, we do not guarantee uninterrupted access. There may be occasional downtime for maintenance, updates, or factors outside our control.",
      "If you experience a persistent technical problem that prevents access, please report it to our support team. If the issue is on our end and remains unresolved for an extended period, you may be eligible for a refund as outlined in Section 6.2."
    ]
  },
  {
    id: "12",
    title: "12. Disclaimer of Warranties",
    paragraphs: [
      "The platform and all services are provided on an \"as-is\" and \"as-available\" basis. We disclaim all warranties, express or implied, including fitness for a particular purpose or non-infringement."
    ]
  },
  {
    id: "13",
    title: "13. Limitation of Liability",
    paragraphs: [
      'To the fullest extent permitted by Nigerian law, Design Varsity Africa shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform, even if we have been advised of the possibility of such damages. Our total liability to you shall not exceed the total amount you paid for the course in question.'
    ]
  },
  {
    id: "14",
    title: "14. Termination",
    paragraphs: [
      "You may stop using the Platform at any time. We may suspend or terminate your account if you violate these Terms, engage in fraudulent payment activity, share account credentials, or misuse course content.",
      'Upon termination, your right to access paid content ceases immediately. Provisions regarding intellectual property, student projects, certificates, and liability shall survive termination.'
    ]
  },
  {
    id: "15",
    title: "15. Governing Law",
    paragraphs: [
      'These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall first be attempted to be resolved amicably. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria.'
    ]
  },
  {
    id: "16",
    title: "16. Changes to These Terms",
    paragraphs: [
      'We may update these Terms from time to time. If we make material changes, we will notify you via email or a prominent notice on the Platform. Your continued use after changes constitutes acceptance of the updated Terms.'
    ]
  },
  {
    id: "17",
    title: "17. Contact Us",
    paragraphs: [
      'If you have questions about these Terms, your account, or a refund request, please contact us at: support@designvarsityafrica.com'
    ]
  }
];