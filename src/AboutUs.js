import React, { useEffect } from "react";
import "./aboutUs.css";
import img1 from "./images/home/mountainAll.png";
import img2 from "./images/home/Group 26085448appstore.png";
import img3 from "./images/home/Group 26085449googleplay.png";

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
    <div className="aboutUs">
      <div className="downl">
        <img className="downloo" src={img2} alt="" />
        <img className="downloo" src={img3} alt="" />
      </div>
      <img className="hello" src={img1} alt="" />
      <div className="whatt">
        <h1 className="what">What we can do for you?</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          quisquam rerum eaque tenetur amet libero sequi facilis dolor animi.
          Quidem adipisci, similique corrupti perspiciatis reprehenderit
          temporibus consectetur quia praesentium saepe!
        </p>
      </div>
      <div className="tryBox">
        <div className="tryUs">
          <h2 className="tryUscant">Can't find someone to talk ?</h2>
          <h3 className="tryuss">try us!</h3>
        </div>
        <div className="box2">
          <p className="count">100+</p>
          <p>Speakers and Listeners</p>
        </div>
        <div className="box2">
          <p className="count">1600+</p>
          <p>Happy Souls</p>
        </div>
      </div>
      <div className="healing"><p>EXPRESS YOURSELF WITHOUT SHARING WHO YOU ARE !!!</p></div>
    </div>
  );
}

export default AboutUs;
