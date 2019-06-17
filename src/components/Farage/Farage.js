import React from "react";
import { getViewportSize, randomCoords } from "../../utils/randomCoords";
import milkshake from "../../assets/milkshake-for-farage-small.ico";
import farage1 from "../../assets/farage001.jpeg";
import farage2 from "../../assets/farage002.jpg";
import farage3 from "../../assets/farage003.jpg";
import farage4 from "../../assets/farage004.jpeg";

const Farage = props => {
  const [count, setCount] = React.useState(0);
  const [timer, setTimer] = React.useState(1500);
  const [img, setImg] = React.useState(null);
  const [position, setPosition] = React.useState({
    position: "absolute",
    top: 100,
    left: 100
  });

  React.useEffect(() => {
    const imageURLs = [farage1, farage2, farage3, farage4];

    let image = imageURLs[Math.floor(Math.random() * imageURLs.length)];

    setImg(image);
  }, [position]);

  const randomize = () => setPosition(randomCoords(getViewportSize()));
  const updateScoreSetPosition = () => {
    setTimer(prevTime => prevTime - 10);
    setCount(prevCount => prevCount + 1);
    props.updateScore();
    randomize();
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTime => prevTime - 10);
      setCount(prevCount => prevCount + 1);
      randomize();
    }, timer);
    return () => clearInterval(interval);
  }, [randomize]);

  if (!img) {
    return <p>Loading...</p>;
  }

  const preventDragHandler = e => {
    e.preventDefault();
  };

  return (
    <img
      className='player'
      src={img}
      style={{ ...position, cursor: `url(${milkshake}), auto` }}
      alt='from your github'
      onMouseDown={updateScoreSetPosition}
      onDragStart={preventDragHandler}
    />
  );
};

export default Farage;
