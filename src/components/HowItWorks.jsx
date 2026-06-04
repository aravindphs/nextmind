import { UserCheck, BrainCircuit, Rocket } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    step: '01',
    icon: UserCheck,
    title: 'Enroll & Assess',
    desc: 'Share your career goals and current skill level. Our AI-powered assessment creates a personalized learning roadmap tailored just for you.',
    color: '#e8192c',
    points: ['Free counseling session', 'Skill gap analysis', 'Customized learning path'],
  },
  {
    step: '02',
    icon: BrainCircuit,
    title: 'Learn with AI',
    desc: 'Dive into hands-on courses with AI-integrated tools, real-world projects, and live mentoring sessions from industry experts.',
    color: '#5b8af5',
    points: ['Live instructor-led classes', 'AI-assisted coding practice', 'Real-world project work'],
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Career Launch',
    desc: 'Earn your certificate and get matched with top employers through our AI-assisted job placement program with dedicated support.',
    color: '#22c55e',
    points: ['Industry-recognized certificate', 'Resume & interview prep', 'Placement assistance'],
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Simple Process</div>
          <h2 className="section-title">
            Your Journey to a <span>Tech Career</span> in 3 Steps
          </h2>
          <p className="section-desc">
            From enrollment to placement — we guide every step of your transformation
            with AI-powered tools and expert mentors.
          </p>
        </div>

        <div className="hiw__grid">
          {steps.map(({ step, icon: Icon, title, desc, color, points }, i) => (
            <div key={step} className="hiw__card">
              <div className="hiw__connector" style={{ display: i < steps.length - 1 ? 'block' : 'none' }} />
              <div className="hiw__step-badge" style={{ background: `${color}15`, borderColor: `${color}40`, color }}>
                {step}
              </div>
              <div className="hiw__icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                <Icon size={28} color={color} />
              </div>
              <h3 className="hiw__title">{title}</h3>
              <p className="hiw__desc">{desc}</p>
              <ul className="hiw__points">
                {points.map((p) => (
                  <li key={p} style={{ '--dot-color': color }}>
                    <span className="hiw__dot" style={{ background: color }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
