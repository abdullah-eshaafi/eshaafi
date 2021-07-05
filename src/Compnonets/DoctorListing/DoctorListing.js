import React from "react";
import Navbar from "../../container/TheNavigationBar";
import Searchbar from "../../Compnonets/Utils/Searchbar";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonDropdown, TheButton } from "../../Compnonets/Utils/Buttons";
import Card from "../../Compnonets/Utils/Card";
import "../../container/TheJumbotron.css";
import { Breadcrumb } from "react-bootstrap";
import "./DoctorListing.css";
import Footer from "../../container/Footer";
// Icons In Search Bar


function DoctorListing() {
  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* Jumbotron Section */}

      <Container fluid style={{ backgroundColor: "#E0F3F2", height: "128px" }}>
        <Container className="d-flex align-items-center">
          <Row className="Search-bar-main-container px-0 mx-0 ">
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
        </Container>
      </Container>

      {/* Bread Crumb Section */}

      <Container style={{ backgroundColor: "white" }}>
        {/* Bread Crumb Section */}

        <Row>
          <Col lg={12} className="px-0">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Pakisatn
              </Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Lahore
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Dermatologists</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        {/* Doctor Listing Heading Section */}
        <Row>
          <Col className="px-0 Heading-Section">
            <p>165 Top Certified Dermatologists in Lahore</p>
          </Col>
        </Row>

        {/* Doctor second Heading and Relevence Filter */}

        <Row>
          <Col lg={8} className="px-0  Doctor-second-Heading">
            <p>
              {" "}
              Also known as Skin Specialists, ماہر امراض جلد , Skin Doctor and
              Mahir-e-imraz-e-jild
            </p>
          </Col>
          <Col lg={4} className="px-0 relevence-filter-style">
            <span style={{ marginRight: "8px", marginTop: "10px" }}>
              Sort By:
            </span>
            <span>
              <ButtonDropdown title="Relevance" id="relevance-dropdown" />
            </span>
          </Col>
        </Row>

        {/* Card and side Filters */}
        <Row>
          <Col lg={3} className="px-0">
            <Col className="px-0 card-appointment">
              <p>Type of Appointment</p>
            </Col>
            <Col className="px-0 card-video-checkbox">
              <label>
                <input type="checkBox" />
                Video Call
              </label>
            </Col>
            <Col className="px-0 py-0 card-gender-checkbox">
              <h3>Gender</h3>
              <label>
                <input type="checkBox" />
                Male
              </label>
              <br />
              <label id="female-checkbox">
                <input type="checkBox" />
                Female
              </label>
            </Col>

            <Col className="px-0  Speciality-Dropdown">
              <h3>Speciality</h3>
              <ButtonDropdown
                title="General Physician"
                id="Speciality-Dropdown"
              />
              <Col className="px-0 location-dropdwon">
                <h3>Location</h3>
                <ButtonDropdown title="Lahore" id="location-dropdwon" />
              </Col>
              <Col className="px-0 fee-range-dropdown">
                <h3>Fee Range</h3>
                <span style={{ display: "flex" }}>
                  <ButtonDropdown title="Min" id="min-range" />
                  <span id="negative-sign"> -</span>
                  <ButtonDropdown title="Min" id="max-range" />
                </span>
              </Col>
            </Col>
          </Col>
          <Col lg={9} className="px-0">
            <Card />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "40px" }}>
        <Footer />
      </div>
    </>
  );
}

export default DoctorListing;
