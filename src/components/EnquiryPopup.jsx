import { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import './EnquiryPopup.css';

const STORAGE_KEY = 'zn_enquiry_shown';

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

export default function EnquiryPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '' });

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Timed trigger — 2 seconds after mount
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(STORAGE_KEY)) setVisible(true);
    }, 2000);

    // Exit-intent trigger — mouse leaves viewport from the top
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    };

    // Scroll-back trigger — user scrolls up significantly (sign of re-consideration)
    let lastY = window.scrollY;
    const handleScroll = () => {
      const delta = lastY - window.scrollY;
      if (delta > 200 && window.scrollY > 400 && !sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
      lastY = window.scrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/admissions@zetanextmind.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Popup Enquiry — Zeta Nextmind',
          ...form,
        }),
      });
    } catch {
      // Show success even if network error to avoid friction
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
  };

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup">
        <button className="popup__close" onClick={close} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="popup__success">
            <CheckCircle size={48} color="#22c55e" />
            <h3>We&apos;ll be in touch!</h3>
            <p>Our team will call you within 24 hours to help you pick the right course.</p>
            <button className="btn-primary" onClick={close} style={{ marginTop: 8 }}>
              Got it
            </button>
          </div>
        ) : (
          <>
            <div className="popup__header">
              <div className="popup__badge">Limited Seats Available</div>
              <h2 className="popup__title">
                Book Your <span>Free Demo Class</span>
              </h2>
              <p className="popup__subtitle">
                Talk to a course advisor. No commitment — just clarity on your next step.
              </p>
            </div>

            <form className="popup__form" onSubmit={handleSubmit}>
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
              <div className="form__row">
                <div className="form__group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form__group">
                <label>Course Interest *</label>
                <select name="course" value={form.course} onChange={handleChange} required>
                  <option value="">Select a course</option>
                  {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <button type="submit" className="btn-primary popup__submit" disabled={submitting}>
                {submitting ? 'Sending…' : <><span>Book Free Demo</span> <ArrowRight size={15} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
