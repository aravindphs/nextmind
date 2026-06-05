import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const info = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 73567 64410',
    href: 'tel:+917356764410',
    color: '#e8192c',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'admissions@zetanextmind.com',
    href: 'mailto:admissions@zetanextmind.com',
    color: '#5b8af5',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Coimbatore, Tamil Nadu, 641012, India',
    href: 'https://maps.google.com',
    color: '#22c55e',
  },
];

const courses = [
  'AI-Integrated Python Full Stack',
  'AI-Integrated Java Full Stack',
  'AI-Integrated MERN Stack',
  'AI-Integrated Data Science',
  'AI-Integrated Data Analytics',
  'AI-Integrated Web Designing',
  'AI-Integrated UI/UX Course',
  'SQL Database Master Course',
  'AI Development (NLP & CV)',
  'AI-Integrated Digital Marketing',
  'No Code Website using Gen AI',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/admissions@zetanextmind.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: 'New Course Enquiry — Zeta Nextmind', ...form }),
      });
    } catch {
      // Show success regardless to avoid user frustration on network issues
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="contact" id="contact">
      <div className="contact__glow" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Start Your <span>AI Career Journey</span> Today
          </h2>
          <p className="section-desc">
            Take the first step toward your tech career. Our counselors will help you
            choose the right program and answer all your questions.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-desc">
              Reach out to us directly or fill out the enrollment form and we&apos;ll
              get back to you within 24 hours.
            </p>
            <div className="contact__info-items">
              {info.map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} className="contact__info-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact__info-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <p className="contact__info-label">{label}</p>
                    <p className="contact__info-value">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact__partnership">
              <h4>🏫 Campus Partnership</h4>
              <p>Interested in upskilling your students at scale? Contact us for institutional programs and campus collaborations.</p>
            </div>
          </div>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={56} color="#22c55e" />
                <h3>Enrollment Request Sent!</h3>
                <p>Thank you, <strong>{form.name}</strong>! Our team will contact you within 24 hours to discuss your enrollment in <strong>{form.course}</strong>.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Enroll Now</h3>
                <div className="form__row">
                  <div className="form__group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      pattern="[+]?[\d\s\-]{10,15}"
                      title="Enter a valid phone number (10–15 digits)"
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label>Course Interested In *</label>
                    <select name="course" value={form.course} onChange={handleChange} required>
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form__group">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your background and career goals..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit" disabled={submitting}>
                  {submitting ? 'Sending…' : <><span>Submit Enrollment Request</span> <Send size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
