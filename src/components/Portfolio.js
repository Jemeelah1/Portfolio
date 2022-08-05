import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import bs from "../img/bs-card.png";
import ch from "../img/ch-card.png";
import cs from "../img/cs-card.png";
import bssmall from "../img/bs-card-sm.png";
import chsmall from "../img/ch-card-sm.png";
import cssmall from "../img/cs-card-sm.png";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="portfolio"
      >
        <Container>
          {/* Company logo */}
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            className="mt-3"
            id="portfolio-h3"
            style={{ fontFamily: "Poppins" }}
          >
            portfolio
          </h3>
          <h4
            data-aos="fade-right"
            data-aos-duration="1500"
            className="py-5"
            id="portfolio-h4"
            style={{ fontFamily: "Poppins" }}
          >
            projects
          </h4>

          <Card
            data-aos="fade-right"
            data-aos-duration="1500"
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
            data-aos="fade-right"
            data-aos-duration="1500"
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
            data-aos="fade-right"
            data-aos-duration="1500"
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

          <Card
            className="bg-dark text-white d-content d-md-none"
            id="portfolio-cd"
          >
            <Card.Img src={bssmall} alt="Card image" id="portfolio-img" />
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
                href="https://www.behance.net/gallery/134881851/BlueSense-Website-UI-Design"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3 mx-2"
              >
                View UI Design
              </Button>
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white mt-4 d-content d-md-none"
            id="portfolio-cd"
          >
            <Card.Img src={cssmall} alt="Card image" id="portfolio-img" />
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
            </Card.ImgOverlay>
          </Card>

          <Card
            className="bg-dark text-white mt-4 d-content d-md-none"
            id="portfolio-cd"
          >
            <Card.Img
              variant="top"
              src={chsmall}
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
                href="https://www.behance.net/gallery/142710363/Personal-Site-Single-Pager"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3 mx-2"
              >
                View UI Design
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Portfolio;
