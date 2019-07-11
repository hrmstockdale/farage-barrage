import React from "react";
// import { getUserData } from "../../utils/data_helpers";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";

const Player = props => {
  const [count, setCount] = React.useState(0);
  const [timer, setTimer] = React.useState(1500);
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 50,
    left: 50
  });

  console.log("player props", props);

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const updateScoreSetPosition = () => {
    setTimer(prevTime => prevTime - 10);
    setCount(prevCount => prevCount + 1);
    props.updateScore();
    props.moveFarage();
    randomize();
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTime => prevTime - 10);
      setCount(prevCount => prevCount + 1);
      randomize();
    }, timer);
    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    setPosition(props.playerPosition);
    setTimer(prevTime => prevTime - 10);
  }, [props.playerPosition]);

  if (!props.img && !props.error) {
    return <p>Loading...</p>;
  }
  if (props.error) {
    return <p>Player not found</p>;
  }

  const preventDragHandler = e => {
    e.preventDefault();
  };

  console.log(props.img);
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
