import { ExternalLink, Code2, BarChart3, Layers, Cpu } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    icon: Layers,
    title: 'SmartApp',
    sub: 'AI-Powered Full Stack Application',
    desc: 'A complete web application with AI-driven features including smart recommendations, automated workflows, and intelligent user interface.',
    tech: ['React', 'Django', 'PostgreSQL', 'OpenAI API'],
    color: '#e8192c',
  },
  {
    icon: Code2,
    title: 'WebGenix',
    sub: 'AI-Enhanced Responsive Website',
    desc: 'A beautifully crafted responsive website generated and optimized using Generative AI tools, cutting development time by 60%.',
    tech: ['HTML/CSS', 'JavaScript', 'Figma', 'Gen AI'],
    color: '#5b8af5',
  },
  {
    icon: BarChart3,
    title: 'DataInsight',
    sub: 'AI-Driven Power BI Dashboard',
    desc: 'An interactive business intelligence dashboard with AI-powered forecasting, anomaly detection, and automated reporting.',
    tech: ['Power BI', 'Python', 'SQL', 'ML Models'],
    color: '#22c55e',
  },
  {
    icon: Cpu,
    title: 'CodeOptimizer',
    sub: 'AI-Optimized Algorithm Solution',
    desc: 'An intelligent code analysis tool that uses AI to identify performance bottlenecks and suggest optimizations automatically.',
    tech: ['Python', 'NLP', 'AST Analysis', 'AI'],
    color: '#f59e0b',
  },
];

export default function Projects() {
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
          {projects.map(({ icon: Icon, title, sub, desc, tech, color }) => (
            <div key={title} className="project-card" style={{ '--accent-color': color }}>
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                  <Icon size={24} color={color} />
                </div>
                <div>
                  <h3 className="project-card__title">{title}</h3>
                  <p className="project-card__sub" style={{ color }}>{sub}</p>
                </div>
                <ExternalLink size={16} className="project-card__ext" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
