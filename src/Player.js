import React from "react";
import { getUserData } from "./utils/data_helpers";


const Player = props => {
  const [img, setImg] = React.useState(null);

  React.useEffect(() => {
    const username = 'bobbysebolao';
    getUserData(username)
    .then(response  => setImg(response.avatar_url))
  }, []);
  

  return(
    <div>
      <p>Player test</p>
      <img src={img}/>
    </div>
  )
}

export default Player;
