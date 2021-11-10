import React from "react";
import  {Navbar, Nav} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Container>
          <Navbar bg="light" variant="light" fixed="top">
            <Container>
              <Navbar.Brand href="#home">ER</Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/">Home</Link>
                <Link to="/Favorites">Favorites</Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </nav>
    </div>
  );
}

export default NavBar;
