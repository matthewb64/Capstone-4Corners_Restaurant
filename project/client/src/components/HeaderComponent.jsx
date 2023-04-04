import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './css/HeaderComponent.css';

function HeaderComponent() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/reservation">Reservation</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Container className="navbar-collapse-container">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/account">Account</Nav.Link>
                <Nav.Link href="https://www.apple.com/app-store/">
                  <i className="bi bi-apple" /> iPhone
                </Nav.Link>
                <Nav.Link href="https://play.google.com/">
                  <i className="bi bi-android2" /> Android
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderComponent;
