import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container } from "react-bootstrap";
import "./Footer.css";
import google from "../Images/google.svg";
const Footer = () => {
  return (
    <Container fluid className="footer-container-fluid">
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mt-3 Links-footer-second"
            >
              <h6 className="Links-footer">Company</h6>
              <p>
                <a href="#!">About Us</a>
              </p>
              <p>
                <a href="#!">Blog</a>
              </p>
              <p>
                <a href="#!">Careers</a>
              </p>
              <p>
                <a href="#!">Contact us</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mt-3 Links-footer-second"
            >
              <h6 className="Links-footer">Support</h6>
              <p>
                <a href="#!">Help Center</a>
              </p>
              <p>
                <a href="#!">Safety Center</a>
              </p>
              <p>
                <a href="#!">Community guidelines</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mt-3 Links-footer-second "
            >
              <h6 className=" Links-footer">Legal</h6>
              <p>
                <a href="#!">Cookies Policy</a>
              </p>
              <p>
                <a href="#!">Privacy Policy</a>
              </p>
              <p>
                <a href="#!">Terms of Service</a>
              </p>
              <p>
                <a href="#!">Law Enforcement</a>
              </p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="Links-footer">Contact</h6>
              <p>
                {" "}
                <img src={google} />
              </p>
              <p>
                <img src={google} />
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      <hr />
      <Container>
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="7" lg="8" className="footer-social-col">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} All Rights Reserved eShaafi.com
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </Container>
    </Container>
  );
};

export default Footer;
