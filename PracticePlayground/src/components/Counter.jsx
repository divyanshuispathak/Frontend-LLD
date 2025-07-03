import React, { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if(count === -5) {
      setCount(5)
      return;
    }
    setCount(count - 1);
  }

  const incrementCount = () => {
    if(count === 5) {
      setCount(-5)
      return;
    }
    setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
      <div className="bg-amber-600 h-[40%] w-[40%] flex flex-col justify-center items-center">
        <div className="bg-amber-400 w-3/12 flex h-3/12 justify-between items-center px-5 my-5 rounded-2xl">
          <button className="cursor-pointer" onClick={decrementCount}>➖</button>
          <h1>{count}</h1>
          <button className="cursor-pointer" onClick={incrementCount}>➕</button>
        </div>
        <div>
        <button className="border p-2 bg-amber-100 cursor-pointer hover:bg-amber-950 hover:text-white rounded" onClick={resetCount}>Reset</button>
        </div>
      </div>

        
    </div>
  )
};

export default Counter;
