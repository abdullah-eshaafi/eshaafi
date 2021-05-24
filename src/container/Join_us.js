import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Screen from "../Images/Screen.png";
import Vector from "../Images/Vector.png";
import phoneMoc from "../Images/phone.png";
import "./Join.css";
function Join_us() {
  return (
    <Container>
      <Row className="whole-contain">
        <Col className="d-flex justify-content-center heading-doc">
          Are you a doctor?
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center para-doc">
          Join us to connect with millions of patients
        </Col>
      </Row>
      <Row>
        <Col lg={5} className="d-flex justify-content-end pr-5 pt-5">
          <img src={phoneMoc} />
        </Col>
        <Col
          lg={7}
          className="d-flex justify-content-start doc-list"
          style={{ display: "flex", flexDirection: "Column" }}
        >
          <ul className="list-doc">
            <li>
              <img src={Vector} style={{ paddingRight: "10px" }} />
              Connect to more patients through online bookings
            </li>
            <li>
              <img src={Vector} style={{ paddingRight: "10px" }} />
              Upload and manage your schedule with ease
            </li>
            <li>
              <img src={Vector} style={{ paddingRight: "10px" }} />
              Introducing vacation mode for doctors
            </li>
            <li>
              <img src={Vector} style={{ paddingRight: "10px" }} />
              Manage patients better with eShaafi.com
            </li>
            <li>
              <img src={Vector} style={{ paddingRight: "10px" }} />
              View shared medical history of pateints
            </li>
            <button className="btn-join">Join us Now</button>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Join_us;
