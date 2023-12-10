import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Signup";
import PrivateRoute from "./Components/Authentication/privateroute";
import { Routes, Route } from "react-router-dom";
import Patient from "./Components/Patient/Patient";
import Doctor from "./Components/Doctor/Doctors";
import { App, Divider } from "antd";

import "./App.css";
import Splitter from "./Components/Divider/Divider";
import ImageContent from "./Components/Divider/ImageContent";
import SimpleSlider from "./Components/Divider/Slide";
import Carosel from "./Components/Divider/carosel";
import DemoImage from "./Components/Divider/DemoImage";
import PatientSignup from "./Components/Patient/Signup/PatientSignup";
import Modal1 from "./Components/Patient/VideoConsltation/Modal1";
import Timer from "./Components/Patient/VideoConsltation/Timer";

const Apps = () => {
  return (
    <div className="App">
      {/* <Routes>
        <Route
          path="/"
          element={
            <App message={{ maxCount: 1 }}>
              <Login />
            </App>
          }
        />
        <Route path="/signup" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Doctor />}></Route>
          <Route path="patient/*" element={<Patient />}></Route> */}
      {/* <Route element={<PrivateRoute />}>
          <Route path="doctor/*" element={<Doctor />}></Route>
          <Route path="patient/*" element={<Patient />}></Route> */}
      {/* </Route>
      </Routes> */}

      {/* <PopupComponent/> */}
      {/* <Dropdown /> */}
      {/* <NewN/> */}
      {/* <PopupNotification /> */}
      {/* <Splitter/> */}
      {/* <Carosel/> */}
      {/* <DemoImage/> */}

      {/* <SimpleSlider /> */}
      {/* <ImageContent />     */}
      {/* <Login/> */}
      <Patient />

      {/* <PatientSignup /> */}
    </div>
  );
};
export default Apps;
