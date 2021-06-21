import React from "react";
import Left_Arrow from "../../Images/BookAppointment/left-arrow.svg";
import Right_Arrow from "../../Images/BookAppointment/Right-arrow.svg";
import { Container, Row } from "react-bootstrap";
import "./AppointmentSlot.css";
function AppointmentSlot() {
  return (
    <Container className="Appointment-main-container">
      <Row>
        <div>
          <img src={Left_Arrow} alt="left arrow of slider" />
        </div>
        <div>
          <img src={Right_Arrow} alt="Right arrow of slider" />
        </div>
      </Row>
    </Container>
  );
}

export default AppointmentSlot;
