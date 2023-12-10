import React from "react";
import { Button, List, Typography, Tooltip } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  CloseCircleFilled,
  InfoCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const NotificationList = ({
  handleReadNotification,
  handleRemoveNotification,
  handleClickNotification,
  unreadNotification,
}) => {
  const nav = useNavigate();

  return (
    <div
      className="popOver"
      style={{
        marginBottom: "0px",
        marginTop: "0px",
        paddingTop: "0px",
        backgroundColor: "white",

        borderBlockStart: "1px solid rgba(0,0,0,0.3)",
        borderBlockEnd: "1px solid rgba(0,0,0,0.3)",
        maxHeight: "37vh",
        overflowY: "scroll",
      }}
    >
      <List
        dataSource={unreadNotification}
        renderItem={(item) => (
          <List.Item>
            <div className="isRead">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "0px",
                  paddingTop: "0px",
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
                <Link
                  onClick={() =>
                    handleClickNotification(item.notificationId, item.path)
                  }
                >
                  <Typography.Title
                    style={{ marginTop: "10px" }}
                    level={5}
                    type={item.isMarkAsRead ? "secondary" : "primary"}
                  >
                    {item.message}
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{ marginBottom: "5px" }}
                    type={item.isMarkAsRead ? "secondary" : "primary"}
                  >
                    {item.description}
                  </Typography.Paragraph>
                </Link>
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
                <div>
                  <Tooltip
                    title={item.isRead ? "mark as Unread" : "mark as Read"}
                    placement="left"
                  >
                    <Button
                      type="text"
                      onClick={
                        item.isRead
                          ? () =>
                              handleReadNotification(item.notificationId, false)
                          : () =>
                              handleReadNotification(item.notificationId, true)
                      }
                    >
                      <CheckOutlined
                        style={
                          item.isRead ? { color: "blue" } : { color: "black" }
                        }
                      />
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
                <div>
                  <span>{item.dateTime}</span>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default NotificationList;

// <List.Item
//   actions={[
//     <Button
//       type="text"
//       onClick={() => handleRemoveNotification(item.notificationId)}
//     >
//       <CloseOutlined />
//     </Button>,
//   ]}
// ><div style={{ display: "flex", flexDirection: "row" }}>
//   <div style={{ width: "100%" }}>
//     <Link
//       style={{ color: "#000" }}
// onClick={() =>
//   handleClickNotification(item.notificationId, item.path)
// }
//     >
//       <div>
//         {item.status === "error" && (
//           <CloseCircleFilled
//             className="icon"
//             style={{ color: "red" }}
//           />
//         )}
//         {item.status === "info" && (
//           <InfoCircleFilled
//             className="icon"
//             style={{ color: "blue" }}
//           />
//         )}
//         {item.status === "success" && (
//           <CheckCircleFilled
//             className="icon"
//             style={{ color: "green" }}
//           />
//         )}
//         {item.status === "warning" && (
//           <InfoCircleFilled
//             className="icon"
//             style={{ color: "#e3dc00" }}
//           />
//         )}
// <Typography.Title
//   level={5}
//   type={item.isMarkAsRead ? "secondary" : "primary"}
// >
//   {item.message}
// </Typography.Title>
// <Typography.Paragraph
//   type={item.isMarkAsRead ? "secondary" : "primary"}
// >
//   {item.description}
// </Typography.Paragraph>
//       </div>
//     </Link>
//     </div>
//     <Space>
//       <Typography.Paragraph type="secondary">
//         {item.dateTime}
//       </Typography.Paragraph>

//       <Tooltip
//         placement="right"
//         title={item.isMarkAsRead ? "mark as read" : "mark as unread"}
//       >
//         <Button
//           type="text"
// onClick={
//   item.isRead
//     ? () =>
//         handleReadNotification(item.notificationId, false)
//     : () =>
//         handleReadNotification(item.notificationId, true)
// }
//         >
//           {item.isMarkAsRead ? (
//             <CheckCircleTwoTone twoToneColor="#52c41a" />
//           ) : (
//             <CheckOutlined />
//           )}
//         </Button>
//       </Tooltip>
//     </Space>
//   </div>
// </List.Item>
// )}
