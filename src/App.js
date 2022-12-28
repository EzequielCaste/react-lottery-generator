import React, { useState } from "react";
import "./styles.css";

import Lottery from "./Lottery";

const MAX_BALLS = 6
const MAX_NUMBER = 40

export default function App() {
  const [lotteryNumbers, setLotteryNumbers] = useState(generate());

  function generate() {
    const numArray = new Set()

    while (numArray.size <= MAX_BALLS) {
      numArray.add(Math.floor(Math.random() * MAX_NUMBER) + 1)
    }

    return ([...numArray]);
  };

  function handleClick() {
    setLotteryNumbers(generate());
  };

  return (
    <div className="App">
      <Lottery numbers={lotteryNumbers} title="Lottery" handleClick={handleClick} />    
    </div>
  );
}
