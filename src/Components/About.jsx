import React from "react";
//  import { Scott_aboutUS } from "./../../public/Scott_aboutUS.jpeg";
import ProfilePic from "./Images/Scott_aboutUS.jpeg";
import GitHub from "./Images/githubLogo.png";
import LinkedIn from "./Images/linkedinLogo.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className = "pb-3">
        <Row>
            <Col>
                <Image className="profilePic" src={ProfilePic} alt="Profile Pic" rounded />
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>Scott Henderson</h4>
                <h3>Full Stack Web Developer</h3>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="https://www.linkedin.com/in/scottmchenderson/">
                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
            </a>
            <a className = "p-3" href ="mailto:scott.mc.henderson@gmail.com">scott.mc.henderson@gmail</a>
            <a href="https://github.com/smhenderson89">
                <img className="about-logo" src={GitHub} alt="GithubLogo"></img>
            </a>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;

// Scott_aboutUS.jpeg  import logo from './logo.png
