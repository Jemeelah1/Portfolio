import React, { useEffect } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import "./Experience.css";
import alat from "../img/alat.png";
import alx from "../img/alx.png";
import purple from "../img/purpleAcademy.png";
import wtf from "../img/wtf.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="experience"
      >
        <Container>
          {/* Company logo */}
          <h3
            className="mt-3"
            id="experience-h3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            experience
          </h3>
          <Row className=" py-5 fs-4 lead align-items-center g-4">
            <Col md="4" lg="7">
              <h4
                data-aos="fade-right"
                data-aos-duration="1500"
                id="experience-h4"
              >
                where i have worked and trained
              </h4>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="1500">
              <img className="img-fluid" id="bs" src={alat} alt=""></img>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="1400">
              <img className="img-fluid" id="andela" src={wtf} alt=""></img>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="1500">
              <img className="img-fluid" id="andela" src={alx} alt=""></img>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="1500">
              <img className="img-fluid" id="tri" src={purple} alt=""></img>
            </Col>
          </Row>

          {/* Cards */}
          <Row xs="1" lg="3" id="card-row" className="g-4 d-none d-md-flex">
            <Col>
              <Card
                data-aos="fadeIn"
                data-aos-duration="1500"
                className="text-center align-items-center py-3 py-lg-5 px-5 px-lg-0 "
                style={{
                  height: "100%",
                  background: "#ffffffa1",
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                }}
              >
                <Card.Body>
                  <Card.Title className="pb-3 fw-normal">ALAT</Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Front-End Developer (Web).
                    <br /> Febuary 2022 - Present
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                     Currently Working with a squad (team) of developers to produced detailed products that are user friendly for the company.
                    <br />
                    <br />
                    Designed compelling user experiences for the company, developed using ReactJs, node, Tailwindcss and other languages.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                data-aos="fadeIn"
                data-aos-duration="1500"
                className="text-center align-items-center py-3 py-lg-5 px-5 px-lg-0"
                style={{
                  height: "100%",
                  background: "#ffffffa1",
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                }}
              >
                <Card.Body>
                  <Card.Title className="pb-3 fw-normal">WomenTechSters Fellowship</Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Front-End Developer
                    <br /> July 2022 - March 2023
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    A learning community of women developers who
                    possessed varying skill levels and competencies.
                    <br />
                    <br />
                    Designed projects in teams and also personal projects, developed using ReactJs, javascript, node, Tailwindcss, html and css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                data-aos="fadeIn"
                data-aos-duration="1500"
                className="text-center align-items-center py-3 py-lg-5 px-5 px-lg-0"
                style={{
                  height: "100%",
                  background: "#ffffffa1",
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                }}
              >
                <Card.Body>
                  <Card.Title className="pb-3 fw-normal">ALX</Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Full-Stack Developer.
                    <br /> March 2022 - Febuary 2023
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    A learning community of  over 3.5k developers who
                    possessed varying skill levels and competencies.
                    <br />
                    <br />
                    ALX gives daily tasks and projects to guide my learning progress and to gain mastery.
                    <br />
                    <br />
                    Designed personal projects and team projects. Developed using javascript, C, Shell, Python, html and css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                data-aos="fadeIn"
                data-aos-duration="1500"
                className="text-center align-items-center py-3 py-lg-5 px-5 px-lg-0"
                style={{
                  height: "100%",
                  background: "#ffffffa1",
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                }}
              >
                <Card.Body>
                  <Card.Title className="pb-3 fw-normal">
                    Purple Academy
                  </Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Graduate Trainee (BIT)
                    <br /> October 2021 - January 2022
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    A training school for developers who
                    possessed varying skill levels and competencies.
                    <br />
                    <br />
                    Designed personal projects and a final project (Multiple-Transfer) with a team of developers, developed   using ReactJs, node, Bootstrap and css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Accordion
            defaultActiveKey="0"
            className="d-md-none"
            style={{ fontFamily: "Poppins" }}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>ALAT</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Front-End Developer (Web).
                  <br /> Febuary 2022 - Present
                </span>
                <br />
                <br />
                Currently Working with a squad (team) of developers to produced detailed products that are user friendly for the company.
                <br />
                <br />
                Designed compelling user experiences for the company, developed using ReactJs, node, Tailwindcss and other languages.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>WomenTechSters Fellowship</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Front-End Developer
                  <br /> July 2022 - March 2023
                </span>
                <br />
                <br />
                A learning community of women developers who
                possessed varying skill levels and competencies.
                <br />
                <br />
                Designed projects in teams and also personal projects, developed using ReactJs, javascript, node, Tailwindcss, html and css.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>ALX</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Full-Stack Developer.
                  <br /> March 2022 - Febuary 2023
                </span>
                <br />
                <br />
                A learning community of  over 3.5k developers who
                possessed varying skill levels and competencies.
                <br />
                <br />
                ALX gives daily tasks and projects to guide my learning progress and to gain mastery.
                <br />
                <br />
                Designed personal projects and team projects. Developed using javascript, C, Shell, Python, html and css.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
}

export default Experience;
