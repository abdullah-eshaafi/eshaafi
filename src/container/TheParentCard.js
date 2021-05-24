import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheCrad from "./TheCard.js";
function TheParentCard() {
  return (
    <>
      <Container>
        <TheCrad />
        <TheCrad />
      </Container>
    </>
  );
}

export default TheParentCard;
