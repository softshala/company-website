import React from "react";
import "./project.css";

import { Col, Container, Row, Card } from "react-bootstrap";

const Project = ({ name, details, description }) => {
  return (
    <Card className="project-row-card ">
      <Card.Body>
        <Card.Title className="project-name">{name}</Card.Title>
        <Card.Text className="project-details">{details}</Card.Text>
        <Card.Text className="project-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
