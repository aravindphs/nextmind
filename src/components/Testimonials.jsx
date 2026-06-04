import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priyadharshini',
    role: 'Full Stack Developer',
    company: 'TCS, Chennai',
    text: 'Zeta Nextmind transformed my career completely. The AI-integrated curriculum was unlike anything I had seen before. Within 3 months of completing the Python Full Stack course, I landed my dream job with an 85% skill improvement over my peers.',
    metric: '85%',
    metricLabel: 'Skill Improvement',
    initial: 'P',
    color: '#e8192c',
  },
  {
    name: 'Arjun A',
    role: 'Data Analyst',
    company: 'Infosys, Bangalore',
    text: 'The Data Science course with AI integration was a game-changer. The real-world projects using Power BI and ML models gave me a 75% productivity boost compared to my colleagues who learned through traditional methods.',
    metric: '75%',
    metricLabel: 'Productivity Boost',
    initial: 'A',
    color: '#5b8af5',
  },
  {
    name: 'Sneha Ravi',
    role: 'Web Designer',
    company: 'Freelance, Coimbatore',
    text: 'The UI/UX and Web Designing course gave me the confidence to take on freelance projects globally. Thanks to the placement support and AI-powered portfolio tools, I achieved a 90% job placement success and doubled my income.',
    metric: '90%',
    metricLabel: 'Placement Success',
    initial: 'S',
    color: '#22c55e',
  },
  {
    name: 'Rahul Krishna',
    role: 'Software Engineer',
    company: 'Wipro, Hyderabad',
    text: 'The MERN Stack course with AI integration was exactly what I needed. The mentors are incredibly supportive and the project-based learning approach resulted in a 95% project completion rate, making my portfolio stand out.',
    metric: '95%',
    metricLabel: 'Project Completion',
    initial: 'R',
    color: '#f59e0b',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Success Stories</div>
          <h2 className="section-title">
            What Our <span>Graduates</span> Say
          </h2>
          <p className="section-desc">
            Real stories from real students who transformed their careers through
            our AI-integrated training programs.
          </p>
        </div>

        <div className="testimonials__layout">
          <div className="testimonials__main">
            <Quote size={40} className="testimonials__quote-icon" />
            <p className="testimonials__text">&quot;{t.text}&quot;</p>

            <div className="testimonials__author">
              <div className="testimonials__avatar" style={{ background: `${t.color}20`, borderColor: `${t.color}40`, color: t.color }}>
                {t.initial}
              </div>
              <div>
                <h4 className="testimonials__name">{t.name}</h4>
                <p className="testimonials__role">{t.role} · {t.company}</p>
                <div className="testimonials__stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>
              </div>
              <div className="testimonials__metric" style={{ borderColor: `${t.color}30`, background: `${t.color}0d` }}>
                <span className="metric-number" style={{ color: t.color }}>{t.metric}</span>
                <span className="metric-label">{t.metricLabel}</span>
              </div>
            </div>

            <div className="testimonials__controls">
              <button className="testimonials__nav" onClick={prev}>
                <ChevronLeft size={20} />
              </button>
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials__dot${i === current ? ' testimonials__dot--active' : ''}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
              <button className="testimonials__nav" onClick={next}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="testimonials__sidebar">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`testimonials__thumb${i === current ? ' testimonials__thumb--active' : ''}`}
                onClick={() => setCurrent(i)}
                style={i === current ? { borderColor: item.color, background: `${item.color}0a` } : {}}
              >
                <div
                  className="testimonials__thumb-avatar"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {item.initial}
                </div>
                <div>
                  <p className="testimonials__thumb-name">{item.name}</p>
                  <p className="testimonials__thumb-role">{item.role}</p>
                </div>
                <span className="testimonials__thumb-metric" style={{ color: item.color }}>{item.metric}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
