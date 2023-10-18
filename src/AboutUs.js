import React, { useEffect } from "react";
import "./aboutUs.css";

function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".whatt");
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        element.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="aboutUs" id="aboutUs">
      {/* <div className="downl">
        <img className="downloo" src={img2} alt="" />
        <img className="downloo" src={img3} alt="" />
      </div> */}
      {/* <img className="hello" src={img1} alt="" /> */}
      <div className="whatt">
        <h1 className="what">What we can do for you?</h1>
        <p className="whatp">
          Uplift App helps you understand yourself better by letting you talk
          openly. You can have conversations through{" "}
          <span className="chat">chat</span>,{" "}
          <span className="calls">Calls</span>, or{" "}
          <span className="vcalls">video calls</span>.
        </p>
      </div>
      <div className="tryBox">
        <div className="tryUs">
          <h2 className="tryUscant">Can't find someone to talk ?</h2>
          <h3 className="tryuss">try us!</h3>
        </div>
        <div className="box2">
          <p className="count">100+</p>
          <p className="counttt">Speakers and Listeners</p>
        </div>
        <div className="box2">
          <p className="count">1600+</p>
          <p className="counttt">Happy Souls</p>
        </div>
      </div>
      <div className="healing">
        <p>EXPRESS <span className="calls">YOURSELF</span> <span className="chat">WITHOUT</span> SHARING <span className="vcalls">WHO YOU ARE </span>!!!</p>
      </div>
    </div>
  );
}

export default AboutUs;
