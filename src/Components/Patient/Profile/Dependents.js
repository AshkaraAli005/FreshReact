import React from "react";
import { Avatar, Button } from "antd";
import dependants from "./dependentslist.json";
import "./profile.css";

const Dependents = () => {
  return (
    <div className="dependentProfileList" style={{}}>
      {dependants.map((data) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div key={data.name} style={{ width: "210px" }} className="Profile">
              <div className="selfProfileContent">
                <Avatar size={70} src={<img src={data.src}></img>} alt="img" />
                <div className="profileName">{data.name}</div>
                <div className="profileData">
                  {data.age}, {data.gender}, {data.relation}
                </div>
              </div>
              <div className="profileBtn">
                <Button>Select</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dependents;
