import React from "react";
import AppinntmentCards from "../AppinntmentCards";
import { Route, Routes } from "react-router";
import AssessmentContent from "../AssessmentForm/AssessmentContent";
import Dashboard from "../patientDashboard/Dashboard";
import Questions from "../Questions";
import DisplayNotification from "../../notification/newNotification/DisplayNotification";
import ImageContent from "../Divider/ImageContent";
import AssessmentResults from "./AssessmentResults";
import Profile from "./Profile/Profile";
import AddMember from "./AddMember/AddMember";
import VideoConsultation from "./VideoConsltation/VideoConsultation";

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <h2>
              <Dashboard />
            </h2>
          }
        ></Route>
        <Route path="/Assessments" element={<AssessmentContent />}></Route>

        <Route path="/Consultation" element={<VideoConsultation />}></Route>
        <Route
          path="/Assessments_Results"
          element={<AssessmentResults />}
        ></Route>
        <Route path="/Health_Info" element={<ImageContent />}></Route>
        <Route path="/Appointments" element={<AppinntmentCards />}></Route>
        <Route path="/SubcPlans" element={<h2>Subscription Plans</h2>}></Route>
        <Route path="/Settings" element={<h2>Settings</h2>}></Route>
        <Route path="/Questions" element={<Questions />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Profile/AddMember" element={<AddMember />}></Route>
        <Route
          path="/AllNotifications"
          element={<DisplayNotification />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Contents;
