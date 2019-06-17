import React from "react";
import "./App.css";
import Game from "../Game/Game";
import Login from "../Login/Login";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Login />
        <Game />
      </div>
    </BrowserRouter>
  );
};

export default App;
