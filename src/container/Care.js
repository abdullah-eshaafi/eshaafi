import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import outer from "../Images/image.svg";
import "./Care.css";
function Care() {
  return (
    <Container className="Care-container">
      <Row>
        <Col lg={6} className="img-con" sm={12}>
          <img src={outer} />
        </Col>
        <Col lg={6} className="heading-img" sm={12}>
          <Row>
            <Col className="Care-heading" sm={12}>
              <p>Healthcare That Never Quits</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="care-para ">
              {" "}
              <p>
                A network of our 1000+ doctors, we don’t compromise when it
                comes to your health. Contact us 24/7 in case of emergencies or
                regular medical advice adn we’ll be always readily avaialble for
                you.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Care;
