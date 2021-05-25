import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Review.css";
import Profile from "../Images/Profile.png";
import Star from "../Images/star.png";
import Colon from "../Images/Colon.png";
import Right from "../Images/right.png";
import Stroke from "../Images/Stroke.png";
function Review() {
  return (
    <Container fluid style={{ background: "#009B94", marginTop: "80px" }}>
      <Row>
        <Col lg={6} style={{ background: "#009B94", height: "628px" }}>
          <Row>
            <Col className="review-heading" lg={12}>
              <h3>Satisfied Patients</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="review-para">
              <p style={{ height: "56px" }}>
                Feedback from these satisfied users helps us in reaching new
                heights
              </p>
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          className="px-0 d-flex align-content-center  second-container"
          style={{ background: "#E0F3F2" }}
        >
          <Col lg={9} style={{ background: "white", height: "520px" }}>
            <Row>
              <Col lg={11} className="d-flex justify-content-end colon-img">
                <img src={Colon} />
              </Col>
            </Row>
            <Row>
              <Col lg={10} className="Review-img">
                <Row>
                  <Col lg={2} className="Reviewimg">
                    <img src={Profile} />
                  </Col>
                  <Col className="Review-card-heading" lg={9}>
                    <h3>Jenny Wilson</h3>
                    <img src={Star} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                lg={10}
                className="ReviewCard-para d-flex justift-content-center"
              >
                <p>
                  Great platform. Very efficient on phone as well as web.
                  Helpful for booking online appointments and searching for
                  required doctors. I was really impressed by their single-tap
                  instant checkup. They connect you to one of their competent
                  doctors without wasting an extra second. The service is great
                  and I don’t have to hassle through different hospitals
                  anymore.
                </p>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Review;
