import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-shell">
      <p className="eyebrow">About</p>
      <h2 className="section-title">Building digital products that are intuitive, scalable, and shipped to production.</h2>
      <div className="about-copy">
        <p className="section-lead">
          I&apos;m a Frontend and Mobile Developer specializing in cross-platform applications across iOS, Android, and the Web. I take digital products from initial architectural planning all the way to live deployment on the App Store and Google Play.
        </p>
        <p className="section-lead">
          My primary stack centers on React Native &amp; Expo for mobile and Next.js/React for the web. Beyond crafting clean, responsive interfaces, I bridge frontend engineering with backend API integrations to deliver seamless, end-to-end user experiences.
        </p>
        <p className="section-lead">
          I care deeply about reducing friction at every layer from intuitive user flows to writing clean, maintainable code. My goal is always to deliver software that earns user trust through speed, stability, and thoughtful design.
        </p>
      </div>
    </section>
  );
};

export default About;
