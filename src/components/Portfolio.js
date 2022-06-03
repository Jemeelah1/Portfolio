import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import bs from "../img/bs-card.png";
import ch from "../img/ch-card.png";
import cs from "../img/cs-card.png";
import bssmall from "../img/bs-card-sm.png";
import chsmall from "../img/ch-card-sm.png";
import cssmall from "../img/cs-card-sm.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="portfolio"
      >
        <Container>
          {/* Company logo */}
          <h3 className="mt-3" id="portfolio-h3" style={{fontFamily: 'Poppins'}}>
            portfolio
          </h3>
          <h4 className="py-5" id="portfolio-h4" style={{fontFamily: 'Poppins'}}>
            projects
          </h4>

          <Card
            className="bg-dark text-white d-none d-md-block"
            id="portfolio-cd"
          >
            <Card.Img src={bs} alt="Card image" id="portfolio-img" />
            <Card.ImgOverlay className="p-3 m-3 p-lg-3 m-lg-3">
              <Card.Title className="fs-2">BlueSense</Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A website for a business consulting organization that displays
                services provided, <br />a blog part for weekly updates, and a
                case study section. Built with ReactJs
              </Card.Text>
              <Button
                href="https://www.bluesense.co"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Kolajosh/BlueSense"
                target="_blank"
                variant="light"
                className="mx-3 mt-3"
                size="md"
              >
                View Source Code
              </Button>
              <Button
                href="https://www.behance.net/gallery/134881851/BlueSense-Website-UI-Design"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View UI Design
              </Button>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white mt-4 d-none d-md-block"
            id="portfolio-cd"
          >
            <Card.Img src={cs} alt="Card image" id="portfolio-img" />
            <Card.ImgOverlay className="p-3 m-3 p-lg-3 m-lg-3">
              <Card.Title className="fs-2">Chrisason Fire</Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A website for a fire consulting organization that displays
                services provided, and products. Built with ReactJs.
              </Card.Text>
              <Button
                href="https://www.chrisasonfire.com"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Kolajosh/chrisason-fire"
                target="_blank"
                variant="light"
                className="mx-3 mt-3"
                size="md"
              >
                View Source Code
              </Button>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white mt-4 d-none d-md-block"
            id="portfolio-cd"
          >
            <Card.Img
              variant="top"
              src={ch}
              alt="Card image"
              id="portfolio-img"
            />
            <Card.ImgOverlay className="p-3 m-3 p-lg-3 m-lg-3">
              <Card.Title className="fs-2">
                Christian Reuben - Personal SIte
              </Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A personal site that has a Calendly widget installed. Built with
                ReactJs
              </Card.Text>
              <Button
                href="https://www.christianreuben.com"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Kolajosh/chrsitian-site"
                target="_blank"
                variant="light"
                className="mx-3 mt-3"
                size="md"
              >
                View Source Code
              </Button>
              <Button
                href="https://www.behance.net/gallery/142710363/Personal-Site-Single-Pager"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View UI Design
              </Button>
            </Card.ImgOverlay>
          </Card>

          <Row className="g-4 align-items-center justify-content-center d-initial d-md-none">
            <Col>
              <Card 
                style={{
                  width: "18rem",
                  fontFamily: "Poppins",
                  borderRadius: "16px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={bssmall}
                  style={{ borderRadius: "16px 16px 0px 0px" }}
                />
                <Card.Body>
                  <Card.Title>BlueSense</Card.Title>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3"
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3 mx-1"
                  >
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  fontFamily: "Poppins",
                  borderRadius: "16px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={cssmall}
                  style={{ borderRadius: "16px 16px 0px 0px" }}
                />
                <Card.Body>
                  <Card.Title>Chrisason Fire</Card.Title>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3"
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3 mx-1"
                  >
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  fontFamily: "Poppins",
                  borderRadius: "16px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={chsmall}
                  style={{ borderRadius: "16px 16px 0px 0px" }}
                />
                <Card.Body>
                  <Card.Title> Christian Reuben - Personal Site</Card.Title>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3"
                  >
                    View Live
                  </Button>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="mt-3 mx-1"
                  >
                    Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Portfolio;
