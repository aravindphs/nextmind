import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/', hash: 'hero' },
  { label: 'About Us', to: '/#about' },
  { label: 'Courses', to: '/#courses' },
  { label: 'Blog', to: '/blog' },
  { label: 'Campus Partnership', to: '/college-partnership' },
  { label: 'Contact Us', to: '/#contact' },
];

const courseLinks = [
  'Python Full Stack',
  'Java Full Stack',
  'MERN Stack',
  'Data Science',
  'Data Analytics',
  'Web Designing',
  'UI/UX Course',
  'Digital Marketing',
];

const socials = [
  { label: 'f', href: '#', title: 'Facebook' },
  { label: 'in', href: '#', title: 'LinkedIn' },
  { label: 'ig', href: '#', title: 'Instagram' },
  { label: 'yt', href: '#', title: 'YouTube' },
  { label: 'x', href: '#', title: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="logo-zeta">Zeta</span>
              <span className="logo-next">Next</span>
              <span className="logo-mind">mind</span>
            </Link>
            <p className="footer__brand-desc">
              Empowering careers through AI-integrated software training. Join 600+
              students who transformed their futures with us in Coimbatore.
            </p>
            <div className="footer__socials">
              {socials.map(({ label, href, title }) => (
                <a key={title} href={href} aria-label={title} className="footer__social">
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', lineHeight: 1 }}>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul>
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>
                    <ArrowRight size={12} /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Our Courses</h4>
            <ul>
              {courseLinks.map((link) => (
                <li key={link}>
                  <Link to="/#courses">
                    <ArrowRight size={12} /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <div className="footer__contact-items">
              <a href="tel:+917356764410" className="footer__contact-item">
                <Phone size={15} color="#e8192c" />
                <span>+91 73567 64410</span>
              </a>
              <a href="mailto:admissions@zetanextmind.com" className="footer__contact-item">
                <Mail size={15} color="#5b8af5" />
                <span>admissions@zetanextmind.com</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={15} color="#22c55e" />
                <span>Coimbatore, Tamil Nadu 641012, India</span>
              </div>
            </div>

            <div className="footer__newsletter">
              <h5>Stay Updated</h5>
              <div className="footer__newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn-primary">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Zeta Nextmind Institute. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
