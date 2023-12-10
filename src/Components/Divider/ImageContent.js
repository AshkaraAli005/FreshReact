import { Button } from "antd";
import React from "react";
import { Carousel } from "react-responsive-carousel";
//...
import sprite from "./sliderBtns.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageContent = () => {
  const data = [
    { src: "https://picsum.photos/seed/img1/500/600" },
    { src: "https://picsum.photos/seed/img2/500/600" },
    { src: "https://picsum.photos/seed/img3/500/600" },
    { src: "https://picsum.photos/seed/img4/500/600" },
  ];
  return (
    // <div className="fullContent">
    //   <Carousel>
    //     <div className="ImageContent">
    //       <img src="take_assessment.svg" className="imgWidth"></img>
    //     </div>
    //     <div className="ImageContent">
    //       <img src="take_assessment.svg" className="imgWidth"></img>
    //     </div>
    //     <div className="ImageContent">
    //       <img src="take_assessment.svg" className="imgWidth"></img>
    //     </div>
    //   </Carousel>
    //   <div className="btnsContent ">
    //     <Button>Button 1</Button>
    //     <Button>Button 2</Button>
    //     <Button>Button 3</Button>
    //   </div>
    // </div>
    <div className="box">
      <Carousel
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <svg>
                  <use xlinkHref={sprite + "#right"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <svg>
                  <use xlinkHref={sprite + "#left"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
      >
        {data.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL.src} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageContent;
