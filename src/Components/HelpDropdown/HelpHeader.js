import { CloseCircleFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";
import Feedback from "./Feedback";

const HelpHeader = ({ setOpen, componentChange, liked, disliked, like }) => {
  return (
    <div className="chatPopupHeader">
      <div className="chatPopupHeader2">
        <Avatar className="avatar" size={64} icon={<UserOutlined />} />
        <div>
          <Typography className="typography">I'm Clara</Typography>
          <span className="typography2">Care Navigator</span>
        </div>
      </div>
      <div className="closeButton">
        <CloseCircleFilled
          onClick={() =>
            like === null
              ? componentChange(
                  <Feedback
                    key="feedback"
                    onChangeComponent={componentChange}
                    like={like}
                    liked={liked}
                    disliked={disliked}
                  />
                )
              : setOpen()
          }
          style={{ color: "white", fontSize: "25px" }}
        />
      </div>
    </div>
  );
};

export default HelpHeader;
