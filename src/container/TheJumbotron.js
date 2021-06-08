import React from "react";
import "./TheJumbotron.css";
import { Row, Col, Container, Form } from "react-bootstrap";
import Searchbar from "../Compnonets/Utils/Searchbar";
import { TheButton } from "../Compnonets/Utils/Buttons.js";
function TheJumbotron() {
  const locationIcon = <i class="location-icon fas fa-map-marker-alt 9x"></i>;
  const detectIcon = <i class="fas fa-crosshairs fa-lg"></i>;
  return (
    <Container fluid className="Jumbo-container">
      <Container className="Jumbo-contain">
        <Row>
          <Col xl={9} lg={11} className="Jumbtron-heading">
            <h3>Find & Connect With The Best Doctors in Pakistan</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={(12, "d-flex justify-content-center")} xl={3} lg={3}>
            <div className="form-input">
              <Searchbar locationIcon={locationIcon} detectIcon={detectIcon} />
            </div>
          </Col>
          <Col
            className="pr-0  search-input"
            sm={12}
            xl={(7, "d-flex justify-content-center")}
            lg={7}
          >
            <Searchbar
              placeholder="Search for doctors, specialties, symptoms"
              serachStyle="search-style-secondry"
              serachSize="search-size-secondry"
            />
          </Col>
          <Col
            className="pl-0  Jumbo-btn"
            xl={(2, "d-flex justify-content-end")}
            lg={2}
          >
            <TheButton title="search" />
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
