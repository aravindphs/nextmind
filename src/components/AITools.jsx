import './AITools.css';

const tools = [
  {
    id: 'pair',
    size: 'featured',
    name: 'AI Pair Programming',
    tools: 'Cursor + GitHub Copilot',
    category: 'Code',
    color: '#e8192c',
    use: 'Real-time code completion, refactoring, and AI-assisted debugging in every live session',
    icon: '⌨',
  },
  {
    id: 'v0',
    size: 'medium',
    name: 'v0.dev',
    category: 'UI Generation',
    color: '#3b82f6',
    use: 'Generate React/Next.js UI components from text descriptions instantly',
    icon: '◈',
  },
  {
    id: 'bolt',
    size: 'medium',
    name: 'Bolt.new',
    category: 'Full-Stack Gen',
    color: '#f59e0b',
    use: 'Scaffold full-stack apps from prompts — prototype to deployed in minutes',
    icon: '⚡',
  },
  {
    id: 'lovable',
    size: 'medium',
    name: 'Lovable.dev',
    category: 'Vibe Coding',
    color: '#ec4899',
    use: 'Build production-ready apps from natural language at scale',
    icon: '♥',
  },
  {
    id: 'claude',
    size: 'medium',
    name: 'Claude & ChatGPT',
    category: 'AI Assistant',
    color: '#8b5cf6',
    use: 'Problem-solving, code review, debugging, and documentation throughout the week',
    icon: '◎',
  },
  {
    id: 'replit',
    size: 'small',
    name: 'Replit AI',
    category: 'Cloud IDE',
    color: '#22c55e',
    use: 'Cloud coding with AI — no setup friction, code from any device',
    icon: '▶',
  },
  {
    id: 'tabnine',
    size: 'small',
    name: 'Tabnine',
    category: 'Autocomplete',
    color: '#06b6d4',
    use: 'IDE-level AI autocomplete trained on codebases',
    icon: '»',
  },
  {
    id: 'perplexity',
    size: 'small',
    name: 'Perplexity AI',
    category: 'Research',
    color: '#10b981',
    use: 'Real-time research and documentation lookup',
    icon: '◉',
  },
  {
    id: 'context7',
    size: 'small',
    name: 'Context7',
    category: 'Context AI',
    color: '#a855f7',
    use: 'Topic-specific AI: schema generators, test generators, and more',
    icon: '⬡',
  },
];

export default function AITools() {
  return (
    <section className="aitools" id="ai-tools">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">AI-Integrated Curriculum</div>
          <h2 className="section-title">
            The AI Tools You&apos;ll Master <span>Every Week</span>
          </h2>
          <p className="section-desc">
            Not optional extras — these are core workflow tools used in every single session,
            the same way developers use them in top tech companies today.
          </p>
        </div>

        <div className="aitools__grid">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`aitools__card aitools__card--${tool.size}`}
              style={{ '--tool-color': tool.color }}
            >
              <div className="aitools__card-top">
                <span className="aitools__icon" style={{ color: tool.color }}>{tool.icon}</span>
                <span className="aitools__category" style={{ color: tool.color, borderColor: `${tool.color}30`, background: `${tool.color}10` }}>
                  {tool.category}
                </span>
              </div>
              <h3 className="aitools__name">{tool.name}</h3>
              {tool.tools && <p className="aitools__subtool">{tool.tools}</p>}
              <p className="aitools__use">{tool.use}</p>
              <div className="aitools__card-bar" style={{ background: `${tool.color}25` }}>
                <div className="aitools__card-bar-fill" style={{ background: tool.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="aitools__callout">
          <span className="aitools__callout-dot" />
          No institute in Tamil Nadu teaches AI tools as a core weekly workflow — this is what sets Zeta Nextmind apart.
        </div>
      </div>
    </section>
  );
}
