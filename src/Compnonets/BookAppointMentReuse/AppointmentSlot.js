import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import "./AppointmentSlot.css";
import { arrayData } from "./BookAppoinmentData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const list = [
  { name: "Today, May 25" },
  { name: "Wed, May 26" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
  { name: "Thu, May 27" },
];

function AppointmentSlot() {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    width: "200px",
  };
  // States for active buttons

  //method for Selecting an element

  //Current date
  let current = new Date();
  //Prev Date
  let prevDay = new Date();
  prevDay.setDate(current.getDate() - 1);
  //Next prev
  let nextDay = new Date();
  nextDay.setDate(current.getDate() + 1);

  console.log(current);
  console.log(prevDay);
  console.log(nextDay);

  return (
    <Container>
      <div className="date-slider">
        <Slider
          {...settings}
          style={{ width: "806px", display: "flex", justifyContent: "center" }}
        >
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
        </Slider>
      </div>
      <Row className="Appointment-main-container">
        <Col lg={9}>
          <Col lg={8}>1</Col>
          <Col
            lg={4}
            style={{ display: "flex", padding: "10px" }}
            className="d-flex justify-content-center"
          >
            {" "}
            {arrayData.map((data) => (
              <div className="Timings-slot">{data.timings.booked}</div>
            ))}
          </Col>
        </Col>
        <Col lg={4}>2</Col>
      </Row>
    </Container>
  );
}

export default AppointmentSlot;
