import React from "react";
import "./css/footer.css";
import plane from "./img/flight.svg";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div>
          <div className="footer-head">
            <img src={plane} className="flight" alt="Airplane" />
            <h4>Arctic Travels</h4>
          </div>
          <p>Book your trip in minutes, get full control for much longer</p>
        </div>

        <div className="other-links">
          <div className="link-grp">
            <h4>COMPANY</h4>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </div>
          <div className="link-grp">
            <h4>CONTACT</h4>
            <li>FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </div>
          <div className="link-grp">
            <h4>MORE</h4>
            <li>Airlines</li>
            <li>Airfees</li>
            <li>Lowfare Tips</li>
          </div>
        </div>
        <div className="footer-icons">
          <AiFillFacebook className="footer-icon" color="green" />
          <AiFillFacebook className="footer-icon" color="blue" />
          <AiFillFacebook className="footer-icon" color="purple" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Arctic Travels - All right reserved.</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
