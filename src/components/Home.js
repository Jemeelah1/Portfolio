import React, { useEffect } from "react";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import kj from "../img/kj.png";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar className="py-2 px-3" sticky="top" expand="md" id="navbar-bg">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            Kolawole J.
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center  flex-grow-1 ">
              <Nav.Link className="mx-1 mx-md-4" href="#about">
                about
              </Nav.Link>
              <Nav.Link className="mx-1 mx-md-4" href="#experience">
                experience
              </Nav.Link>
              <Nav.Link className="mx-1 mx-md-4" href="#portfolio">
                portfolio
              </Nav.Link>
              <Nav.Link className="mx-1 mx-md-4" href="#contact">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}

      <section className="py-4 px-3" id="home">
        <Container>
          <Row
            className="align-items-center justify-content-md-center"
            id="row-text"
          >
            <Col
              data-aos="fade-right"
              data-aos-duration="1500"
              className="align-items-center text-start "
            >
              <span className="fw-bold fs-1">designer</span>
              <p className="fs-5">
                I love designing and prototyping beautiful and functional user
                experiences.
              </p>
            </Col>
            <Col data-aos="fadeIn" data-aos-duration="1500" lg="7">
              <img className="img-fluid py-3" id="kj-img" src={kj} alt=""></img>
            </Col>
            <Col
              data-aos="fade-left"
              data-aos-duration="1500"
              className="align-items-center text-end"
            >
              <span className="fw-bold fs-1">{"<dev>"}</span>
              <p className="fs-5">
                Frontend developer who loves transforming elegant designs into
                usable products.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
