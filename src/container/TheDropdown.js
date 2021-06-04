import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Thedropdown.css";
function TheDropdown() {
  return (
    <Container>
      <div className="dropdowm-top-heading">
        <p>Choose a specialty</p>
      </div>
      <div className="dropdowm-top-heading">
        <p>View all specialties</p>
      </div>

      <Row>
        <Col className="px-0 py-0">
          <div className="dropdown-main-container ">1</div>
          <div className="dropdown-main-container ">1</div>
        </Col>
      </Row>
    </Container>
  );
}

export default TheDropdown;
