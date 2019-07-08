import React from "react";
import Player from "./../Player/Player";
import Scoreboard from "./../Scoreboard/Scoreboard";
import Farage from "../Farage/Farage.js";
import Timer from "../Timer/Timer.js";
import { Modal, OpenModal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const Game = props => {
  const [points, setPoints] = React.useState(0);

  const plusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints + 1);
  };

  const minusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints - 1);
  };

  const passDownImg = props.img;
  const passDownError = props.error;

  return (
    <React.Fragment>
      <OpenModal
        toggle={show => (
          <React.Fragment data={points}>
            <Scoreboard data={points} />
            <Timer toggle={show} />
            <Player
              updateScore={minusPlayerOnClick}
              error={passDownError}
              img={passDownImg}
            />
            <Farage updateScore={plusPlayerOnClick} />
          </React.Fragment>
        )}
        content={hide => (
          <Modal>
            <Button onClick={hide}>X</Button>
            <h2>About LSx</h2>
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
