import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed = "top">
      <Container>
        <Navbar.Brand  href="/">Easy Recipe 123</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className = "navBarLinks">
            <Nav className="navbar-nav">
              <Link className = "navLinks" to="/Favorites">Favorites</Link>
              <Link className = "navLinks" to="/About">About</Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
