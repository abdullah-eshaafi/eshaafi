import React from "react";
import "./TheJumbotron.css";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container, Form } from "react-bootstrap";

function TheJumbotron() {
  return (
    <Container fluid className="Jumbo-container">
      <Container className="Jumbo-contain">
        <Row>
          <Col xl={9} lg={10} className="Jumbtron-heading">
            <h3>Find & Connect With The Best Doctors in Pakistan</h3>
          </Col>
        </Row>
        <Row>
          <Col
            className="form-input"
            sm={(12, "d-flex justify-content-center")}
            xl={4}
            lg={4}
          >
            <Form.Control size="lg" type="text" placeholder="Lahore" />
          </Col>
          <Col className="pr-0  search-input" sm={12} xl={6} lg={6}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for doctors, specialties, symptoms"
            />
          </Col>
          <Col className="pl-0  Jumbo-btn" xl={2} lg={2}>
            <button type="button">Search</button>
          </Col>
        </Row>
        <Row>
          <Col className="btn-second" lg={12} xl={12}>
            <button type="button">Join As Doctor</button>
          </Col>
        </Row>{" "}
      </Container>
    </Container>
  );
}

export default TheJumbotron;
