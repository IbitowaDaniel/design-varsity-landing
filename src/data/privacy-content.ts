// src/data/privacy-policy-content.ts

export interface TermItemPrivacy {
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

export const termsData: TermItemPrivacy[] = [
  {
    id: "1",
    title: "1. Introduction",
    paragraphs: [
      "Design Varsity Africa (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, create an account, enroll in courses, or interact with our Platform.",
      "This Policy is designed in compliance with the Nigeria Data Protection Regulation (NDPR) and global best practices. By using our Platform, you consent to the practices described in this Policy."
    ]
  },
  {
    id: "2",
    title: "2. Information We Collect",
    paragraphs: [
      "We collect the following types of information:"
    ],
    subsections: [
      {
        title: "2.1 Information You Provide Directly",
        listItems: [
          "Account Information: Name, email address, phone number, and password when you register.",
          "Profile Information: Bio, profile photo, location, and social media links (optional).",
          "Payment Information: Billing details and transaction history. Note that we do not store your full card details; payments are processed securely through our PCI-DSS compliant payment partners.",
          "Course Progress: Lesson completion data, quiz scores, project submissions, and tutor interactions.",
          "Support Requests: Any information you share when contacting tutor support or customer service."
        ]
      },
      {
        title: "2.2 Information Collected Automatically",
        paragraphs: [
          "On our landing page website: We do not use cookies or tracking technologies on the marketing/landing page site. We only collect standard server log data (such as your IP address and browser type) temporarily for security and basic traffic analytics. No persistent tracking occurs, and no cookies are stored on your device.",
          "On the learning platform (web app): When you log into the course platform, we automatically collect:"
        ],
        listItems: [
          "Device & Log Data: IP address, browser type, operating system, and access times.",
          "Usage & Progress Data: Lessons completed, time spent on modules, quiz scores, project submissions, navigation patterns, and feature usage.",
          "Cookies & Similar Technologies: We use cookies to keep you logged in, remember your preferences, track your lesson progress, and analyze how students interact with the course content."
        ]
      },
      {
        title: "2.3 Information from Third Parties",
        listItems: [
          "Payment Providers: Transaction confirmations and payment status updates.",
          "Authentication Services: If you sign in using a third-party service (e.g., Google), we receive basic profile information as authorized by you."
        ]
      }
    ]
  },
  {
    id: "3",
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use your information to:"
    ],
    listItems: [
      "Provide and manage your access to courses, free trials, and installment-based payments.",
      "Track your progress through modules and enforce installment checkpoints.",
      "Process payments and send billing reminders for upcoming installments.",
      "Deliver tutor support when you reach out for help.",
      "Issue and verify certificates through our public Certificate Wall.",
      "Display approved projects on our Projects Wall (see Section 6).",
      "Send administrative communications such as payment confirmations, lesson reminders, and account updates.",
      "Improve the Platform by analyzing how students learn and where they get stuck.",
      "Send marketing communications about new courses, community events, or career opportunities (you may opt out at any time).",
      "Ensure security and detect fraudulent or unauthorized activity."
    ]
  },
  {
    id: "4",
    title: "4. How We Share Your Information",
    paragraphs: [
      "We do not sell your personal information. We only share data in the following circumstances:"
    ],
    listItems: [
      "With Service Providers: We work with trusted third parties for payment processing, cloud hosting, email delivery, and analytics. These providers only access data necessary to perform their services and are contractually bound to protect it.",
      "For Legal Reasons: We may disclose information if required by law, court order, or to protect our rights, property, or safety, or that of our users.",
      "With Your Consent: In any other situation where you have explicitly given us permission."
    ]
  },
  {
    id: "5",
    title: "5. Payment Data & Security",
    paragraphs: [
      "All payments are processed through secure, encrypted third-party gateways. We do not store your full credit or debit card numbers on our servers. We retain transaction records, payment history, and installment status to manage your account and enforce course access rules."
    ]
  },
  {
    id: "6",
    title: "6. Student Projects & Public Display",
    paragraphs: [
      "When you submit a project that is approved by our tutors, we may display it on our Projects Wall and related promotional materials.",
      "This is a non-exclusive display—we do not claim ownership of your work. You retain all rights to your original designs. If you wish to have a project removed from public display, please contact us and we will honor your request within a reasonable timeframe. The display may include:"
    ],
    listItems: [
      "Your name (or username, if you prefer)",
      "The project title and description",
      "Visuals or screenshots of the work",
      "Your design path (e.g., \"Web Design\")"
    ]
  },
  {
    id: "7",
    title: "7. Certificates & Public Verification",
    paragraphs: [
      "Your certification is a professional credential. No login is required for employers to verify your credentials. By earning a certificate, you consent to this limited public display for verification and professional recognition purposes.",
      "To make verification easy for employers and clients, we publish the following information on our public Certificate Wall of Fame:"
    ],
    listItems: [
      "Your full name",
      "Certificate ID",
      "Design path completed (e.g., \"App Design\" or \"UI/UX Designer\")",
      "Date of issue",
      "Links to your approved projects and case studies"
    ]
  },
  {
    id: "8",
    title: "8. Data Storage & Security",
    paragraphs: [
      "We implement industry-standard security measures—including encryption, access controls, and secure cloud storage—to protect your personal information. However, no internet transmission is 100% secure. We encourage you to use strong passwords and keep your account credentials private.",
      "Your data is stored on secure servers, which may be located within or outside Nigeria. Where data is transferred internationally, we ensure appropriate safeguards are in place in compliance with the NDPR."
    ]
  },
  {
    id: "9",
    title: "9. Cookies & Tracking Technologies",
    paragraphs: [
      "Landing Page: Our public-facing marketing website does not use cookies or similar tracking technologies. You can browse the landing page without any cookies being stored on your device.",
      "Learning Platform: Once you create an account and access the course platform, we use cookies to:",
    ],
    listItems: [
      "Authenticate your session and keep you signed in.",
      "Save your progress within lessons and modules.",
      "Remember your preferences (such as video playback settings).",
      "Enforce installment checkpoints by tracking module completion.",
      "Analyze learning patterns so we can improve course content and platform usability."
    ]
  },
  {
    id: "10",
    title: "10. AI-Assisted Features",
    paragraphs: [
      "Our courses teach you to leverage AI as a design partner. Any AI tools integrated into the Platform are used to enhance your learning workflow (e.g., research, wireframing assistance). Data processed through third-party AI tools is subject to those providers' privacy policies, and we only integrate with reputable services that maintain strong data protection standards."
    ]
  },
  {
    id: "11",
    title: "11. Your Rights",
    paragraphs: [
      "To exercise your rights, contact us at privacy@designvarsityafrica.com. We will respond within 30 days.",
      "Under Nigerian data protection law, you have the right to:",
    ],
    listItems: [
      "Access the personal information we hold about you.",
      "Correct inaccurate or outdated information.",
      "Delete your account and personal data, subject to legal or contractual obligations (such as payment records we are required to retain).",
      "Object to certain types of processing, such as direct marketing.",
      "Withdraw Consent where processing is based on your consent (e.g., public project display)."
    ]
  },
  {
    id: "12",
    title: "12. Data Retention",
    paragraphs: [
      "We retain your personal information for as long as your account is active or as needed to provide you with services. Even after account closure, we may retain certain data for:"
    ],
    listItems: [
      "Legal and tax compliance (e.g., payment records).",
      "Fraud prevention.",
      "Maintaining the integrity of our Certificate Wall (your certificate record may remain verifiable even if your account is closed, unless you specifically request its removal)."
    ]
  },
  {
    id: "13",
    title: "13. Children's Privacy",
    paragraphs: [
      "Our Platform is not intended for children under 16. We do not knowingly collect personal information from children under 16. If we discover that we have inadvertently collected such data, we will delete it promptly."
    ]
  },
  {
    id: "14",
    title: "14. Third-Party Links",
    paragraphs: [
      "The Platform may contain links to third-party websites (e.g., Figma, LinkedIn, Upwork). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before submitting any personal information."
    ]
  },
  {
    id: "15",
    title: "15. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall first be attempted to be resolved amicably. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria."
    ]
  },
  {
    id: "16",
    title: "16. Changes to This Policy & Terms",
    paragraphs: [
      "We may update this Privacy Policy and these Terms from time to time. If we make material changes, we will notify you via email or a prominent notice on the Platform. The \"Last Updated\" date at the top of this page will always reflect the most recent revision. Your continued use after changes constitutes acceptance of the updated terms."
    ]
  },
  {
    id: "17",
    title: "17. Contact Us",
    paragraphs: [
      "If you have questions, concerns, or requests regarding this Privacy Policy, your account, or a refund request, please contact us at: support@designvarsityafrica.com or privacy@designvarsityafrica.com."
    ]
  }
];