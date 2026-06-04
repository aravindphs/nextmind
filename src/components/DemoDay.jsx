import { ArrowRight, Monitor, Users, Trophy, Briefcase } from 'lucide-react';
import './DemoDay.css';

const facts = [
  { icon: Monitor, label: '120-min live presentation', color: '#e8192c' },
  { icon: Users, label: 'Real audience + industry guests', color: '#5b8af5' },
  { icon: Trophy, label: '3 deployed projects showcased', color: '#f59e0b' },
  { icon: Briefcase, label: 'Placement drive on the same day', color: '#22c55e' },
];

export default function DemoDay() {
  return (
    <section className="demoday" id="demo-day">
      <div className="container">
        <div className="demoday__inner">
          <div className="demoday__week">
            <span className="demoday__week-label">Week</span>
            <span className="demoday__week-num">24</span>
            <span className="demoday__week-sub">Graduation</span>
          </div>

          <div className="demoday__content">
            <div className="section-tag" style={{ textAlign: 'left' }}>The Finish Line</div>
            <h2 className="demoday__title">
              You Don&apos;t Just <span>Complete</span> a Course.
              <br />You Graduate at <span>Demo Day.</span>
            </h2>
            <p className="demoday__desc">
              Week 24 is Demo Day — a live graduation event where you present your AI-powered
              projects to a real audience. This is not a certificate ceremony. This is a
              professional presentation to industry guests, just like a startup demo day.
              Your placement drive begins the same afternoon.
            </p>

            <div className="demoday__facts">
              {facts.map(({ icon: Icon, label, color }) => (
                <div key={label} className="demoday__fact">
                  <div className="demoday__fact-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                    <Icon size={18} color={color} />
                  </div>
                  <span className="demoday__fact-label">{label}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve Your Spot <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
