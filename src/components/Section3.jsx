import React from "react";

import "./css/sect3.css";
import img8 from "./img/pics3.png";
import img6 from "./img/pics4.png";
import img4 from "./img/pics1..png";
import img5 from "./img/pics2.png";
import img7 from "./img/pics5.jpg";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="the-grid">
        <div className="grid-text1">
          <p className="p1">
            The best resorts to chill and relax
          </p>
        </div>
        <div className="grid-text2"></div>
        <img src={img4} className="sect3-img" id="img4" alt="section3" />
        <img src={img5} className="sect3-img" id="img5" alt="section3" />
        <img src={img6} className="sect3-img" id="img6" alt="section3" />
        <img src={img7} className="sect3-img" id="img7" alt="section3" />
      </div>
    </div>
  );
};

export default Section3;
