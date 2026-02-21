import React from "react";
import "./Projects.css";

import citizenshipImg from "../assets/citizenship.jpg";
import saverImg from "../assets/saver.jpeg";
import walletImg from "../assets/dashboard.jpg";
import landingImg from "../assets/Landing.png";
import eshopperImg from "../assets/home.png";
import githubIcon from "../assets/github.png";
import arrowIcon from "../assets/arrow.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Some of My Works</p>
      <h1 className="title">Projects</h1>

      <div className="projects-container">

        {/* Citizenship App */}
        <div className="project-card">
          <img src={citizenshipImg} alt="Citizenship App" />
          <h3>Citizenship Reporting App</h3>
          <p>A mobile app for citizens to report issues using Cordova and App.js, integrated with WordPress backend and Firebase notifications.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/Citizens-Reporting-App-Cordova" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
          </div>
        </div>

        {/* Home Saver App */}
        <div className="project-card">
          <img src={saverImg} alt="Home Saver App" />
          <h3>Home Saver App</h3>
          <p>A smart home energy monitoring app that visualizes usage, sets limits and sends alerts to help users save energy in real time.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/bright-home-saver.git" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
            <a href="https://bright-home-saver.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Wallet App */}
        <div className="project-card">
          <img src={walletImg} alt="Wallet App" />
          <h3>Wallet App</h3>
          <p>A cross-platform mobile wallet built with React Native and Expo, using Firebase to manage and sync user data.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/wallet-app-react-native.git" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
          </div>
        </div>

        {/* eShopper Website */}
        <div className="project-card">
          <img src={eshopperImg} alt="eShopper Website" />
          <h3>eShopper Website</h3>
          <p>StyleHub is a fashion marketplace where users can register, browse products and sell their own items.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/stylehub-app-react.git" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
            <a href="https://stylehub-app-react.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* JobTracker App */}
        <div className="project-card">
          <img src={landingImg} alt="JobTracker App" />
          <h3>JobTracker App</h3>
          <p>A React web app to organize and monitor job applications efficiently.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/Job-Tracker.git" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
            <a href="https://job-tracker-wine-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

      </div>

      {/* Arrow to Contact Section */}
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() =>
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }
      />
    </section>
  );
};

export default Projects;