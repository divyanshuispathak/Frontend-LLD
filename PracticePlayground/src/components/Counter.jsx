import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((count) => count + 1);
  };

  const decrementCounter = () => {
    setCount((count) => count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg w-64">
        <div className="flex items-center justify-center gap-4">
          <button
            className="text-2xl bg-red-200 hover:bg-red-300 px-4 py-2 rounded-full transition"
            onClick={decrementCounter}
          >
            ➖
          </button>
          <div className="text-xl font-semibold w-10 text-center">{count}</div>
          <button
            className="text-2xl bg-green-200 hover:bg-green-300 px-4 py-2 rounded-full transition"
            onClick={incrementCounter}
          >
            ➕
          </button>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
