import { useState } from 'react';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import './Courses.css';

const categories = ['All', 'Full Stack', 'Data & Analytics', 'Design', 'Emerging Tech'];

const courses = [
  {
    cat: 'Full Stack',
    title: 'AI-Integrated Python Full Stack',
    desc: 'Master HTML, CSS, JavaScript, Bootstrap, Python, Django, and MySQL with AI-enhanced workflows.',
    duration: '6 Months',
    students: '180+',
    rating: '4.9',
    tags: ['Python', 'Django', 'MySQL', 'AI'],
    color: '#3b82f6',
    badge: 'Most Popular',
  },
  {
    cat: 'Full Stack',
    title: 'AI-Integrated Java Full Stack',
    desc: 'Build enterprise applications with Java, Spring Boot, and MySQL guided by AI coding assistants.',
    duration: '6 Months',
    students: '120+',
    rating: '4.8',
    tags: ['Java', 'Spring', 'MySQL', 'AI'],
    color: '#f59e0b',
  },
  {
    cat: 'Full Stack',
    title: 'AI-Integrated MERN Stack',
    desc: 'Develop modern web apps with React, Node.js, Express, and MongoDB using AI-powered tools.',
    duration: '5 Months',
    students: '140+',
    rating: '4.9',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    color: '#22c55e',
    badge: 'Trending',
  },
  {
    cat: 'Data & Analytics',
    title: 'AI-Integrated Data Science',
    desc: 'Learn Python, NumPy, Pandas, Machine Learning, and Deep Learning with real-world AI projects.',
    duration: '6 Months',
    students: '90+',
    rating: '4.8',
    tags: ['Python', 'ML', 'Deep Learning', 'AI'],
    color: '#8b5cf6',
  },
  {
    cat: 'Data & Analytics',
    title: 'AI-Integrated Data Analytics (Power BI)',
    desc: 'Transform raw data into actionable insights using Power BI enhanced with AI-driven analysis.',
    duration: '3 Months',
    students: '70+',
    rating: '4.7',
    tags: ['Power BI', 'SQL', 'Analytics', 'AI'],
    color: '#f97316',
  },
  {
    cat: 'Data & Analytics',
    title: 'SQL Database Master Course',
    desc: 'Deep dive into relational databases, query optimization, and data management fundamentals.',
    duration: '2 Months',
    students: '60+',
    rating: '4.7',
    tags: ['SQL', 'MySQL', 'Database'],
    color: '#06b6d4',
  },
  {
    cat: 'Design',
    title: 'AI-Integrated Web Designing',
    desc: 'Create stunning, responsive websites using modern design principles and AI-powered tools.',
    duration: '3 Months',
    students: '85+',
    rating: '4.8',
    tags: ['HTML', 'CSS', 'Figma', 'AI'],
    color: '#ec4899',
  },
  {
    cat: 'Design',
    title: 'AI-Integrated UI/UX Course',
    desc: 'Design user-centric interfaces with Figma and AI-powered design assistants for real products.',
    duration: '3 Months',
    students: '55+',
    rating: '4.9',
    tags: ['Figma', 'UX Research', 'Prototyping', 'AI'],
    color: '#a855f7',
  },
  {
    cat: 'Design',
    title: 'No Code Website using Generative AI',
    desc: 'Build professional websites without coding using the latest Generative AI platforms.',
    duration: '1 Month',
    students: '45+',
    rating: '4.6',
    tags: ['Gen AI', 'No Code', 'Web'],
    color: '#14b8a6',
  },
  {
    cat: 'Emerging Tech',
    title: 'Artificial Intelligence Development',
    desc: 'Build AI applications with NLP, Computer Vision, and deep learning frameworks end-to-end.',
    duration: '6 Months',
    students: '50+',
    rating: '4.9',
    tags: ['NLP', 'Computer Vision', 'Python'],
    color: '#e8192c',
    badge: 'Advanced',
  },
  {
    cat: 'Emerging Tech',
    title: 'AI-Integrated Digital Marketing',
    desc: 'Master SEO, SEM, social media, and content marketing supercharged with AI automation tools.',
    duration: '3 Months',
    students: '65+',
    rating: '4.7',
    tags: ['SEO', 'SEM', 'Social Media', 'AI'],
    color: '#10b981',
  },
];

export default function Courses() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? courses : courses.filter((c) => c.cat === active);

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
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses__grid">
          {filtered.map((course) => (
            <div key={course.title} className="course-card">
              {course.badge && (
                <span className="course-card__badge">{course.badge}</span>
              )}
              <div className="course-card__top" style={{ borderColor: `${course.color}40` }}>
                <div className="course-card__icon" style={{ background: `${course.color}18` }}>
                  <span style={{ color: course.color, fontSize: 24, fontWeight: 800, fontFamily: 'Poppins' }}>
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

              <button className="course-card__btn" onClick={scrollToContact}>
                Enroll Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
