import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const coursesMenu = [
  { label: 'AI-Integrated Python Full Stack', slug: 'python-full-stack' },
  { label: 'AI-Integrated Java Full Stack', slug: 'java-full-stack' },
  { label: 'AI-Integrated MERN Stack', slug: 'mern-stack' },
  { label: 'AI-Integrated Data Science', slug: 'data-science' },
  { label: 'AI-Integrated Data Analytics', slug: 'data-analytics-power-bi' },
  { label: 'SQL Database Master Course', slug: 'sql-master' },
  { label: 'AI-Integrated Web Designing', slug: 'web-designing' },
  { label: 'AI-Integrated UI/UX Course', slug: 'ui-ux' },
  { label: 'No Code Website using Gen AI', slug: 'no-code-ai' },
  { label: 'AI Development (NLP & CV)', slug: 'ai-development' },
  { label: 'AI-Integrated Digital Marketing', slug: 'digital-marketing' },
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
          <img src="/logo.svg" alt="Zeta Nextmind" className="navbar__logo-img" />
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
                {coursesMenu.map(({ label, slug }) => (
                  <Link
                    key={slug}
                    to={`/courses/${slug}`}
                    onClick={() => setCoursesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/internship" onClick={() => setMobileOpen(false)}>Internship</Link>
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
          <Link to="/internship" onClick={() => setMobileOpen(false)}>Internship</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <a onClick={() => scrollTo('contact')}>Contact Us</a>
          <a className="btn-primary" onClick={() => scrollTo('contact')}>Enroll Now</a>
        </div>
      )}
    </header>
  );
}
