import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./components/App.jsx";

const root = ReactDomClient.createRoot(document.getElementById("root"));
root.render(<App />);
