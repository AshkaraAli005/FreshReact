import { Button, notification } from "antd";
import React from "react";
import { addNotification } from "../../Components/Redux/features/Slices/NotificationSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const AddNotification = () => {
  const [latestNotification, setLatestNotification] = useState(null);
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
        type: notificationType,
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
  const addRandomData = () => {
    const newNotification = {
      notificationId: notifications.length + 1,
      status: ["info", "warning", "error", "success"][
        Math.floor(Math.random() * 4)
      ],
      message: `New Notification Message ${notifications.length + 1}`,
      dateTime: generateRandomDateTime(),
      path: "pdf",
      isRead: false,
    };
    setLatestNotification(newNotification);
    dispatch(addNotification(newNotification));
  };

  const generateRandomDateTime = () => {
    const year = 2023;
    const month = 11;
    const day = Math.floor(Math.random() * 30) + 1;
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);

    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return <Button onClick={() => addRandomData()}>Add Notification</Button>;
};

export default AddNotification;
