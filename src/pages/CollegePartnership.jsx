import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Users, BookOpen, Award, TrendingUp, Handshake,
  CheckCircle2, Send, CheckCircle, ArrowRight
} from 'lucide-react';
import './CollegePartnership.css';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Bulk Enrollment Discounts',
    desc: 'Special pricing tiers for 20+ students. Save up to 35% on course fees for your institution.',
    color: '#e8192c',
  },
  {
    icon: Users,
    title: 'Dedicated Faculty Liaison',
    desc: 'A dedicated academic coordinator who works alongside your faculty to ensure smooth program delivery.',
    color: '#5b8af5',
  },
  {
    icon: BookOpen,
    title: 'Custom Curriculum Design',
    desc: 'We tailor our AI-integrated courses to align with your academic calendar and departmental needs.',
    color: '#22c55e',
  },
  {
    icon: Award,
    title: 'Dual Certification',
    desc: "Students receive Zeta Nextmind's industry-recognized certificate alongside their academic credits.",
    color: '#f59e0b',
  },
  {
    icon: TrendingUp,
    title: 'Placement Network Access',
    desc: 'Your students gain direct access to our 200+ hiring partner network and AI-assisted placement tools.',
    color: '#8b5cf6',
  },
  {
    icon: Handshake,
    title: 'Institutional Reports',
    desc: 'Detailed progress reports and outcome analytics for administrators and placement officers.',
    color: '#06b6d4',
  },
];

const tiers = [
  {
    name: 'Starter',
    students: '20–50 Students',
    price: 'Custom Pricing',
    color: '#5b8af5',
    features: [
      'Access to 3 core courses',
      'Shared academic coordinator',
      'Monthly progress reports',
      'Basic placement support',
      'Digital certificates',
    ],
  },
  {
    name: 'Growth',
    students: '51–150 Students',
    price: 'Custom Pricing',
    color: '#e8192c',
    featured: true,
    features: [
      'Access to all 11 courses',
      'Dedicated academic liaison',
      'Weekly progress reports',
      'Full placement assistance',
      'Campus placement drives',
      'Customized curriculum',
      'Faculty training sessions',
    ],
  },
  {
    name: 'Enterprise',
    students: '150+ Students',
    price: 'Custom Pricing',
    color: '#22c55e',
    features: [
      'All Growth tier benefits',
      'On-campus training option',
      'White-label certificates',
      'Dedicated placement officer',
      'Annual partnership review',
      'Priority tech support',
    ],
  },
];

const steps = [
  { step: '01', title: 'Apply', desc: 'Submit the partnership inquiry form below. Our team reviews applications within 48 hours.' },
  { step: '02', title: 'Review & Customize', desc: 'A consultation call with our academic team to understand your needs and design the program.' },
  { step: '03', title: 'Launch', desc: 'Sign the partnership agreement, onboard your students, and launch the program on your schedule.' },
];

const programs = [
  'AI-Integrated Python Full Stack',
  'AI-Integrated Java Full Stack',
  'AI-Integrated MERN Stack',
  'AI-Integrated Data Science',
  'AI-Integrated Data Analytics',
  'AI-Integrated Web Designing',
  'AI-Integrated UI/UX',
  'AI Development (NLP & CV)',
  'AI-Integrated Digital Marketing',
];

export default function CollegePartnership() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ college: '', name: '', email: '', phone: '', students: '', program: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="cp">
      {/* Hero */}
      <div className="cp__hero">
        <div className="cp__hero-glow" />
        <div className="container">
          <div className="section-tag">For Institutions</div>
          <h1 className="cp__title">Campus Partnership Program</h1>
          <p className="cp__subtitle">
            Bring AI-integrated tech training to your campus and supercharge your students&apos;
            placement outcomes. Trusted by 20+ colleges across Tamil Nadu.
          </p>
          <div className="cp__hero-stats">
            <div className="cp__hero-stat">
              <span className="cp__hero-stat-num">20+</span>
              <span className="cp__hero-stat-label">College Partners</span>
            </div>
            <div className="cp__hero-stat">
              <span className="cp__hero-stat-num">2,000+</span>
              <span className="cp__hero-stat-label">Campus Students</span>
            </div>
            <div className="cp__hero-stat">
              <span className="cp__hero-stat-num">40%</span>
              <span className="cp__hero-stat-label">Placement Boost</span>
            </div>
            <div className="cp__hero-stat">
              <span className="cp__hero-stat-num">95%</span>
              <span className="cp__hero-stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Benefits */}
        <div className="section-header" style={{ marginTop: 80 }}>
          <div className="section-tag">Why Partner With Us</div>
          <h2 className="section-title">Partnership <span>Benefits</span></h2>
          <p className="section-desc">Everything your institution needs to deliver world-class AI tech training to students.</p>
        </div>
        <div className="cp__benefits-grid">
          {benefits.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="cp__benefit-card">
              <div className="cp__benefit-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                <Icon size={24} color={color} />
              </div>
              <h3 className="cp__benefit-title">{title}</h3>
              <p className="cp__benefit-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="section-header" style={{ marginTop: 100 }}>
          <div className="section-tag">Program Tiers</div>
          <h2 className="section-title">Choose Your <span>Partnership Plan</span></h2>
        </div>
        <div className="cp__tiers">
          {tiers.map((tier) => (
            <div key={tier.name} className={`cp__tier${tier.featured ? ' cp__tier--featured' : ''}`} style={{ borderColor: tier.featured ? tier.color : undefined }}>
              {tier.featured && <span className="cp__tier-badge">Most Popular</span>}
              <h3 className="cp__tier-name" style={{ color: tier.color }}>{tier.name}</h3>
              <p className="cp__tier-students">{tier.students}</p>
              <p className="cp__tier-price">{tier.price}</p>
              <ul className="cp__tier-features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} color={tier.color} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cp-form"
                className="btn-primary"
                style={{ justifyContent: 'center', marginTop: 'auto' }}
                onClick={(e) => { e.preventDefault(); document.getElementById('cp-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Apply Now <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="section-header" style={{ marginTop: 100 }}>
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Simple <span>3-Step Process</span></h2>
        </div>
        <div className="cp__steps">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="cp__step">
              <div className="cp__step-num">{step}</div>
              <h3 className="cp__step-title">{title}</h3>
              <p className="cp__step-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="cp__form-section" id="cp-form">
          <div className="cp__form-wrap">
            {submitted ? (
              <div className="cp__success">
                <CheckCircle size={56} color="#22c55e" />
                <h3>Partnership Inquiry Received!</h3>
                <p>Thank you, <strong>{form.name}</strong> from <strong>{form.college}</strong>! Our partnership team will contact you within 48 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form className="cp__form" onSubmit={handleSubmit}>
                <h3 className="cp__form-title">Partnership Inquiry Form</h3>
                <div className="form__row">
                  <div className="form__group">
                    <label>College / Institution Name *</label>
                    <input type="text" name="college" placeholder="Your institution name" value={form.college} onChange={handleChange} required />
                  </div>
                  <div className="form__group">
                    <label>Contact Person *</label>
                    <input type="text" name="name" placeholder="Your full name & designation" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__group">
                    <label>Official Email *</label>
                    <input type="email" name="email" placeholder="you@college.edu" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form__group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__group">
                    <label>Estimated Number of Students *</label>
                    <select name="students" value={form.students} onChange={handleChange} required>
                      <option value="">Select range</option>
                      <option value="20-50">20 – 50 students</option>
                      <option value="51-150">51 – 150 students</option>
                      <option value="150+">150+ students</option>
                    </select>
                  </div>
                  <div className="form__group">
                    <label>Programs of Interest *</label>
                    <select name="program" value={form.program} onChange={handleChange} required>
                      <option value="">Select a program</option>
                      {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                      <option value="Multiple">Multiple Programs</option>
                    </select>
                  </div>
                </div>
                <div className="form__group">
                  <label>Additional Requirements</label>
                  <textarea name="message" placeholder="Tell us about your goals, timeline, or any specific requirements..." rows={4} value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary cp__form-submit">
                  Submit Partnership Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
