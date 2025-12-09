import React from "react";
import "./Projects.css";

import citizenshipImg from "../assets/citizenship.jpg";
import weatherImg from "../assets/weather.jpg";
import walletImg from "../assets/dashboard.jpg";
import eshopperImg from "../assets/stylehub.png";
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
          <p>A mobile app for citizens to report issues built using Cordova and App.js with WordPress backend and Firebase notifications.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/Citizens-Reporting-App-Cordova" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
          </div>
        </div>

        {/* Weather App */}
        <div className="project-card">
          <img src={weatherImg} alt="Weather App" />
          <h3>Weather App</h3>
          <p>A cross-platform mobile weather application built with React Native and Expo, providing real-time forecasts using OpenWeather API.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/react-native-weather-app" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
          </div>
        </div>

        {/* Wallet App */}
        <div className="project-card">
          <img src={walletImg} alt="Wallet App" />
          <h3>Wallet App</h3>
          <p>A cross-platform mobile wallet app built with React Native and Expo, Integrating Firebase as backend for data management.</p>
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
          <p>A Lovable.dev prototype of StyleHub, a fashion marketplace where users can register, explore fashion items and sell their own products.</p>
          <div className="project-links">
            <a href="https://github.com/MisturaDev/outfit-oracle-dash.git" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Link" className="icon" />
            </a>
            <a href="https://outfit-oracle-dash.lovable.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
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
