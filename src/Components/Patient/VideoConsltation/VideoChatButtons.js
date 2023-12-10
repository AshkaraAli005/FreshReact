import React from "react";
import chatIcon from "./Assets/chat1.svg";
import FlipCamIcon from "./Assets/flip 1.svg";
import CameraIcon from "./Assets/vCamera.svg";
import MicIcon from "./Assets/mic.svg";
import CallCut from "./Assets/Frame 4104.svg";

const VideoChatButtons = (props) => {
  return (
    <div className="video-section">
      <div className="video-icons">
        <div>
          <img src={MicIcon} className="icons" />
        </div>
        <div>
          <img src={CameraIcon} className="icons camera" />
        </div>
        <div>
          <img src={FlipCamIcon} className="icons " />
        </div>
        <div>
          <img
            src={chatIcon}
            className="icons"
            onClick={() => {
              props.setchatOpen(true);
            }}
          />
        </div>
        <div>
          <img src={CallCut} className="icons call-end" />
        </div>
      </div>
    </div>
  );
};

export default VideoChatButtons;
