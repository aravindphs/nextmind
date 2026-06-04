import { useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import './CourseDetail.css';

function CourseRoadmap({ roadmap, color }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const nodeRefs = useRef([]);

  const updatePaths = () => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const cRect = container.getBoundingClientRect();
    svg.setAttribute('width', cRect.width);
    svg.setAttribute('height', cRect.height);
    svg.setAttribute('viewBox', `0 0 ${cRect.width} ${cRect.height}`);
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const NS = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < nodeRefs.current.length - 1; i++) {
      const n1 = nodeRefs.current[i];
      const n2 = nodeRefs.current[i + 1];
      if (!n1 || !n2) continue;
      const r1 = n1.getBoundingClientRect();
      const r2 = n2.getBoundingClientRect();
      const x1 = r1.left + r1.width / 2 - cRect.left;
      const y1 = r1.bottom - cRect.top;
      const x2 = r2.left + r2.width / 2 - cRect.left;
      const y2 = r2.top - cRect.top;
      const midY = (y1 + y2) / 2;
      const d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;

      const track = document.createElementNS(NS, 'path');
      track.setAttribute('d', d);
      track.setAttribute('stroke', 'rgba(255,255,255,0.07)');
      track.setAttribute('stroke-width', '2');
      track.setAttribute('fill', 'none');
      track.setAttribute('stroke-linecap', 'round');
      svg.appendChild(track);

      const glow = document.createElementNS(NS, 'path');
      glow.setAttribute('d', d);
      glow.setAttribute('stroke', color);
      glow.setAttribute('stroke-width', '3');
      glow.setAttribute('fill', 'none');
      glow.setAttribute('pathLength', '1');
      glow.setAttribute('stroke-dasharray', '0.15 0.85');
      glow.setAttribute('stroke-dashoffset', '0');
      glow.setAttribute('stroke-linecap', 'round');
      glow.style.filter = `drop-shadow(0 0 6px ${color}cc) drop-shadow(0 0 14px ${color}66)`;
      glow.style.animation = `cd-glow ${2 + i * 0.3}s linear infinite`;
      svg.appendChild(glow);
    }
  };

  useEffect(() => {
    const timer = setTimeout(updatePaths, 80);
    const observer = new ResizeObserver(updatePaths);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="cd-roadmap" ref={containerRef}>
      <svg className="cd-roadmap__svg" ref={svgRef} aria-hidden="true" />
      {roadmap.map(({ phase, weeks, title, desc }, i) => (
        <div
          key={phase}
          className={`cd-step ${i % 2 === 0 ? 'cd-step--left' : 'cd-step--right'}`}
        >
          <div
            className="cd-node"
            ref={(el) => { nodeRefs.current[i] = el; }}
            style={{ borderColor: `${color}55`, boxShadow: `0 0 28px ${color}22` }}
          >
            <span className="cd-node__num" style={{ color }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="cd-node__phase" style={{ color }}>{phase}</span>
          </div>
          <div className="cd-card">
            <div className="cd-card__weeks" style={{ color, background: `${color}10`, borderColor: `${color}25` }}>
              Week {weeks}
            </div>
            <h3 className="cd-card__title">{title}</h3>
            <p className="cd-card__desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="cd-notfound">
        <h2>Course not found</h2>
        <Link to="/#courses" className="btn-primary">← Back to Courses</Link>
      </div>
    );
  }

  const { title, tagline, desc, duration, students, rating, tags, color, badge, idealFor, aiTools, roadmap } = course;

  return (
    <div className="cd">
      {/* Hero */}
      <div className="cd__hero" style={{ borderBottom: `1px solid ${color}30` }}>
        <div className="cd__hero-glow" style={{ background: `radial-gradient(circle at 70% 50%, ${color}15, transparent 60%)` }} />
        <div className="container">
          <button className="cd__back" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> All Courses
          </button>
          {badge && <div className="cd__badge">{badge}</div>}
          <h1 className="cd__title">{title}</h1>
          <p className="cd__tagline">{tagline}</p>
          <div className="cd__meta">
            <span><Clock size={14} /> {duration}</span>
            <span><Users size={14} /> {students} students</span>
            <span><Star size={14} color="#f59e0b" fill="#f59e0b" /> {rating}</span>
          </div>
          <div className="cd__tags">
            {tags.map((t) => (
              <span key={t} className="cd__tag" style={{ color, borderColor: `${color}40`, background: `${color}10` }}>{t}</span>
            ))}
          </div>
          <div className="cd__hero-actions">
            <Link to="/#contact" className="btn-primary">
              Enroll Now <ArrowRight size={16} />
            </Link>
            <a href="tel:+917356764410" className="btn-outline">Book Free Demo</a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Overview */}
        <div className="cd__overview">
          <div className="cd__overview-left">
            <h2 className="cd__section-heading">Course Overview</h2>
            <p className="cd__para">{desc}</p>
            <div className="cd__ideal">
              <span className="cd__ideal-label">Ideal for:</span>
              <span className="cd__ideal-value">{idealFor}</span>
            </div>
          </div>
          <div className="cd__overview-right">
            <h3 className="cd__tools-heading">AI Tools You&apos;ll Master</h3>
            <div className="cd__ai-tools">
              {aiTools.map((tool) => (
                <span key={tool} className="cd__ai-tool" style={{ borderColor: `${color}30`, background: `${color}08`, color }}>
                  {tool}
                </span>
              ))}
            </div>
            <div className="cd__promise">
              <CheckCircle2 size={16} color="#22c55e" />
              <span>3 live deployed projects in your portfolio</span>
            </div>
            <div className="cd__promise">
              <CheckCircle2 size={16} color="#22c55e" />
              <span>Weekly communication training from Day 1</span>
            </div>
            <div className="cd__promise">
              <CheckCircle2 size={16} color="#22c55e" />
              <span>Placement assistance + Demo Day graduation</span>
            </div>
            <div className="cd__promise">
              <CheckCircle2 size={16} color="#22c55e" />
              <span>Max 15 students per batch — personal mentorship</span>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="cd__roadmap-section">
          <div className="section-header">
            <div className="section-tag">Week by Week</div>
            <h2 className="section-title">
              Your <span>{duration}</span> Journey
            </h2>
            <p className="section-desc">
              Every phase has clear deliverables — you graduate with deployed projects, not just a certificate.
            </p>
          </div>
          <CourseRoadmap roadmap={roadmap} color={color} />
        </div>

        {/* CTA */}
        <div className="cd__cta">
          <h3>Ready to start your journey?</h3>
          <p>Join the next batch — limited to 15 students. Book a free demo class before you enroll.</p>
          <div className="cd__cta-actions">
            <Link to="/#contact" className="btn-primary">
              Enroll Now <ArrowRight size={16} />
            </Link>
            <a href="tel:+917356764410" className="btn-outline">
              Book Free Demo Class
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
