import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <nav>
          <Navbar className="justify-content-center me-auto navig-style" fixed="top">
              <div className = "logo">
                <Navbar.Brand href="/">Easy-Recipe-123</Navbar.Brand>
              </div>
              <div className = "link-styling">
                <Nav className="margin-3">
                  <Link className = "mr-3" to="/"> Home &nbsp;   </Link>
                  <Link className = "margin-3" to="/Favorites"> Favorites</Link>
                </Nav>
              </div>
          </Navbar>
      </nav>
    </div>
  );
}

export default NavBar;
