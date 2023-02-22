import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
