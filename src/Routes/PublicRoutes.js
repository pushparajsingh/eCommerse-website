import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import CartProduct from "../Pages/CartProduct";
import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUpForm from "../Pages/SignUpForm";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/cartProduct" element={<CartProduct />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/signUpForm" element={<SignUpForm />} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
