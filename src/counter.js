import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted!"); //runs twice cuz Strict Mode
    return () => {
      console.log("Unmounted!");
    };
  }, []);

  return (
    <React.Fragment>
      <div>Counter is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
