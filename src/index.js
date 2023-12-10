import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./Apps.js";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Components/Redux/Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Apps />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
