import React from "react";
import { GoLocation, GoPerson } from "react-icons/go";
import { AiFillCalendar } from "react-icons/ai";

// components
import NavBar from "./NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

// CSS
import "./css/home.css";
import plane from "./img/flight1.svg";

const Home = () => {
  return (
    <div className="whole">
      <div className="main">
        <NavBar />
        <div className="banner"></div>
        <h2>Plan the Perfect Winter Trip</h2>
        <div className="banner-text">
          Easily plan your ideal ski trip from home with the
          <br />
          help of professionals
        </div>
        <button className="bookBtn">Book Here</button>
        <div className="trip-booking">
          <div className="locale">
            <p>
              {" "}
              <GoLocation color="blue" /> LOCATION{" "}
            </p>
            <select name="location" id="location">
              <option defaultChecked value="Iceland">
                Iceland
              </option>
              <option value="Spain">Spain</option>
              <option value="Morocco">Morocco</option>
              <option value="London">London</option>
            </select>
          </div>
          <div>
            <p>
              {" "}
              <GoPerson color="green" /> PERSONS
            </p>
            <select name="persons" id="persons">
              <option value="4">4 Persons</option>
              <option value="3">3 Persons</option>
              <option value="2">2 Persons</option>
              <option value="1">1 Person</option>
            </select>
          </div>
          <div>
            <p>
              {" "}
              <AiFillCalendar color="red" /> CHECK IN{" "}
            </p>
            <input type="date" name="date" id="date" />
          </div>
          <div>
            <p>
              <AiFillCalendar color="red" /> CHECK OUT{" "}
            </p>
            <input type="date" name="date" id="date" />
          </div>
          <button className="bookBut">
            <span> Book Trip</span>
            <img src={plane} className="flight1" alt="Airplane" />
          </button>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
