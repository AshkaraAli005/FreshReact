import React from "react";
import { List } from "antd";
import ChatContent from "./ChatContent";

import {
  CalendarOutlined,
  CrownOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";

const ChatList = ({ onChangeComponent, feedbackClosed }) => {
  const data = [
    {
      icon: <UserOutlined />,
      name: "Account",
      component: <h2 onClick={feedbackClosed}>Account</h2>,
    },
    {
      icon: <ReconciliationOutlined />,
      name: "Assessment",
      component: <h2 onClick={feedbackClosed}>Assessment</h2>,
    },
    {
      icon: <CalendarOutlined />,
      name: "Consultation",
      component: <h2 onClick={feedbackClosed}>Consultations</h2>,
    },
    {
      icon: <ProfileOutlined />,
      name: "Health Records",
      component: <h2 onClick={feedbackClosed}>Health Records</h2>,
    },
    {
      icon: <CrownOutlined />,
      name: "Membership Plans",
      component: <h2 onClick={feedbackClosed}> Plans</h2>,
    },
    {
      icon: <ProfileOutlined />,
      name: "Prescription",
      component: <h3 onClick={feedbackClosed}>Prescriptions</h3>,
    },

    {
      icon: <ProfileOutlined />,
      name: "Help",
      component: <ChatContent onChangeComponent={onChangeComponent} />,
    },
  ];
  return (
    <div className="lists">
      <List
        className="lists2"
        size="small"
        bordered
        style={{ borderRadius: "5px" }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              backgroundColor: "#e8ffe9",
              padding: "1.5% 0%",
              borderBlockEnd: " 1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className="helpList"
              onClick={() => onChangeComponent(item.component)}
            >
              <div className="helpListContent">
                <div className="listIcon">{item.icon}</div>
                <div className="listName">{item.name}</div>
              </div>

              <RightOutlined style={{ color: "gray" }} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
export default ChatList;
