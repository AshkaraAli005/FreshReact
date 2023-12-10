import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./VideoConsultation.css";

const Modal1 = (props) => {
  return (
    <div className="modal1">
      <Modal
        title="Testing video & Audio"
        open={props.isModalOpen}
        footer={[]}
        width={400}
        onCancel={props.handleCancel}
        closable={false}
      >
        <div className="modalContent">
          <div className="modaldiv1">Checking for video and audio feeds.</div>
          <div className="modaldiv2">
            <div>Video Feed</div>
            {!props.videoFeed && !props.videoFeed1 ? (
              <div className="loader"></div>
            ) : props.videoFeed1 ? (
              <div>
                <CheckCircleFilled className="checkIcon" />
              </div>
            ) : (
              <div>
                <CloseCircleFilled className="closeIcon" />
              </div>
            )}
          </div>
          <div className="modaldiv2">
            <div>Audio Feed</div>
            {!props.audioFeed && !props.audioFeed1 ? (
              <div className="loader"></div>
            ) : props.audioFeed1 ? (
              <div>
                <CheckCircleFilled className="checkIcon" />
              </div>
            ) : (
              <div>
                <CloseCircleFilled className="closeIcon" />
              </div>
            )}
          </div>
          {props.audioFeed &&
            props.videoFeed &&
            (!props.audioFeed1 || !props.videoFeed1) && (
              <div className="feedError">
                <div className="feedError1">
                  Unable to join the video call now. Please check your device
                  permission and try again.
                </div>
                <Button size="large">Add New Document</Button>
              </div>
            )}
          {/* <div>
            <Button
              size="small"
              onClick={() => {
                props.setVideoFeed(true);
                props.setVideoFeed1(true);
              }}
            >
              v+
            </Button>
            <Button
              size="small"
              onClick={() => {
                props.setAudioFeed(true);
                props.setAudioFeed1(true);
              }}
            >
              A+
            </Button>
            <Button
              size="small"
              onClick={() => {
                props.setVideoFeed(true);
                props.setVideoFeed1(false);
              }}
            >
              v-
            </Button>
            <Button
              size="small"
              onClick={() => {
                props.setAudioFeed(true);
                props.setAudioFeed1(false);
              }}
            >
              A-
            </Button>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default Modal1;
