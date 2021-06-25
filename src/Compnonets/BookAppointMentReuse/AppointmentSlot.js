import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import "./AppointmentSlot.css";
import AppointmentSlotTimings from "./AppointmentSlotTimings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Image Of moon and sun

import Sun from "../../Images/BookAppointment/sun.svg";

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
  };

  
  // States for active buttons

  //method for Selecting an element

  //Current date
  // let current = new Date();
  // //Prev Date
  // let prevDay = new Date();
  // prevDay.setDate(current.getDate() - 1);
  // //Next prev
  // let nextDay = new Date();
  // nextDay.setDate(current.getDate() + 1);

  // console.log(current);
  // console.log(prevDay);
  // console.log(nextDay);

  return (
    <Container>
      <div className="date-slider">
        <Slider
          {...settings}
          style={{
            width: "806px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
          <div className="Appointment-Date-selection">Today, May 25</div>
        </Slider>
      </div>
      {/* <Row style={{ width: "100%", display: "flex", justifyContent: "center" }}> */}
      <AppointmentSlotTimings img={Sun} />
      <AppointmentSlotTimings img={Sun} />
      <AppointmentSlotTimings img={Sun} />
    </Container>
  );
}

export default AppointmentSlot;
