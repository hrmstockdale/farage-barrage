import React from "react";

const GetHighscores = url => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchUrl = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => b.score - a.score);
        setData([data[0], data[1], data[2], data[3], data[4]]);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};

export { GetHighscores };
