import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <>
      <div
        className="bg-img p-5 align-items-center justify-content-md-center"
        id="about"
        // style={{ height: "100vh" }}
      >
        <Container>
          <h3 className="mt-3" id="about-h3">
            about
          </h3>
          <p className="text-center p-md-5 mt-5 fs-4 lead">
            My name is Kolawole Ayoola and I am a Computer Science graduate.
            There are a lot of things I'm interested in, but I'll talk about
            what I've been focusing on. That brings us to UI/UX and frontend web
            development.
            <br />
            <br />
            I have experience building beautiful user experiences and
            coordinating the development process to ensure that people are
            satisfied. I've also taken on leadership roles to hone my leadership
            skills.
            <br />
            <br />I have design experience with Adobe tools such as Photoshop,
            Illustrator, and XD. I also design with Figma and am certain that I
            can get proficient with any design tool. I also have web programming
            experience, having written code in javascript, reactjs, css, html,
            wordpress, node, mongodb, and other languages.
          </p>
        </Container>
      </div>
    </>
  );
}

export default About;
