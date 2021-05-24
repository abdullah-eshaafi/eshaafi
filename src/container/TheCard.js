import React from "react";
import "./TheCard.css";
import Doctor from "../Images/Crad1.svg";
import Card2 from "../Images/Card333.png";
import { Col, Container, Row } from "react-bootstrap";
function TheCard() {
  return (
    <>
      <Container>
        <Row className="py-4 ">
          <Col
            className="px-0 card-container"
            lg={6}
            xs={(12, { display: "flex", flexDirection: "column" })}
            style={{ display: "flex" }}
          >
            <Col lg={5} xs={(6, "d-flex")} className="px-0">
              <img src={Doctor} />
            </Col>
            <Col lg={7} xs={(6, "d-flex")} className="py-2">
              <Col className="Catd-title">
                <h3>Book Appointment</h3>
              </Col>
              <Col className="card-desc">
                <p>
                  Find specialist doctors according to your requirements, and
                  book appointments through our hassle-free process.
                </p>
              </Col>
              <Col className="btn-appointment">
                <button>Book Appointment</button>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TheCard;
