import React from "react";
import woman from "../images/woman.png";

export default function Main() {
  return (
    <div className="main">
      <div className="hello">Hello!</div>

      <div className="lolu">
        I'm Tayelolu,
        <br /> Web Developer
      </div>

      <div className="woman">
        <img src={woman} alt="alternatetext" />
      </div>
    </div>
  );
}
