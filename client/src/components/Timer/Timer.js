import React from "react";
import { Button } from "../Button/Button";

const Timer = props => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(3);

  console.log("Timer props= ", props);

  React.useEffect(() => {
    let interval;
    if (isRunning && elapsedTime > 0) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime - 0.1),
        100
      );
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  React.useEffect(() => {
    setIsRunning(true);
  }, []);

  // const handleReset = () => {
  //   setIsRunning(false);
  //   setElapsedTime(0);
  // };

  // if (elapsedTime === 0) {
  //   handleReset();
  //   props.toggle();
  // }
  // const handleStartStop = () => {
  //   const startTimer = () => setIsRunning(true);
  //   const stopTimer = () => setIsRunning(false);
  //   isRunning ? stopTimer() : startTimer();
  // };

  return (
    <div>
      <div>
        <Button link='/game'>Start</Button>
        <Button link='/'>Back</Button>
      </div>
      <h1>{elapsedTime.toFixed(1)}s</h1>
    </div>
  );
};

export default Timer;
