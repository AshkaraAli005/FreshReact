import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
  message,
} from "antd";

import { Option } from "antd/es/mentions";
import "./PatientSignup.css";
import React, { useState } from "react";
import Password from "antd/es/input/Password";
import ConsentForm from "./ConsentForm";

const DeceptantsDetails = () => {
  const [date, setDate] = React.useState(false);
  const gender = ["Male", "Female"];
  const [deceptantFilled, setDeceptantFilled] = useState(false);
  const [deceptantDetail, setDeceptantDetail] = useState("");
  const [deceptantName, setDeceptantName] = useState("");
  const [deceptantDob, setDeceptantDob] = useState("");
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  function onSelectDate(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }

  const onDeceptantFinish = (values) => {
    const { firstName1, firstName2, gender } = values;
    const deceptantDetails = `${firstName1} ${firstName2}, ${date} , ${gender}`;
    const deceptantname = `${firstName1} ${firstName2}`;
    setDeceptantDetail(deceptantDetails);
    console.log("Deceptant Form submitted with values:", values);
    setDeceptantFilled(true);
    setDeceptantName(deceptantname);
  };
  const onGuardianFinish = (values) => {
    console.log("Guardian Form submitted with values:", values);
  };
  return (
    <div>
      {!deceptantFilled && (
        <Form layout="vertical" onFinish={onDeceptantFinish}>
          <Form.Item>
            <div className="fieldDiv3">
              <div className="fieldDiv2Inner1">Dependant Details</div>
              <div className="fieldDiv2Inner2">
                Enter the details of dependant
              </div>
            </div>
          </Form.Item>
          <div className="nameFields">
            <Form.Item
              label="First Name"
              className="names"
              name="firstName1"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="firstName2"
              className="names"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
          </div>
          <Form.Item
            label="Date Of Birth *"
            name="dob"
            rules={[
              { required: true, message: "Please select your date of birth!" },
            ]}
          >
            <DatePicker
              format="DD/MM/YYYY"
              size="large"
              className="Input"
              onChange={onSelectDate}
            />
          </Form.Item>
          <Form.Item
            label="Gender *"
            name="gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Select size="large" placeholder="select Gender " className="Input">
              {gender.map((value) => (
                <Option value={value} key={value}>
                  {value}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="verifyOtp">
              Proceed
            </Button>
          </Form.Item>
        </Form>
      )}
      {deceptantFilled && (
        <div>
          <div>
            <div className="fieldDiv2Inner1">Deceptant Details</div>
            <div className="fieldDiv2Inner2">{deceptantDetail}</div>
            <Divider></Divider>
          </div>

          <Form layout="vertical" onFinish={onGuardianFinish}>
            <Form.Item>
              <div className="fieldDiv3">
                <div className="fieldDiv2Inner1">Guardian Details</div>
                <div className="fieldDiv2Inner2">
                  Enter the details of dependant
                </div>
              </div>
            </Form.Item>
            <div className="nameFields">
              <Form.Item
                label="First Name"
                className="names"
                name="firstName1"
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="firstName2"
                className="names"
                rules={[
                  { required: true, message: "Please enter your last name!" },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <Form.Item
              label="Date Of Birth *"
              name="dob"
              rules={[
                {
                  required: true,
                  message: "Please select your date of birth!",
                },
              ]}
            >
              <DatePicker format="DD/MM/YYYY" size="large" className="Input" />
            </Form.Item>
            <Form.Item
              label="Gender *"
              name="gender"
              rules={[
                { required: true, message: "Please select your gender!" },
              ]}
            >
              <Select
                size="large"
                placeholder="select Gender "
                className="Input"
              >
                {gender.map((value) => (
                  <Option value={value} key={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Set Password *"
              name="password"
              rules={[{ required: true, message: "Please set your password!" }]}
            >
              <Password size="large" />
            </Form.Item>
            <Form.Item
              label="Confirm Password *"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords do not match!");
                  },
                }),
              ]}
            >
              <Password size="large" />
            </Form.Item>

            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.firstName1 !== currentValues.firstName1 ||
                prevValues.firstName2 !== currentValues.firstName2 ||
                prevValues.dob !== currentValues.dob ||
                prevValues.gender !== currentValues.gender ||
                prevValues.password !== currentValues.password ||
                prevValues.confirmPassword !== currentValues.confirmPassword
              }
            >
              {({ getFieldValue }) => {
                const isFormFilled =
                  getFieldValue("firstName1") &&
                  getFieldValue("firstName2") &&
                  getFieldValue("dob") &&
                  getFieldValue("gender") &&
                  getFieldValue("password") &&
                  getFieldValue("confirmPassword");

                return isFormFilled ? (
                  <Form.Item>
                    <div className="checkBoxes">
                      <div
                        className="checkBoxDiv"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <Checkbox></Checkbox>
                        <div>
                          By registering with Niyama, on behalf of Dependant, I
                          agree to{" "}
                          <span className="checkSpan" onClick={() => {}}>
                            {" "}
                            Niyama Terms &Conditions, Privacy Policies.
                          </span>
                        </div>
                      </div>
                      <div
                        className="checkBoxDiv"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <Checkbox></Checkbox>
                        <div>
                          I agree to .{" "}
                          <span
                            className="checkSpan"
                            onClick={() => {
                              showModal();
                            }}
                          >
                            {" "}
                            Parental Consent for Child/Adolescent Mental Health
                            Assessment and Treatment
                          </span>
                          {open && (
                            <ConsentForm
                              open={open}
                              handleCancel={handleCancel}
                              deceptantName={deceptantName}
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className="checkBoxDiv"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <Checkbox></Checkbox>
                        <div>
                          I agree to have my notifications sent via Whatsapp.
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                ) : null;
              }}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="verifyOtp">
                Proceed
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default DeceptantsDetails;
