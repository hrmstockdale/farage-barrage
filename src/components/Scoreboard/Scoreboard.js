import React from "react";
import Timer from "../Timer/Timer.js";

const Scoreboard = props => {
  console.log(props);
  return (
    <div>
      <Timer />
      <h2>Score: {props.data}</h2>
    </div>
  );
};

export default Scoreboard;
