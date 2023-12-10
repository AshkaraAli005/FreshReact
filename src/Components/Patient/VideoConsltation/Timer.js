import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState("00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [stoppedTime, setStoppedTime] = useState(null);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    setFormattedTime(`${formattedMinutes}:${formattedSeconds}`);
  }, [time]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setStoppedTime(time);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>{formattedTime}</p>
      {stoppedTime !== null && <p>Stopped at: {formatStoppedTime()}</p>}
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );

  function formatStoppedTime() {
    const minutes = Math.floor(stoppedTime / 60);
    const seconds = stoppedTime % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  }
};

export default Timer;
