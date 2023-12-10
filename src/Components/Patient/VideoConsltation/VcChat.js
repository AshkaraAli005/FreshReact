import React from "react";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const VcChat = (props) => {
  return (
    <div className="chatDiv">
      <div className="chatDivHeader">
        <div>Chat</div>
        <CloseOutlined
          onClick={() => {
            props.setchatOpen(false);
          }}
        />
      </div>
      <div className="chatDivContent"></div>
      <div className="chatDivFooter0">
        <div className="chatDivFooter">
          <Input placeholder="Type a new message..."></Input>
          <Button className="chatSendBtn">
            <SendOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VcChat;
