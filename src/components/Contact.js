import React, { useState } from "react";
import {
  Button,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasTitle,
  OffcanvasHeader,
  ListGroup,
} from "react-bootstrap";
import {
  Download,
  Envelope,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import me from "../img/myImg.jpg";
import cv from "../downloads/Jemila-Ibrahim.PDF";

function Contact({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="contact"
        // style={{backgroundColor:"#1E1E1E"}}
      >
        <Container>
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            className="mt-3"
            id="portfolio-h3"
            style={{ fontFamily: "Poppins" }}
          >
            contact
          </h3>
          <div className="py-5 text-center" style={{ fontFamily: "Poppins" }}>
            <h4 id="portfolio-h4" data-aos="fade-up" data-aos-duration="1500">
              let's get in touch
            </h4>
            <p
              className="py-3 fw-light"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Have any questions or feedback and want to reach out to me, click
              on the button below
              <br /> and message me on any of the social media platforms you
              find
            </p>
            <Button
              data-aos="fade-up"
              data-aos-duration="1500"
              variant="primary"
              onClick={toggleShow}
              className="me-2"
            >
              View Socials
            </Button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              style={{ fontFamily: "Poppins" }}
            >
              <OffcanvasHeader closeButton>
                <OffcanvasTitle>Connect with me</OffcanvasTitle>
              </OffcanvasHeader>
              <OffcanvasBody>
                <img
                  className="img-fluid"
                  id="contact-img"
                  src={me}
                  alt=""
                  style={{ borderRadius: "16px" }}
                ></img>
                <h5 className="py-3">Jemila Ibrahim D.</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Linkedin className="fs-4" />
                    <span>
                      <a
                        href="https://www.linkedin.com/in/jemila-ibrahim-dotto/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Connect with me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Github className="fs-4" />
                    <span>
                      <a
                        href="https://github.com/Jemeelah1"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Follow me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Instagram className="fs-4" />
                    <span>
                      <a
                        href="https://www.instagram.com/jemeelah1/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Follow me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Twitter className="fs-4" />
                    <span>
                      <a
                        href="https://twitter.com/Jemeelah_1"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Follow me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Whatsapp className="fs-4" />
                    <span>
                      <a
                        href="https://wa.me/2347030168578"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Message me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Envelope className="fs-4" />
                    <span>
                      <a
                        href="mailto:jemiladotto@gmail.com"
                        style={{ textDecoration: "none" }}
                      >
                        Mail me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Download className="fs-4" />
                    <span>
                      <a
                        href={cv}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Download CV
                      </a>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </OffcanvasBody>
            </Offcanvas>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
