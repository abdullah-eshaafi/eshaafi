import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Card.css";

function Card({ pic, title }) {
  return (
    <Container>
      <Row className="Card" >
        <img src={pic} />
      </Row>
      <Row className="justify-content-center">
        <div className="paragr">
          {" "}
          <p>{title}</p>
        </div>
      </Row>
    </Container>
  );
}

export default Card;
