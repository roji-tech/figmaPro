import React from "react";

// import { keyboard } 

import "./css/sect1.css";
import nikeImg from "./img/nike.svg";
import ApayImg from "./img/apple-pay.svg";
import sStarImg from "./img/silver-star.svg";
import intraImg from "./img/intra.svg";
import mCardImg from "./img/mastercard.svg";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="sect1">
        <img src={nikeImg} id="ione" alt="img-2" />
        <img src={ApayImg} id="itwo" alt="img-3" />
        <img src={sStarImg} id="ithree" alt="img-4" />
        <img src={intraImg} id="ifour" alt="img-5" />
        <img src={mCardImg} id="ifive" alt="img-6" />
      </div>
    </div>
  );
};

export default Section1;
