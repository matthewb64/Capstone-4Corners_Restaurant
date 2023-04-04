import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import './css/AboutPageMainTemplate.css';

function AboutPageMainTemplate() {
  return (
    <main className="about-main">
      <div className="about-us-image-wrap">
        <div className="about-us-image">
          <div className="main-logo-wrap" style={{ marginTop: "5%" }}>
            <Link to={"/"}>
              <img src="logo192.png" />
            </Link>
          </div>
          <img src="images/restaurant.jfif" />
          <div className="about-us-image-label">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="about-us-info-wrap">
        <Container>
          <Row xxl={'3'} xl={'3'} lg={'3'} md={'1'} sm={'1'} xs={'1'}>
            <Col>
              <div className="about-us-email">
                <h3>Our Email: </h3>
                <h4>info@gmail.com</h4>
              </div>
            </Col>
            <Col>
              <div className="about-us-phone">
                <h3>Contact Us: </h3>
                <h4>555 555 5555 </h4>
              </div>
            </Col>
            <Col>
              <div className="about-us-address">
                <h3>Location: </h3>
                <h4>160 Kendal Ave, Toronto ON M5R 1M3 </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default AboutPageMainTemplate;
