/**
 * Placeholder legal copy for Titanium Edge. Replace with counsel-reviewed
 * text before production launch.
 */

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "July 2026",
  intro:
    "Titanium Edge respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have.",
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "When you submit an enquiry through our contact form, we collect the details you provide — such as your name, company, email, phone number, project type, and message — so that our team can respond.",
        "We also collect standard, non-identifying analytics data such as pages visited and device type to help us improve the experience.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "We use the information you share solely to respond to your enquiry, prepare proposals, and communicate about potential or active projects. We do not sell your personal information.",
      ],
    },
    {
      heading: "Data Retention & Security",
      body: [
        "We retain enquiry information only as long as necessary to serve your request and meet our legal obligations, and we apply appropriate technical and organisational safeguards to protect it.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting projects@titaniumedge.com.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "For any questions about this policy, email projects@titaniumedge.com or write to 1 Titanium Plaza, 48th Floor, New York, NY 10018.",
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Terms of Use",
  updated: "July 2026",
  intro:
    "These terms govern your use of the Titanium Edge website. By accessing the site, you agree to them.",
  sections: [
    {
      heading: "Use of This Site",
      body: [
        "This website is provided for general information about Titanium Edge and its services. You agree to use it lawfully and not to interfere with its operation or security.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "All content on this site — including text, branding, imagery, and design — is owned by or licensed to Titanium Edge and may not be reproduced without permission.",
      ],
    },
    {
      heading: "No Warranty",
      body: [
        "Information on this site is provided in good faith but without warranty of any kind. Project details, statistics, and imagery are illustrative and do not constitute a binding offer.",
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        "To the fullest extent permitted by law, Titanium Edge is not liable for any loss arising from your use of, or reliance on, this website.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions about these terms can be directed to projects@titaniumedge.com.",
      ],
    },
  ],
};
