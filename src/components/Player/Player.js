import React from "react";
// import { getUserData } from "../../utils/data_helpers";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";

const Player = props => {
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 50,
    left: 50
  });

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const updateScoreSetPosition = () => {
    props.updateScore();
    randomize();
  };

  if (!props.img && !props.error) {
    return <p>Loading...</p>;
  }
  if (props.error) {
    return <p>Player not found</p>;
  }

  const preventDragHandler = e => {
    e.preventDefault();
  };

  return (
    <img
      className='player'
      src={props.img}
      style={{ ...position, cursor: `url(${milkshake}), auto` }}
      alt='from your github'
      onMouseDown={updateScoreSetPosition}
      onDragStart={preventDragHandler}
    />
  );
};

export default Player;
