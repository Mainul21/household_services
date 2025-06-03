import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,  Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import RequestService from "./pages/RequestServices.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="requestService" element={<RequestService />} />
    </Routes>
  </BrowserRouter>
);
