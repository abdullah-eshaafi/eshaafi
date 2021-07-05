import React from "react";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import DoctorProfilePic from "../../../Images/BookAppointment/BA-Doctor-PP.svg";
import Clock from "../../../Images/Payment/Calender.svg";
import sm_clock from "../../../Images/Payment/sm-clock.svg";
import "./AppointmentDetails.css";
import Add_sign from "../../../Images/BookAppointment/Add-sign.svg";
import Footer from "../../../container/Footer";
function AppointmentDetails() {
  return (
    <>
      <TheNavigationBar />
      <Container style={{ marginTop: "32px" }}>
        <Row>
          <Col lg={8}>
            {" "}
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
                  <span className="Book-appointment-paid">
                    <button>Paid</button>
                  </span>

                  <span className="Book-appointment-img-Reschedule">
                    <img src={sm_clock} />
                  </span>
                  <p>Reschedule</p>
                  <span className="Book-appointment-img-cancel">
                    <img src={sm_clock} />
                  </span>
                  <p>Cancel Appointment</p>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="AppointmentDetails-heading">
              <h3>Appointment Confirmed</h3>
            </div>
            <div className="AppointmentDetails-date-time-main-container">
              <div className="AppointmentDetails-date-time-main">
                <div className="AppointmentDetails-date">
                  <span>
                    {" "}
                    <img src={Clock} />
                  </span>

                  <p>Mon, Sept 07</p>
                </div>

                <div className="AppointmentDetails-time">
                  <span>
                    <img src={Clock} />
                  </span>

                  <p>00:00 AM</p>
                </div>
              </div>
            </div>
            <div className="d-flex AppointmentDetails-patient">
              <span>
                <img src={Clock} />
              </span>
              <p>Patient Name</p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center medical-history-main-container">
          <Col lg={10} className="d-flex justify-content-between ">
            <div className="Share-medical-history">
              <h3>Share your medical history with your doctor</h3>
            </div>
            <div className="d-flex Share-medical-history">
              <span>
                <img src={Add_sign} />
              </span>
              <h3>Add New Record</h3>
            </div>
          </Col>
        </Row>
        {/* table for appointment */}

        <Row className="d-flex justify-content-center">
          <Col lg={10}>
            <div style={{ overflowY: "scroll", height: "336px" }}>
              {" "}
              <table class="table">
                <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
                  <tr id="Patient-Recore-Row">
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>Record For</th>
                    <th>Doctor’s Name</th>
                    <th>Record Type</th>
                    <th>Date</th>
                    <th>View Medical Record</th>
                  </tr>
                </thead>
                <tbody id="Patient-Records-Row">
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      {" "}
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="Record-patient-name-heading">
                      Patient Name
                    </td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Patient Name</td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Patient Name</td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Patient Name</td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Patient Name</td>
                    <td>Doctor Name</td>

                    <td>Prescription</td>
                    <td>28-02-2022</td>
                    <td>View Medical Record</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center record-share-btn">
            <button>Share</button>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center  record-view-details">
            <h4>
              To view details, reschedule or cancel appointment, click below
            </h4>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center  Go-To-Appointments">
            <h4>Go To My Appointments</h4>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default AppointmentDetails;
