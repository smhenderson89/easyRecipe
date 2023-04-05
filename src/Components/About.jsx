import React from "react";
//  import { Scott_aboutUS } from "./../../public/Scott_aboutUS.jpeg";
import ProfilePic from "./Images/Scott_aboutUS.jpeg";
import GitHub from "./Images/githubLogo.png";
import LinkedIn from "./Images/linkedinLogo.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import { Col, Row } from "react-bootstrap";
import './About.css';

function About() {
  return (
    <>
      <Container className = "pb-3">
        <Row>
          <h3>About This Project</h3>
          <div>
            <p>I wanted to create a website that would make it easy to look up new healthy meals. I find it easy to be preparing the same list of 5-6 meals all the time and wanted an easy to navigate website to bring up ideas.</p>
            <p>For my DigitalCrafts bootcamp class, I used <a href = "https://reactjs.org/">React</a> and <a href = "https://redux.js.org/">Redux</a> to make a front-end website to navigate the <a href = "https://developer.edamam.com/?ref=public-apis">Ednamam API</a> to look up food recipes.</p>
            <p>For more information, check out the <a href = "https://github.com/smhenderson89/easyRecipe">Github repo.</a></p>
          </div>
        </Row>
        <Row>
            <Col>
                <h3>Contact Information</h3>
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
