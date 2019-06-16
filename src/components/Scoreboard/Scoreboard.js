import React from "react";
import Timer from "../Timer/Timer.js";

const Scoreboard = props => {
  console.log(props);
  return (
    <div>
      <h3>Scoreboard</h3>
      <h2>Score: {props.data}</h2>
      <Timer />
    </div>
  );
};

export default Scoreboard;
