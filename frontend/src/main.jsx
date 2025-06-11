import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route,  Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import RequestService from "./pages/RequestServices.jsx";
import CustomerDashboard from "./pages/CustomerDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="requestService" element={<RequestService />} />
      <Route path="customer-dashboard" element={<CustomerDashboard />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  </BrowserRouter>
);
