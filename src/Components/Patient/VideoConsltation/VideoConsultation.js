import { CheckCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./VideoConsultation.css";
import Dot from "./Assets/Dot.svg";

import VcContent from "./VcContent";

const VideoConsultation = () => {
  return (
    <div className="vid-Consultation">
      <div className="headerContent">
        <div className="DocDetails">
          <LeftCircleOutlined className="icn" />{" "}
          <div>
            Dr.Babu
            <img src={Dot} alt="Dot" /> Clinical Psychology
          </div>
        </div>
        <Button className="btn">
          <CheckCircleOutlined /> Finish Consultation
        </Button>
      </div>
      <VcContent />
    </div>
  );
};

export default VideoConsultation;
