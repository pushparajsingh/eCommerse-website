import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="float-end content">{children}</div>
    </>
  );
};

export default Layout;
