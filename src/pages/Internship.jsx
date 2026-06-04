import { useState } from 'react';
import { BookOpen, Code2, PenLine, Settings, CheckCircle2, ArrowRight, CheckCircle } from 'lucide-react';
import './Internship.css';

const programs = [
  {
    icon: BookOpen,
    title: 'Teaching Assistant (TA) Program',
    subtitle: 'For top students & alumni',
    desc: 'Selected from top performers in each completed batch. TAs answer student doubts in WhatsApp groups, review weekly communication video submissions, and assist with assignment evaluations.',
    benefits: ['Monthly stipend', 'Free certification upgrade course', 'Resume mention + LinkedIn recommendation', 'Priority path to paid trainer role'],
    eligibility: 'Completed Zeta Nextmind course with ≥87% attendance and strong project grades',
    color: '#e8192c',
  },
  {
    icon: Code2,
    title: 'Live Project Internship',
    subtitle: 'For final-semester & recent graduates',
    desc: 'Work on real client projects from within the Zeta Nextmind curriculum. You build, deploy, and present production-grade applications under mentor guidance — with real deadlines and real stakeholders.',
    benefits: ['Stipend based on project scope', 'Deployed project for portfolio', 'Client reference letter', 'Certificate of internship'],
    eligibility: 'Working knowledge of at least one full-stack or data science course, or equivalent skills',
    color: '#3b82f6',
  },
  {
    icon: PenLine,
    title: 'Content & Marketing Internship',
    subtitle: 'For writers, designers & marketers',
    desc: 'Create social media content, blog articles, design assets, and marketing copy for Zeta Nextmind\'s channels. Work directly with the founder on messaging and brand building.',
    benefits: ['Stipend + performance bonus', 'Published work in your portfolio', 'Certificate of internship', 'LinkedIn recommendation'],
    eligibility: 'Strong writing or design skills; basic understanding of digital marketing or content creation',
    color: '#8b5cf6',
  },
  {
    icon: Settings,
    title: 'Tech & Automation Internship',
    subtitle: 'For developers who love building tools',
    desc: 'Build internal tools, automate workflows, maintain the website, and develop productivity systems that the institute uses daily. This is real engineering work with real impact.',
    benefits: ['Stipend', 'Deployed tools in your portfolio', 'Certificate of internship', 'Direct mentorship from CEO'],
    eligibility: 'Proficiency in web development or scripting; ability to work independently on a defined scope',
    color: '#10b981',
  },
];

const generalBenefits = [
  'Flexible schedule — remote, part-time compatible',
  'Direct exposure to running an education startup',
  'Reference letter from Aravind Kumar (Founder & CEO)',
  'Alumni network access and ongoing career support',
  'Path to full-time or freelance collaboration post-internship',
];

export default function Internship() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', background: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="intern">
      {/* Hero */}
      <div className="intern__hero">
        <div className="intern__hero-glow" />
        <div className="container">
          <div className="section-tag">Internship Program</div>
          <h1 className="intern__title">
            Learn by <span>Building.</span><br />Grow by <span>Teaching.</span>
          </h1>
          <p className="intern__subtitle">
            Zeta Nextmind's internship programme gives you real-world experience inside a fast-growing
            AI education startup — with a stipend, portfolio projects, and a direct path to a trainer role.
          </p>
          <div className="intern__hero-stats">
            <div className="intern__hero-stat">
              <span className="intern__hero-stat-num">4</span>
              <span className="intern__hero-stat-label">Internship tracks</span>
            </div>
            <div className="intern__hero-stat">
              <span className="intern__hero-stat-num">₹</span>
              <span className="intern__hero-stat-label">Paid stipend</span>
            </div>
            <div className="intern__hero-stat">
              <span className="intern__hero-stat-num">100%</span>
              <span className="intern__hero-stat-label">Remote-friendly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Programs */}
        <div className="intern__section">
          <div className="section-header">
            <div className="section-tag">Choose Your Track</div>
            <h2 className="section-title">
              Four Ways to <span>Grow With Us</span>
            </h2>
            <p className="section-desc">
              Each track is designed around real work — not busywork. Pick the one that matches
              where you are and where you want to go.
            </p>
          </div>

          <div className="intern__programs">
            {programs.map(({ icon: Icon, title, subtitle, desc, benefits, eligibility, color }) => (
              <div key={title} className="intern__program" style={{ '--prog-color': color }}>
                <div className="intern__program-header">
                  <div className="intern__program-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                    <Icon size={24} color={color} />
                  </div>
                  <div>
                    <h3 className="intern__program-title">{title}</h3>
                    <p className="intern__program-sub" style={{ color }}>{subtitle}</p>
                  </div>
                </div>
                <p className="intern__program-desc">{desc}</p>
                <div className="intern__program-benefits">
                  <p className="intern__program-benefits-label">What you get:</p>
                  <ul>
                    {benefits.map((b) => (
                      <li key={b}>
                        <CheckCircle2 size={14} color={color} style={{ flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="intern__program-eligibility">
                  <span className="intern__elig-label">Eligibility:</span>
                  <span>{eligibility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General benefits */}
        <div className="intern__benefits-section">
          <div className="intern__benefits-inner">
            <div className="intern__benefits-left">
              <div className="section-tag" style={{ textAlign: 'left' }}>All Tracks</div>
              <h2 className="intern__benefits-title">
                Benefits That <span>Actually Matter</span>
              </h2>
              <ul className="intern__benefits-list">
                {generalBenefits.map((b) => (
                  <li key={b}>
                    <CheckCircle size={16} color="#22c55e" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="intern__benefits-right">
              <div className="intern__quote-card">
                <p className="intern__quote">
                  "The best way to deeply understand something is to teach it. Our TAs don't just help
                  students — they accelerate their own mastery at the same time."
                </p>
                <div className="intern__quote-sig">
                  <div className="intern__quote-avatar">AK</div>
                  <div>
                    <span className="intern__quote-name">Aravind Kumar</span>
                    <span className="intern__quote-role">Founder & CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application form */}
        <div className="intern__form-section">
          <div className="intern__form-wrap">
            {submitted ? (
              <div className="intern__success">
                <CheckCircle size={52} color="#22c55e" />
                <h3>Application Received!</h3>
                <p>Thank you, <strong>{form.name}</strong>! We&apos;ll review your application and reach out within 3 business days.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Apply for Another Track</button>
              </div>
            ) : (
              <>
                <h2 className="intern__form-title">Apply Now</h2>
                <p className="intern__form-subtitle">Takes 2 minutes. We respond within 3 business days.</p>
                <form className="intern__form" onSubmit={handleSubmit}>
                  <div className="form__row">
                    <div className="form__group">
                      <label>Full Name *</label>
                      <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form__group">
                      <label>Email Address *</label>
                      <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="form__group">
                      <label>Internship Track *</label>
                      <select name="program" value={form.program} onChange={handleChange} required>
                        <option value="">Select a track</option>
                        <option value="ta">Teaching Assistant (TA) Program</option>
                        <option value="project">Live Project Internship</option>
                        <option value="content">Content & Marketing Internship</option>
                        <option value="tech">Tech & Automation Internship</option>
                      </select>
                    </div>
                  </div>
                  <div className="form__group">
                    <label>Your Background *</label>
                    <textarea
                      name="background"
                      placeholder="Tell us about your skills, what you've built or done, and why you want this internship..."
                      rows={4}
                      value={form.background}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary intern__form-submit">
                    Submit Application <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
