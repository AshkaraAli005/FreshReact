import React, { useRef } from "react";
import { Button, Form, Input, Layout } from "antd";
import "./Divider.css";
import { InputOTP } from "antd-input-otp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EditOutlined, PhoneFilled } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";

const Splitter = () => {
  return (
    // <Layout className="fullLayout">
    //   <Header style={{backgroundColor:"rgba(0,0,0,0)" ,}}><h2>Niyama</h2></Header>
    //   <Content>
        <div className="fullContent">
          <div className="ImageContent">
            <img src="take_assessment.svg" className="imgWidth" />
          </div>

          <div className="btnsContent">
            <Form layout="vertical" style={{ width: "80%" }}>
              <h2>Login to your account</h2>
              <Form.Item label="Mobile Number" rules={[{ required: true }]}>
                <Input
                  placeholder="Mobile Number"
                  className="mobileInput"
                  suffix={
                    <EditOutlined
                      onClick={() => {}}
                      style={{ color: "#118e44" }}
                    />
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
                    Didnt Recieve OTP?{" "}
                    <span onClick={() => {}}>Resend OTP</span>
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
    //   </Content>
    // </Layout>
  );
};

export default Splitter;
