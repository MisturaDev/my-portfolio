import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="logo">
          <span className="logo-mark">M</span>
          <span className="logo-text">
            <span className="logo-bracket">&lt;</span>
            Mistura
            <span className="logo-bracket">/&gt;</span>
          </span>
        </div>
      </header>
      <main className="landing-grid">
        {/* Left Column: Welcome, Bio, Stats */}
        <section className="landing-left-column">
          <h1 className="landing-name">Mistura Ishola</h1>
          <p className="landing-subtitle">Frontend & Mobile Developer</p>

          <p className="landing-description">
            Building digital products for iOS, Android and the Web. Focused on clean engineering, smooth interactions, and user-centered design.
          </p>

          <div className="landing-actions">
            <Link to="/portfolio" className="landing-btn">
              Enter Portfolio
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <div className="landing-metrics">
            <div className="metric-item">
              <span className="metric-num">10+</span>
              <span className="metric-label">Shipped</span>
            </div>
            <div className="metric-item">
              <span className="metric-num">Live</span>
              <span className="metric-label">App &amp; Play Store</span>
            </div>
            <div className="metric-item">
              <span className="metric-num">100%</span>
              <span className="metric-label">Delivery</span>
            </div>
          </div>
        </section>

        {/* Right Column: Visual Mockups & Floating tech tags */}
        <section className="landing-right-column" aria-hidden="true">
          <div className="mockup-scene">
            {/* Browser Mockup (Back Layer) */}
            <div className="browser-frame-wrapper">
              <div className="browser-mockup-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address">nobzo-admin.dev</div>
              </div>
              <div className="browser-mockup-body">
                <img
                  src="/nobzo-dashboard.png"
                  alt="Nobzo Admin Dashboard Preview"
                  className="mockup-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* iPhone Mockup (Front Overlapping Layer) */}
            <div className="phone-frame-wrapper">
              <div className="phone-mockup-notch"></div>
              <div className="phone-mockup-screen">
                <img
                  src="/nobzo-1.jpeg"
                  alt="Nobzo mobile application screen"
                  className="mockup-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="tech-badge badge-1">React Native</div>
            <div className="tech-badge badge-2">Next.js</div>
            <div className="tech-badge badge-3">TypeScript</div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        © {new Date().getFullYear()} Mistura Ishola. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
