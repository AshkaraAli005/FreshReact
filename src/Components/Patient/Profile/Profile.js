import { Avatar, Button, Divider } from "antd";
import React from "react";
import "./profile.css";
import Dependents from "./Dependents";

const Profile = () => {
  const selfData = [
    {
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&usqp=CAU",
      name: "Gayathri",
      age: 28,
      Gender: "Female",
    },
  ];
  return (
    <div className="profileContent">
      <Button className="addMemberBtn" size="large">
        Add new member
      </Button>
      <div className="Profile">
        <div className="selfProfileContent">
          <Avatar
            size={70}
            src={<img src={selfData[0].profileImg} alt="Avatar Image"></img>}
          ></Avatar>
          <div className="profileName">{selfData[0].name}</div>
          <div className="profileData">
            {selfData[0].age}, {selfData[0].Gender}, Self
          </div>
        </div>
        <div className="profileBtn">
          <Button>Select</Button>
        </div>
      </div>
      <Divider></Divider>
      <div className="dependentsProfiles">
        <div className="dependents">Dependant(s)</div>
        <Dependents />
      </div>
    </div>
  );
};

export default Profile;
