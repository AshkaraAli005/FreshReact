import React from "react";
import { Button, Checkbox, Form, Input, Select, DatePicker } from "antd";
import { Option } from "antd/es/mentions";
import { LeftOutlined } from "@ant-design/icons";
import "./addMember.css";

const AddMember = () => {
  const dependentRelationship = ["Brother", "Sister", "Cousin"];
  const gender = ["Male", "Female"];

  return (
    <div className="addMember">
      <div className="topper">
        <Button size="large">
          <LeftOutlined />
          Back
        </Button>
        <div className="headTitle">Add New Member</div>
      </div>
      <div className="content1">
        <div className="contentDiv1">Let’s get your account set up</div>
        <div className="contentDiv2">
          To make sure we get this right, we need some basic details and
          guardian’s consent.
        </div>
      </div>
      <div className="content2">
        <div className="content2Div1">Dependant Details</div>
        <div className="contentDiv2">Enter the details of dependant</div>
        <Form layout="vertical" className="formContent">
          <Form.Item label="Relationship with Dependant *">
            <Select size="large" className="names" defaultValue="Cousin">
              {dependentRelationship.map((relation) => {
                return <Option value={relation}>{relation}</Option>;
              })}
            </Select>
          </Form.Item>
          <div className="nameDiv">
            <Form.Item label="First Name *" className="names">
              <Input size="large" className="nameInput"></Input>
            </Form.Item>
            <Form.Item label="Last Name *" className="names">
              <Input size="large" className="Input"></Input>
            </Form.Item>
          </div>
          <Form.Item label="Date Of Birth *">
            <DatePicker format="DD/MM/YYYY" size="large" className="Input" />
          </Form.Item>
          <Form.Item label="Gender *">
            <Select size="large" defaultValue="Female" className="Input">
              {gender.map((value) => {
                return (
                  <Option value={value} key={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
        <div className="checkDiv">
          <Checkbox className="checkBox">
            By registering with Niyama, on behalf of Dependant, I agree to
            <span className="checkBoxSpan">
              Niyama Terms & Conditions, Privacy Policies.
            </span>
          </Checkbox>
          <Checkbox className="checkBox">
            I agree to
            <span className="checkBoxSpan">
              Parental Consent for Child/Adolescent Mental Health Assessment and
              Treatment.
            </span>
          </Checkbox>
          <Checkbox className="checkBox">
            I agree to have my notifications sent via Whatsapp.
          </Checkbox>
        </div>
      </div>
      <div className="createBtn">
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default AddMember;
