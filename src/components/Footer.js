import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="py-3"  style={{backgroundColor:"#eaeaeac9"}} >
        <Container>
          <Nav className="justify-content-center">
            <Nav.Link
              className="mx-1 mx-md-4"
              href="#about"
              style={{ color: "#4d4d4d" }}
            >
              about
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="#experience"
              style={{ color: "#4d4d4d" }}
            >
              experience
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="#portfolio"
              style={{ color: "#4d4d4d" }}
            >
              portfolio
            </Nav.Link>
            <Nav.Link
              className="mx-1 mx-md-4"
              href="#contact"
              style={{ color: "#4d4d4d" }}
            >
              contact
            </Nav.Link>
          </Nav>
          <p className="text-center py-3">Built by Kolawole Ayoola</p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
