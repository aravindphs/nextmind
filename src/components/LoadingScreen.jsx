import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading">
      <div className="loading__rings">
        <div className="loading__ring loading__ring--outer" />
        <div className="loading__ring loading__ring--inner" />
        <div className="loading__center">
          <img src="/logo.svg" alt="Zeta Nextmind" className="loading__logo-img" />
        </div>
      </div>

      <p className="loading__tagline">AI-Integrated Education</p>

      <div className="loading__progress-wrap">
        <div className="loading__progress" />
      </div>
    </div>
  );
}
