import React from "react";
import "./Contact.css";

import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get In Touch</p>
      <h1 className="title">Contact</h1>

      <div className="contact-container">
        <div className="contact-card">
          <img src={emailIcon} alt="Email" className="icon" />
          <h3>Email</h3>
          <p>misturaaaishola@gmail.com</p>
        </div>

        <div className="contact-card">
          <img src={phoneIcon} alt="Phone" className="icon" />
          <h3>Phone</h3>
          <p>+234 808 120 2521</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
