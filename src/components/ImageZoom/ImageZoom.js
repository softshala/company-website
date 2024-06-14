import React from "react";
// import Button from "react-bootstrap/Button";
import "./imagezoom.css";
import { Container, Row } from "react-bootstrap";
const ImageZoom = (props) => {
  return (
    <Container fluid className="image-zoom-container ">
      <Row className="zoom-container-row">
        <div className="image-content">
          <h1>We Empowered our client through our Salesforce Expertise</h1>
          <button class="image-content-button">Know More</button>
        </div>
      </Row>
    </Container>
  );
};

export default ImageZoom;
