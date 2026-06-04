import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InternshipCTA.css';

const chips = ['Earn a Stipend', 'Free Cert Upgrade', 'Real-World Experience', 'Path to Trainer Role'];

export default function InternshipCTA() {
  return (
    <div className="internship-strip">
      <div className="container internship-strip__inner">
        <div className="internship-strip__left">
          <span className="internship-strip__badge">Now Open</span>
          <span className="internship-strip__text">
            <strong>Internship &amp; TA Program</strong> — Learn by teaching and building real projects
          </span>
        </div>
        <div className="internship-strip__chips">
          {chips.map((c) => (
            <span key={c} className="internship-strip__chip">{c}</span>
          ))}
        </div>
        <Link to="/internship" className="internship-strip__cta">
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
