import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App_no_context.jsx";
import App from "./App_with_context.jsx";

import "./index.css";
import { CounterProvider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>

   <CounterProvider>
      <App />
   </CounterProvider>
   // </React.StrictMode>,
);
