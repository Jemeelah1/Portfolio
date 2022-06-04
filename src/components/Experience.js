import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import "./Experience.css";
import bs from "../img/bs.png";
import andela from "../img/andela.png";
import tri from "../img/tri.png";

function Experience() {
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="experience"
      >
        <Container>
          {/* Company logo */}
          <h3 className="mt-3" id="experience-h3">
            experience
          </h3>
          <Row className=" py-5 fs-4 lead align-items-center g-4">
            <Col md="4" lg="7">
              <h4 id="experience-h4">where i have worked</h4>
            </Col>
            <Col>
              <img className="img-fluid" id="bs" src={bs} alt=""></img>
            </Col>
            <Col>
              <img className="img-fluid" id="andela" src={andela} alt=""></img>
            </Col>
            <Col>
              <img className="img-fluid" id="tri" src={tri} alt=""></img>
            </Col>
          </Row>

          {/* Cards */}
          <Row xs="1" lg="3" id="card-row" className="g-4 d-none d-md-flex">
            <Col>
              <Card
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
                  <Card.Title className="pb-3 fw-normal">BlueSense</Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Web Develoment intern & Business Development intern.
                    <br /> June 2021 - May 2022
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    Worked with the research team to produced detailed market
                    and user research for a fintech startup - hashapp.
                    <br />
                    <br />
                    Designed compelling user experience for the company site and
                    partner sites, developed it using ReactJs, node, css.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
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
                  <Card.Title className="pb-3 fw-normal">Andela</Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Program Assistant.
                    <br /> September 2020 - September 2021
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    Coordinate a learning community of 3.5k developers who
                    possessed varying skill levels and competencies.
                    <br />
                    <br />
                    Coordinating and supporting learners towards the submission
                    of 50+ technical projects.
                    <br />
                    <br />
                    Managing over 4 Azure certification prep sessions &
                    Facilitating the mentor's support structure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
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
                    Trivest Technologies
                  </Card.Title>
                  <Card.Subtitle className="fw-light pb-3">
                    Network Technician
                    <br /> July 2019 - December 2019
                  </Card.Subtitle>
                  <Card.Text className="py-3 fw-light">
                    Installation & configuration of wireless network devices,
                    and also carrying out periodic maintenance on them.
                    <br />
                    <br />
                    Editing 2D blueprint of various company structures using
                    AutoCAD to plan the best and shortest path routes engineers
                    can use to run wires and install control centers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Accordion
            defaultActiveKey="0"
            className="d-md-none"
            style={{ fontFamily: "Poppins" }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>BlueSense</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Web Develoment intern & Business Development intern.
                  <br /> June 2021 - May 2022
                </span>
                <br />
                <br />
                Worked with the research team to produced detailed market and
                user research for a fintech startup - hashapp.
                <br />
                <br />
                Designed compelling user experience for the company site and
                partner sites, developed it using ReactJs, node, css.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Andela</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Program Assistant.
                  <br /> September 2020 - September 2021
                </span>
                <br />
                <br />
                Coordinate a learning community of 3.5k developers who possessed
                varying skill levels and competencies.
                <br />
                <br />
                Coordinating and supporting learners towards the submission of
                50+ technical projects.
                <br />
                <br />
                Managing over 4 Azure certification prep sessions & Facilitating
                the mentor's support structure.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Trivest Technologies</Accordion.Header>
              <Accordion.Body className="py-4">
                <span className="fw-bold">
                  Network Technician
                  <br /> July 2019 - December 2019
                </span>
                <br />
                <br />
                Installation & configuration of wireless network devices, and
                also carrying out periodic maintenance on them.
                <br />
                <br />
                Editing 2D blueprint of various company structures using AutoCAD
                to plan the best and shortest path routes engineers can use to
                run wires and install control centers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
}

export default Experience;
