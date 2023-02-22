import React from "react";
import "./Home.scss";
import DMART from "../../Assert/Image/DMART.png";

const HomePage = () => {
  return (
    <div className="marginTop">
      <div className="border">
        <img
          src={DMART}
          width={500}
          height={200}
          className="Image-Change-Position"
        />
        <h1 className="text-center"> Welcome To The DMart </h1>
        <h2 className="text-capitalize text-center">
          our objective is to give you best quality product in less price
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
