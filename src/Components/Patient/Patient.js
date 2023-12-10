import React, { useState } from "react";
import Contents from "./patientContents";
import {
  Layout,
  Menu,
  Typography,
  theme,
  Image,
  Popconfirm,
  Modal,
  Avatar,
} from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import {
  CalendarOutlined,
  CrownOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  ProfileOutlined,
  InfoCircleFilled,
  UserOutlined,
  PieChartOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import NewNotification from "../../notification/NewNotification";
import HelpContent from "../HelpDropdown/HelpContent";
import Dropdown from "../HelpDropdown/Dropdown";
import NotificationDropdown from "../../notification/newNotification/NotificationDropdown";
import AddNotification from "../../notification/newNotification/AddNotification";

const Patient = () => {
  const [selectedkey, setket] = useState("/Mainpage/Appointments");
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { confirm } = Modal;
  const showConfrm = () => {
    confirm({
      title: "Are you sure you want to logout?",
      okText: "Logout",
      okType: "danger",
      icon: <InfoCircleFilled style={{ color: "#02b2ff" }} />,
      onOk() {
        handleLogout();
      },
      oncancel() {},
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  const menuItems = [
    {
      label: "Dashboard",
      key: "",
      icon: <HomeOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Consultation",
      key: "Consultation",
      icon: <ReconciliationOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Assessments",
      key: "Assessments",
      icon: <FileTextOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Assessments_Results",
      key: "Assessments_Results",
      icon: <FileTextOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Health Info",
      key: "Health_Info",
      icon: <InfoCircleOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Appoinments",
      key: "Appointments",
      icon: <CalendarOutlined style={{ fontSize: 20 }} />,
    },
    {
      label: "Subscribtion Plans",
      key: "SubcPlans",
      icon: <CrownOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: "SettingsSubMenu",
      icon: <SettingOutlined style={{ fontSize: 20 }} />,
      label: "Settings",
      children: [
        {
          key: "Profile",
          icon: <ProfileOutlined style={{ fontSize: 15 }} />,
          label: "Profile",
        },
        {
          key: "Logout",
          label: (
            <span onClick={showConfrm}>
              <LogoutOutlined style={{ fontSize: 15 }} /> Logout
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "colunm" }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          defaultCollapsed={true}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sider1"
          style={{
            backgroundColor: "white",
            maxWidth: "16vw",
            minWidth: "16vw",
          }}
        >
          <div className={collapsed ? "shrtlogo" : "logo"}>
            <Image
              src={collapsed ? "/shortlogo.jpg" : "/niyamaimg.png"}
              alt="Logo"
              preview={false}
              className={collapsed ? "shrtlogo" : "logo"}
            />
          </div>
          <br />
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={[selectedkey]}
            onClick={({ key }) => {
              nav(key);
            }}
          >
            {menuItems.map((item) => {
              if (item.children) {
                return (
                  <Menu.SubMenu
                    key={item.key}
                    icon={item.icon}
                    title={item.label}
                  >
                    {item.children.map((child) => (
                      <Menu.Item key={child.key} icon={child.icon}>
                        {child.label}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Sider>
        <Content>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="patientContentBody"
          >
            <Layout>
              <Header
                className="main-header"
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                <div className="typo-header">
                  <Typography.Title>
                    <Headers />
                  </Typography.Title>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginTop: "10px",
                  }}
                >
                  <NewNotification />
                  <Avatar size="large" icon={<UserOutlined />} />
                </div>
              </Header>
            </Layout>
            <Content className="main-content2">
              <Contents />
              {/* <Dropdown /> */}
            </Content>
          </div>
          {/* <Footer>
            <AddNotification />
          </Footer> */}
        </Content>
      </Layout>
    </div>
  );
};

export default Patient;

const Headers = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2 className="head_text">Dashboard</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Assessments"
          element={
            <div>
              <h2 className="head_text">Dashboard</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Consultation"
          element={
            <div>
              <div className="head_text" style={{fontSize:'30px',color:"green",fontStyle:'Inter'}}>Shedule Appointment</div>
            </div>
          }
        ></Route>
        <Route
          path="/Assessments_Results"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <PieChartOutlined
                  style={{ fontSize: "17px", color: "green" }}
                />
                <h4 style={{ margin: "0px" }}>Your Results</h4>
              </div>

              <span style={{ fontSize: "11px" }}>
                Self assessment for depression and anxiety
              </span>
            </div>
          }
        ></Route>
        <Route
          path="/Health_Info"
          element={
            <div>
              <h2 className="head_text">Health Info</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Appointments"
          element={
            <div>
              <h2 className="head_text">Appoinments</h2>
            </div>
          }
        ></Route>
        <Route
          path="/SubcPlans"
          element={
            <div>
              <h2 className="head_text">Subscription Plans</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <div>
              <h2 className="head_text">Profile</h2>
            </div>
          }
        ></Route>
        <Route
          path="/Questions"
          element={
            <div>
              <h2 className="head_text">Queries</h2>
            </div>
          }
        ></Route>
        <Route
          path="/AllNotifications"
          element={
            <div>
              <h2 className="head_text">All Notifications</h2>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
};
