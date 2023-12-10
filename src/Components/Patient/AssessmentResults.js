import { Button, Card, Row } from "antd";
import React, { useState } from "react";
import "./AssessmentResult.css";
import Column from "./Column";

const AssessmentResults = () => {
  const [value, setValue] = useState(10);
  const [anxietyValue, setAnxietyValue] = useState(21);
  return (
    <div className="assessmentResultContent">
      <div className="assessmentResults">
        <div className="cards">
          <Card className="insideCards">
            <div>
              <p className="cardTitles">Depression score</p>
              <span className="resultValue">{value}</span>

              <Row justify="space-between" align="middle">
                <Column
                  className1="indicatorRow"
                  visibility={value <= 4}
                  colour="#3CCB7F"
                  numTop={4}
                  numDown={0}
                  result1="Minimal"
                />
                <Column
                  className1={"indicatorRow"}
                  visibility={value >= 5 && value <= 9}
                  colour={"#16B364"}
                  numTop={9}
                  numDown={5}
                  result1={"Okay"}
                />
                <Column
                  className1={"indicatorRow"}
                  visibility={value >= 10 && value <= 14}
                  colour={"#FAC515"}
                  numTop={14}
                  numDown={10}
                  result1={"Average"}
                />
                <Column
                  className1={"indicatorRow"}
                  visibility={value >= 15 && value <= 19}
                  colour={"#F38744"}
                  numTop={19}
                  numDown={15}
                  result1={"High"}
                />
                <Column
                  className1={"indicatorRow"}
                  visibility={value >= 20}
                  colour={"#F97066"}
                  numTop={27}
                  numDown={20}
                  result1={"Severe"}
                />
              </Row>
            </div>

            <div className="cardNote">
              Your answer indicate you may currently be experiencing symptoms of
              Moderate Depression..
              <span style={{ color: "#099250", cursor: "pointer" }}>
                know more
              </span>
            </div>
          </Card>
          <Card className="insideCards">
            <p className="cardTitles">Anxiety score</p>
            <span className="resultValue">{anxietyValue}</span>
            <Row justify="space-between" align="middle">
              <Column
                className1={"indicatorRow2"}
                visibility={anxietyValue < 5}
                colour={"#3CCB7F"}
                numTop={4}
                numDown={0}
                result1={"Minimal"}
              />
              <Column
                className1={"indicatorRow2"}
                visibility={anxietyValue <= 9 && anxietyValue >= 5}
                colour={"#16B364"}
                numTop={9}
                numDown={5}
                result1={"Good"}
              />
              <Column
                className1={"indicatorRow2"}
                visibility={anxietyValue <= 14 && anxietyValue > 9}
                colour={"#FAC515"}
                numTop={14}
                numDown={10}
                result1={"Average"}
              />
              <Column
                className1={"indicatorRow2"}
                visibility={anxietyValue > 14}
                colour={"#F97066"}
                numTop={21}
                numDown={15}
                result1={"Severe"}
              />
            </Row>
            <div className="cardNote">
              Your answer indicate you may currently be experiencing symptoms of
              Minimal Anxiety.
            </div>
          </Card>
        </div>
        <div className="cardNotes0">
          <h4 style={{ fontWeight: "600" }}>Next Step</h4>
          <p style={{ fontWeight: "400" }}>
            You may want to pay close attention to how you’re feeling over the
            next two weeks and retake the questionnaire to see how you are
            doing. The results of your questionnaire are not a diagnosis of any
            mental health condition.
          </p>
        </div>
      </div>
      <div className="takeTestDiv">
        <div className="takeTestSpan">
          <span className="span1">
            *These are self-reported scores, and these responses have to be
            validated and confirmed by a clinician upon a thorough evaluation.
          </span>
        </div>
        <div className="takeTestBtn">
          <Button>Take Evaluation Plan</Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;
