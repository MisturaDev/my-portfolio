import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-shell">
      <p className="eyebrow">About</p>
      <h2 className="section-title">Building products that feel reliable, intentional and ready for real users.</h2>
      <div className="about-copy">
        <p className="section-lead">
          I&apos;m a Frontend and Mobile Developer specializing in cross-platform applications for iOS, Android and the web. I focus on solving real user problems through thoughtful engineering, from interface architecture and planning to launch-ready execution.
        </p>
        <p className="section-lead">
          My core stack is React Native for mobile and React/Next.js for the web. I build scalable, API-driven applications with clean execution and smooth user experiences.
        </p>
        <p className="section-lead">
          I care about reducing friction at every layer, from the way a flow is structured to how fast it loads. The goal is always a product that earns user trust quickly.
        </p>
      </div>
    </section>
  );
};

export default About;
