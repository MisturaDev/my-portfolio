import React from 'react';
import './About.css';

import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';

const About = () => {
  const scrollToExperience = () => {
    const target = document.getElementById('experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">

        {/* About Details */}
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Frontend & Mobile Development | 2+ years hands-on experience</p>
            </div>

            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                 HND Computer Science <br />
                 Advanced Frontend & Mobile App Development Certifications
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
              Frontend and mobile app developer with experience building responsive web and mobile applications using React, React Native, Node.js and modern web technologies.
              <br /><br />
              I enjoy solving problems, learning new technologies and contributing to impactful projects. My goal is to continue growing as a full-stack developer and deliver high-quality, user-focused digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Arrow to Experience Section */}
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToExperience}
      />
    </section>
  );
};

export default About;
