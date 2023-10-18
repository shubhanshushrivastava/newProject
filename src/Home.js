import React from "react";
import "./Home.css";
import TypingEffect from "./typingEffect";
import img2 from "./images/home/Group 26085448appstore.png";
import img3 from "./images/home/Group 26085449googleplay.png";
import img4 from "./images/Union.png";

function Home() {
  return (
    <div className="home">
      <div className="homecontainer">
        <h1 className="uplift">Uplift</h1>
        <div className="yourself">
          <h1>Connecting emotions,<br /> Healing Mind.</h1>
        </div>
        <div className="downl">
          <img className="downloo" src={img2} alt="" />
          <img className="downloo" src={img3} alt="" />
        </div>
      </div>
      <div className="imghomee">
        <img  className="phonezoo" src={img4} alt="" />
      </div>
    </div>
  );
}

export default Home;
