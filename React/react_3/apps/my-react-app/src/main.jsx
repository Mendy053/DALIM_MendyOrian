import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app_1/App.jsx";
import AppTasks from "./app_2/AppTasks.jsx";
import AppFetch from "./app_3/AppFetch.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <AppTasks/>
    <AppFetch/>
    </>
);
