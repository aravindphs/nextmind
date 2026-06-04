import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading">
      <div className="loading__rings">
        <div className="loading__ring loading__ring--outer" />
        <div className="loading__ring loading__ring--inner" />
        <div className="loading__monogram">ZN</div>
      </div>

      <div className="loading__text">
        <div className="loading__logo">
          <span className="loading__logo-zeta">Zeta</span>
          <span className="loading__logo-next">Next</span>
          <span className="loading__logo-mind">mind</span>
        </div>
        <p className="loading__tagline">AI-Integrated Education</p>
      </div>

      <div className="loading__progress-wrap">
        <div className="loading__progress" />
      </div>
    </div>
  );
}
