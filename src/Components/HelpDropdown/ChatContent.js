import React from "react";
import HelpContent from "./HelpContent";
import { LeftOutlined, MessageFilled, SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const ChatContent = ({ onChangeComponent }) => {
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
          <p style={{}}>Main Menu</p>
        </div>
        <div className="chatContentHeaderDiv2" style={{}}>
          <p>Live Chat</p>
          <MessageFilled />
        </div>
      </div>
      <div className="chatContentInput">
        <Input size="large" placeholder="Type message here" />
        <Button size="large" className="btn">
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ChatContent;
