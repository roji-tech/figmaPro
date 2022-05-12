import React from "react";
import plane from "./img/flight.svg";
import "./css/navbar.css";
import SignInBtn from "./SignInBtn";

const NavBar = () => {
	return (
		<header className="head">
			<div className="nav">
				<div className="custom-title-wrapper">
					<img src={plane} className="flight" alt="Airplane" />
					<h2>Arctic Travels</h2>
				</div>
				<div className="nav-items">
					<li className="item">About Us</li>
					<li className="item">Support</li>
					<li className="item">Language</li>
				</div>
			</div>
			<SignInBtn text={"Sign in"} />
		</header>
	);
};

export default NavBar;
