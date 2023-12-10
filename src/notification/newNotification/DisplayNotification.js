import React, { useState } from "react";
import { Button, List, Space, Typography, Tooltip, theme, message } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNotification,
  clearAllNotifications,
  markNotificationAsRead,
  markAllNotifcationAsRead,
} from "../../Components/Redux/features/Slices/NotificationSlice";
import Path from "./Path.json";
import Icon from "@ant-design/icons/lib/components/Icon";

const doubleTick = () => (
  <svg
    height="1.2em"
    width="1.2em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 74.46"
  >
    <path d="M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z" />
  </svg>
);

const DoubleTickIcon = (props) => <Icon component={doubleTick} {...props} />;

const DisplayNotification = () => {
  const [hovered, setHovered] = useState(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();

  const handleMouseOver = (id) => {
    setHovered(id);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

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

  const readAllNofitications = () => {
    dispatch(markAllNotifcationAsRead());
  };

  const handleRemoveNotification = (id) => {
    dispatch(removeNotification(id));
  };

  const clearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  const reverseNotification = [...notifications].reverse();

  const unreadNotification = notifications.filter((item) => !item.isRead);
  return (
    <div
      style={{
        background: colorBgContainer,
      }}
    >
      <div
        className="notificationList1"
        style={{
          height: "75vh",
          overflowY: "scroll",
        }}
      >
        <List
          dataSource={reverseNotification}
          renderItem={(item) => (
            <List.Item>
              <div
                className={`NotificationList${
                  hovered === item.notificationId ? " hovered" : ""
                }`}
                onMouseOver={() => {
                  handleMouseOver(item.notificationId);
                  setHovered(item.notificationId);
                }}
                onMouseOut={() => {
                  handleMouseOut(item.notificationId);
                  setHovered(null);
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={
                      item.isRead
                        ? {
                            width: "10px",
                            backgroundColor: "white",
                            zIndex: "1",
                          }
                        : {
                            width: "10px",
                            backgroundColor: "green",
                            zIndex: "1",
                          }
                    }
                  >
                    &nbsp;
                  </div>
                  <div style={{ marginLeft: "8px", width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "0px",
                        paddingTop: "0px",
                        alignItems: "center",
                      }}
                    >
                      {item.status === "error" && (
                        <CloseCircleFilled
                          className="icon"
                          style={{ color: "red" }}
                        />
                      )}
                      {item.status === "info" && (
                        <InfoCircleFilled
                          className="icon"
                          style={{ color: "blue" }}
                        />
                      )}
                      {item.status === "success" && (
                        <CheckCircleFilled
                          className="icon"
                          style={{ color: "green" }}
                        />
                      )}
                      {item.status === "warning" && (
                        <InfoCircleFilled
                          className="icon"
                          style={{ color: "#e3dc00" }}
                        />
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <Link
                            onClick={() =>
                              handleClickNotification(
                                item.notificationId,
                                item.path
                              )
                            }
                          >
                            <Typography.Title
                              level={5}
                              type={item.isRead ? "secondary" : "primary"}
                              style={{ marginTop: "15px" }}
                            >
                              {item.message}
                            </Typography.Title>
                            <Typography.Paragraph
                              style={{ marginBottom: "10px" }}
                              type={item.isRead ? "secondary" : "primary"}
                            >
                              {item.description}
                            </Typography.Paragraph>
                          </Link>
                        </div>

                        <div style={{ right: "10px" }}>
                          <span>
                            <Typography.Paragraph type="secondary">
                              {item.dateTime}
                            </Typography.Paragraph>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginRight: "20px",
                        width: "auto",
                      }}
                    >
                      {hovered == item.notificationId && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Tooltip
                            title={
                              item.isRead ? "mark as Unread" : "mark as Read"
                            }
                            placement="left"
                          >
                            <Button
                              type="text"
                              onClick={
                                item.isRead
                                  ? () =>
                                      handleReadNotification(
                                        item.notificationId,
                                        false
                                      )
                                  : () =>
                                      handleReadNotification(
                                        item.notificationId,
                                        true
                                      )
                              }
                            >
                              {item.isRead ? (
                                <DoubleTickIcon style={{ color: "green" }} />
                              ) : (
                                <CheckOutlined />
                              )}
                              {/* <CheckOutlined
                                style={
                                  item.isRead
                                    ? { color: "blue" }
                                    : { color: "black" }
                                }
                              /> */}
                            </Button>
                          </Tooltip>
                          <Button
                            type="text"
                            style={{ marginLeft: "0px" }}
                            onClick={() =>
                              handleRemoveNotification(item.notificationId)
                            }
                          >
                            <CloseOutlined />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
      <div className="notificationFooter" style={{ margin: "1%" }}>
        <Space>
          <Button
            type="primary"
            ghost
            onClick={() => readAllNofitications()}
            disabled={
              unreadNotification.length && notifications.length ? false : true
            }
          >
            Mark All Read
          </Button>
          <Button
            type="text"
            danger
            ghost
            onClick={() => clearAllNotification()}
            disabled={notifications.length ? false : true}
          >
            Clear All
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default DisplayNotification;
