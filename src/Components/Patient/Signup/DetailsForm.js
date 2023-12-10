import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import "./PatientSignup.css";
import React, { useState } from "react";
import Password from "antd/es/input/Password";

const defaultCheckedList = [];
const DetailsForm = () => {
  const gender = ["Male", "Female"];

  const onFinish = (values) => {
    console.log("Form submitted with values:", values);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
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
          <DatePicker format="DD/MM/YYYY" size="large" className="Input" />
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
                  <Checkbox>
                    By registering with Niyama,{" "}
                    <span className="checkSpan" onClick={() => {}}>
                      {" "}
                      I agree to Niyama Terms &Conditions, Privacy Policies.
                    </span>
                  </Checkbox>
                  <Checkbox>
                    I agree to have my notifications sent via Whatsapp.
                  </Checkbox>
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
  );
};

export default DetailsForm;
