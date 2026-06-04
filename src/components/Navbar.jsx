import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    setCoursesOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="logo-zeta">Zeta</span>
          <span className="logo-next">Next</span>
          <span className="logo-mind">mind</span>
        </a>

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
          <a onClick={() => scrollTo('blog')}>Blog</a>
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
          <a onClick={() => scrollTo('blog')}>Blog</a>
          <a onClick={() => scrollTo('contact')}>Contact Us</a>
          <a className="btn-primary" onClick={() => scrollTo('contact')}>Enroll Now</a>
        </div>
      )}
    </header>
  );
}
