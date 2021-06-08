import React from "react";
import { Row, Col } from "react-bootstrap";
import { TheButton } from "../Utils/Buttons.js";
import "./Card.css";
import DoctorListingData from "./TheDoctorlistData";
function Card() {
  return (
    <> {DoctorListingData.map((data) => (
     
      <Row
      style={{
        border: "1px solid #CCCCCC",
        boxSizing: "border-box",
        borderRadius: "6px",
        marginBottom:"16px"
      }}
    >
     
          <Col
            lg={3}
            className="px-0"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={data.DoctorImage} />
          </Col>
          <Col
            className="px-0 Doctor-info"
            lg={6}
            style={{ backgroundColor: "transparent" }}
          >
            <h3>{data.Doctorname}</h3>
            <h4>{data.Position}</h4>
            <h5>{data.Qualification}</h5>
            <Row>
              <Col className="doctor-stats px-0">
                <h3>{data.Work_year}</h3>
                <h4>{data.Work_Experience}</h4>
              </Col>
              <Col className="doctor-stats px-0">
                <h3>{data.Review}</h3>
                <h4>{data.Recommended}</h4>
              </Col>
              <Col className="doctor-stats px-0 mx-0">
                <h3>{data.Fee}</h3>
                <h4>{data.Currency}</h4>
              </Col>
            </Row>
          </Col>
          <Col
            className="px-0"
            lg={3}
            style={{ backgroundColor: "transparent" }}
          >
            <TheButton
              title={data.ButtonTitle}
              buttonStyle="btn-secondry-style"
              buttonSize="btn-secondry-size"
            />

            <TheButton
              title={data.SecondButtonTitle}
              buttonStyle="btn-third-style"
              buttonSize="btn-third-size"
            />
          </Col>{" "}
     
    </Row>
    
       ))}
       </>
  );
}

export default Card;
