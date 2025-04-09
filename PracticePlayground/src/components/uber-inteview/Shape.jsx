import React from "react";
import Box from "./Box";

const Shape = ({ data }) => {
  return (
    <div className="flex mx-5 my-5 justify-center items-center">
      {data.map((box) => (
        <Box box={box} />
      ))}
    </div>
  );
};

export default Shape;
