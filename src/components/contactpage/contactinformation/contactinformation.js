import React from "react";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-item">
        <i className="fas fa-phone-alt"></i>
        <p>Call Us 24X7</p>
        <p>+91 86500 34813</p>
      </div>
      <div className="contact-info-item">
        <i className="fas fa-envelope"></i>
        <p>Write Us</p>
        <p>sales@softshala.com</p>
      </div>
      <div className="contact-info-item">
        <i className="fas fa-map-marker-alt"></i>
        <p>Main Office</p>
        <p>132, Shree Ram Vihar, Jagatpura, Jaipur Rajasthan</p>
      </div>
    </div>
  );
};

export default ContactInfo;
