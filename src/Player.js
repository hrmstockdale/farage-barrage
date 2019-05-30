import React from "react";
import { getUserData } from "./utils/data_helpers";
import {
  getViewportSize,
  randomCoords,
  getRandomInt
} from "./utils/randomCoords";

const Player = props => {
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



  return (

      <img className="player"
        src={img}
        style={position}
        alt="from your github"
        onClick={randomize}
      />

  );
};

export default Player;
