import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Mistura Ishola</h3>
            <p>
              Frontend & Mobile Developer.
              <br />
              Building reliable, production-ready product experiences.
            </p>

            <div className="footer-socials" aria-label="Social links">
              <a href="https://mistura-ishola.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3.1a15.6 15.6 0 0 0-1-5A8 8 0 0 1 18.9 11ZM12 4.1c.8 1 1.6 3.1 1.9 5.9h-3.8C10.4 7.2 11.2 5.1 12 4.1ZM5.1 13h3.1c.1 2 .5 3.8 1 5a8 8 0 0 1-4.1-5Zm3.1-2H5.1a8 8 0 0 1 4.1-5c-.5 1.2-.9 3-1 5Zm1.9 2h3.8c-.3 2.8-1.1 4.9-1.9 5.9-.8-1-1.6-3.1-1.9-5.9Zm5.7 0h3.1a8 8 0 0 1-4.1 5c.5-1.2.9-3 1-5Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mistura-ishola" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.05a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20 13.2c0-3.1-1.66-4.55-3.88-4.55-1.79 0-2.59.98-3.04 1.67V8.5H9.7V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.04V20H20v-6.8Z" />
                </svg>
              </a>
              <a href="https://github.com/MisturaDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.41-4.04-1.41-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.62-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.32c1.02 0 2.04.14 3 .41 2.3-1.55 3.29-1.23 3.29-1.23.67 1.7.25 2.96.13 3.27.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.61-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul className="footer-links" aria-label="Footer navigation">
              <li><a href="#profile">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact-box" aria-label="Footer contact details">
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href="mailto:misturaaaishola@gmail.com">
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation" fill="none">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="2" />
                    <path d="M5.5 8l6.5 4.5L18.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                misturaaaishola@gmail.com
              </a>
            </div>

            <div className="footer-focus">
              <h4>Current Focus</h4>
              <p>Frontend and mobile opportunities in product-driven teams focused on high-quality implementation.</p>
            </div>
          </div>
        </div>
      </footer>

      <p className="footer-copy">© 2026 Mistura Ishola. All rights reserved.</p>
    </>
  );
};

export default Footer;
