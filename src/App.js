import React from "react";
import "./styles.css";

import Lottery from "./Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery key={1} title="Lottery" />
      {/* <Lottery key={2} title="Lottery" maxBalls={4} /> */}
    </div>
  );
}
