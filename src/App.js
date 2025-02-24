import React, { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>

          <div className="my-5">
            <h2 className="my-5">{Count}</h2>

            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(Count + 1)}
            >
              Increment
            </button>

            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(Count - 1)}
              disabled={Count === 0}
            >
              Decrement
            </button>

            <button
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={Count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="F1">
        <footer>Created By Nitin kakade</footer>
      </div>
    </div>
  );
}

export default App;
