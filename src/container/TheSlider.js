import React from "react";
import "./TheSlider.css";
import { Container, Row } from "react-bootstrap";
import Card from "./Card.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "inline",
        background: "White",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "inline",
        background: "White",
      }}
      onClick={onClick}
    />
  );
}

export default function TheSlider() {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="slider-container">
        <Row className="justify-content-center">
          <div className="Doctor-heading">
            <h1>Our Doctors</h1>
          </div>
        </Row>
        <Row className="justify-content-center">
          <div className="Doctor-para" style={{ paddingTop: "8px" }}>
            <p>Find specialists as per your need</p>
          </div>
        </Row>

        <Slider
          {...settings}
          className="Slider-img"
          style={{ paddingTop: "36px" }}
        >
          {data.map((data) => (
            <Card pic={data.pic} title={data.title} />
          ))}
        </Slider>
        <Row className="justify-content-center" style={{ paddingTop: "28px" }}>
          <button id="btn-view">View All</button>
        </Row>
      </div>
    </Container>
  );
}
