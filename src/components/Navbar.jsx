import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const coursesMenu = [
  'AI-Integrated Python Full Stack',
  'AI-Integrated Java Full Stack',
  'AI-Integrated MERN Stack',
  'AI-Integrated Data Science',
  'AI-Integrated Data Analytics',
  'SQL Database Master Course',
  'AI-Integrated Web Designing',
  'AI-Integrated UI/UX Course',
  'No Code Website using Gen AI',
  'AI Development (NLP & CV)',
  'AI-Integrated Digital Marketing',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    setCoursesOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="logo-zeta">Zeta</span>
          <span className="logo-next">Next</span>
          <span className="logo-mind">mind</span>
        </Link>

        <nav className={`navbar__links${mobileOpen ? ' navbar__links--open' : ''}`}>
          <a onClick={() => scrollTo('hero')}>Home</a>
          <a onClick={() => scrollTo('about')}>About Us</a>
          <div
            className="navbar__dropdown"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <span>
              Courses <ChevronDown size={14} />
            </span>
            {coursesOpen && (
              <div className="dropdown-menu">
                {coursesMenu.map((c) => (
                  <a key={c} onClick={() => scrollTo('courses')}>{c}</a>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <a onClick={() => scrollTo('contact')}>Contact Us</a>
        </nav>

        <a className="btn-primary navbar__cta" onClick={() => scrollTo('contact')}>
          Enroll Now
        </a>

        <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          <a onClick={() => scrollTo('hero')}>Home</a>
          <a onClick={() => scrollTo('about')}>About Us</a>
          <a onClick={() => scrollTo('courses')}>Courses</a>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <a onClick={() => scrollTo('contact')}>Contact Us</a>
          <a className="btn-primary" onClick={() => scrollTo('contact')}>Enroll Now</a>
        </div>
      )}
    </header>
  );
}
