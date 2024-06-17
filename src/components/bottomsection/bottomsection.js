import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import companyLogo from "../../Assets/Projects/company_logo.png";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./bottomsection.css";
import { Outlet, Link } from "react-router-dom";

function BottomSection() {
  return (
    <Container fluid className="bottom-section-container">
      <Row className="bottom-section-row">
        <Col className="bottom-section-col-1" xs={12} lg={3}>
          <Row className="company-logo-image-row">
            <img src={companyLogo} className="company-logo-image" alt="brand" />
          </Row>
          <Row className="text-icon-row">
            <p>
              SoftShala Technologies prides itself on its commitment to
              excellence, ensuring that every client and student receives
              top-notch service and education.
            </p>
          </Row>
          <Row className="icon-row">
            {/* <Col>
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon"> </FaFacebook>
              </a>
            </Col> */}
            <Col>
              <a
                href="https://www.linkedin.com/company/salesforce-counsellor/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon"> </FaLinkedin>
              </a>
            </Col>
            <Col>
              <a>
                <FaTwitter className="social-icon"></FaTwitter>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.instagram.com/softshala/?hl=en"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon"></FaInstagram>
              </a>
            </Col>
          </Row>
        </Col>

        <Col className="bottom-section-col-2" xs={12} lg={3}>
          <Row className="bottom-section-row-2">
            <h1 className="service-h1">Services</h1>
            <div className="col1-div">
              <h1>Salesforce Consulting</h1>
              <h1>Salesforce Development</h1>
              <h1>React js Development</h1>
              <h1>SalesForce Managed Services</h1>
              <h1>SalesForce Integration Service</h1>
              <h1>Hire a Resource</h1>
              <h1>CRM Implementation</h1>
            </div>
          </Row>
        </Col>

        <Col className="bottom-section-col-3" xs={12} lg={3}>
          <Row className="bottom-section-row-3">
            <h1>Quick Links</h1>
            <div className="col1-div">
              <Link to="/home" className="col-3-text">
                Home
              </Link>
              <Link to="/" className="col-3-text">
                Training
              </Link>
              <Link to="/react-js-development" className="col-3-text">
                Service
              </Link>
              <Link to="/salesforce-managed-services" className="col-3-text">
                About
              </Link>
              <Link to="/salesforce-integration-service" className="col-3-text">
                Contact
              </Link>
            </div>
          </Row>
        </Col>
        <Col className="bottom-section-col-4" xs={12} lg={3}>
          <Row className="bottom-section-row-4">
            <h1>Get in Touch</h1>
            <p>132, Shree Ram Vihar, Jagatpura, Jaipur,</p>
            <p>Rajasthan, India, 302019</p>
            <p>
              Email:{" "}
              <a href="mailto:sales@softshala.com">sales@softshala.com</a>
            </p>
            <p>
              Phone: <a href="tel:+91 9079671033">+91 90796 71033</a>
            </p>
            <p>Hours: Mon-Fri 9:00AM - 7:30PM</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomSection;
