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
  Behance,
  Envelope,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import me from "../img/IMG_3008.jpg";

function Contact({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="contact"
      >
        <Container>
          <h3
            className="mt-3"
            id="portfolio-h3"
            style={{ fontFamily: "Poppins" }}
          >
            contact
          </h3>
          <div className="py-5 text-center" style={{ fontFamily: "Poppins" }}>
            <h4 id="portfolio-h4">lets get in touch</h4>
            <p className="py-3 ">
              Have any questions or feedback and want to reach out to me, click
              on the button below
              <br /> and message me on any of the social media platforms you
              find
            </p>
            <Button variant="primary" onClick={toggleShow} className="me-2">
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
                <h5 className="py-3">Kolawole Ayoola</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Linkedin className="fs-4" />
                    <span>
                      <a
                        href="https://www.linkedin.com/in/kolawole-ayoola-264118186/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Connect with me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Behance className="fs-4" />
                    <span>
                      <a
                        href="https://www.behance.net/kolawolejosh"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Follow me
                      </a>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <Github className="fs-4" />
                    <span>
                      <a
                        href="https://github.com/Kolajosh"
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
                        href="https://www.instagram.com/josh_kolawole/?hl=en"
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
                        href="https://twitter.com/josh_kolawole"
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
                        href="https://wa.me/2349076009850"
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
                        href="mailto:kjosh344@gmail.com"
                        style={{ textDecoration: "none" }}
                      >
                        Mail me
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
