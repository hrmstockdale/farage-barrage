import styled from "styled-components";

const ScoreList = styled.ul`
  bottom: 25%;
  background-color: hsl(48, 93, 82);
  margin: 15;
  padding: 0;
  list-style-type: none;
`;

const ScoreListItem = styled.li`
  color: rgb(1, 90, 173);
  padding: 3px;
  left: -200px;
  margin: 0;
  padding-left: 0;
`;

const scoreListTitle = styled.h3`
  color: rgb(1, 90, 173);
  left: -10px;
`;

export { ScoreList, ScoreListItem, scoreListTitle };
