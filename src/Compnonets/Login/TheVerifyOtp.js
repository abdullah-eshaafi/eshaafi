import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import "./ThePhone.css";
function ThePhone(props) {
  return (
    <>
      <div style={{ display: props.phone ? "block" : "none" }}>
        {" "}
        <Row>
          <Col
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className="Modal-Header-first d-flex justify-content-center px-0"
          >
            <img src={props.phoneimg} />
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7} className="px-0">
            <Row>
              <span onClick={props.onHide} className="Modal-Header-second">
                <img src={props.backward} />
                <img src={props.close} />
              </span>
            </Row>
            <Row className="modal-logo-eshafi">
              <img src={props.finallogo} />
            </Row>
            <Row className="modal-para">
              <p>{props.text}</p>
            </Row>
            <Row className="modal-phone-num" style={{ marginTop: "0px" }}>
              {props.phoneNumberInput}
              {props.secondNumberInput}
            </Row>

            <Row className="modal-phone-num" style={{ marginTop: "10px" }}>
              {props.passwordInput}
            </Row>

            <Row className="modal-otp">{props.otpInput}</Row>
            <Row
              className="modal-resend-input"
              style={{ display: props.style }}
            >
              <p onClick={props.resend}>{props.ResendOtp}</p>
            </Row>
            <Row className="modal-num-btn">
              <button onClick={(e) => props.onclick(e)}>{props.title}</button>
            </Row>
            <Row
              style={{
                marginLeft: "4rem",
                marginRight: "4rem",
                marginTop: "8px",
                marginBottom: "3rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{props.remember}</span>
              <span>
                <p onClick={props.handleForgetPassword}>
                  {props.forgetpassword}
                </p>
              </span>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default ThePhone;
