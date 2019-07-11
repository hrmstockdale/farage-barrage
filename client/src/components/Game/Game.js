import React from "react";
import Player from "./../Player/Player";
import Scoreboard from "./../Scoreboard/Scoreboard";
import Farage from "../Farage/Farage.js";
import Timer from "../Timer/Timer.js";
import { Modal, OpenModal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";

const Game = props => {
  const [points, setPoints] = React.useState(0);
  const [game, setGame] = React.useState(true);
  const [playerPosition, setPlayerPosition] = React.useState({
    position: "absolute",
    top: 100,
    left: 100
  });
  const [faragePosition, setFaragePosition] = React.useState({
    position: "absolute",
    top: 150,
    left: 150
  });

  const endGame = () => {
    setGame(false);
  };

  const plusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints + 1);
  };

  const minusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints - 1);
  };

  const movePlayer = () => {
    setPlayerPosition(randomCoords(getViewportSize()));
  };

  const moveFarage = () => {
    setFaragePosition(randomCoords(getViewportSize()));
  };

  const passDownImg = props.img;
  const passDownError = props.error;

  return (
    <React.Fragment>
      <OpenModal
        toggle={show => (
          <React.Fragment data={points}>
            <Scoreboard data={points} />
            <Timer toggle={show} endGame={endGame} />
            {game ? (
              <Player
                moveFarage={moveFarage}
                playerPosition={playerPosition}
                updateScore={minusPlayerOnClick}
                error={passDownError}
                img={passDownImg}
              />
            ) : null}
            {game ? (
              <Farage
                updateScore={plusPlayerOnClick}
                movePlayer={movePlayer}
                faragePosition={faragePosition}
              />
            ) : null}
          </React.Fragment>
        )}
        content={hide => (
          <Modal>
            <Button onClick={hide}>X</Button>
            <h2>Final Score: {points}</h2>
            <p>
              <Link href='http://www.lsx.org.uk/'>
                London Sustainability Exchange
              </Link>{" "}
              is a “think and do” charity which creates collaborations that
              address the complex barriers to a sustainable London.
            </p>
          </Modal>
        )}
      />
    </React.Fragment>
  );
};

export default Game;
