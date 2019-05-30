import React from "react";

const Scoreboard = props => {
  console.log(props);
  return (
    <div>
      <h3>Scoreboard</h3>
      <h2>Score: {props.data}</h2>
    </div>
  );
};

export default Scoreboard;
