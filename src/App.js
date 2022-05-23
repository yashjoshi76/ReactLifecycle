import React, { useState } from "react";
import Counter from "./counter";
import "./styles.css";

export default function App() {
  const [counter, showCounter] = useState(false);

  return (
    <div className="App">
      <h1>Conditional Render!</h1>
      {counter ? (
        <button
          onClick={() => {
            showCounter(false);
          }}
        >
          {" "}
          Hide Counter
        </button>
      ) : (
        <button
          onClick={() => {
            showCounter(true);
          }}
        >
          Show Counter
        </button>
      )}

      {counter ? <Counter /> : <div> </div>}
    </div>
  );
}
