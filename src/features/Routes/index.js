import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
