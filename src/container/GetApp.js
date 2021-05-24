import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GetApp.css";
import playStore from "../Images/app (1).svg";
import appStore from "../Images/app (2).svg";
import nosheen from "../Images/Phone.svg";
import update from "../Images/Home.svg";
function GetApp() {
  return (
    <>
      <Container fluid className="Details_container">
        <Container className="s-c">
          <Row className="main_container">
            <Col lg={6} sm={12} className="column">
              <h3>Get eShaafi.com App</h3>
              <p>
                Download the app to book and manage your appointments, keep
                track of the payments and get instant medical advice in case of
                emergencies. Keep your health up to date.
              </p>
              <h4>Get the link to download app</h4>
              <div className="num_btn">
                <input type="tel" placeholder="Phone Number" />
                <button>Get Link</button>
              </div>
              <Col lg={9} className="app_logo">
                <img src={playStore} />
                <img src={appStore} />
              </Col>
            </Col>
            <Col lg={6} sm={12} className="images_">
              <Col lg={6} className="nosheen">
                <img src={nosheen} />
              </Col>
              <Col lg={6} className="update">
                <img src={update} />
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default GetApp;
