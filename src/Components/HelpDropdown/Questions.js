import { LeftOutlined, MessageFilled } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";
import HelpContent from "./HelpContent";

const Questions = ({ onChangeComponent }) => {
  const Questions = [
    "How does Niyama AI ensure patient data privacy?",
    "Can Niyama AI integrate with existing EHR systems?",
    "How does Niyama AI stay at the forefront of healthcare innovation?",
  ];

  return (
    <div className="chatContent">
      <div className="chatContentHeader">
        <div className="chatContentHeaderDiv1">
          <LeftOutlined
            onClick={() =>
              onChangeComponent(
                <HelpContent handleComponentChange={onChangeComponent} />
              )
            }
          />
          <p>Main Menu</p>
        </div>
        <div className="chatContentHeaderDiv2" style={{}}>
          <p>Questions</p>
          <MessageFilled />
        </div>
      </div>
      <div className="qnsContent">
        <div className="qnsContent1">
          <Input.TextArea
            style={{ width: "100%", height: "10vh", resize: "none" }}
            placeholder="Ask your Questions.."
          ></Input.TextArea>
          <div>
            <h3 style={{ margin: "2% 0%" }}>Frequently asked questions:</h3>
            <div style={{ padding: "0% 4%" }}>
              {Questions.map((item, index) => (
                <div key={index} className="custom-tag" onClick={() => {}}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button size="large" className="ask-qn-btn" style={{ color: "white" ,width:"90%"}}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Questions;
