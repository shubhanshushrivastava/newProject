import React from "react";
import "./Page3.css";
import imgphone from "./images/Page3iphone.png";
import p3download from "./images/p3download.png";

function Page3() {
  return (
    <div className="p3Container">
      <div className="p31">
        <div className="p31text">
          <p className="p31p1">Why choose Us</p>
          <h1 className="h1">Unlock the lonliness into the stress free life</h1>
          <h1 className="h2">-WE ARE HERE FOR YOU !!</h1>
          <p className="p31p2">
            Uplift is an app dedicated to enhancing emotional well-being. Here,
            you can have discreet conversations with our experienced Healers who
            have walked a similar path of hardship. They are committed to
            actively listening, making sure you feel truly understood and
            ultimately, better.
          </p>
          <div className="p31button">
            Download Now
                     </div>
        </div>
      </div>
      <div className="p32">
        <img className="page3img" src={imgphone} alt="" />
      </div>
    </div>
  );
}

export default Page3;
