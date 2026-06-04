import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Rocket, Clock, Users } from 'lucide-react';
import { projects } from '../data/projectsData';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pd-notfound">
        <h2>Project not found</h2>
        <Link to="/#projects" className="btn-primary">← Back to Projects</Link>
      </div>
    );
  }

  const { title, sub, fullDesc, tech, color, challenges, outcomes, student, duration } = project;

  return (
    <div className="pd">
      <div className="pd__hero" style={{ borderBottom: `1px solid ${color}30` }}>
        <div className="pd__hero-glow" style={{ background: `radial-gradient(circle at 70% 50%, ${color}18, transparent 60%)` }} />
        <div className="container">
          <button className="pd__back" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back to Projects
          </button>
          <div className="section-tag" style={{ marginTop: 20 }}>Student Project</div>
          <h1 className="pd__title">{title}</h1>
          <p className="pd__sub" style={{ color }}>{sub}</p>
          <div className="pd__meta">
            <span><Users size={14} /> {student}</span>
            <span><Clock size={14} /> Built in {duration}</span>
          </div>
          <div className="pd__tech">
            {tech.map((t) => (
              <span key={t} className="pd__tech-tag" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pd__body">
          <div className="pd__main">
            <h2 className="pd__section-heading">About This Project</h2>
            {fullDesc.map((para, i) => (
              <p key={i} className="pd__para">{para}</p>
            ))}

            <div className="pd__two-col">
              <div className="pd__col-card">
                <h3 className="pd__col-title" style={{ color }}>Challenges Tackled</h3>
                <ul className="pd__list">
                  {challenges.map((c) => (
                    <li key={c}>
                      <span className="pd__list-dot" style={{ background: color }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pd__col-card">
                <h3 className="pd__col-title" style={{ color: '#22c55e' }}>Outcomes Achieved</h3>
                <ul className="pd__list">
                  {outcomes.map((o) => (
                    <li key={o}>
                      <CheckCircle2 size={15} color="#22c55e" style={{ flexShrink: 0 }} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pd__cta">
          <Rocket size={36} color={color} />
          <h3>Want to Build Projects Like This?</h3>
          <p>Enroll in our AI-integrated courses and build an industry-grade portfolio in months.</p>
          <div className="pd__cta-actions">
            <Link to="/#contact" className="btn-primary">
              Enroll Now <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
            <Link to="/#courses" className="btn-outline">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
