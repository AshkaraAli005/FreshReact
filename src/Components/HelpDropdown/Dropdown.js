// Your Dropdown component using DraggablePopover
import React, { useRef, useState } from "react";
import HelpContent from "./HelpContent";
import HelpHeader from "./HelpHeader";
import Feedback from "./Feedback";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "./dropdown.css";
import Draggable from "react-draggable";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(null);
  const liked = () => {
    setLike(true);
  };
  const disliked = () => {
    setLike(false);
  };
  const buttonRef = useRef(null);

  function handleComponentChange(newComponent) {
    setCurrentComponent(newComponent);
  }
  
  const onFeedbackClosed = () => {
    setCurrentComponent(
      <HelpContent
        handleComponentChange={handleComponentChange}
        feedbackClosed={onFeedbackClosed}
      />
    );
  };
  const popClose = () => {
    setOpen(!open);
    onFeedbackClosed();
  };

  const [currentComponent, setCurrentComponent] = useState(
    <HelpContent
      handleComponentChange={handleComponentChange}
      feedbackClosed={onFeedbackClosed}
    />
  );

  return (
    <div className="dropDown">
      {open ? (
        <Draggable handle=".chatPopupHeader2">
          <div className="chatPopup">
            {currentComponent.key !== "feedback" ? (
              <div>
                <HelpHeader
                  setOpen={popClose}
                  componentChange={handleComponentChange}
                  like={like}
                  liked={liked}
                  disliked={disliked}
                />
                <div className="chatPopupContent">{currentComponent}</div>
              </div>
            ) : (
              <Feedback
                onChangeComponent={onFeedbackClosed}
                setOpen={popClose}
                like={like}
                liked={liked}
                disliked={disliked}
              />
            )}
          </div>
        </Draggable>
      ) : (
        <Button ref={buttonRef} shape="circle" onClick={popClose}>
          <MessageOutlined style={{ fontSize: "25px", color: "white" }} />
        </Button>
      )}
    </div>
  );
};

export default Dropdown;
