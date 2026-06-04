import { useRef, useEffect } from 'react';
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
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const nodeRefs = useRef([]);

  const updatePaths = () => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const cRect = container.getBoundingClientRect();
    const w = cRect.width;
    const h = cRect.height;

    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

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

      // Dim track
      const track = document.createElementNS(NS, 'path');
      track.setAttribute('d', d);
      track.setAttribute('stroke', 'rgba(255,255,255,0.07)');
      track.setAttribute('stroke-width', '2');
      track.setAttribute('fill', 'none');
      track.setAttribute('stroke-linecap', 'round');
      svg.appendChild(track);

      // Traveling glow segment
      const glow = document.createElementNS(NS, 'path');
      glow.setAttribute('d', d);
      glow.setAttribute('stroke', '#e8192c');
      glow.setAttribute('stroke-width', '3');
      glow.setAttribute('fill', 'none');
      glow.setAttribute('pathLength', '1');
      glow.setAttribute('stroke-dasharray', '0.15 0.85');
      glow.setAttribute('stroke-dashoffset', '0');
      glow.setAttribute('stroke-linecap', 'round');
      glow.style.filter = 'drop-shadow(0 0 6px rgba(232,25,44,0.9)) drop-shadow(0 0 14px rgba(232,25,44,0.5))';
      glow.style.animation = `hiw-glow ${2 + i * 0.4}s linear infinite`;
      svg.appendChild(glow);
    }
  };

  useEffect(() => {
    const timer = setTimeout(updatePaths, 80);
    const observer = new ResizeObserver(updatePaths);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

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

        <div className="hiw__timeline" ref={containerRef}>
          <svg className="hiw__svg" ref={svgRef} aria-hidden="true" />

          {steps.map(({ step, icon: Icon, title, desc, color, points }, i) => (
            <div
              key={step}
              className={`hiw__step ${i % 2 === 0 ? 'hiw__step--left' : 'hiw__step--right'}`}
            >
              <div
                className="hiw__node"
                ref={(el) => { nodeRefs.current[i] = el; }}
                style={{ borderColor: `${color}55`, boxShadow: `0 0 32px ${color}22` }}
              >
                <span className="hiw__node-num" style={{ color }}>{step}</span>
                <div className="hiw__node-icon" style={{ color }}>
                  <Icon size={22} />
                </div>
              </div>

              <div className="hiw__card">
                <h3 className="hiw__card-title" style={{ color }}>{title}</h3>
                <p className="hiw__card-desc">{desc}</p>
                <ul className="hiw__points">
                  {points.map((p) => (
                    <li key={p}>
                      <span className="hiw__dot" style={{ background: color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
