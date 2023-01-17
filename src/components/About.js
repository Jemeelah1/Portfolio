import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
          <p
            className="text-center m-md-5 p-md-5 mt-5 fs-5 fw-light"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            A web developer and self-taught UI/UX designer, functioning in the work space for 1+ years now.
            <br />
            I make meaningful and delightful digital products, I bring designs to life that create an equilibrium between user needs and business goals.
            <br /> I also design with Figma and am certain that I
            can get proficient with any design tool. I also have web programming
            experience, having written code in javascript, reactjs, css, html, tailwindcss, bootstrap and other languages.
          </p>
        </Container>
      </div>
    </>
  );
}

export default About;
