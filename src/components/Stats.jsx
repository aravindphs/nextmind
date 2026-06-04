import { useEffect, useRef, useState } from 'react';
import { Users, TrendingUp, Award, BookOpen } from 'lucide-react';
import './Stats.css';

const stats = [
  { icon: Users, number: 600, suffix: '+', label: 'Students Trained Worldwide', color: '#e8192c' },
  { icon: TrendingUp, number: 90, suffix: '%', label: 'Course Completion Success Rate', color: '#22c55e' },
  { icon: Award, number: 15, suffix: '+', label: 'Expert Instructors with AI Expertise', color: '#5b8af5' },
  { icon: BookOpen, number: 5000, suffix: '+', label: 'Hours of AI-Enhanced Learning Content', color: '#f59e0b' },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="stats-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__bg" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Impact</div>
          <h2 className="section-title">
            Numbers That <span>Speak Louder</span> Than Words
          </h2>
        </div>
        <div className="stats__grid">
          {stats.map(({ icon: Icon, number, suffix, label, color }) => (
            <div key={label} className="stats__card">
              <div className="stats__card-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                <Icon size={28} color={color} />
              </div>
              <CountUp target={number} suffix={suffix} active={active} />
              <p className="stats__label">{label}</p>
              <div className="stats__bar" style={{ background: `${color}20` }}>
                <div
                  className="stats__bar-fill"
                  style={{ background: color, width: active ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
