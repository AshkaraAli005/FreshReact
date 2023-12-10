import React, { useEffect, useState } from "react";
import { Badge, Button, Popconfirm, Popover, notification, theme } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import NotificationDropdown from "./newNotification/NotificationDropdown";

const NewNotification = () => {
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const unreadNotification = notifications.filter((item) => !item.isRead);

  return (
    <div>
      <div>
        <Popover
          placement="bottomLeft"
          content={<NotificationDropdown />}
          arrow={false}
          trigger="click"
        >
          <Badge
            count={unreadNotification.length}
            overflowCount={9}
            offset={[-5, 5]}
          >
            <Button
              className="floatButton"
              type="primary"
              icon={<BellOutlined />}
              style={{
                backgroundColor: "green",
                width: "40px",
                height: "40px",
              }}
              shape="circle"
            />
          </Badge>
        </Popover>
      </div>
    </div>
  );
};

export default NewNotification;
