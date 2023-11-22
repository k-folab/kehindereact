import React from "react";
import woman from "../images/woman.png";
import Quotation from "../icons/Quotation";
import Sign from "../icons/Sign";
import Stars from "../icons/Stars";

export default function HeroSection() {
  return (
    <div className="main">
      <div className="hello-wrapper">
        <div className="hello">Hello!</div>
      </div>
      <div className="sign-wrapper">
        <div className="sign">
          <Sign />
        </div>
      </div>
      <div className="omo">
        I'm <span className="kenny">Kehinde</span> ,
        <br /> Web Developer
      </div>
      <div className="quoted-words">
        <div className="quote">
          <Quotation />
        </div>
        <div className="words">
          Kehinde's Exceptional web devevelopment <br />
          ensures our website's success. <br />
          Highly Recommended
        </div>
      </div>
      <div className="woman">
        <img src={woman} alt="alternatetext" />
      </div>
      <div className="stars-words">
        <div className="stars">
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </div>
        <div className="exp-word">
          <span className="years">2 Years</span> <br />
          Experience
        </div>
      </div>
    </div>
  );
}
