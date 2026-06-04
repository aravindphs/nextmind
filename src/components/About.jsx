import { Brain, Cpu, LineChart, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import './About.css';

const features = [
  {
    icon: Brain,
    title: 'AI-Enhanced Curriculum',
    desc: 'Our courses integrate real AI tools throughout every lesson, ensuring you learn to work alongside AI from day one.',
    color: '#e8192c',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge AI Tools in Training',
    desc: 'Get hands-on experience with industry tools like ChatGPT, GitHub Copilot, and AI-powered analytics platforms.',
    color: '#5b8af5',
  },
  {
    icon: LineChart,
    title: 'Real-Time AI-Driven Learning Insights',
    desc: 'Personalized dashboards track your progress and suggest optimized learning paths based on your performance.',
    color: '#22c55e',
  },
  {
    icon: Globe,
    title: 'Global Career Impact with Local Focus',
    desc: 'We prepare you for global tech opportunities while supporting placement in top companies across India.',
    color: '#f59e0b',
  },
];

const points = [
  'Industry-aligned curriculum updated every quarter',
  'Live projects with real-world datasets',
  'Dedicated placement assistance team',
  'Certificate recognized by 100+ companies',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__glow" />
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title" style={{ textAlign: 'left', maxWidth: 480 }}>
              India&apos;s Premier <span>AI-Integrated</span> Tech Training Institute
            </h2>
            <p className="section-desc" style={{ textAlign: 'left', margin: 0, marginBottom: 28 }}>
              Located in Coimbatore, Zeta Nextmind is redefining software education by
              embedding Artificial Intelligence into every aspect of our training — from
              curriculum design to career placement support.
            </p>

            <ul className="about__points">
              {points.map((p) => (
                <li key={p}>
                  <CheckCircle2 size={17} color="#22c55e" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn-primary"
              style={{ marginTop: 32 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          <div className="about__right">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="about__card">
                <div className="about__card-icon" style={{ background: `${color}18`, borderColor: `${color}30` }}>
                  <Icon size={22} color={color} />
                </div>
                <div>
                  <h4 className="about__card-title">{title}</h4>
                  <p className="about__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
