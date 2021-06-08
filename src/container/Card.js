import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Card.css";

function Card({ pic, title }) {
  return (
    <Container>
      <Row className="card-primary-style">
        <img src={pic} />
      </Row>
      <Row className="justify-content-center">
        <div className="card-primary-style">
          {" "}
          <p>{title}</p>
        </div>
      </Row>
    </Container>
  );
}

export default Card;
