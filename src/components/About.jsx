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
          I work extensively with React Native and modern frontend technologies like React and Next.js, building scalable, API-driven applications with clean execution and smooth user experiences.
        </p>
        <p className="section-lead">
          I focus on user-first problem solving, translating product goals into intuitive flows that reduce friction and improve adoption across platforms.
        </p>
        <p className="section-lead">
          I&apos;m constantly learning and improving, staying aligned with modern development practices to build better, faster and more reliable products.
        </p>
      </div>
    </section>
  );
};

export default About;
