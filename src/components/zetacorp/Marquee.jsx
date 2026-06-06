const items = [
  'Social Media Marketing',
  'SEO',
  'Paid Ads',
  'Branding',
  'Web Design',
  'Content Strategy',
  'Meta Ads',
  'Google Ads',
  'Email Marketing',
  'Analytics',
];

const Ticker = () => (
  <div className="flex items-center gap-0 shrink-0">
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-6 whitespace-nowrap px-6">
        <span className="text-sm font-medium tracking-widest uppercase" style={{ color: '#F0F0F0' }}>
          {item}
        </span>
        <span className="text-base font-bold" style={{ color: '#E8192C' }}>•</span>
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4 relative"
      style={{
        background: '#141414',
        borderTop: '1px solid rgba(232,25,44,0.15)',
        borderBottom: '1px solid rgba(232,25,44,0.15)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #141414, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #141414, transparent)' }} />

      <div className="marquee-track flex w-max">
        <Ticker />
        <Ticker />
      </div>
    </div>
  );
}
