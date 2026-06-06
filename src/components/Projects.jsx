import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';
import './Projects.css';

const iconMap = {
  smartapp: () => <span style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Sora' }}>S</span>,
  webgenix: () => <span style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Sora' }}>W</span>,
  datainsight: () => <span style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Sora' }}>D</span>,
  codeoptimizer: () => <span style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Sora' }}>C</span>,
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Student Work</div>
          <h2 className="section-title">
            Real Projects Built by <span>Our Students</span>
          </h2>
          <p className="section-desc">
            Our students don&apos;t just learn theory — they build industry-grade projects
            that showcase their AI-integrated development skills.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => {
            const { slug, title, sub, desc, tech, color } = project;
            const IconContent = iconMap[slug];
            return (
              <div
                key={slug}
                className="project-card"
                style={{ '--accent-color': color, cursor: 'pointer' }}
                onClick={() => navigate(`/projects/${slug}`)}
              >
                <div className="project-card__header">
                  <div className="project-card__icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                    <IconContent />
                  </div>
                  <div>
                    <h3 className="project-card__title">{title}</h3>
                    <p className="project-card__sub" style={{ color }}>{sub}</p>
                  </div>
                  <ArrowUpRight size={16} className="project-card__ext" style={{ color }} />
                </div>
                <p className="project-card__desc">{desc}</p>
                <div className="project-card__tech">
                  {tech.map((t) => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-card__bar" style={{ background: `${color}20` }}>
                  <div className="project-card__bar-fill" style={{ background: color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
