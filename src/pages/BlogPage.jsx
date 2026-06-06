import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEOMeta from '../components/SEOMeta';
import '../components/Blog.css';
import './BlogPage.css';

export default function BlogPage() {
  return (
    <div className="blog-page">
      <SEOMeta
        title="Blog — AI & Software Training Insights"
        description="Articles on AI-integrated learning, software development careers, placement tips, student project stories, and industry trends from the Zeta Nextmind team in Coimbatore."
        canonical="/blog"
      />
      <div className="container">
        <div className="section-header blog-page__header">
          <div className="section-tag">Knowledge Hub</div>
          <h1 className="section-title">
            AI & Tech <span>Blog</span>
          </h1>
          <p className="section-desc">
            In-depth articles on AI, Full Stack development, Data Science, and the
            skills shaping the future of tech careers.
          </p>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
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
    </div>
  );
}
