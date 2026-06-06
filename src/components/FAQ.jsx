import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'Will I get the same quality as a physical classroom?',
    a: 'Yes — often better. Our batches are capped at 15 students, so you get more personal attention than in most offline classrooms. Live sessions run over Google Meet, screen-shares are in HD, and instructors pause for questions after every concept. Recorded backups mean you never miss a detail.',
  },
  {
    q: 'What if I miss a class or fall behind?',
    a: 'Every session is recorded and uploaded within 24 hours. If you miss a live class, watch the recording, drop your doubts in the WhatsApp group, and a TA will respond the same day. Missed assignments can be submitted within 48 hours without penalty.',
  },
  {
    q: 'Is the certificate recognised by employers?',
    a: 'Our certificate carries the Zeta Nextmind seal and CEO\'s signature. More importantly, you graduate with 3 deployed live projects, a polished GitHub portfolio, and a LinkedIn profile reviewed by our placement team. Employers hire you for your work — the certificate validates it.',
  },
  {
    q: 'How do AI tools fit into the course — are they extras or core?',
    a: 'AI tools are core workflow, not extras. From Week 1 you\'ll use tools like GitHub Copilot, Cursor, v0.dev, and ChatGPT alongside every concept taught. The goal is to make you 3–5× faster than a developer who doesn\'t use AI — because that\'s what employers now expect.',
  },
  {
    q: 'What is the batch size and schedule?',
    a: 'We cap every batch at 15 students — this is non-negotiable. Classes run on weekday evenings (7–9 PM IST) and Saturday mornings, making them compatible with college schedules or part-time jobs. Weekend-only batches are available on request.',
  },
  {
    q: 'How does placement support actually work?',
    a: 'Placement support begins at Week 18, not at the end. You\'ll do 3 live mock interviews, get your resume reviewed for ATS keywords, and have a LinkedIn profile optimised with our placement team. We also share active job leads and make warm introductions where possible. Our target is job offers, not just certificates.',
  },
  {
    q: 'Can I join if I have zero coding experience?',
    a: 'Absolutely. Our Python Full Stack, Web Designing, Data Analytics, and No-Code AI courses are designed for absolute beginners. The first 4 weeks focus entirely on foundations before any framework is introduced. If you\'re unsure which track suits you, book a free demo class — we\'ll tell you honestly.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__left">
            <div className="section-tag">FAQs</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-desc" style={{ textAlign: 'left', margin: 0 }}>
              Everything you need to know about our courses, enrollment process,
              and career support. Still have questions?
            </p>
            <button
              className="btn-primary"
              style={{ marginTop: 28 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>

          <div className="faq__list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq__item${open === i ? ' faq__item--open' : ''}`}
              >
                <button className="faq__question" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="faq__chevron"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
