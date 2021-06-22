import React from "react";
import "./BookAppointment.css";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Row } from "react-bootstrap";
import DoctorProfilePic from "../../../Images/BookAppointment/BA-Doctor-PP.svg";
import AppointmentSlot from "../../../Compnonets/BookAppointMentReuse/AppointmentSlot";
import { useState } from "react";
function BookAppointment() {
  //  state of current time

  const [currentDateTime, setCurrentTime] = useState(new Date());

  //  Days of Week

  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Month in an Year
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Set current date
  let date = currentDateTime;

  let today =
    weekDay[date.getDay()] +
    "," +
    " " +
    months[date.getMonth()] +
    " " +
    " " +
    date.getDate() +
    "," +
    date.getFullYear();

  // Set current time

  let time = date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");

  // function for updating time

  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return (
    <>
      {/* navigation bar area  */}
      <TheNavigationBar />

      {/* Profile with Image Section */}

      <Container>
        <Row className="Book-appouinment-main-container">
          <div className="Book-appointment-image-Container">
            <div className="Book-appointment-image">
              <img src={DoctorProfilePic} alt="Profile  of Doctor " />
            </div>
            <div className="Book-appointment-profile-Container">
              <h3>Dr. Neslihan Atagul</h3>
              <h4>Online Video Consultation</h4>
              <span className="Book-appointment-fee">
                <h5>Fee:</h5>
                <span className="Book-appointment-price">
                  <h5>Rs. 1,000</h5>
                </span>
              </span>
            </div>
          </div>

          {/* Current Time and date section */}
          <div>
            <div className="date-time-container">
              <div className="current-date-time">
                <h3>Current Date & Time</h3>
              </div>
              <div className="current-time">
                <h4>{time}</h4>
              </div>
              <div className="current-month-date">
                <h4>{today}</h4>
              </div>
            </div>
          </div>
        </Row>
        <div style={{ marginTop: "60px" }}>
          <AppointmentSlot />
        </div>
      </Container>
    </>
  );
}

export default BookAppointment;
