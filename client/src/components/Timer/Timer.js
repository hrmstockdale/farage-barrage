import React from "react";
import { Button } from "../Button/Button";

const Timer = props => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState(0);

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(
        () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
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

  // const handleStartStop = () => {
  //   const startTimer = () => setIsRunning(true);
  //   const stopTimer = () => setIsRunning(false);
  //   isRunning ? stopTimer() : startTimer();
  // };

  return (
    <div>
      <div>
        <Button link='/game'>Reset</Button>
        <Button link='/'>Back</Button>
      </div>
      <h1>{elapsedTime.toFixed(1)}s</h1>
    </div>
  );
};

export default Timer;
