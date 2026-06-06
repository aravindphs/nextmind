// import { ArrowRight, CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

// const highlights = [
//   '600+ Students Trained',
//   '90% Placement Rate',
//   '15+ Expert Instructors',
// ];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-glow" />
      <div className="hero__bg-grid" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="section-tag">AI-Powered Education Platform</div>
          <h1 className="hero__title">
            Empowering Careers Through{' '}
            <span>AI-Integrated</span> Software Training
          </h1>
          <p className="hero__desc">
            Master Full Stack Development, Data Science, Web Design, and Digital Marketing
            with cutting-edge AI tools and hands-on projects. Join 600+ students who
            transformed their careers with Zeta Nextmind.
          </p>

          {/* <div className="hero__highlights">
            {highlights.map((h) => (
              <div key={h} className="hero__highlight">
                <CheckCircle size={16} color="#22c55e" />
                <span>{h}</span>
              </div>
            ))}
          </div> */}

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Enroll Now <ArrowRight size={16} />
            </button>
            <a className="btn-outline" href="tel:+917356764410">
              Book Free Demo Class
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__orbit-ring hero__orbit-ring--outer">
            <span className="hero__orbit-dot hero__orbit-dot--1" />
          </div>
          <div className="hero__orbit-ring hero__orbit-ring--inner">
            <span className="hero__orbit-dot hero__orbit-dot--2" />
          </div>
          <div className="hero__center-card">
            <div className="hero__ai-badge">
              <span className="ai-dot" />
              AI-Enhanced Learning
            </div>
            <div className="hero__stat-grid">
              <div className="hero__stat">
                <span className="stat-number">600+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="hero__stat">
                <span className="stat-number">90%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="hero__stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Instructors</span>
              </div>
              <div className="hero__stat">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Hours Content</span>
              </div>
            </div>
            <div className="hero__tech-stack">
              {['Python', 'React', 'Java', 'Django', 'Node.js', 'Power BI'].map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  );
}
