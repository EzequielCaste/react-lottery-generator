import React from "react";

import Ball from "./Ball";

export default function Lottery({ title, numbers, handleClick }) {
  
  return (
    <div className="lottery">
      <h2>{title}</h2>
      {numbers.map((item) => (
        <Ball key={item} num={item} />
      ))}

      <button onClick={handleClick}>Generate</button>
    </div>
  );
}
