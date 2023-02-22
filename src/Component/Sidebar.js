import React from "react";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="float-start sideBar">
      <h3 className="filter">Filter By Name</h3>
      <input type={"text"} className="inputbox" />
      <Button variant="secondary" className="searchBtn">
        Search
      </Button>
    </div>
  );
};

export default Sidebar;
