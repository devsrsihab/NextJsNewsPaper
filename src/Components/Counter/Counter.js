"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="buttons  flex gap-6 ">
              <h1>Counter {count} </h1>

        <div className="innnerButton mt-10 space-x-3">
          <button
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
            className="btn bg-red-300 p-3 text-black rounded "
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="btn bg-green-500 p-3 rounded "
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="btn bg-red-500 p-3 rounded"
          >
            Reset
          </button>
        </div>
      </div>
  )
}

export default Counter