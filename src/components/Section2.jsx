import React from "react";
import "./css/sect2.css";
import img1 from "./img/pics3.png";
import img2 from "./img/pics4.png";
import img3 from "./img/pics3.png";

const Section2 = () => {
  return (
    <div className="section2-wrapper">
      <section class="section2">
        <div className="map">
          <div className="p1p2">
            <p class="p1">
              Creating the best ice-cold! experience you would never forget.
            </p>
            <p class="p2">
              Would you explore nature paradise in the world, find the best
              destination in the world with us.
            </p>
          </div>
          <p className="p3">
            View Regio
            <span cont="↓" className="span-stroke">
              n
            </span>s available
          </p>
          {/* &darr;&#8595; */}
        </div>
        <div class="regions">
          <img src={img1} className="sect3-img" alt="section3" />
          <img src={img2} className="sect3-img" alt="section3" />
          <img src={img3} className="sect3-img" alt="section3" />
        </div>
      </section>
    </div>
  );
};

export default Section2;
