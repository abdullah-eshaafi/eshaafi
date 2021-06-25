import React from "react";
import "./BookAppointment.css";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Row, Col, Dropdown, Table } from "react-bootstrap";
import DoctorProfilePic from "../../../Images/BookAppointment/BA-Doctor-PP.svg";
import AppointmentSlot from "../../../Compnonets/BookAppointMentReuse/AppointmentSlot";
import { useState } from "react";
import Footer from "../../../Compnonets/Footer/Footer";
import calender from "../../../Images/BookAppointment/calendar.svg";

function BookAppointment() {
  //  state of current time

  const [currentDateTime, setCurrentTime] = useState(new Date());
  const [showSlots, setShowSlots] = useState(false);
  const [showappointment, setShowappointment] = useState(true);

  //  Days of Week

  // let weekDay = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // // Month in an Year
  // let months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // Set current date
  // let date = currentDateTime;

  // let today =
  //   weekDay[date.getDay()] +
  //   "," +
  //   " " +
  //   months[date.getMonth()] +
  //   " " +
  //   " " +
  //   date.getDate() +
  //   "," +
  //   date.getFullYear();

  // Set current time

  // let time = date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");

  // // function for updating time

  // setInterval(() => {
  //   setCurrentTime(new Date());
  // }, 1000);

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
              <div className="current-time">{/* <h4>{time}</h4> */}</div>
              <div className="current-month-date">{/* <h4>{today}</h4> */}</div>
            </div>
          </div>
        </Row>
        <div style={{ display: showSlots ? "block" : "none" }}>
          <AppointmentSlot />
        </div>

        <div style={{ display: showappointment ? "block" : "none" }}>
          <Container>
            <Row>
              <div
                className="col-md-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Table bordered style={{ width: "400px" }}>
                  <thead>
                    <tr id="bookappointment-image-container">
                      <th id="calender-img">
                        <img src={calender} />
                      </th>
                      <th id="clock-img">
                        <img src={calender} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="book-date">Mon, Sept 09</td>
                      <td id="book-time">00:00 AM</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
            <Row className="bookappoint-choose-date-row">
              <div className="bookappoint-choose-date-div">
                <p>Choose another date or time</p>
              </div>
            </Row>

            <Row className="bookappoint-choose-date-row ">
              <div className="choose-appointment-div">
                <p>Appointment For</p>
              </div>
            </Row>

            <Row className="bookappoint-choose-date-row">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Shahid Khan Afridi (Myself)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Shahid Khan Afridi (Myself)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Shahid Khan Afridi (Myself)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Shahid Khan Afridi (Myself)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>

            <Row className="bookappoint-choose-date-row">
              <div className="bookappoint-add-member">
                <p>Add a new member</p>
              </div>
            </Row>

            <Row className="bookappoint-choose-date-row">
              <div className="bookappointment-booking-btn">
                <button>Confirm Booking</button>
              </div>
            </Row>

            <Row className="bookappoint-choose-date-row">
              <div
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                className="bookapointment-terms"
              >
                <p>By continuing you agree to terms & conditions </p>
              </div>
            </Row>
          </Container>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default BookAppointment;
