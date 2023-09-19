import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
