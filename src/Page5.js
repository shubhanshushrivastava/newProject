import React from "react";
import "./Page5.css";
import quote from "./images/quote.png";
import profile from "./images/profilep5.jpg";
import profile2 from "./images/profile2p5.jpg";
import profile3 from "./images/profilep3.jpg";


function Page5() {
  return (
    <div className="page5" id="page5">
      <div className="p5hmain"> <h1 >Our listeners</h1></div>
      <div className="listboxxx">
        <div className="listContainer">
          <img className="quotep5" src={quote} alt="" />
          <p>
            They become the core of our phone support operation. We plan to
            continue rolling-out .”
          </p>
          <div className="p5btm">
            <img className="p5profile" src={profile} alt="" />
            <h3>Emily Rodriguez</h3>
          </div>
        </div>
        <div className="listContainer">
          <img className="quotep5" src={quote} alt="" />
          <p>
            They become the core of our phone support operation. We plan to
            continue rolling-out .”
          </p>
          <div className="p5btm">
            <img className="p5profile" src={profile} alt="" />
            <h3>Benjamin Patel</h3>
          </div>
        </div>
        <div className="listContainer">
          <img className="quotep5" src={quote} alt="" />
          <p>
            They become the core of our phone support operation. We plan to
            continue rolling-out .”
          </p>
          <div className="p5btm">
            <img className="p5profile" src={profile} alt="" />
            <h3>Olivia Williams</h3>
          </div>
        </div>
      </div>
      <div className="imagesmore">
        <img src={profile} alt="" />
        <img src={profile2} alt="" />
        <img src={profile} alt="" />
        <img src={profile3} alt="" />
        <img src={profile} alt="" />
        <p>and many more...</p>

      </div>
    </div>
  );
}

export default Page5;
