import { Container, Row, Col } from "react-bootstrap";
import "./DropDownicon.css";
import IconData from "./DropDownData";

export const DropDownicon = ({ img, onClick, children }) => {
  return (
    <>
      <div className="icon-main-container" onClick={onClick}>
        <p>{children}</p>
        <img src={img} onClick={onClick} alt="Dropdown" />
      </div>
    </>
  );
};

export const DropDownslot = ({ img, onClick, children }) => {
  return (
    <>
      <div className="icon-main-container" onClick={onClick}>
        <p>{children}</p>
        <img src={img} onClick={onClick} alt="Dropdown" />
      </div>
    </>
  );
};


export const DropDownContainer = ({
  lg,
  md,
  xs,
  FirstHeading,
  SecondHeading,
  IconArrow,
  marginBottom,
}) => {
  return (
    <>
      {" "}
      <Container className="DropDown-main-container">
        <Row>
          <Col
            className="px-0 Icon-heading"
            style={{ display: FirstHeading ? "block" : "none" }}
          >
            <h3>{FirstHeading}</h3>
          </Col>
        </Row>
        <Row>
          <Col
            className="px-0 Icon-second-heading"
            style={{ display: SecondHeading ? "block" : "none" }}
          >
            <p>
              {SecondHeading}
              <span>
                <img src={IconArrow} />
              </span>
            </p>
          </Col>
        </Row>
        <Row
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {IconData.map((icon) => (
            <Col
              className="px-0 mx-0 dropdown-card-main-container"
              lg={lg}
              md={md}
              xs={xs}
            >
              <div
                className="small-card-style"
                style={{ marginBottom: marginBottom }}
              >
                <img src={icon.image} alt="Doctor icons" />
                <p>{icon.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
