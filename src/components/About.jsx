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
              <p>2+ years <br />Frontend & Mobile App Development</p>
            </div>

            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>HND Computer Science</p>
            </div>
          </div>

          <div className="text-container">
            <p>
              I am a passionate frontend and mobile app developer with experience in building responsive web and mobile applications using React, React Native, Cordova and App.js. I enjoy solving problems, learning new technologies and contributing to projects that make a difference. My goal is to continue improving my skills and create high-quality digital experiences.
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
