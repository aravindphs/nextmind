import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'What makes Zeta Nextmind courses unique compared to others?',
    a: 'Our courses integrate AI tools throughout the curriculum — you don\'t just learn programming, you learn to build with AI assistance. Every module includes AI-enhanced exercises, real-world projects, and access to tools like GitHub Copilot, ChatGPT, and specialized AI platforms relevant to your domain.',
  },
  {
    q: 'What Full Stack Development courses do you offer?',
    a: 'We offer three comprehensive Full Stack programs: AI-Integrated Python Full Stack (HTML, CSS, JS, Bootstrap, Python, Django, MySQL), AI-Integrated Java Full Stack (Java, Spring Boot, MySQL), and AI-Integrated MERN Stack (React, Node.js, Express, MongoDB). All include AI tool integration.',
  },
  {
    q: 'How is AI integrated into programming courses?',
    a: 'AI is woven throughout — you\'ll use AI code assistants for pair programming, AI-powered debugging tools, automated code review, and AI-driven testing. You\'ll also build AI-powered features into your projects, making your portfolio stand out to employers.',
  },
  {
    q: 'What does the Web Designing course cover?',
    a: 'Our AI-Integrated Web Designing course covers HTML5, CSS3, JavaScript, responsive design, Figma, and how to use Generative AI tools to accelerate design workflows. You\'ll build a complete portfolio with 5+ projects demonstrating both design skills and AI proficiency.',
  },
  {
    q: 'How does AI enhance the Data Analytics learning experience?',
    a: 'In our Data Analytics courses, you\'ll use AI for automated data cleaning, AI-powered visualization suggestions in Power BI, machine learning for predictive analytics, and NLP for unstructured data analysis. This goes far beyond traditional data analytics training.',
  },
  {
    q: 'What is included with the course enrollment?',
    a: 'Every enrollment includes: live instructor-led classes, recorded sessions for revision, hands-on projects, AI tool access, one-on-one mentoring, placement preparation (resume, LinkedIn, mock interviews), an industry-recognized certificate, and lifetime access to alumni support network.',
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
