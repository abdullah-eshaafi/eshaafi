import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import close from "../../Images/close.svg";
import "./ThePhone.css";
import phoneimg from "../../Images/phoneimg.svg";
import finallogo from "../../Images/FinalLogo.svg";
function ThePhone(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {" "}
        <Row>
          <Col
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={5}
            className="Modal-Header-first d-flex justify-content-center"
          >
            <img src={phoneimg} />
          </Col>
          <Col xl={7} lg={7} md={7} sm={7} xs={7}>
            <Row>
              <span onClick={props.onHide} className="Modal-Header-second">
                <img src={close} />
              </span>
            </Row>
            <Row className="modal-logo-eshafi">
              <img src={finallogo} />
            </Row>
            <Row className="modal-para">
              <p>Please enter your phone number to login or register </p>
            </Row>
            <Row className="modal-phone-num">
              <input type="phone" />
            </Row>
            <Row className="modal-num-btn">
              <button>Continue</button>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
export const Btn = {};
export default ThePhone;
