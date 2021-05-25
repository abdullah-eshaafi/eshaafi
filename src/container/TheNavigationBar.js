import React from "react";
import Logo from "../Images/Logo.svg";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown, Button, Form } from "react-bootstrap";
const TheNavigationBar = () => {
  return (
    <>
      <Navbar className="container nav-container" expand="lg">
        <Navbar.Brand href="#home" className="logo">
          <img src={Logo} alt={"logo"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto  second">
            <NavDropdown title="Doctors" id="first">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="first" href="#home">
              Our Services
            </Nav.Link>
            <Nav.Link id="third" href="#home">
              About Us
            </Nav.Link>
            <Nav.Link id="second" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button className="btn-doctor" id="btn_doctor">
              I am a Doctor
            </Button>
            <Button id="btn_login" className="btn-login">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TheNavigationBar;
