import SEOMeta from '../components/SEOMeta';
import './LegalPage.css';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction & Scope',
    content: `Zeta Nextmind Institute ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect data when you visit our website or enroll in our training programs. By using our services, you agree to the practices described in this policy. This policy applies to all users of zetanextmind.com and our enrollment services.`,
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: `We collect the following types of information:

• Personal Identification Data: Name, email address, phone number, and city/state when you fill out enrollment or contact forms.
• Academic & Career Data: Educational background, current employment, and career goals shared voluntarily during counseling.
• Usage Data: Pages visited, time spent on site, device type, browser, and IP address collected automatically via analytics tools.
• Communication Records: Messages sent through our contact forms, emails, or WhatsApp communications with our team.

We do not collect sensitive personal data such as Aadhaar numbers, financial information, or biometric data through our website.`,
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: `Your information is used exclusively for the following purposes:

• Processing enrollment applications and communicating about course availability.
• Sending course updates, schedules, assignment notifications, and completion certificates.
• Providing personalized course recommendations and career counseling.
• Analytics to improve our website and course content quality.
• Legal compliance and fraud prevention.
• Issuing industry-recognized certificates upon course completion.

We will not use your information for purposes unrelated to your training and career support without your explicit consent.`,
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing & Third Parties',
    content: `We do not sell, rent, or trade your personal information to third parties. We may share data only in these limited circumstances:

• Placement Partners: With your explicit consent, we share your profile (name, skills, certificate) with our hiring partners for placement purposes.
• Service Providers: Trusted tools we use to operate (email platforms, analytics) under strict data processing agreements.
• Legal Requirements: When required by law, court order, or government authority.

All third parties are contractually obligated to maintain the confidentiality of your data.`,
  },
  {
    id: 'retention',
    title: '5. Data Retention',
    content: `We retain your personal data as follows:

• Enrollment and course records: 3 years from course completion to support certificate verification.
• Contact form submissions: 12 months, then anonymized or deleted.
• Website analytics: Aggregated and anonymized after 24 months.

You may request deletion of your data at any time by emailing admissions@zetanextmind.com. We will process deletion requests within 30 days, except where retention is required by law.`,
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    content: `Under applicable Indian data protection laws, you have the following rights:

• Right to Access: Request a copy of the personal data we hold about you.
• Right to Correction: Request correction of inaccurate or incomplete data.
• Right to Deletion: Request deletion of your personal data (subject to legal retention requirements).
• Right to Objection: Opt out of marketing communications at any time via the unsubscribe link in our emails.
• Right to Portability: Request your data in a portable format.

To exercise any of these rights, contact us at admissions@zetanextmind.com.`,
  },
  {
    id: 'cookies',
    title: '7. Cookies Policy',
    content: `Our website uses cookies to enhance your browsing experience:

• Session Cookies: Necessary for basic website functionality. Deleted when you close your browser.
• Analytics Cookies: Help us understand how visitors use our site (Google Analytics). You can opt out via your browser settings.
• Preference Cookies: Remember your language and display preferences.

You can control cookie settings through your browser. Disabling cookies may affect some website functionality.`,
  },
  {
    id: 'security',
    title: '8. Data Security',
    content: `We implement industry-standard security measures to protect your personal data:

• HTTPS encryption for all data transmitted through our website.
• Access controls limiting data access to authorized personnel only.
• Regular security audits of our systems and processes.

While we strive to protect your information, no internet transmission is 100% secure. We cannot guarantee the absolute security of data transmitted to our website.`,
  },
  {
    id: 'contact',
    title: '9. Contact for Privacy Issues',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:

Zeta Nextmind Institute
Email: admissions@zetanextmind.com
Phone: +91 73567 64410
Address: Coimbatore, Tamil Nadu 641012, India

We aim to respond to all privacy inquiries within 5 business days.`,
  },
  {
    id: 'updates',
    title: '10. Updates to This Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make significant changes, we will notify enrolled students via email and post the updated policy on this page with a revised date. Continued use of our services after changes constitutes your acceptance of the updated policy.

Last updated: June 2025`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <SEOMeta
        title="Privacy Policy"
        description="Zeta Nextmind's privacy policy — how we collect, use, and protect your personal data when you use our website and enroll in our training programs."
        canonical="/privacy-policy"
      />
      <div className="container">
        <div className="legal-page__header">
          <div className="section-tag">Legal</div>
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__subtitle">
            How Zeta Nextmind collects, uses, and protects your personal information.
          </p>
          <p className="legal-page__date">Last updated: June 2025</p>
        </div>

        <div className="legal-page__content">
          {sections.map(({ id, title, content }) => (
            <div key={id} id={id} className="legal-section">
              <h2 className="legal-section__title">{title}</h2>
              <div className="legal-section__body">
                {content.split('\n').map((line, i) =>
                  line.trim() === '' ? null : (
                    <p key={i}>{line}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
