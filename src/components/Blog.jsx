import { ArrowRight, Calendar, Clock } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    cat: 'Full Stack',
    title: 'AI in Full Stack Development: Building Smarter Apps',
    excerpt: 'Discover how AI tools like GitHub Copilot, ChatGPT, and automated testing frameworks are transforming the way full stack developers build, debug, and deploy applications in 2025.',
    date: 'May 28, 2025',
    readTime: '8 min read',
    color: '#e8192c',
  },
  {
    cat: 'Programming',
    title: 'Mastering Programming with AI Tools',
    excerpt: 'Explore how AI-powered coding assistants are accelerating learning for beginner and intermediate programmers — and how to use them effectively without becoming dependent on them.',
    date: 'April 22, 2025',
    readTime: '6 min read',
    color: '#5b8af5',
  },
  {
    cat: 'Design & Analytics',
    title: 'AI-Powered Web Design and Analytics',
    excerpt: 'From Generative AI design tools to Power BI\'s AI-driven insights, learn how the design and analytics fields are being revolutionized and what skills you need to stay ahead.',
    date: 'April 17, 2025',
    readTime: '7 min read',
    color: '#22c55e',
  },
];

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Latest Insights</div>
          <h2 className="section-title">
            From Our <span>Knowledge Hub</span>
          </h2>
          <p className="section-desc">
            Stay updated with the latest trends in AI, Full Stack development,
            Data Science, and tech careers.
          </p>
        </div>

        <div className="blog__grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-card__img" style={{ background: `linear-gradient(135deg, ${post.color}20, ${post.color}08)`, borderBottom: `1px solid ${post.color}20` }}>
                <span className="blog-card__cat" style={{ background: `${post.color}18`, color: post.color, borderColor: `${post.color}30` }}>
                  {post.cat}
                </span>
                <div className="blog-card__img-icon" style={{ background: `${post.color}15`, borderColor: `${post.color}25` }}>
                  <span style={{ color: post.color, fontSize: 28 }}>✦</span>
                </div>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span><Calendar size={12} /> {post.date}</span>
                  <span><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <button className="blog-card__link" style={{ color: post.color }}>
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
