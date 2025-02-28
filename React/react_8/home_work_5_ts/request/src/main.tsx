import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UrlProvider } from "./context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <UrlProvider>
            <App />
         </UrlProvider>
      </BrowserRouter>
   </React.StrictMode>
);
