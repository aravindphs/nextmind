import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '70vh', gap: 20,
          padding: 32, textAlign: 'center', fontFamily: 'Inter, sans-serif',
        }}>
          <h2 style={{ color: '#e8192c', fontFamily: 'Sora, sans-serif', fontSize: 28 }}>
            Something went wrong
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 400 }}>
            An unexpected error occurred. Please refresh the page to try again.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              className="btn-primary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
            <Link to="/" className="btn-outline" onClick={() => this.setState({ hasError: false })}>
              Go Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
