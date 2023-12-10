import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import VideoChatButtons from "./VideoChatButtons";
import VcChat from "./VcChat";
import { InfoCircleFilled } from "@ant-design/icons";
import Modal1 from "./Modal1";
import docImg from "./Assets/Doc.jpg";
import patientImg from "./Assets/image.png";

const VcContent = () => {
  const [videoFeed, setVideoFeed] = useState(false);
  const [audioFeed, setAudioFeed] = useState(false);
  const [videoFeed1, setVideoFeed1] = useState(false);
  const [audioFeed1, setAudioFeed1] = useState(false);
  const [connected, setConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatOpen, setchatOpen] = useState(false);
  useEffect(() => {
    if (audioFeed1 && videoFeed1) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [audioFeed1, videoFeed1]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="vid-Content">
      <div className={chatOpen ? "videoContainer" : "video-container"}>
        {connected && <img src={docImg} className="docVid"></img>}
        {connected && (
          <div className="patientVidDiv">
            <img className="patientVid" src={patientImg}></img>
          </div>
        )}
        <div className="video-container2">
          <div className="call-Details">
            <div className="div1">
              <div>Live consultation </div>
              <div className="timer">00.00</div>
            </div>
            {!connected && (
              <div className="div2">
                Please wait for Dr. Srikanth Srinivas to join..
              </div>
            )}
            <div className="div3">
              <img src="24-hours-support 2.svg" />
            </div>
          </div>

          <VideoChatButtons setchatOpen={setchatOpen} />
        </div>
      </div>
      {chatOpen && <VcChat setchatOpen={setchatOpen} />}
      <FloatButton
        shape="circle"
        onClick={() => {
          showModal();
        }}
        icon={<InfoCircleFilled />}
      ></FloatButton>
      {isModalOpen && (
        <Modal1
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          videoFeed={videoFeed}
          audioFeed={audioFeed}
          videoFeed1={videoFeed1}
          audioFeed1={audioFeed1}
          setAudioFeed={setAudioFeed}
          setAudioFeed1={setAudioFeed1}
          setVideoFeed={setVideoFeed}
          setVideoFeed1={setVideoFeed1}
        />
      )}
    </div>
  );
};

export default VcContent;
