import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '70vh', gap: 20,
      padding: 32, textAlign: 'center', fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        fontSize: 'clamp(80px, 15vw, 140px)', fontWeight: 900, lineHeight: 1,
        background: 'linear-gradient(135deg, #e8192c, #c0111f)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        fontFamily: 'Poppins, sans-serif',
      }}>
        404
      </div>
      <h2 style={{ color: 'var(--text-primary)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 4vw, 28px)', margin: 0 }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 420, lineHeight: 1.7 }}>
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary" style={{ marginTop: 8 }}>
        Back to Home
      </Link>
    </div>
  );
}
