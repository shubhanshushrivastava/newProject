import React from "react";
import "./Header.css";
import img1 from "./images/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="logoHeader">
        {/* <div className="logoimg"><img src={img1} alt="" /></div> */}
        <div className="logoname">Uplift</div>
      </div>
      <div className="navlinks">
        <li>Home</li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#page5">Supporters</a>
        </li>
        <li>Reviews</li>
        <li>
          <a href="#faqContainer">FAQ's</a>
        </li>

        <div className="headerButton">
          <a href="#page6">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
