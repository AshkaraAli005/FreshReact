import React, { useEffect, useRef, useState } from "react";
import { Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ImageCarousel = (props) => {
  const sliderRef = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [tabScreen, setTabScreen] = useState(true);

  const prevSlide = () => {
    sliderRef.current.prev();
  };
  const nextSlide = () => {
    sliderRef.current.next();
  };
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setIsSmallScreen(screenWidth <= 600);
    setTabScreen(screenWidth > 600 && screenWidth <= 850);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Carousel dots={isSmallScreen || tabScreen} ref={sliderRef}>
        {props.imageData.map((item, index) => (
          <div>
            <img className="imgContent" src={item.src} alt="img" />
            {isSmallScreen && (
              <div className="carouseContent">
                <div className="carouseText">
                  <div className="carouseHeader">
                    Integrative & personalised mental well-being
                  </div>
                  <div className="carousePara">
                    Accessible, specialised integrative mental healthcare in
                    seconds.
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      {!isSmallScreen && (
        <div className="carouseContent">
          <div className="carouseText">
            <div className="carouseHeader">
              Integrative & personalised mental well-being
            </div>
            <div className="carousePara">
              Accessible, specialised integrative mental healthcare in seconds.
            </div>
          </div>
          {!tabScreen && (
            <div className="sliderBtnDiv">
              <Button
                className="sliderButton"
                size="large"
                shape="circle"
                onClick={prevSlide}
                icon={<LeftOutlined style={{ color: "white" }} />}
              ></Button>
              <Button
                className="sliderButton"
                shape="circle"
                size="large"
                onClick={nextSlide}
                icon={<RightOutlined style={{ color: "white" }} />}
              ></Button>
            </div>
          )}
        </div>
      )}
    </div>

    // <div>
    //   <Carousel dots={false} ref={sliderRef}>
    //     {imageData.map((item, index) => (
    //       <div className="carouselItem" key={index}>
    //         <img className="imgContent" src={item.src} alt="img" />
    //         <div className="carouseContent">
    //           <div className="carouseText">
    //             <div className="carouseHeader">
    //               Integrative & personalised mental well-being
    //             </div>
    //             <div className="carousePara">
    //               Accessible, specialised integrative mental healthcare in
    //               seconds.
    //             </div>
    //           </div>
    //           <div className="sliderBtnDiv">
    //             <Button
    //               className="sliderButton"
    //               size="large"
    //               shape="circle"
    //               onClick={prevSlide}
    //               icon={<LeftOutlined style={{ color: "white" }} />}
    //             ></Button>
    //             <Button
    //               className="sliderButton"
    //               shape="circle"
    //               size="large"
    //               onClick={nextSlide}
    //               icon={<RightOutlined style={{ color: "white" }} />}
    //             ></Button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>
  );
};

export default ImageCarousel;
