import React from "react";
import woman from "../images/woman.png";

export default function HeroSection() {
  return (
    <div className="main">
      <div className="hello-wrapper">
        <div className="hello">Hello!</div>
      </div>
      <div className="lolu">
        I'm <span className="taye">kehinde</span> ,
        <br /> Web Developer
      </div>
      <div className="woman">
        <img src={woman} alt="alternatetext" />
      </div>
    </div>
  );
}
