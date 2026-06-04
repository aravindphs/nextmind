import './Partners.css';

const techStack = [
  'Python', 'React.js', 'Node.js', 'Java', 'Django', 'MongoDB',
  'Power BI', 'MySQL', 'Spring Boot', 'Figma', 'TensorFlow', 'ChatGPT',
  'GitHub Copilot', 'Docker', 'AWS', 'JavaScript',
];

export default function Partners() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="partners">
      <div className="container">
        <p className="partners__label">Technologies & Tools You&apos;ll Master</p>
      </div>
      <div className="partners__track-wrap">
        <div className="partners__track">
          {doubled.map((tech, i) => (
            <div key={i} className="partners__chip">
              <span className="partners__chip-dot" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
