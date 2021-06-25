import React from "react";
import { Row, Col } from "react-bootstrap";
import { arrayData } from "./BookAppoinmentData";
function AppointmentSlotTimings({ img }) {
  return (
    <div>
      <Row>
        <Col lg={4} style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            style={{ display: "flex", paddingRight: "40px", paddingTop: "8px" }}
          >
            <span style={{ marginRight: "8px" }}>
              <img src={img} alt="morning time presentation" />
            </span>{" "}
            <p>Morning</p>
          </span>
        </Col>
        <Col lg={8}>
          <Row style={{ display: "flex", width: "80%" }}>
            {arrayData.map((data) => (
              <div className="px-0 mx-0 ">
                <div
                  className="timings-slot"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{data.timings.booked}</p>
                </div>
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AppointmentSlotTimings;
