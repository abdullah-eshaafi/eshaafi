import React from "react";
import "./TheJumbotron.css";
import { Row, Col, Container } from "react-bootstrap";
import Searchbar from "../Compnonets/Utils/Searchbar";
import { TheButton } from "../Compnonets/Utils/Buttons.js";
function TheJumbotron() {
  return (
    <Container fluid className="Jumbo-container">
      <Container className="Jumbo-contain">
        <Row>
          <Col xl={9} lg={11} md={12} className="Jumbtron-heading">
            <h3>Find & Connect With The Best Doctors in Pakistan</h3>
          </Col>
        </Row>
        <Row className="Search-bar-main-container px-0 mx-0">
          <div className="City-search-detect">
            <span>
              <i class="location-icon fas fa-map-marker-alt 9x"></i>
            </span>
            <input type="text" placeholder="Lahore" />
            <span>
              <i class="fas fa-crosshairs fa-lg detect-icon"></i>
            </span>
          </div>

          <div className="search-for-specialist">
            <input
              type="text"
              placeholder="Search for doctors, specialties, symptoms"
            />
            <span>
              <button id="search-for-specialist-button">Search</button>
            </span>
          </div>
        </Row>
        <Row>
          <Col
            className="btn-second d-flex justify-content-center"
            lg={12}
            xl={12}
          >
            <button type="button">Join As Doctor</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TheJumbotron;
