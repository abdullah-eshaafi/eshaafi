import React from "react";
import TheNavigationBar from "../../../container/TheNavigationBar";
import { Container, Col, Row } from "react-bootstrap";
import DoctorPaymentCard from "../../../Compnonets/PaymentReuse/DoctorPaymentCard";

function payment() {
  return (
    <>
      <TheNavigationBar />
      <Container>
        <Row className="d-flex justify-content-space-between">
          <Col lg={8}>1</Col>
          <Col lg={3} className="d-flex ">
            <DoctorPaymentCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default payment;
