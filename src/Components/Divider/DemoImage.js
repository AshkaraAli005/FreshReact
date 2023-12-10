import React, { useRef } from "react";
import { Button, Carousel, Image, Space, Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DemoContent.css";

const DemoImage = () => {
  const data = [
    { src: "https://picsum.photos/seed/img1/500/600" },
    { src: "https://picsum.photos/seed/img2/500/600" },
    { src: "https://picsum.photos/seed/img3/500/600" },
    { src: "https://picsum.photos/seed/img4/500/600" },
  ];
  const sliderRef = useRef();

  const prevSlide = () => {
    sliderRef.current.prev();
  };
  const nextSlide = () => {
    sliderRef.current.next();
  };

  return (
    <div className="demoImage">
      <Carousel dots={false} ref={sliderRef} style={{ height: "100%" }}>
        {data.map((item, index) => (
          <div className="imageSize" key={index}>
            <Image
              className="photoSize"
              src={item.src}
              alt="image"
              preview={false}
            />
          </div>
        ))}
      </Carousel>
      <div className="box">
        <Space>
          <div style={{ width: "70%" }}>
            <Typography.Title level={3}>
              Integrative & Personalise mental well-bring
            </Typography.Title>
            <Typography.Paragraph>
              Accessible, specialised Integrative mental healthcare in seconds
            </Typography.Paragraph>
          </div>

          <Button
            className="sliderButton"
            size="large"
            shape="circle"
            style={{ marginRight: "4%" }}
            onClick={prevSlide}
          >
            &lt;
          </Button>
          <Button
            className="sliderButton"
            size="large"
            shape="circle"
            onClick={nextSlide}
          >
            &gt;
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default DemoImage;
