import React, { useRef } from "react";
import "./carosel.css";
import {
  Button,
  Carousel,
  Image,
  Space,
  Typography,
  Form,
  Input,
  Layout,
} from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Divider.css";
import { InputOTP } from "antd-input-otp";

import {
  EditOutlined,
  LeftCircleFilled,
  PhoneFilled,
  RightCircleFilled,
} from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";

const Carosel = () => {
  const data = [
    { src: "image.png" },
    { src: "https://picsum.photos/seed/img1/750/750" },
    { src: "https://picsum.photos/seed/img2/750/750" },
    { src: "https://picsum.photos/seed/img3/750/750" },
    { src: "https://picsum.photos/seed/img4/750/750" },
  ];

  const sliderRef = useRef();

  const prevSlide = () => {
    sliderRef.current.prev();
  };
  const nextSlide = () => {
    sliderRef.current.next();
  };

  return (
    <div className="fullContent">
      <div className="demoImage">
        <Carousel dots={false} ref={sliderRef}>
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
          <Space
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "70%" }}>
              <Typography.Title level={3}>
                Integrative & Personalise mental well-bring
              </Typography.Title>
              <Typography.Paragraph>
                Accessible, specialised Integrative mental healthcare in seconds
              </Typography.Paragraph>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "5%" }}>
              <LeftCircleFilled
                className="sliderButton"
                size="large"
                shape="circle"
                style={{ color: " #ffffff42" }}
                onClick={prevSlide}
              />

              <RightCircleFilled
                className="sliderButton"
                size="large"
                style={{ color: " #ffffff42" }}
                shape="circle"
                onClick={nextSlide}
              />
            </div>
          </Space>
        </div>
      </div>
      <div className="btnsContent">
        <Form layout="vertical" style={{ width: "80%", paddingLeft: "20%" }}>
          <h2>Login to your account</h2>
          <Form.Item label="Mobile Number" rules={[{ required: true }]}>
            <Input
              placeholder="Mobile Number"
              className="mobileInput"
              suffix={
                <EditOutlined onClick={() => {}} style={{ color: "#118e44" }} />
              }
            ></Input>
          </Form.Item>

          <Form.Item
            label="Enter the otp sent to your mobile number"
            name="otp"
          >
            <div style={{ width: "80%" }}>
              <InputOTP type="numeric" length={4} />

              <span className="otpQuery">
                Didnt Recieve OTP? <span onClick={() => {}}>Resend OTP</span>
              </span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button className="verifyOtp" disabled>
              Verify OTP
            </Button>
          </Form.Item>
          <span className="troubleReceiving">
            Trouble receiving OTP ?
            <span>Get OTP in call {<PhoneFilled />}</span>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default Carosel;
