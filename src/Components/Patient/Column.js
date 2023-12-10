import React from "react";
import { Col, Row } from "antd";
import "./AssessmentResult.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const Column = ({
  className1,
  colour,
  visibility,
  result1,
  numTop,
  numDown,
}) => {
  const color = colour;
  const styles = {
    "--border-color": color,
  };
  return (
    <Col className={className1}>
      <Row style={{ minHeight: "22px", position: "relative" }}>
        <span
          className="tooltip"
          style={{
            visibility: visibility ? "visible" : "hidden",
            ...styles,
          }}
        >
          {result1}
          <span style={{ marginLeft: "2px" }}>
            <InfoCircleOutlined />
          </span>
        </span>
      </Row>
      <span className="numberAbove">{numTop}</span>
      <div
        className="indicatorColorDiv"
        style={{ backgroundColor: colour }}
      ></div>
      <span className="numberBelow">{numDown}</span>
    </Col>
  );
};

export default Column;
