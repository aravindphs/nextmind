import SEOMeta from '../components/SEOMeta';
import './LegalPage.css';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By enrolling in any Zeta Nextmind course, accessing our website, or using our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Zeta Nextmind Institute.`,
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: `Zeta Nextmind Institute provides AI-integrated software training programs including Full Stack Development, Data Science, Data Analytics, Web Design, UI/UX, and Digital Marketing. Our services include:

• Live instructor-led online and in-person training sessions.
• Access to recorded course materials and project resources.
• Mentorship and one-on-one guidance sessions.
• AI-assisted coding practice tools and platforms.
• Career counseling and placement assistance.
• Industry-recognized certificates upon successful completion.`,
  },
  {
    id: 'enrollment',
    title: '3. Enrollment & Payment',
    content: `Enrollment Process: Enrollment is confirmed upon receipt of the enrollment form submission and payment of the course fee.

Payment: Course fees are payable as per the schedule communicated at enrollment. We accept UPI, bank transfer, and EMI options through partner institutions.

Cancellation & Refund Policy:
• Cancellation within 7 days of enrollment and before course commencement: Full refund.
• Cancellation after course commencement but within the first 2 sessions: 50% refund.
• Cancellation after 2 sessions: No refund.
• Rescheduling to a future batch is available once per enrollment at no additional charge.`,
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    content: `Course Materials: All course content, videos, slides, assignments, and resources provided by Zeta Nextmind are our intellectual property. You may use them solely for personal learning and may not reproduce, distribute, or commercially exploit them without written permission.

Student Projects: Projects created by students during the course remain the intellectual property of the students. By sharing projects on Zeta Nextmind's showcase platforms, you grant us a non-exclusive license to display and promote the work for educational marketing purposes (with attribution).`,
  },
  {
    id: 'conduct',
    title: '5. Student Code of Conduct',
    content: `Students are expected to maintain professional and respectful conduct throughout their enrollment:

• Attend classes punctually and actively participate in learning activities.
• Refrain from sharing course materials, logins, or resources with non-enrolled individuals.
• Academic Integrity: Submitting another student's or AI-generated work as your own without proper attribution is strictly prohibited.
• Respectful Communication: Harassment, discrimination, or disruptive behavior toward instructors, staff, or fellow students will result in immediate dismissal without refund.
• Violations of this Code of Conduct may result in course suspension or permanent dismissal.`,
  },
  {
    id: 'certification',
    title: '6. Certification',
    content: `Certificates of completion are issued upon:

• Attendance of at least 80% of scheduled sessions.
• Submission and passing of all required projects and assessments.
• Satisfactory conduct throughout the program.

Zeta Nextmind reserves the right to withhold certification for students who do not meet the above criteria. Certificates may be revoked in cases of fraud, plagiarism, or misrepresentation discovered after issuance.`,
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: `Zeta Nextmind provides training services in good faith. However, we do not guarantee specific employment outcomes, salary levels, or career results following course completion. Placement assistance is provided as a supportive service, not a guarantee of employment.

To the maximum extent permitted by applicable law, Zeta Nextmind's liability for any claims arising from these Terms shall not exceed the total course fees paid by the student for the specific course in question.`,
  },
  {
    id: 'governing-law',
    title: '8. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of Tamil Nadu, India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.`,
  },
  {
    id: 'changes',
    title: '9. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. Material changes will be communicated to enrolled students via email at least 14 days before they take effect. Continued enrollment or use of our services after changes constitutes acceptance of the revised Terms.`,
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    content: `For questions or concerns about these Terms of Service, please reach out:

Zeta Nextmind Institute
Email: admissions@zetanextmind.com
Phone: +91 73567 64410
Address: Coimbatore, Tamil Nadu 641012, India

Last updated: June 2025`,
  },
];

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <SEOMeta
        title="Terms of Service"
        description="Zeta Nextmind's terms of service — enrollment conditions, payment terms, certification requirements, and your rights as a student."
        canonical="/terms-of-service"
      />
      <div className="container">
        <div className="legal-page__header">
          <div className="section-tag">Legal</div>
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__subtitle">
            Please read these terms carefully before enrolling in any Zeta Nextmind program.
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
