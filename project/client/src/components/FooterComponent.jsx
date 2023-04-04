import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

import './css/FooterComponent.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-navbar-wrap">
          <Row lg={2} md={1} sm={1} xs={1}>
            <Col>
              <Link to={"/"}>Home</Link>
            </Col>
            <Col>
              <Link to={"/about"}>About</Link>
            </Col>
            <Col>
              <Link to={"/services"}>Services</Link>
            </Col>
            <Col>
              <Link to={"/reservation"}>Reservation</Link>
            </Col>
            <Col>
              <Link to={"/account"}>Account</Link>
            </Col>
          </Row>
        </div>
        <div className="logo-social-wrap">
          <Row lg={1} md={1} sm={1} xs={1}>
            <Col>
              <Link to={"/"} className="logo">
                <img src="/logo192.png" />
              </Link>
            </Col>
            <Col>
              <div className="social-wrap">
                <Link to={"https://linkedin.com"}>
                  <i className="bi bi-linkedin" />
                </Link>
                <Link to={"https://facebook.com"}>
                  <i className="bi bi-facebook" />
                </Link>
                <Link to={"https://twitter.com"}>
                  <i className="bi bi-twitter" />
                </Link>
                <Link to={"https://instagram.com"}>
                  <i className="bi bi-instagram" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="info-wrap">
          <Row lg={1} md={1} sm={1} xs={1}>
            <Col>
              <div className="info-mail-wrap">
                <div className="info-mail">
                  <i className="bi bi-envelope"></i> info@gmail.com
                </div>
              </div>
            </Col>
            <Col>
              <div className="info-phone-wrap">
                <div className="info-phone">
                  <i className="bi bi-telephone"></i> 000 000 0000
                </div>
              </div>
            </Col>
            <Col>
              <div className="info-street-wrap">
                <div className="info-street">
                  <i className="bi bi-house"></i> Toronto, CA
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default FooterComponent;
