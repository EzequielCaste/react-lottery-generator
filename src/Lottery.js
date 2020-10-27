import React, { useEffect, useState } from "react";

import Ball from "./Ball";

export default function Lottery({ title, maxBalls = 6, maxNum = 40 }) {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);

  const generate = () => {
    let numArray = Array(maxBalls).fill(maxNum);

    numArray = numArray.map((item) => Math.floor(Math.random() * maxNum) + 1);

    setNums(numArray);
  };
  const handleClick = () => {
    generate();
  };

  return (
    <div className="lottery">
      <h2>{title}</h2>
      {nums.map((item) => (
        <Ball key={item} num={item} />
      ))}

      <button onClick={handleClick}>Generate</button>
    </div>
  );
}
