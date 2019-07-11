import React from "react";
import Player from "./../Player/Player";
import Scoreboard from "./../Scoreboard/Scoreboard";
import Farage from "../Farage/Farage.js";
import Timer from "../Timer/Timer.js";
import { Modal, OpenModal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import Swal from "sweetalert2";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";

const Game = props => {
  const [points, setPoints] = React.useState(0);
  const [modalInfo, setModalInfo] = React.useState({
    name: props.name,
    github: props.github,
    score: points
  });
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

  const handleChange = event => {
    event.persist();
    setModalInfo(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  console.log("modalInfo, game.js: ", modalInfo);
  const handleSubmit = event => {
    event.preventDefault();
    let databody = {
      name: modalInfo.name,
      github: modalInfo.github,
      score: modalInfo.score
    };

    fetch("/nameUserScores/add", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire("Success!", `Score submitted!`, "success");
        console.log("made it back =) ", data);
      })
      .catch(error => {
        Swal.fire(
          "Oh no!",
          "There has been an error <br> Be sure you signed in with Github <br> in order to submit a highscore",
          "error"
        );
        console.log("oops an error", error);
      });
  };

  return (
    <React.Fragment>
      <OpenModal
        toggle={show => (
          <React.Fragment>
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
            <p>Congratulations!</p>
            <form form='form' onSubmit={handleSubmit}>
              <h2>Final Score: {points}</h2>
              <input
                type='text'
                value={modalInfo.name}
                onChange={handleChange}
              />
              <Button form='form' type='submit'>
                Submit Score
              </Button>
            </form>
          </Modal>
        )}
      />
    </React.Fragment>
  );
};

export default Game;
