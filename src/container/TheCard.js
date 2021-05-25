import React from "react";
import "./TheCard.css";
import Doctor from "../Images/Crad1.svg";
import Card2 from "../Images/Card333.png";
import { Col, Container, Row, Card } from "react-bootstrap";
function TheCard() {
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
              <button>Book Appointment</button>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12} sm={12}>
          <div className="main-wrapper TheCard-container">
            <div className="image-wrapper">
              <img src={Doctor} />
            </div>
            <div className="head-btn">
              <h3>Instant Care</h3>
              <p>
                Find specialist doctors according to your requirements, and book
                appointments through our hassle-free process.
              </p>
              <button style={{ background: "#FF9300" }}>
                Instant Consultation
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default TheCard;
