import React from 'react';
import './Profile.css';

import profilePic from '../assets/Prof.jpeg';
import resumePDF from '../assets/resume.pdf';

const highlights = [
  { label: 'Cross-platform mobile development' },
  { label: 'Product-minded frontend engineering' },
  { label: 'Scalable web and API integration' },
];

const Profile = () => {
  return (
    <section id="profile" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Frontend & Mobile Developer</p>
          <h1>Building digital products that feel refined, fast and production-ready.</h1>
          <p className="hero-description">
            Cross-platform developer specializing in web, iOS and Android applications, focused on transforming complex requirements into seamless user experiences with clean execution, intuitive interaction design and interfaces that earn user trust quickly.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">View My Work</a>
            <a className="btn btn-ghost" href={resumePDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>

          <div className="hero-points" role="list" aria-label="Highlights">
            {highlights.map((item) => (
              <article key={item.label} role="listitem" className="hero-point">
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-profile-card" aria-label="Profile summary">
          <img src={profilePic} alt="Mistura portrait" className="profile-pic" />
          <div>
            <h2>Mistura Ishola</h2>
            <p>Frontend & Mobile Developer</p>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/mistura-ishola" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/MisturaDev" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:misturaaaishola@gmail.com">Email</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Profile;
