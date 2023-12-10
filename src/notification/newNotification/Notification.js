import React from "react";
import {
  Layout,
  Typography,
  Button,
  Badge,
  Popover,
  theme,
  message,
} from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNotification,
  clearAllNotifications,
  markNotificationAsRead,
} from "../../Components/Redux/features/Slices/NotificationSlice";
import Path from "./Path.json";
import NotificationList from "./NotificationList1";
import { useNavigate } from "react-router";

const { Header, Content } = Layout;

const NewN = () => {
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();
  const nav = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClickNotification = (id, path) => {
    let link;
    Path.forEach((item) => {
      if (path === item.msgPath) {
        link = item.redirectPath;
      }
    });

    window.location.href = link;
    dispatch(markNotificationAsRead({ id, markAsRead: true }));
  };

  const handleReadNotification = (id, markAsRead) => {
    dispatch(markNotificationAsRead({ id, markAsRead }));
  };

  const handleRemoveNotification = (id) => {
    dispatch(removeNotification(id));
  };

  const clearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  const unreadNotification = notifications.filter((item) => !item.isRead);

  return (
    <Layout style={{ backgroundColor: colorBgContainer }}>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            margin: "0 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography.Title level={2}>Heading</Typography.Title>

          <div>
            <Popover
              placement="bottomRight"
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Unreaded Notifications
                  <div>
                    <Button
                      danger
                      type="text"
                      onClick={() => clearAllNotification()}
                      disabled={notifications.length ? false : true}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              }
              arrow={false}
              content={
                <div
                  style={{
                    width: "458px",
                    height: "auto",
                  }}
                >
                  <NotificationList
                    notifications={notifications}
                    handleReadNotification={handleReadNotification}
                    handleRemoveNotification={handleRemoveNotification}
                    handleClickNotification={handleClickNotification}
                    unreadNotification={unreadNotification}
                  />
                  <Button
                    onClick={() => {
                      nav("/patient/AllNotifications");
                    }}
                  >
                    All Notification
                  </Button>
                </div>
              }
              trigger="click"
            >
              <Badge
                count={unreadNotification.length}
                overflowCount={9}
                offset={[-5, 5]}
              >
                <Button
                  icon={<BellOutlined />}
                  size="large"
                  shape="circle"
                  style={{ backgroundColor: "green" }}
                />
              </Badge>
            </Popover>
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default NewN;
