import React from "react";
import "./App.css";
import Game from "../Game/Game";
import Login from "../Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const urls = {
  home: "/",
  game: "/game"
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path={urls.home} render={props => <Login />} />
          <Route exact path={urls.game} render={props => <Game />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
