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

  const divStyle = {
    position: "relative",
    background: "red",
    border: "1px solid black",
    height: "100px",
    width: "100px"
  };

  return (
    <div style={divStyle}>
      <img
        src={img}
        style={position}
        alt="from your github"
        onClick={randomize}
      />
    </div>
  );
};

export default Player;
