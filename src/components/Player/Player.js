import React from "react";
import { getUserData } from "../../utils/data_helpers";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";

const Player = props => {
  console.log(props);
  const [img, setImg] = React.useState(null);
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 50,
    left: 50
  });

  React.useEffect(() => {
    const username = "bobbysebolao";
    getUserData(username).then(response => setImg(response.avatar_url));
  }, []);

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const twoFuncs = () => {
    props.updateScore();
    randomize();
  };

  if (!img) {
    return <p>Loading...</p>;
  }

  return (
    <img
      className="player"
      src={img}
      style={{ ...position, cursor: `url(${milkshake}), auto` }}
      alt="from your github"
      onClick={twoFuncs}
    />
  );
};

export default Player;
