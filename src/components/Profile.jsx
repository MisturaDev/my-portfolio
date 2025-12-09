import React from "react";
import "./Profile.css";

import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/resume.pdf";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

const Profile = () => {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Mistura Ishola" className="profile-pic" />
        </div>

        {/* Profile Text */}
        <div className="profile-text">
          <p>Hello, I'm</p>
          <h1>Mistura Ishola</h1>
          <p>Frontend & Mobile App Developer</p>

          <div className="btn-container">
            <button
              className="btn btn-primary"
              onClick={() => window.open(resumePDF)}
            >
              Download CV
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Info
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/mistura-ishola")
              }
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="icon"
              onClick={() => window.open("https://github.com/MisturaDev")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
