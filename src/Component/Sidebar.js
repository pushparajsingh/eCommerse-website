import React, { memo } from "react";
import { Button } from "react-bootstrap";

const Sidebar = (props) => {
  return (
    <div className="float-start sideBar">
      <h3 className="filter">Filter By Name</h3>
      <input
        type={"text"}
        className="inputbox"
        onChange={(e) => props.searchData(e.target.value)}
        value={props.setValue}
      />
      <Button
        variant="secondary"
        className="searchBtn"
        onClick={props.filterDataFun}
      >
        Search
      </Button>
      <Button variant="secondary searchBtn2" onClick={props.Clear}>
        Clear
      </Button>
    </div>
  );
};

export default memo(Sidebar);
