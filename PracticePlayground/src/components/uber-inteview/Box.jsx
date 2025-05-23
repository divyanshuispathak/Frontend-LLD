import React, { useState } from "react";

const Box = ({ box }) => {
    const [color, setColor] = useState("bg-red-500")

    const handleFirstBox = () => {
        setColor("bg-green-500")
    }

    const handleSecondBox = () => {
      setColor("bg-green-500")
    }

    const handleThirdBox = () => {
      setColor("bg-green-500")
    }

  return (
    <div>
      <div className=" mt-2 ml-5 h-20 w-20 border-2 cursor-pointer" onClick={handleFirstBox}>{color}</div>
      <div className=" mt-2 ml-5 h-20 w-20 border-2" onClick={handleSecondBox}>{box[1]}</div>
      <div className=" mt-2 ml-5 h-20 w-20 border-2" onClick={handleThirdBox}>{box[2]}</div>
    </div>
  );
};

export default Box;
