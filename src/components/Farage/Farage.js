import React from "react";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";
import farage1 from "../../assets/farage001.jpeg";
import farage2 from "../../assets/farage002.jpg";
import farage3 from "../../assets/farage003.jpg";
import farage4 from "../../assets/farage004.jpeg";

const Farage = props => {
  const [img, setImg] = React.useState(null);
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 100,
    left: 100
  });

  React.useEffect(
    () => {
      const imageURLs = [farage1, farage2, farage3, farage4];

      let image = imageURLs[Math.floor(Math.random() * imageURLs.length)];

      setImg(image);
    },
    [position]
  );

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const updateScoreSetPosition = () => {
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
      onClick={updateScoreSetPosition}
    />
  );
};

export default Farage;
