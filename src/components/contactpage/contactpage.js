import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import ContactInfo from "./ContactInfo";
import ContactInfo from "./contactinformation/contactinformation";

import ContactForm from "./contactForm/contactForm";
import "./contactpage.css";



const ContactPage = () => {
  return (
    <Container fluid className="contact-page">
      <Row className="contact-page-row">
        <div className="contact-page-header">
          <h2>Need Help?</h2>
          <p>Contact VediSphere for sales and support</p>
        </div>
      </Row>
      <Row>
        <div className="contact-details">
          <ContactInfo />
        </div>
      </Row>
      <Row>
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <ContactForm />
        </div>
      </Row>
    </Container>
  );
};

export default ContactPage;
