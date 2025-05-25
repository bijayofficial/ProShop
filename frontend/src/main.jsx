import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/Styles/index.css";
import "./assets/Styles/bootstrap.custom.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
