import { Container, Row, Col } from "react-bootstrap";
import "./DropDownicon.css";
import IconData from "./DropDownData";
import IconArrow from "../../Images/Icons/iconArrow.svg";
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

export const DropDownContainer = () => {
  return (
    <>
      {" "}
      <Container className="DropDown-main-container">
        <Row>
          <Col className="px-0 Icon-heading">
            <h3>Choose a specialty</h3>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 Icon-second-heading">
            <p>
              View all specialties
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
              lg={3}
              md={3}
              xs={6}
            >
              <div className="small-card-style">
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
