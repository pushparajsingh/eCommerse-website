import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";

const PrivateRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
