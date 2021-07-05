import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./PaymentModal.css";
import Close from "../../Images/close.svg";
import Jazzcash from "../../Images/Payment/Jazzcash.svg";
function PaymentModal(props) {
  return (
    <div className="modal---">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modal---">
          <div className="d-flex justify-content-end payment-modal-close-icon">
            <img src={Close} onClick={props.close} width="24px" height="24px" />
          </div>
          <div className="d-flex justify-content-center payment-modal-icon">
            <img
              src={props.data.img}
              onClick={props.close}
              width="115px"
              height="80px"
            />
          </div>
          <div className="d-flex justify-content-center payment-modal-desc">
            <p>{props.data.desc}</p>
          </div>

          <div className="d-flex justify-content-center payment-modal-name-input">
            <input
              type="text"
              placeholder={props.data.namePlacehoder}
              style={{ display: props.data.namePlacehoder ? "block" : "none" }}
            />
          </div>

          <div className="d-flex justify-content-center payment-modal-name-input">
            <input
              type="text"
              placeholder={props.data.Card_Number}
              style={{ display: props.data.Card_Number ? "block" : "none" }}
            />
          </div>

          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-space-between">
              <span className="card-expiry-date">
                <input
                  type="text"
                  placeholder={props.data.expiry}
                  style={{ display: props.data.expiry ? "block" : "none" }}
                />
              </span>
              <span className="card-expiry-date d-flex justify-content-end">
                <input
                  id="card-expiry-date"
                  type="text"
                  placeholder={props.data.Cvv}
                  style={{ display: props.data.Cvv ? "block" : "none" }}
                />
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button id="pay-now-payment">Pay Now</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentModal;
