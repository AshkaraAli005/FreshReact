import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./PatientSignup.css";

const ConsentForm = (props) => {
  return (
    <Modal
      title="Consent Form"
      open={props.open}
      style={{ top: 20 }}
      onCancel={props.handleCancel}
      width={750}
      footer={[]}
    >
      <div className="ConsentModal">
        <div className="ConsentHeading">
          Parental consent for Child/Adolescent mental health assessment and
          treatment
        </div>
        <div className="consentDeceptantDetails">
          <div className="insideDeceptantDetails">
            <div className="div1">Dependant:</div>
            <div className="div2">{props.dependentName}</div>
          </div>
          <div className="insideDeceptantDetails">
            <div className="div1">Date of Birth:</div>
            <div className="div2">Rajesh</div>
          </div>
          <div className="insideDeceptantDetails">
            <div className="div1">Today’s Date:</div>
            <div className="div2">Rajesh</div>
          </div>
        </div>
        <div className="ConsentContent">
          <div>
            Mental health assessment and treatment methods [such as
            Psychotherapy and Pharmacotherapy] are most effective when a
            trusting relationship exists between the child/adolescent and the
            clinician [Psychotherapist/Psychiatrist]. It is hence necessary for
            children/adolescents to establish a “zone of privacy” with their
            psychotherapists/psychiatrists allowing them to discuss personal
            matters freely.
          </div>
          <div>
            Therefore, while we will provide you with general information about
            the assessment and treatment of your child/adolescent during
            Parental Check in sessions, it may not be possible to share
            everything that your child/adolescent has disclosed to us as we are
            dictated by the medical code of conduct and privacy, akin to any
            client-healthcare provider relationship.
          </div>
          <div>
            However, if the child/adolescent is at serious risk of harming
            him/herself or another, or if there are any other issues of
            medico-legal implications, we will definitely inform you.
          </div>
          <div>
            In case of disagreement among parents themselves and/or disagreement
            between parents and the psychotherapist/psychiatrist regarding the
            treatment of the child/adolescent, and despite earnest efforts to
            address these disagreements, if either parent decides to terminate
            treatment, we shall request the option of having a few closing
            sessions with the child/adolescent to end treatment appropriately
            without adversely impacting the child/adolescent’s mental health.
          </div>
          <div>
            You will also kindly understand and agree that our role is strictly
            limited to providing psychotherapy/psychiatric sessions for the
            benefit of your child/adolescent mental health and wellness care.
            Please treat anything said in Parental check-in sessions as strictly
            confidential. You agree that you will not involve us in any legal
            dispute, especially those concerning parental separation/divorce
            proceedings, child custody or visitation arrangements. We are
            ethically bound not to give our opinion about the suitability of
            either parent's custody or visitation rights. You will not ask us to
            testify in court, either in person or by affidavit.
          </div>
          <div>
            If you have any questions about the information contained in this
            contract, please discuss them with us prior to signing below.
            Clicking yes indicates that you have a) obtained the assent of your
            child/adolescent implying his approval for his assessment and
            treatment and b) you hereby give your consent to your
            child/adolescent's mental health assessment and treatment and have
            thereby entered into a legally binding agreement with the terms set
            forth in this contract.
          </div>
        </div>
        <div className="modalGuardianDet">
          <div className="div1">Guardian’s Name:</div>
          <div className="div2">Gayathri</div>
        </div>
        <div className="agreeBtn">
          <Button className="verifyOtp">Agree</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConsentForm;
