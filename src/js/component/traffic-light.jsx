import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [valueTop, setValueTop] = useState("red");
  const [valueMiddle, setValueMiddle] = useState("yellow");
  const [valueBottom, setValueBottom] = useState("green");
  const [isAutomating, setIsAutomating] = useState(false);
  const [resetClicked, setResetClicked] = useState(false);

  useEffect(() => {
    let intervalId;

    const startAutomation = () => {
      let counter = 0;

      intervalId = setInterval(() => {
        switch (counter) {
          case 0:
            setValueTop("red2");
            setValueMiddle("yellow");
            setValueBottom("green");
            break;
          case 1:
            setValueTop("red");
            setValueMiddle("yellow2");
            setValueBottom("green");
            break;
          case 2:
            setValueTop("red");
            setValueMiddle("yellow");
            setValueBottom("green2");
            break;
          default:
            break;
        }

        counter = (counter + 1) % 3;
      }, 800);
    };

    const stopAutomation = () => {
      clearInterval(intervalId);
      setValueTop("red");
      setValueMiddle("yellow");
      setValueBottom("green");
    };

    if (isAutomating) {
      startAutomation();
    } else {
      stopAutomation();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutomating]);

  useEffect(() => {
    if (resetClicked) {
      setValueTop("red");
      setValueMiddle("yellow");
      setValueBottom("green");
      setIsAutomating(false);
      setResetClicked(false);
    }
  }, [resetClicked]);

  return (
    <>
      <div className="traffic-light">
        <div
          className={valueTop}
          onClick={() => {
            setValueTop("red2");
            setValueMiddle("yellow");
            setValueBottom("green");
          }}
        ></div>
        <div
          className={valueMiddle}
          onClick={() => {
            setValueTop("red");
            setValueMiddle("yellow2");
            setValueBottom("green");
          }}
        ></div>
        <div
          className={valueBottom}
          onClick={() => {
            setValueTop("red");
            setValueMiddle("yellow");
            setValueBottom("green2");
          }}
        ></div>
      </div>
      <button className="automate" onClick={() => setIsAutomating(!isAutomating)}>
        {isAutomating ? "STOP" : "AUTOMATE"}
      </button>
      <button
        className="reset-button"
        onClick={() => setResetClicked(true)}
      >
        RESET
      </button>
    </>
  );
};

export default TrafficLight;