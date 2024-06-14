import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ImageZoom from "../ImageZoom/ImageZoom";

import Consultancy from "../consultacy/consultacy";

import Service from "../service/service";
import salesforeMeetingImage from "../../Assets/Projects/salesforce_meeting.png";

import ContactNow from "../Contactnow/contactnow";
import BottomSection from "../bottomsection/bottomsection";
import "./home.css";
function Home() {
  return (
    <Container fluid className="home-container-fluid">
      <Row>
        <ImageZoom image={salesforeMeetingImage} />
        <Consultancy></Consultancy>
        <Service></Service>
        <ContactNow></ContactNow>
        <BottomSection></BottomSection>
      </Row>
    </Container>
  );
}

export default Home;
