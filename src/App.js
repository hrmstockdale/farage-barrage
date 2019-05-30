import React from "react";
import "./App.css";
import Player from "./Player";
import Scoreboard from "./Scoreboard";

function App() {
  const [points, setPoints] = React.useState(0);
  const plusPlayerOnClick = prevPoints => {
    setPoints(prevPoints => prevPoints + 1)
  }



  return (
    <div className="App">
    <Scoreboard data={points}/>
    <Player updateScore={plusPlayerOnClick}/>
      <header className="App-header" />
    </div>
  );
}

export default App;
