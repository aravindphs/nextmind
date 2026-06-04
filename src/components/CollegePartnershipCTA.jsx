import { Link } from 'react-router-dom';
import { GraduationCap, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CollegePartnershipCTA.css';

const benefits = [
  'Bulk enrollment discounts for 20+ students',
  'Dedicated academic liaison & support',
  'Custom curriculum tailored to your institution',
  'Placement network access for all graduates',
];

export default function CollegePartnershipCTA() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__glow" />
      <div className="container">
        <div className="cta-banner__inner">
          <div className="cta-banner__left">
            <div className="section-tag" style={{ textAlign: 'left' }}>For Institutions</div>
            <h2 className="cta-banner__title">
              Future-Proof Your Students <span>at Scale</span>
            </h2>
            <p className="cta-banner__desc">
              Partner with Zeta Nextmind to bring AI-integrated tech training to your campus.
              We&apos;ve helped 20+ colleges upskill their students and boost placement rates by 40%.
            </p>
            <ul className="cta-banner__benefits">
              {benefits.map((b) => (
                <li key={b}>
                  <CheckCircle2 size={16} color="#22c55e" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="cta-banner__actions">
              <Link to="/college-partnership" className="btn-primary">
                Partner With Us <ArrowRight size={16} />
              </Link>
              <a href="tel:+917356764410" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </div>

          <div className="cta-banner__right">
            <div className="cta-banner__stat-card">
              <div className="cta-stat">
                <GraduationCap size={28} color="#e8192c" />
                <span className="cta-stat__num">20+</span>
                <span className="cta-stat__label">College Partners</span>
              </div>
              <div className="cta-stat">
                <Users size={28} color="#5b8af5" />
                <span className="cta-stat__num">2,000+</span>
                <span className="cta-stat__label">Campus Students Trained</span>
              </div>
              <div className="cta-stat">
                <TrendingUp size={28} color="#22c55e" />
                <span className="cta-stat__num">40%</span>
                <span className="cta-stat__label">Placement Rate Boost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
