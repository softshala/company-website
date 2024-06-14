import React from "react";
import "./contactTab.css";

const ContactTab = () => {
  return (
    <div className="contact-tab-page">
      <div className="contact-header">
        <h1>Need Help?</h1>
        <p>Contact VdSphere for tailor-made consultancy and solutions</p>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <p>
            Call Us 24x7
            <br />
            +91 85010 34813
          </p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <p>
            Write to Us
            <br />
            sales@softshala.com
          </p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <p>
            Main Office
            <br />
            Rajasthan, India, 302019
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send Your Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactTab;
