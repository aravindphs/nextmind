import { Mail } from 'lucide-react';
import './Founder.css';

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="container">
        <div className="founder__inner">
          <div className="founder__left">
            <div className="founder__avatar-wrap">
              <div className="founder__avatar">AK</div>
              <div className="founder__avatar-ring founder__avatar-ring--1" />
              <div className="founder__avatar-ring founder__avatar-ring--2" />
            </div>
            <div className="founder__identity">
              <span className="founder__sig-name">Aravind Kumar</span>
              <span className="founder__sig-role">Founder &amp; CEO, Zeta Nextmind</span>
            </div>
          </div>

          <div className="founder__content">
            <div className="section-tag">From the Founder</div>
            <h2 className="founder__headline">
              Have a question? Write directly to <span>Aravind Kumar</span>
            </h2>
            <p className="founder__message">
              Every student who walks through our doors carries a dream — to build, to create, and to
              make a mark in the tech world. At Zeta Nextmind, we don&apos;t just teach code; we shape
              engineers who can think, adapt, and lead in an AI-first world. I started this institute
              because I believe world-class technical education should not be a privilege — it should
              be within reach of every passionate learner, regardless of their background.
            </p>
            <p className="founder__message">
              If you have a question that can&apos;t wait, a bold idea you&apos;d like to share, or
              simply need honest guidance about your tech career path — write to me. I personally read
              every message that arrives in my inbox.
            </p>

            <a href="mailto:ceo@zetanextmind.com" className="founder__email">
              <Mail size={18} />
              ceo@zetanextmind.com
            </a>
            <p className="founder__note">
              I personally read and respond to every email. You can expect a reply within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
