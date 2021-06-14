import React from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import { DropDownContainer } from "../Utils/DropDownIcon.js";
import "./DoctorList.css";
import Searchbar from "../Utils/Searchbar";
function DoctorList(props) {
  return (
    <Modal
      style={{ display: props.show ? "block" : "none" }}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
    >
      <Modal.Body>
        <Container className="doctor-listing-main-container">
          <Row className="doctor-listing-title-content">
            <Col className="doctor-listing-title-heading">
              <p>Find a doctor & book appointment</p>
            </Col>
            <Col>
              <span onClick={props.onHide} className="close-icon">
                <img src={props.close} />
              </span>
            </Col>
          </Row>
          <Row>
            <Searchbar
              placeholder="Search for doctors, specialties, symptoms"
              serachStyle="doctor-listing-search-style"
              serachSize="doctor-listing-search-size"
            />
          </Row>
          <Col className="doctor-listing-body-content">
            <DropDownContainer lg={4} md={4} xs={6} />
          </Col>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default DoctorList;
