import React from "react";
import "./TheJumbotron.css";
import { Jumbotron, Row, Col, Button, Container, Form } from "react-bootstrap";
function TheJumbotron() {
  return (
    <Jumbotron className="Jumbo-container">
      <Container className="Jumbo-contain">
        <Row className="justify-content-center">
          <Col lg={10} className="py-2">
            <h3 className="Jumbtron-heading">
              Find & Connect With The Best Doctors in Pakistan
            </h3>
          </Col>
        </Row>
        <Row>
          <Col
            className="form-input py-2"
            sm={(12, "d-flex justify-content-center")}
            lg={4}
          >
            <Form.Control size="lg" type="text" placeholder="Lahore" />
          </Col>
          <Col className="pr-0 py-2 search-input" sm={12} lg={6}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for doctors, specialties, symptoms"
            />
          </Col>
          <Col className="pl-0 py-2 Jumbo" lg={2}>
            <button type="button" className="btn  btn-lg Jumbo">
              Search
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-3" lg={12}>
            <button type="button" className="btn  btn-lg btn-primary ">
              Join As Doctor
            </button>
          </Col>
        </Row>{" "}
      </Container>
    </Jumbotron>
  );
}

export default TheJumbotron;
