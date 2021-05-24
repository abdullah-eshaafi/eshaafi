import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <Container fluid className="first-container">
      <Container className="second-container">
        <Row>
          <Col lg={3} className=" d-flex justify-content-start  list-first ">
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col lg={3} className=" d-flex justify-content-start list-first ">
            {" "}
            <ul>
              <li>
                <p>Support</p>
              </li>
              <li>Help Center</li>
              <li>Safety Center</li>
              <li>Community Guidelines</li>
            </ul>
          </Col>
          <Col lg={3} className="d-flex justify-content-start  list-first ">
            <ul>
              <li>
                <p>Legal</p>
              </li>
              <li>Cookies Policy</li>
              <li>Safety Center</li>
              <li>Terms of Service</li>
              <li>Law Enforcement</li>
            </ul>
          </Col>
          <Col lg={3} className=" d-flex justify-content-start list-first ">
            <ul>
              <li>
                <p>Legal</p>
              </li>
              <li>Cookies Policy</li>
              <li>Safety Center</li>
              <li>Terms of Service</li>
              <li>Law Enforcement</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row className="footer-last px-0">
        <Col className="footer-last-col">© 2021 All Rights Reserved eShaafi.com</Col>
      </Row>
    </Container>
  );
}

export default Footer;
