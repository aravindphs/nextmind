import { useState } from 'react';
import { ArrowRight, Clock, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import './Courses.css';

const categories = ['All', 'Full Stack', 'Data & Analytics', 'Design', 'Emerging Tech'];

export default function Courses() {
  const [active, setActive] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = active === 'All' ? coursesData : coursesData.filter((c) => c.cat === active);
  const displayed = showAll ? filtered : filtered.slice(0, 3);
  const hasMore = filtered.length > 3;

  const handleFilter = (cat) => {
    setActive(cat);
    setShowAll(false);
  };

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">
            Explore Our <span>AI-Powered</span> Courses
          </h2>
          <p className="section-desc">
            Industry-aligned programs designed to make you job-ready with the latest AI-integrated
            curriculum and real-world project experience.
          </p>
        </div>

        <div className="courses__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`courses__filter-btn${active === cat ? ' courses__filter-btn--active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses__list-wrap">
          <div className="courses__grid">
            {displayed.map((course) => (
              <div key={course.slug} className="course-card">
                {course.badge && (
                  <span className="course-card__badge">{course.badge}</span>
                )}
                <div className="course-card__top" style={{ borderColor: `${course.color}40` }}>
                  <div className="course-card__icon" style={{ background: `${course.color}18` }}>
                    <span style={{ color: course.color, fontSize: 24, fontWeight: 800, fontFamily: 'Sora' }}>
                      {course.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="course-card__title">{course.title}</h3>
                    <p className="course-card__desc">{course.desc}</p>
                  </div>
                </div>

                <div className="course-card__tags">
                  {course.tags.map((t) => (
                    <span key={t} className="course-card__tag" style={{ color: course.color, borderColor: `${course.color}30`, background: `${course.color}0d` }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="course-card__meta">
                  <span><Clock size={13} /> {course.duration}</span>
                  <span><Users size={13} /> {course.students}</span>
                  <span><Star size={13} color="#f59e0b" fill="#f59e0b" /> {course.rating}</span>
                </div>

                <div className="course-card__actions">
                  <button className="course-card__btn" onClick={scrollToContact}>
                    Enroll Now <ArrowRight size={14} />
                  </button>
                  <Link to={`/courses/${course.slug}`} className="course-card__curriculum-btn">
                    View Curriculum
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {!showAll && hasMore && <div className="courses__fade-overlay" />}
        </div>

        {hasMore && (
          <div className="courses__toggle-wrap">
            <button
              className="courses__toggle-btn"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> More Courses ({filtered.length - 3} more)</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
