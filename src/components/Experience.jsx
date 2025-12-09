import React from "react";
import "./Experience.css"; 
import arrowIcon from "../assets/arrow.png"; 

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills & Experience</h1>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Angular</li>
          </ul>
        </div>

        {/* Mobile */}
        <div className="experience-card">
          <h3>Mobile Development</h3>
          <ul>
            <li>React Native</li>
            <li>Cordova</li>
            <li>Ionic</li>
          </ul>
        </div>

        {/* Backend / Tools */}
        <div className="experience-card">
          <h3>Backend & Tools</h3>
          <ul>
            <li>WordPress REST API</li>
            <li>Firebase</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>

      {/* Arrow to Projects Section */}
      <div className="arrow-container">
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() =>
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
};

export default Experience;
