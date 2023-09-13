import React from "react";
import ReactDOM from "react-dom/client";
import { CreateProduct1, CreateProduct2 } from "./pages/create-product";
import App from "./pages/data-fetch";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
