import React from "react";
import "./LandingStyles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-divider" />
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Drive Detect</span>
          <span className="footer-tagline">AI for Safer Roads</span>
        </div>
        <nav className="footer-nav">
          <a href="#" aria-label="Home">Home</a>
          <a href="#about" aria-label="About">About</a>
          <a href="#features" aria-label="Features">Features</a>
          <a href="https://github.com/adityamangal1/Drive-Detect" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/adityamangal1/Drive-Detect" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02A9.18 9.18 0 0112 6.84c.84.004 1.68.11 2.47.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#64748B"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
