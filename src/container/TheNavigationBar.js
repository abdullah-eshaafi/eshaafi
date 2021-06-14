import React, { useState } from "react";
import Logo from "../Images/Logo.svg";
import "./Navbar.css";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { DropDownicon } from "../Compnonets/Utils/DropDownIcon";
import Drop_Down_Icon from "../Images/Icons/Dropdown-icon.svg";
// import TheDropdown from "./TheDropdown.js";
import IconArrow from "../Images/Icons/iconArrow.svg";
import ThePhone from "../Compnonets/Login/ThePhone";
import { DropDownContainer } from "../Compnonets/Utils/DropDownIcon";
const TheNavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ShowIconContainer, setShowIconContainer] = useState(false);
  const handleIconShow = () => {
    setShowIconContainer(!ShowIconContainer);
  };
  return (
    <>
      {" "}
      <Container
        fluid
        className="px-0 fixed-top main-navbar-container"
        style={{ background: "white" }}
      >
        <Navbar className=" nav-container container" expand="lg">
          <Navbar.Brand href="#home" className="logo">
            <img src={Logo} alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto  second">
              <Nav.Link>
                <DropDownicon
                  img={Drop_Down_Icon}
                  onClick={handleIconShow}
                  ShowIconContainer={ShowIconContainer}
                >
                  Doctors
                </DropDownicon>
              </Nav.Link>
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
              <Button
                id="btn_login"
                className="btn-login"
                onClick={() => setModalShow(true)}
              >
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ThePhone show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
      <div className="nav-second-container"></div>
      <div
        style={{
          display: ShowIconContainer ? ShowIconContainer : "none",
          marginTop: "75px",
          background: "white",
          borderTop: "1px solid #CCCCCC",
          height: "456px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        }}
        className="fixed-top"
      >
        <Container>
          <DropDownContainer
            lg={3}
            md={3}
            xs={6}
            FirstHeading="Choose a specialty"
            SecondHeading="  View all specialties"
            IconArrow={IconArrow}
          />
        </Container>
      </div>
    </>
  );
};

export default TheNavigationBar;
