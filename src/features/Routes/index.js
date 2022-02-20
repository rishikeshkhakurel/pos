import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import LoginElement from "../Element/LoginElement";
import Product from "../Product/view";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<LoginElement />}>
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
