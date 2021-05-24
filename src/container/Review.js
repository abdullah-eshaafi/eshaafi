import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Review.css";
function Review() {
  return (
    <Container fluid style={{ background: "#009B94", height: "628px" }}>
      <Row>
        <Col lg={6}>
          <Row>
            <Col className="review-heading" lg={12}>
              <h3>Satisfied Patients</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="review-para">
              <p style={{ height: "56px" }}>
                Feedback from these satisfied users helps us in reaching new
                heights
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>1</Col>
      </Row>
    </Container>
  );
}

export default Review;
