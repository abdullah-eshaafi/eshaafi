import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import phoneimg from "../../Images/phoneimg.svg";
import finallogo from "../../Images/FinalLogo.svg";
import close from "../../Images/close.svg";
import { Row, Col } from "react-bootstrap";
import "./ThePhone.css";
function ThePhone(props) {
  const [phoneBlock, setphoneBlock] = useState(true);
  const [otpBlock, setOtpBlock] = useState(false);

  const handlePhoneInput = () => {
    setphoneBlock(false);
    setOtpBlock(true);
  };

  return (
    <>
      <Modal show={props.show} size="lg" onHide={props.onHide}>
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
              <button onClick={handlePhoneInput}>Continue</button>
            </Row>
          </Col>
        </Row>
      </Modal>

      <Modal show={props.show} size="lg" onHide={props.onHide}>
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
              <button>Second one</button>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
export default ThePhone;
