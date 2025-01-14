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
  const [error, setError] = React.useState("");
  const [img, setImg] = React.useState(null);
  const [nameApp, setNameApp] = React.useState(null);
  const [githubApp, setgithubApp] = React.useState(null);

  const passSetterError = error => {
    setError(error);
  };

  const passSetterImg = img => {
    setImg(img);
  };

  const passSetterName = name => {
    setNameApp(name);
  };

  const passSetterGithub = github => {
    setgithubApp(github);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route
            exact
            path={urls.home}
            render={props => {
              return (
                <Login
                  {...props}
                  error={passSetterError}
                  img={passSetterImg}
                  nameApp={passSetterName}
                  githubApp={passSetterGithub}
                />
              );
            }}
          />
          <Route
            exact
            path={urls.game}
            render={props => (
              <Game
                {...props}
                error={error}
                img={img}
                name={nameApp}
                github={githubApp}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
