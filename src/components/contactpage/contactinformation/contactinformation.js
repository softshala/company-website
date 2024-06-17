import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <Container fluid className="contact-info">
      <Row>
        <Col xs={12} md={4} className="contact-info-cont">
          <p>Call Us 24X7</p>
          <p>+91 90796 71033</p>
        </Col>

        <Col xs={12} md={4} className="contact-info-cont">
          <p>Write Us</p>
          <p>sales@softshala.com</p>
        </Col>
        <Col xs={12} md={4} className="contact-info-cont">
          <p>Main Office</p>
          <p>132, Shree Ram Vihar, Jagatpura, Jaipur Rajasthan</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
