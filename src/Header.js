import React from "react";
import "./Header.css";
import img1 from './images/logo.svg'


function Header() {
  return (
    <div className="header">
      
      <div className="logoHeader">
        <div className="logoimg"><img src={img1} alt="" /></div>
        <div className="logoname">Uplift</div>
      </div>
      <div className="navlinks">
        
          <li>Home</li>
          <li>About Us</li>
          <li>Supporters</li>
          <li>Reviews</li>
          <li>FAQ's</li>
        
        <div className="headerButton">
          Contact Us
        </div>


      </div>
    </div>
  );
}

export default Header;
