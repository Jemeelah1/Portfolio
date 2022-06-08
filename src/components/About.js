import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <>
      <div
        className="bg-img py-5 px-3 align-items-center justify-content-md-center"
        id="about"
        // style={{ height: "100vh" }}
      >
        <Container>
          <h3 className="mt-3" id="about-h3">
            about
          </h3>
          <p className="text-center m-md-5 p-md-5 mt-5 fs-5 fw-light">
            My name is Kolawole Ayoola a Computer Science graduate. As an
            effective Frontend web developer and User Experience designer I have
            experience building beautiful user experiences and coordinating the
            development process to ensure that people are satisfied. I've also
            taken on leadership roles to hone my leadership skills. I have
            design experience with Adobe tools such as Photoshop, Illustrator,
            and XD. I also design with Figma and am certain that I can get
            proficient with any design tool. I also have web programming
            experience, having written code in javascript, reactjs, css, html,
            wordpress, node, mongodb, and other languages.
          </p>
        </Container>
      </div>
    </>
  );
}

export default About;
