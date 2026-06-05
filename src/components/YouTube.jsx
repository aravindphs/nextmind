import { useState } from 'react';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import './YouTube.css';

// Replace the IDs below with your actual YouTube video IDs.
// Get them from your video URL: youtube.com/watch?v=VIDEO_ID_HERE
const videos = [
  {
    id: 'REPLACE_VIDEO_ID_1',
    title: 'What Makes Zeta Nextmind Different? AI-Integrated Learning Explained',
    views: '',
  },
  {
    id: 'REPLACE_VIDEO_ID_2',
    title: 'Full Stack Development Demo Day — Student Projects Live',
    views: '',
    featured: true,
  },
  {
    id: 'REPLACE_VIDEO_ID_3',
    title: 'How We Train Students with Real AI Tools — Inside Look',
    views: '',
  },
];

function VideoCard({ id, title, views, featured, floatDelay }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div
      className={`yt-card${featured ? ' yt-card--featured' : ''}`}
      style={{ '--float-delay': floatDelay }}
    >
      <div className="yt-card__player">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button className="yt-card__thumb" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
            <img
              src={thumb}
              alt={title}
              onError={(e) => { e.currentTarget.style.opacity = '0'; }}
            />
            <div className="yt-card__play-overlay">
              <span className="yt-card__play-icon">
                <FaPlay size={featured ? 22 : 18} />
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="yt-card__meta">
        <p className="yt-card__title">{title}</p>
        {views && <span className="yt-card__views">{views}</span>}
      </div>
    </div>
  );
}

export default function YouTube() {
  return (
    <section className="yt-section" id="youtube">
      <div className="yt-section__bg-glow" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">On YouTube</div>
          <h2 className="section-title">
            Watch Us <span>in Action</span>
          </h2>
          <p className="section-desc">
            Real lessons, real student projects, real results — all on our channel.
          </p>
        </div>

        <div className="yt-section__grid">
          {videos.map((v, i) => (
            <VideoCard key={v.id} {...v} floatDelay={`${i * 0.55}s`} />
          ))}
        </div>

        <div className="yt-section__cta">
          <a
            href="https://www.youtube.com/@ZetaNextMind"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-section__subscribe-btn"
          >
            <FaYoutube size={20} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
