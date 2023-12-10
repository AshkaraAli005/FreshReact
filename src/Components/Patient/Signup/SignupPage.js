import React, { useState } from "react";
import { Button, Card, Checkbox, Radio } from "antd";
import SignupPage2 from "./SignupPage2";

const SignUpPage1 = ({ changeComponent }) => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="signupFieldContents">
      <div className="fieldInnerContent">
        <div className="fieldDiv1">Let’s get your account set up</div>
        <div className="fieldDiv2">
          <div className="fieldDiv2Inner1">Create Account</div>
          <div className="fieldDiv2Inner2">
            Choose an option based on who requires care.
          </div>
          <Radio.Group value={value} onChange={onChange}>
            <div className="radioCards">
              <Card
                className={`cards ${
                  value === 1 ? "greenBorder" : "greyBorder"
                }`}
              >
                <div className="inCards">
                  <Radio value={1}></Radio>
                  <div className="radiodiv1">For Myself</div>
                  <div className="radiodiv2">
                    Create an individual account for you
                  </div>
                </div>
              </Card>
              <Card
                className={`cards ${
                  value === 2 ? "greenBorder" : "greyBorder"
                }`}
              >
                <div className="inCards">
                  <Radio value={2}></Radio>
                  <div className="radiodiv1">For Dependent</div>
                  <div className="radiodiv2">
                    Create an account for anyone you care
                  </div>
                </div>
              </Card>
            </div>
          </Radio.Group>
          {value === 2 && (
            <div className="dependentNote">
              <ul>
                <li>I’m a guardian</li>
                <li>I’m creating an account for dependant</li>
              </ul>
            </div>
          )}

          <Button
            className="continueBtn"
            disabled={value === 0}
            onClick={() => {
              changeComponent(<SignupPage2 user={value} />);
            }}
          >
            Continue
          </Button>
          <div>
            Already have an account?&nbsp;
            <span className="loginSpan">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
