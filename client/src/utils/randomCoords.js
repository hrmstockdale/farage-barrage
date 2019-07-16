const getViewportSize = () => {
  let viewportWidth;
  let viewportHeight;

  if (typeof window.innerWidth !== "undefined") {
    viewportWidth = window.innerWidth - window.innerWidth * 0.15;
    viewportHeight = window.innerHeight - window.innerHeight * 0.15;
  }
  return [viewportWidth, viewportHeight];
};

const randomCoords = arr => {
  arr = arr.map(x => getRandomInt(x));
  return {
    position: "absolute",
    top: arr[1],
    left: arr[0]
  };
};

const getRandomInt = int => {
  return Math.floor(Math.random() * Math.floor(int));
};

export { getViewportSize, randomCoords };
