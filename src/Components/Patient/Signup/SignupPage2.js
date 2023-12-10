import React, { useState } from "react";
import { Button, Form, Input, Layout } from "antd";
// import "./Divider.css";
import { InputOTP } from "antd-input-otp";
import {
  CheckCircleOutlined,
  EditOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import DetailsForm from "./DetailsForm";
import DeceptantsDetails from "./DeceptantsDetails";

const SignupPage2 = ({ user }) => {
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [mobileNum, setMobileNum] = useState(null);
  const [numVerified, setNumVerified] = useState(false);
  const [basicDetailsForm, setBasicDetailsForm] = useState(false);

  const changeEmail = (newEmail) => setEmail(newEmail);
  const changeNumber = (number) => setMobileNum(number);

  const onEmailVerified = () => setEmailVerified(true);

  const handleOtpChange = (value) => setOtpValue(value);

  const isOtpEmpty = typeof otpValue === "string" && otpValue.trim() === "";

  const renderEmailVerificationForm = () => (
    <Form className="signupForm">
      <Form.Item name="signupEmail" className="inputField">
        <div className="fullLabel">
          <div className="inputLabel">Email ID *</div>
          {otpVerified && <div className="verified">verified</div>}
        </div>

        <Input
          placeholder="Email"
          onChange={(e) => changeEmail(e.target.value)}
          value={email}
          className="mobileInput"
          suffix={
            emailVerified ? (
              otpVerified ? (
                <CheckCircleOutlined style={{ color: "#118e44" }} />
              ) : (
                <EditOutlined onClick={() => {}} style={{ color: "#118e44" }} />
              )
            ) : null
          }
        />
      </Form.Item>
      {!otpVerified ? (
        emailVerified ? (
          <Form className="signupForm">
            <Form.Item name="otp" className="inputField">
              <div className="inputLabel">Enter the OTP sent to your email</div>
              <div className="otpDiv">
                <InputOTP
                  type="numeric"
                  length={4}
                  value={otpValue}
                  onChange={handleOtpChange}
                />
                <span className="otpQuery">
                  Didn’t receive OTP?
                  <span onClick={() => {}}>Resend OTP</span>
                </span>
              </div>
            </Form.Item>
            <div>
              <Button
                className="verifyOtp"
                disabled={isOtpEmpty}
                onClick={() => setOtpVerified(true)}
              >
                Verify OTP
              </Button>
            </div>
            <div className="troubleReceiving">
              Trouble receiving OTP ? &nbsp;
              <span>Get OTP in call {<PhoneFilled />}</span>
            </div>
          </Form>
        ) : (
          <div className="signupForm">
            <div>
              <Button
                className="verifyOtp"
                disabled={email === ""}
                onClick={onEmailVerified}
              >
                Continue
              </Button>
            </div>
            <div className="troubleReceiving">
              Already have an account?&nbsp;
              <span>Login</span>
            </div>
          </div>
        )
      ) : (
        <div className="inputField">
          <div className="fullLabel">
            <div className="inputLabel">Mobile Number</div>
            {numVerified && <div className="verified">verified</div>}
          </div>
          <Input
            placeholder="Mobile number"
            onChange={(e) => changeNumber(e.target.value)}
            value={mobileNum}
            className="mobileInput"
            suffix={
              numVerified && (
                <CheckCircleOutlined style={{ color: "#118e44" }} />
              )
            }
          />
          <div>
            {!numVerified ? (
              <Button
                className="verifyOtp"
                onClick={() => setNumVerified(true)}
              >
                Continue
              </Button>
            ) : (
              <Button
                className="verifyOtp"
                onClick={() => setBasicDetailsForm(true)}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      )}
    </Form>
  );

  return (
    <div className="signupFieldContents">
      <div className="fieldInnerContent">
        <div className="headerInnerDiv">
          <div className="fieldDiv1">Let’s get your account set up</div>
          <div className="fieldDiv2Inner2">
            To make sure we get this right,
            <span>
              {!numVerified ? (
                <span> we need to verify your email and mobile number.</span>
              ) : (
                <span>we need some basic details. </span>
              )}
            </span>
          </div>
        </div>
        {!basicDetailsForm ? (
          renderEmailVerificationForm()
        ) : user === 1 ? (
          <DetailsForm />
        ) : (
          <DeceptantsDetails />
        )}
      </div>
    </div>
  );
};

export default SignupPage2;
