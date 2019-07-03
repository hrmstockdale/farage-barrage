import React from "react";
import Player from "./../Player/Player";
import Scoreboard from "./../Scoreboard/Scoreboard";
import Farage from "../Farage/Farage.js";

const Game = props => {
  const [points, setPoints] = React.useState(0);
  const plusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints + 1);
  };

  const minusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints - 1);
  };

  return (
    <React.Fragment>
      <Scoreboard data={points} />
      <Player
        updateScore={minusPlayerOnClick}
        error={props.error}
        img={props.img}
      />
      <Farage updateScore={plusPlayerOnClick} />
    </React.Fragment>
  );
};

export default Game;
