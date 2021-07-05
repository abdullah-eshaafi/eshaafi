import React from "react";
import "./DoctorProfile.css";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import DoctorPic from "../../../Images/BookAppointment/BA-Doctor-PP.svg";
function DoctorProfile() {
  return (
    <>
      <TheNavigationBar />
      <Container fluid className="Doctor-Profile-data">
        <Container>
          <Row>
            <Col>
              <Breadcrumb id="Doctor-Profile-breadcrumb">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Pakisatn
                </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Lahore
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dermatologists</Breadcrumb.Item>
                <Breadcrumb.Item>Dr. Neslihan Atagul</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container style={{ marginTop: "-80px" }}>
        <Row>
          <Col lg={9} className="d-flex">
            <img src={DoctorPic} width="160px" height="160px" />
            <span></span><p>7 years of experience</p>
          </Col>
          <Col className="d-flex justify-content-end">2</Col>
        </Row>
      </Container>
    </>
  );
}

export default DoctorProfile;
