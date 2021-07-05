import React, { useState, useEffect } from "react";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Col, Row } from "react-bootstrap";
import DoctorPaymentCard from "../../../Compnonets/PaymentReuse/DoctorPaymentCard";
import "./payment.css";
import Footer from "../../../Compnonets/Footer/Footer";
import PaymentModal from "../../../Compnonets/Pop-Ups/PaymentModal";
import { PaymentData } from "./PaymentData";
import Accordion from "./Accordian";

function Payment() {
  const [paymentModal, setpaymentModal] = useState(false);
  const [data, setData] = useState({});

  const handleIdChange = (payment) => {
    setpaymentModal(true);
    PaymentData.filter((item) => item.id === payment.id);
    setData(payment.clickData);
  };
  console.log(data);

  useEffect(() => {
    console.log(data);
  }, []);

  const handlepaymentModal = () => {
    setpaymentModal(false);
    setData({});
  };
  return (
    <>
      <TheNavigationBar />
      <Container>
        <Row
          className="d-flex justify-content-space-between"
          style={{ paddingTop: "16px" }}
        >
          <Col lg={8}>
            <div className="payment-to-confirm">
              <p>Please make the payment to confirm your appointment</p>
            </div>
            <div className="payment-methods-main-container">
              {PaymentData.map((payment) => (
                <Col
                  lg={11}
                  className="px-0 payment-card-selection"
                  key={payment.id}
                >
                  <div className="payment-card-">
                    <div className="d-flex pay-with-card-img">
                      <img src={payment.BankCard} />
                      <span className="d-flex align-items-center pay-with-card">
                        {payment.title}
                      </span>
                    </div>

                    <div className="images-card-selection">
                      <img src={payment.Visa} />
                      <img src={payment.master} />
                      <img src={payment.Jcb} />
                      <img src={payment.union} />
                    </div>
                    <div className="d-flex align-items-center pay-with-card">
                      <input
                        type="Radio"
                        // onChange={() => handlePaymentMethod(PaymentData.id)}
                        name="radioValues"
                        // onClick={paymentModalhandle}
                        // checked={selected}
                        onClick={() => handleIdChange(payment, data)}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <Col className="change-appointment-time px-0" lg={11}>
              <p>Want to change the Appointment date & time before paying</p>
            </Col>
            <Col className="change-appointment-time px-0" lg={11}>
              <button>Go Back</button>
            </Col>

            <div className="F-A-Q-S">
              <h3>FAQs </h3>
            </div>
            <Col lg={11} className="px-0">
              <Accordion
                title="How online consultation works?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <Accordion
                title="How online consultation works?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Accordion
                title="How online consultation works?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Col>
          </Col>
          <Col lg={4} className="d-flex justify-content-end px-0">
            <DoctorPaymentCard />
          </Col>
        </Row>
      </Container>
      <Footer />
      <div style={{ display: paymentModal ? "block" : "none" }}>
        <PaymentModal
          show={paymentModal}
          close={handlepaymentModal}
          data={data}
        />
      </div>
    </>
  );
}

export default Payment;
