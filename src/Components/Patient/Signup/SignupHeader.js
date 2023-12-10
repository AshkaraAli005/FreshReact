import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const SignupHeader = () => {
  return (
    <Header className="signupHeader">
      <div className="header-div1">
        <img src="img-logo-n-green.svg" alt="" />
        <div className="typoDiv">
          <div className="typo">Niyama</div>
          <div className="typo">Health Care</div>
        </div>
      </div>
      <Button className="loginBtn">Login</Button>
    </Header>
  );
};

export default SignupHeader;
