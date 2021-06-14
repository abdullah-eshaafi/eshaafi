import React, { useState } from "react";
import "./TheCard.css";
import Doctor from "../Images/Crad1.svg";
import DoctorList from "../Compnonets/Pop-Ups/DoctorList";
import { Col, Container, Row, Card } from "react-bootstrap";
import close from "../Images/close.svg";
function TheCard() {
  const [showDoctorList, SetShowDoctorList] = useState(false);
  return (
    <Container>
      <Row>
        <Col xl={6} lg={12} sm={12}>
          <div className="main-wrapper TheCard-container">
            <div className="image-wrapper">
              <img src={Doctor} />
            </div>
            <div className="head-btn">
              <h3>Book Appointment</h3>
              <p>
                Find specialist doctors according to your requirements, and book
                appointments through our hassle-free process.
              </p>
              <button onClick={() => SetShowDoctorList(true)}>
                Book Appointment
              </button>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12} sm={12}>
          <div className="main-wrapper TheCard-container">
            <div className="image-wrapper">
              <img src={Doctor} />
            </div>
            <div className="head-btn-second">
              <h3>Instant Care</h3>
              <p>
                Find specialist doctors according to your requirements, and book
                appointments through our hassle-free process.
              </p>{" "}
              <button>Instant Consultation</button>
            </div>
          </div>
        </Col>
      </Row>
      <DoctorList
        show={showDoctorList}
        onHide={() => SetShowDoctorList(false)}
        close={close}
        FirstHeading={{ display: "none" }}
        SecondHeading={{ display: "none" }}
        IconArrow={{ display: "none" }}
      />
    </Container>
  );
}
export default TheCard;
