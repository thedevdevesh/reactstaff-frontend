import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App />);
