import React from "react";
import ChatList from "./HelpChatList";
import Questions from "./Questions";
import { Button } from "antd";

const HelpContent = ({ handleComponentChange, feedbackClosed }) => {
  return (
    <div className="helpContent">
      <p>Hello ask me a question or Select one Below.</p>
      <h3>How can we Help you ?</h3>

      <ChatList
        onChangeComponent={handleComponentChange}
        feedbackClosed={feedbackClosed}
      />
      <div className="qnBtnDiv">
        <Button
          className="ask-qn-btn"
          size="large"
          style={{ color: "white", borderRadius: "5px",width:"92.5%" }}
          onClick={() =>
            handleComponentChange(
              <Questions onChangeComponent={handleComponentChange} />
            )
          }
        >
          Ask Question
        </Button>
      </div>
    </div>
  );
};

export default HelpContent;
