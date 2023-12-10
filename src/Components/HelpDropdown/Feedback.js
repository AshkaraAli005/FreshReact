import React, { useState } from "react";
import {
  CloseCircleFilled,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Button, Input, Typography } from "antd";

const Feedback = ({ onChangeComponent, setOpen, liked, disliked, like }) => {
  // const [like, setLike] = useState(null);
  // const liked = () => {
  //   setLike(true);
  // };
  // const disliked = () => {
  //   setLike(false);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="chatPopupHeader">
        <div className="chatPopupHeader2">
          <div>
            <Typography className="typography1">Leave your feedback</Typography>
            <span className="typography3">
              your valuable rating is important to us
            </span>
          </div>
        </div>
        <div style={{ margin: "4%" }}>
          <CloseCircleFilled
            style={{ color: "white", fontSize: "20px" }}
            onClick={handleClose}
          />
        </div>
      </div>
      <div className="chatPopupContent" style={{ minHeight: "45vh" }}>
        <div className="feedbackContent0">
          <div className="feedbackContent">
            <div className="feedbackContent1">
              <p>Tell how you rate out service</p>
              <div className="thumbsButton">
                <Button
                  shape="circle"
                  size="large"
                  onClick={liked}
                  style={{
                    backgroundColor: like === true ? "green" : "#c9c9c9",
                  }}
                >
                  <LikeFilled className="thumbs" />
                </Button>
                <Button
                  shape="circle"
                  size="large"
                  onClick={disliked}
                  style={{
                    backgroundColor: like === false ? "red" : "#c9c9c9",
                  }}
                >
                  <DislikeFilled className="thumbs" />
                </Button>
              </div>
            </div>
            <Input.TextArea
              className="txtarea"
              size="large"
              style={{ resize: "none" }}
              placeholder="Add your comments here.."
            ></Input.TextArea>
          </div>

          <div className="feedbackBtns">
            <Button
              size="large"
              onClick={onChangeComponent}
              style={{ width: "40%" }}
            >
              Close
            </Button>
            <Button
              size="large"
              className="btnColor"
              style={{
                width: "40%",
                backgroundColor: "#118e44",
                color: "white",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
