import React from "react";
import { getUserData } from "../../utils/data_helpers";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";

const Player = props => {
  const [error, setError] = React.useState(null);
  const [img, setImg] = React.useState(null);
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 50,
    left: 50
  });

  React.useEffect(() => {
    const username = "bobbysebolao";
    getUserData(username).then(({ errorResponse, avatar_url }) =>
      errorResponse ? setError(errorResponse) : setImg(avatar_url)
    );
  }, []);

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const updateScoreSetPosition = () => {
    props.updateScore();
    randomize();
  };

  if (!img && !error) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Player not found</p>;
  }

  return (
    <img
      className='player'
      src={img}
      style={{ ...position, cursor: `url(${milkshake}), auto` }}
      alt='from your github'
      onMouseDown={updateScoreSetPosition}
    />
  );
};

export default Player;
