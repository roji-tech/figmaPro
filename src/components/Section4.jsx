import React from "react";
import sect4Img from "./img/sect4Img.jpg";
import "./css/sect4.css";

const Section4 = () => {
  return (
    <>
      <div className="section4">
        <div>
          <img src={sect4Img} id="sect4Img" alt="" />
        </div>
        <p className="p1">View Passes We've Made Available For You</p>
      </div>
    </>
  );
};

export default Section4;
