import { FiInstagram, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiTwitter, href: '#', label: 'Twitter/X' },
];

export default function Footer() {
  const handleLink = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0D0D0D', borderTop: '1px solid #E8192C' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bebas text-2xl" style={{ color: '#E8192C' }}>ZCS</span>
              <span className="text-sm font-medium text-gray-400">ZetaCorp Solutions</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#606060' }}>
              Your Brand. Their Search. Our Science.
            </p>
            <p className="mt-4 text-xs" style={{ color: '#444' }}>
              © 2025 ZetaCorp Solutions Pvt. Ltd.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#555' }}>Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: '#606060' }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#555' }}>Follow Us</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  style={{ background: '#1A1A1A', color: '#555' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#E8192C'; e.currentTarget.style.borderColor = 'rgba(232,25,44,0.3)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-5 sm:px-8 py-4 text-center text-xs"
        style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#444' }}
      >
        Designed & Built by ZetaCorp Solutions
      </div>
    </footer>
  );
}
