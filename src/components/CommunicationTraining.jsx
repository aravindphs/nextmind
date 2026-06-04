import { Video, Upload, Users, BookOpen, MessageCircle, Mic, Presentation } from 'lucide-react';
import './CommunicationTraining.css';

const activities = [
  {
    icon: Video,
    name: 'Self-Video Recording',
    freq: 'Weekly',
    purpose: 'Build confidence and fluency explaining technical concepts on camera',
    color: '#e8192c',
  },
  {
    icon: Upload,
    name: 'YouTube Unlisted Upload',
    freq: 'Weekly',
    purpose: 'Create a documented communication progress portfolio over 24 weeks',
    color: '#3b82f6',
  },
  {
    icon: Users,
    name: 'Peer Review Sessions',
    freq: 'Weekly',
    purpose: 'Community accountability — batchmates give feedback on each other\'s videos',
    color: '#22c55e',
  },
  {
    icon: BookOpen,
    name: 'TED Talk Analysis',
    freq: 'Weekly',
    purpose: 'Exposure to world-class communication models — watch, discuss, apply',
    color: '#f59e0b',
  },
  {
    icon: MessageCircle,
    name: 'English Group Discussions',
    freq: 'Weekly',
    purpose: 'Structured debates and activities build comfort in professional English',
    color: '#8b5cf6',
  },
  {
    icon: Mic,
    name: 'Mock Interview Rounds',
    freq: 'Weeks 9, 13 & 20',
    purpose: 'Full HR + Technical simulation — real interview experience before placement',
    color: '#10b981',
  },
  {
    icon: Presentation,
    name: 'Demo Day Pitch',
    freq: 'Week 24',
    purpose: 'Live 120-min project presentation to a real audience — the final communication test',
    color: '#f97316',
  },
];

export default function CommunicationTraining() {
  return (
    <section className="commtrain" id="communication">
      <div className="container">
        <div className="commtrain__inner">
          <div className="commtrain__left">
            <div className="section-tag">Communication-First Training</div>
            <h2 className="commtrain__title">
              We Train Your Voice, <span>Not Just Your Code</span>
            </h2>
            <blockquote className="commtrain__quote">
              "Technical skills get you the interview. Communication gets you the job."
            </blockquote>
            <p className="commtrain__desc">
              Every Zeta Nextmind student participates in a structured communication programme
              running in parallel to technical training every single week — not saved for the last
              week before placement.
            </p>
            <div className="commtrain__highlights">
              <div className="commtrain__highlight">
                <span className="commtrain__highlight-num">24</span>
                <span className="commtrain__highlight-label">Weeks of training</span>
              </div>
              <div className="commtrain__highlight">
                <span className="commtrain__highlight-num">7</span>
                <span className="commtrain__highlight-label">Weekly activities</span>
              </div>
              <div className="commtrain__highlight">
                <span className="commtrain__highlight-num">3×</span>
                <span className="commtrain__highlight-label">Mock interview rounds</span>
              </div>
            </div>
          </div>

          <div className="commtrain__right">
            {activities.map(({ icon: Icon, name, freq, purpose, color }) => (
              <div key={name} className="commtrain__activity">
                <div className="commtrain__activity-icon" style={{ background: `${color}15`, borderColor: `${color}30` }}>
                  <Icon size={18} color={color} />
                </div>
                <div className="commtrain__activity-body">
                  <div className="commtrain__activity-header">
                    <span className="commtrain__activity-name">{name}</span>
                    <span className="commtrain__activity-freq" style={{ color, background: `${color}10`, borderColor: `${color}20` }}>
                      {freq}
                    </span>
                  </div>
                  <p className="commtrain__activity-purpose">{purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
