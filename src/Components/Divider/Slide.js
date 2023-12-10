import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="fullContent">
        <div className="ImageContent">
          <Slider {...settings}>
            <img src="take_assessment.svg" className="imgWidth" />

            <img src="take_assessment.svg" className="imgWidth" />
          </Slider>
        </div>
        <div style={{ width: "50%", height: "100%" }}>form</div>
      </div>
    );
  }
}
