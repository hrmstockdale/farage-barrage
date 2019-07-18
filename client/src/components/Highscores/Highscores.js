import React from "react";
import * as S from "./Highscores.style";
import { GetHighscores } from "../../utils/getScoreboard";
require("env2")("./.env");

const Highscores = props => {
  const [data, loading] = GetHighscores("/nameUserScores/get");

  return (
    <React.Fragment>
      {loading ? (
        "loading..."
      ) : (
        <S.ScoreList>
          <S.scoreListTitle>Top 5 Highscores</S.scoreListTitle>
          {data.map(({ name, github, score }) => (
            <S.ScoreListItem key={data._id}>
              {github}: {score}
            </S.ScoreListItem>
          ))}
        </S.ScoreList>
      )}
    </React.Fragment>
  );
};

export default Highscores;
