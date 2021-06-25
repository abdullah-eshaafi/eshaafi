import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div style={{ marginTop: "50px", width: "100%", height: "30px" }}>
        <Container
          fluid
          style={{ background: "#F5F5F5", height: "72px" }}
          className="footer-main-container-fixed"
        >
          <Container>
            <Row
              style={{
                paddingTop: "26px",
              }}
            >
              <Col lg={10} className="footer-primary-secondry">
                <Col lg={5} className="footer-main-text">
                  <p>© 2021 All Rights Reserved eShaafi.com</p>
                </Col>
                <Col lg={7} className="Footer-secondry-links">
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                  </ul>
                </Col>
              </Col>
              <Col lg={2} className="footer-social-links">
                <ul>
                  <li>
                    {" "}
                    <i className="fab fa-facebook" />
                  </li>
                  <li>
                    {" "}
                    <i className="fab fa-youtube" />
                  </li>
                  <li>
                    {" "}
                    <i className="fab fa-twitter" />
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Footer;
