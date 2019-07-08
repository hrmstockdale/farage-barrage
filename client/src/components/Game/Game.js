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

  console.log("game.js, props", props);

  const passDownImg = props.img;
  const passDownError = props.error;
  console.log("game.js, props.img", passDownImg);

  console.log("game", props);

  return (
    <React.Fragment>
      <Scoreboard data={points} />
      <Player
        updateScore={minusPlayerOnClick}
        error={passDownError}
        img={passDownImg}
      />
      <Farage updateScore={plusPlayerOnClick} />
    </React.Fragment>
  );
};

export default Game;
