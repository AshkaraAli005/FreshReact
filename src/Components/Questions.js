import { Button, Form, Input } from "antd";
import React from "react";
import TextArea from "antd/es/input/TextArea";

const Questions = () => {
  return (
    <div>
      <Form>
        <h2>Ask Your Questions Below...</h2>
        <Form.Item name={"Question"}>
          <TextArea placeholder="Type Here" style={{height:"300px"}}></TextArea>
        </Form.Item>
        <Button type="primary" >Submit</Button>
      </Form>
    </div>
  );
};

export default Questions;
