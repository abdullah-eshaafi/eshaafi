import React from "react";
import Logo_Eshaafi from "../Images/Logo.svg";
import "./Navbar.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";

function TheNavbar() {
  return (
    <>
      <Container>
        <Navbar expand="lg" className="Navbar-container">
          <Navbar.Brand href="#home">
            <img src={Logo_Eshaafi} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto px-3">
              <NavDropdown title="Doctors" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" className="px-3" id="First-link">
                Our services
              </Nav.Link>
              <Nav.Link href="#link" id="Second-link" className="px-3">
                {" "}
                About us
              </Nav.Link>
              <Nav.Link href="#link" id="third-link" className="px-3">
                Contact us
              </Nav.Link>
            </Nav>
            <Form inline>
              <button className="btn-doctor mx-3">I am a doctor</button>
              <button className="btn-login mx-3">Log In</button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default TheNavbar;
