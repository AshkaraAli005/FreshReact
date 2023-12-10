import React, { useEffect, useState } from "react";
import {
  clearAllNotifications,
  removeNotification,
  markNotificationAsRead,
} from "../../Components/Redux/features/Slices/NotificationSlice";
import Path from "./Path.json";
import { Button, notification, theme } from "antd";
import NotificationList from "./NotificationList1";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const NotificationDropdown = () => {
  const [latestNotification, setLatestNotification] = useState(null);
  const nav = useNavigate();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (latestNotification) {
      const { message, status } = latestNotification;
      const notificationType = getNotificationType(status);

      notification.open({
        message: message,
        description: status,
        type: notificationType, // Set the notification type based on status
      });
    }
  }, [latestNotification]);
  const getNotificationType = (status) => {
    switch (status) {
      case "info":
        return "info";
      case "warning":
        return "warning";
      case "error":
        return "error";
      case "success":
        return "success";
      default:
        return "info";
    }
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

  const handleRemoveNotification = (id) => {
    dispatch(removeNotification(id));
  };

  const clearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  const unreadNotification = notifications.filter((item) => !item.isRead);

  return (
    <div
      style={{
        width: "35vw",
        maxHeight: "60vh",
        border: "1px solid rgba(0,0,0,0.3)",
        backgroundColor: "rgb(235, 231, 231)",
        borderRadius: "5px",
      }}
    >
      <div>
        <h2
          style={{
            margin: "2% 3% 2% 4%",
            color: "green",
            fontFamily: "sans-serif",
            fontSize: "18px",
          }}
        >
          Unreaded Notifications :
        </h2>
      </div>
      <div>
        <NotificationList
          notifications={notifications}
          handleReadNotification={handleReadNotification}
          handleRemoveNotification={handleRemoveNotification}
          handleClickNotification={handleClickNotification}
          unreadNotification={unreadNotification}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Button
          onClick={() => {
            nav("/patient/AllNotifications");
          }}
          style={{ marginLeft: "10px" }}
        >
          All Notifications
        </Button>
        <Button
          type="link"
          style={{ color: "red" }}
          onClick={() => clearAllNotification()}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
