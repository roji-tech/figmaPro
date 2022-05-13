import React from "react";
import "./css/SignInBtn.css";

const SignInBtn = ({ width, color, text }) => {
  return (
    <button
      className="sign-in-btn"
      style={{
        color: color,
        width: width,
      }}
    >
      {text}
    </button>
  );
};

export default SignInBtn;
