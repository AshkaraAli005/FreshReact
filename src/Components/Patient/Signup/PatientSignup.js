import Layout, { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import "./PatientSignup.css";

import SignUpPage1 from "./SignupPage";
import SignupHeader from "./SignupHeader";
import ImageCarousel from "./ImageCarousel";
import SignupPage2 from "./SignupPage2";

const PatientSignup = () => {
  const data = [
    { src: "image.png" },
    { src: "https://picsum.photos/seed/img10/750/860" },
    { src: "https://picsum.photos/seed/img25/750/860" },
    { src: "https://picsum.photos/seed/img35/750/860" },
    { src: "https://picsum.photos/seed/img4/750/860" },
    { src: "https://picsum.photos/seed/img5/750/860" },
    { src: "https://picsum.photos/seed/img6/750/860" },
    { src: "https://picsum.photos/seed/img7/750/860" },
    { src: "https://picsum.photos/seed/img8/750/860" },
  ];
  const setComponent = (value) => {
    setCurrentComponent(value);
  };
  const [currentComponent, setCurrentComponent] = useState(
    <SignUpPage1 changeComponent={setComponent} />
  );

  return (
    <div>
      <Layout className="fullContent2">
        <SignupHeader />
        <Content className="contents">
          <div className="signupContent">
            <ImageCarousel imageData={data} />
            <div className="mainFormContents">
              {currentComponent}
              {/* <SignupPage2 /> */}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default PatientSignup;
