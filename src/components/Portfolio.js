import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import bs from "../img/bs-card.png";
import ch from "../img/ch-card.png";
import cs from "../img/cs-card.png";
// import bssmall from "../img/bs-card-sm.png";
// import chsmall from "../img/ch-card-sm.png";
// import cssmall from "../img/cs-card-sm.png";
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
              <Card.Title className="fs-2">Study Press</Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A website for a tech tutoring organization that displays
                 tech services provided, <br />a section part for tutors, courses, and a
                gallery section. Built with JavaScript, Bootstrap.
              </Card.Text>
              <Button
                href="https://study-press.netlify.app/"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Jemeelah1/BootstrapAssignment"
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
            <Card.Img src={cs} alt="Card image" id="portfolio-img" />
            <Card.ImgOverlay className="p-3 m-3 p-lg-3 m-lg-3">
              <Card.Title className="fs-2">Registration Form</Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A website that shows a registration form page. Built with HTML and CSS.
              </Card.Text>
              <Button
                href="https://wtf-registration-form.netlify.app"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Jemeelah1/Registration-Form_WTF"
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
                Team Intel Portfolio
              </Card.Title>
              <Card.Text className="fs-5 lead d-none d-lg-block">
                A team portfolio on some our collective team projects done during the Fellowship at WomenTechSters Fellowship. Built with
                ReactJs.
              </Card.Text>
              <Button
                href="https://team-intel-portfolio-0k3z.onrender.com"
                target="_blank"
                variant="light"
                size="md"
                className="mt-3"
              >
                View Live
              </Button>
              <Button
                href="https://github.com/Jemeelah1/team-intel-portfolio"
                target="_blank"
                variant="light"
                className="mx-3 mt-3"
                size="md"
              >
                View Source Code
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Portfolio;
