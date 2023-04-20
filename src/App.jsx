import React, { useState, useEffect } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (counter >= 3) {
      getColor().then((newColor) => {
        setColor(newColor);
      });
    }
  }, [counter]);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
    setColor("red");

    const counterStyle = {
      fontSize: "5rem",
      color: color,
    };

    return (
      <div>
        <h1>Ada School - React Hooks</h1>

        <div>
          <span className={color} style={counterStyle}>
            Counter: {counter}
          </span>
        </div>

        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };
}
