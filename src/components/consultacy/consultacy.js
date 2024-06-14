import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTools,
  FaRobot,
  FaClipboardList,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Importing icons
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./consultacy.css"; // Import custom CSS

function Consultancy() {
  return (
    <Container fluid className="consultancy-container-section">
      <Row className="row-section">
        <Col md={6}>
          <div className="center-text">
            <h1>SoftShala Technologies</h1>
            <p>
              As a trusted Salesforce consulting partner, SoftShala specializes
              in providing cutting-edge solutions to businesses seeking to
              optimize their operations through the Salesforce platform. The
              expert team at works closely with clients to understand their
              unique business requirements and tailors Salesforce
              implementations to enhance productivity, streamline processes, and
              drive overall business success. Whether it's customizing
              Salesforce CRM, implementing Salesforce automation, or integrating
              third-party applications, SoftShala ensures that businesses
              harness the full potential of Salesforce technology.
            </p>
          </div>
        </Col>
        {/* <Col sm={6}>
          <div className="center-text">
            <div className="grid-container">
              <Col className="grid-item" md={12}>
                <FaTools size={50} />
                <h3>Customized Implementations</h3>
              </Col>
              <Col className="grid-item" md={12}>
                <FaRobot size={50} />
                <h3>Automation Expertise</h3>
              </Col>
              <Col className="grid-item" md={12}>
                <FaClipboardList size={50} />
                <h3>Strategic Planning</h3>
              </Col>
              <Col className="grid-item" md={12}>
                <FaChalkboardTeacher size={50} />
                <h3>User Training and Support</h3>
              </Col>
            </div>
          </div>
        </Col> */}

        <Col md={6}>
          <div className="center-text">
            <Row className="grid-container">
              <Col>
                <div className="grid-item">
                  <FaTools size={50} />
                  <h3>Customized Implementations</h3>
                </div>
              </Col>
              <Col>
                <div className="grid-item">
                  <FaRobot size={50} />
                  <h3>Automation Expertise</h3>
                </div>
              </Col>
              <Col>
                <div className="grid-item">
                  <FaClipboardList size={50} />
                  <h3>Strategic Planning</h3>
                </div>
              </Col>
              <Col>
                <div className="grid-item">
                  <FaChalkboardTeacher size={50} />
                  <h3>User Training and Support</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Consultancy;
