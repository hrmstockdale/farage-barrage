import React from "react";
import "./App.css";
import Player from "./../Player/Player";
import Scoreboard from "./../Scoreboard/Scoreboard";
import Farage from "../Farage/Farage.js";

function App() {
  const [points, setPoints] = React.useState(0);
  const plusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints + 1);
  };

  const minusPlayerOnClick = () => {
    setPoints(prevPoints => prevPoints - 1);
  };

  return (
    <div className='App'>
      <Scoreboard data={points} />
      <Player updateScore={minusPlayerOnClick} />
      <Farage updateScore={plusPlayerOnClick} />
      <header className='App-header' />
    </div>
  );
}

export default App;
