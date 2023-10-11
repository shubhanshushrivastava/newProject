import React from "react";
import "./Home.css";
import TypingEffect from "./typingEffect";


function Home() {
  
  return (
    <div className="home">
      <h1 className="uplift">Uplift</h1>
      <div className="yourself">
       <TypingEffect/>

      </div>
       {/* <div className="downl">
        <img src={img2} alt="" />
        <img src={img3} alt="" />

       </div> */}
    </div>
  );
}

export default Home;
