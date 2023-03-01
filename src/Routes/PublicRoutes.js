import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import CartProduct from "../Pages/CartProduct/CartProduct";
import SignUpForm from "../Component/Auth/SignUpForm";
import SignInForm from "../Component/Auth/SignInForm";
import Product from "../Pages/Product/Product";
import HomePage from "../Pages/Home/HomePage";
import About from "../Pages/About/About";
import PaymentPage from "../Pages/Payment/Payment";
import AdminProduct from "../Pages/Admin/AdminProduct/AdminProduct";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/signUpForm" element={<SignUpForm />} />
        <Route path="/logInUserForm" element={<SignInForm />} />
        <Route path="/logInAdminForm" element={<SignInForm />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/cartProduct" element={<CartProduct />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/adminProduct" element={<AdminProduct />} />
        <Route
          path="*"
          element={
            <h2 className="text-danger text-center mt-5">Page Not Found</h2>
          }
        />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
