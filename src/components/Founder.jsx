import { useEffect } from 'react';
import { Mail, Calendar, Users } from 'lucide-react';
import './Founder.css';

function loadCal() {
  if (window.Cal) return;
  /* eslint-disable */
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal, ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const ns = ar[1];
        api.q = api.q || [];
        if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['-', ns, api]); }
        else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
  /* eslint-enable */
  window.Cal('init', { origin: 'https://cal.com' });
  window.Cal('ui', {
    theme: 'dark',
    styles: { branding: { brandColor: '#e8192c' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

export default function Founder() {
  useEffect(() => { loadCal(); }, []);

  return (
    <section className="founder" id="founder">
      <div className="container">
        <div className="founder__inner">
          <div className="founder__left">
            <div className="founder__avatar-wrap">
              
              <div className="founder__avatar-ring founder__avatar-ring--1" />
              <div className="founder__avatar-ring founder__avatar-ring--2" />
            </div>
            <div className="founder__identity">
              <span className="founder__sig-name">Nitheesh Prabhu</span>
              <span className="founder__sig-role">Founder &amp; CEO, Zeta Nextmind</span>
            </div>
          </div>

          <div className="founder__content">
            <div className="section-tag">From the Founder</div>
            <h2 className="founder__headline">
              Have a question? Write directly to <span>Nitheesh Prabhu</span>
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

            <div className="founder__booking">
              <button
                data-cal-link="zetacorpsolutions/student-course-career-mentorship"
                data-cal-config='{"layout":"month_view"}'
                className="founder__book-btn founder__book-btn--primary"
              >
                <Calendar size={15} />
                Book a Mentorship Call
              </button>
              <button
                data-cal-link="zetacorpsolutions/academic-college-partnership-discussion"
                data-cal-config='{"layout":"month_view"}'
                className="founder__book-btn founder__book-btn--outline"
              >
                <Users size={15} />
                Partnership Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
