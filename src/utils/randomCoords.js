const getViewportSize = () => {
  let viewportWidth;
  let viewportHeight;

  if (typeof window.innerWidth !== "undefined") {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;

    console.log("Viewport width: ", viewportWidth);
    console.log("Viewport height: ", viewportHeight);
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
