import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import LoginElement from "../Element/LoginElement";
import Product from "../Product/view";
import Login from "../Auth/view/Login";
import Register from "../Auth/view/Register";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const login = useSelector((state) => state.userSlice);
  console.log(login)
  return (
    <BrowserRouter>
      <Routes>
        {login.data.login && (
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<Navigate to="/product"/>} />
          </Route>
        )}
        {!login.data.login && (
          <Route path="/" element={<LoginElement />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
